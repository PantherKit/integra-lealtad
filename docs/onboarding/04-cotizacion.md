# Cotización — Coutiño

**No. de cotización:** IG-COT-006
**Fecha:** 08/05/2026
**Vigencia:** 30 días

---

## Cliente

**Empresa:** Coutiño *(operada por Maximiliano Coutiño persona física; razón social pendiente de constituirse)*
**Contacto:** Maximiliano Coutiño — Founder
**Email:** *(por confirmar)*

---

## Proyecto: Plataforma SaaS de Tarjetas de Lealtad Digital

### Desglose de Inversión

| # | Concepto | Descripción | Monto MXN |
|---|---|---|---|
| 1 | Discovery & Validación | Sesiones con Maximiliano, entrevistas a 2-3 comercios potenciales, wireframes Figma (incluye diseño Wallet pass), arquitectura técnica | $20,000 |
| 2 | Infraestructura AWS + Auth | Setup CDK, Cognito multi-tenant, CI/CD, 3 ambientes (dev/staging/prod), pipelines de deploy | $25,000 |
| 3 | Frontend (Editor + Dashboards) | Next.js 14 + shadcn, editor drag-and-drop, panel del comercio, panel maestro de Coutiño, flujo del cliente final (PWA fallback) | $40,000 |
| 4 | Backend (API + Datos) | Lambda + Hono + DynamoDB single-table, motor de puntos configurable, multi-tenancy lógica, validación con Zod | $30,000 |
| 5 | Integraciones core | Stripe (suscripciones + portal de billing + webhooks) + WhatsApp Meta Cloud API + AWS SES email transaccional | $20,000 |
| 6 | **Apple Wallet + Google Wallet** | **Diseño y firma de pass por comercio, generación dinámica por cliente final, servicio de updates push (APNs + Google), notificaciones con geofence (Apple), Loyalty Class/Object (Google), endpoints PassKit Web Service** | **$10,000** |
| 7 | Testing, piloto y entrega | E2E testing (incluye Wallet en iOS y Android reales), piloto controlado con 2-3 comercios reales, deploy a producción, documentación, manual de usuario, workshop 90 min | $15,000 |

| **TOTAL** | | | **$160,000 MXN** |

---

## Forma de Pago

| Hito | Porcentaje | Monto | Fecha |
|---|---|---|---|
| Firma de contrato | 50% | $80,000 MXN | Al firmar |
| Entrega final | 50% | $80,000 MXN | A la entrega |
| **Total** | **100%** | **$160,000 MXN** | |

**Método de pago:** Transferencia bancaria
**Datos bancarios:** Se proporcionan al confirmar el proyecto

---

## Soporte Continuo (opcional)

| Plan | Incluye | Costo mensual |
|---|---|---|
| Soporte Básico | Corrección de bugs, uptime, actualizaciones de seguridad, ajustes menores, monitoreo AWS, asistencia con renovación anual de certificado Apple Wallet | $4,000 MXN/mes |
| Soporte Plus | Lo del plan básico + nuevas features menores (hasta 8 hrs/mes) + revisiones de seguridad | $8,000 MXN/mes |

> Aplica después de los 30 días de soporte incluidos en el proyecto.

---

## Costos a Cargo de Coutiño (no incluidos en cotización)

| Concepto | Costo aprox. | Frecuencia |
|---|---|---|
| Apple Developer Program | $99 USD/año (~$1,800 MXN) | Anual — necesario para firmar passes de Apple Wallet |
| Google Wallet API | $0 (gratis) | Free tier cubre volumen inicial |
| Cuenta AWS (infra) | $30-60 USD/mes (~$540-1,080 MXN) inicial | Mensual — escala con uso |
| Stripe | 3.6% + $3 MXN por transacción | Por cobro — no hay cuota fija |
| Meta WhatsApp Business API | Gratis hasta 1,000 conversaciones / mes | Variable — solo si se excede |
| Dominio del producto (registro y renovación) | $200-400 MXN/año | Anual |

---

## Costo de Infraestructura AWS (por cuenta de Coutiño)

Estimación mensual, asumida directamente por Coutiño:

| Volumen | Costo AWS estimado |
|---|---|
| 0-25 comercios pagando | $20-30 USD/mes |
| 25-100 comercios pagando | $30-60 USD/mes |
| 100-500 comercios pagando | $80-150 USD/mes |
| 500-1,000 comercios pagando | $150-300 USD/mes |

> Stack 100% serverless con scale-to-zero. Configuramos alertas de billing en CloudWatch a $50 / $100 / $200 USD para evitar sorpresas.

---

## Datos de Facturación — Integra Group AI

| Campo | Detalle |
|---|---|
| Razón Social | (Por definir) |
| RFC | (Por definir) |
| Dirección fiscal | (Por definir) |
| Régimen fiscal | (Por definir) |
| Uso CFDI | (Por definir) |

---

## Condiciones

1. Esta cotización tiene vigencia de 30 días a partir de la fecha de emisión
2. Los precios están en MXN y no incluyen IVA (16%)
3. El proyecto inicia una vez recibido el primer pago y firmado el contrato
4. El alcance detallado se encuentra en el Acuerdo de Servicios
5. Cambios al alcance se cotizan por separado
6. Cuenta AWS, dominio, cuenta Stripe, Apple Developer Program y Google Cloud son responsabilidad de Maximiliano Coutiño (Integra Group AI configura, no provee)
7. Cuenta Apple Developer **Individual** a nombre de Maximiliano Coutiño (persona física) — trámite ~1 día, sin DUNS requerido. Cuando Coutiño se constituya como empresa, la cuenta puede migrar a Organization.

---

## Aceptación

Al aceptar esta cotización, el cliente confirma que ha revisado el alcance del proyecto y está de acuerdo con los términos.

**Aceptado por:**

Nombre: ___________________________
Cargo: ___________________________
Firma: ___________________________
Fecha: ___________________________

---

*Integra Group AI · jorgejimenez@integra-group.ai*
*Confidencial — Coutiño (Maximiliano Coutiño persona física)*
