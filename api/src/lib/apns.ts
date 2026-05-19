import http2 from 'node:http2';
import { getPassCredentials } from './applePass';
import { listRegistrationsByCard } from './repositories/passRegistration';

// Los pases de Wallet SIEMPRE usan APNs de producción, sin importar el entorno.
const APNS_HOST = 'https://api.push.apple.com';

/**
 * Notifica a Apple que el pase de una card cambió, para que los devices
 * registrados hagan pull del pase actualizado vía el PassKit Web Service.
 *
 * Best-effort: NUNCA lanza. Loggea el resultado por device. El comercio
 * no debe ver afectada su respuesta (200 del stamp/redeem) por APNs.
 */
export async function notifyPassUpdate(tenantId: string, cardId: string): Promise<void> {
  let regs;
  try {
    regs = await listRegistrationsByCard(tenantId, cardId);
  } catch (err) {
    console.error('apns_list_registrations_failed', { tenantId, cardId, err });
    return;
  }

  if (regs.length === 0) {
    return; // nadie registró el pase aún (PWA-only, o aún no se añadió a Wallet)
  }

  let creds;
  try {
    creds = await getPassCredentials();
  } catch (err) {
    console.error('apns_creds_failed', { tenantId, cardId, err });
    return;
  }

  let session: http2.ClientHttp2Session;
  try {
    session = http2.connect(APNS_HOST, {
      cert: creds.signerCert,
      key: creds.signerKey,
      passphrase: creds.passphrase,
    });
  } catch (err) {
    console.error('apns_connect_failed', { tenantId, cardId, err });
    return;
  }

  session.on('error', (err) => {
    console.error('apns_session_error', { tenantId, cardId, err });
  });

  try {
    await Promise.all(
      regs.map((reg) => sendOne(session, reg.pushToken, creds.passTypeId, cardId))
    );
  } finally {
    try {
      session.close();
    } catch {
      /* noop */
    }
  }
}

function sendOne(
  session: http2.ClientHttp2Session,
  pushToken: string,
  passTypeId: string,
  cardId: string
): Promise<void> {
  return new Promise<void>((resolveDone) => {
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      resolveDone();
    };

    try {
      const req = session.request({
        ':method': 'POST',
        ':path': `/3/device/${pushToken}`,
        'apns-topic': passTypeId,
        'apns-push-type': 'background',
        'apns-priority': '5',
        'content-type': 'application/json',
      });

      let status = 0;
      let bodyChunks = '';

      req.on('response', (headers) => {
        status = Number(headers[':status']) || 0;
      });
      req.setEncoding('utf8');
      req.on('data', (chunk: string) => {
        bodyChunks += chunk;
      });
      req.on('end', () => {
        if (status === 200) {
          console.log('apns_ok', { cardId, token: pushToken.slice(0, 8) });
        } else {
          console.error('apns_non_200', {
            cardId,
            token: pushToken.slice(0, 8),
            status,
            body: bodyChunks.slice(0, 200),
          });
        }
        done();
      });
      req.on('error', (err) => {
        console.error('apns_request_error', { cardId, token: pushToken.slice(0, 8), err });
        done();
      });

      // Pase update: body vacío `{}` es lo que Apple espera.
      req.end('{}');
    } catch (err) {
      console.error('apns_send_threw', { cardId, err });
      done();
    }
  });
}
