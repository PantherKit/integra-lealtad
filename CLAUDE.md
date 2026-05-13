# CLAUDE.md — Coutiño · Lealtad Digital

Knowledge base auto-generada del onboarding de Coutiño. Esta es la fuente de verdad para cualquier sesión Claude que toque este repo.

## Qué es este proyecto

**Plataforma SaaS multi-tenant de tarjetas de lealtad digital** que Coutiño venderá por suscripción a comercios pequeños y medianos del interior de la República Mexicana (Mérida, Puerto Escondido, Oaxaca, San Cristóbal, etc.).

Las tarjetas viven en **Apple Wallet y Google Wallet** — no requiere app móvil. Es el diferenciador clave del producto frente a competencia genérica.

Modelo: **B2B2C**.
- Coutiño (cliente de IG) → vende suscripciones a → comercios → emiten tarjetas a → consumidores finales.

**Diferenciadores hard-coded** que dictan decisiones técnicas:
- Comercios target con baja sofisticación técnica → editor drag-and-drop, onboarding por WhatsApp
- Conexiones a internet inestables → PWA con cache offline + sync diferido
- Smartphones Android gama media-baja → mobile-first, cero dependencia de iOS-only features
- **Tarjetas en Apple Wallet (PassKit) y Google Wallet API** — agrega con un tap, push nativo, geofence
- Mercado en español sin alternativa local → producto monolingüe, branding mexicano

## Cliente

| Campo | Valor |
|---|---|
| Empresa | Coutiño *(razón social por confirmar)* |
| Contacto principal | Maximiliano Coutiño |
| Cargo | *(por confirmar)* |
| Email | *(por confirmar)* |
| Teléfono | +52 55 6075 1194 |
| Industria | SaaS / distribución de tecnología |
| Tipo | B2B2C |

## Proyecto

| Campo | Valor |
|---|---|
| Nombre | Plataforma SaaS de Tarjetas de Lealtad Digital |
| Nombre corto | Lealtad Digital |
| Número proyecto | IG-006 |
| Fecha inicio (tentativa) | 08/05/2026 |
| Duración estimada | 8-10 semanas (target: 9 semanas) |
| Inversión | $160,000 MXN llave en mano (incluye Apple Wallet + Google Wallet) |
| Forma de pago | 50% al firmar ($80k) / 50% a la entrega ($80k) |

## Stack técnico decidido

| Capa | Tecnología |
|---|---|
| Frontend | Next.js 14 App Router + Tailwind + shadcn/ui (PWA fallback) |
| Backend API | Lambda (Node 20) + Hono + Zod |
| Auth | AWS Cognito User Pools (multi-tenant) |
| DB | DynamoDB single-table |
| Storage | S3 + CloudFront |
| Pagos | Stripe (suscripciones recurrentes) |
| Email | AWS SES |
| WhatsApp | Meta Cloud API (sin intermediario) |
| **Apple Wallet** | **Apple PassKit + APNs (updates push, geofence)** |
| **Google Wallet** | **Google Wallet API (Loyalty Class + Loyalty Object)** |
| IaC | AWS CDK (TypeScript) |
| CI/CD | GitHub Actions |
| Observabilidad | CloudWatch + X-Ray |

**Razón del stack:** 100% serverless, scale-to-zero, costo $0 sin tráfico. Costo AWS estimado <$60 USD/mes con 100 comercios pagando. Apple Developer Program $99 USD/año, cuenta **Individual a nombre de Maximiliano Coutiño persona física** (Coutiño aún no está constituida como empresa, por eso no aplica DUNS). Google Wallet API gratis al volumen inicial.

## Multi-tenancy

- **Modelo:** shared-db con `tenant_id` como partition key
- **Aislamiento:** lógico (no isolated-account-per-tenant)
- **Auth:** Cognito User Pools con grupos por rol (`merchant`, `end_customer`, `coutino_admin`)

## Roles del sistema

1. **merchant** — el comercio que paga la suscripción a Coutiño. Crea programas, edita tarjetas, ve dashboard.
2. **end_customer** — el consumidor final del comercio. Recibe tarjeta digital en Apple Wallet o Google Wallet (o PWA fallback). Acumula puntos, canjea premios.
3. **coutino_admin** — Maximiliano y su equipo. Panel global, MRR, soporte, override.

## Wallet integration architecture

**Apple Wallet (PassKit):**
- Pass `.pkpass` firmado con certificado de Coutiño (Apple Developer Program)
- Generación dinámica por cliente final con datos del comercio + puntos actuales
- PassKit Web Service endpoints en Lambda para registro/des-registro de devices
- Updates push vía APNs cuando cambian puntos
- Geofence en pass dispara notificación lock-screen al pasar cerca del comercio

**Google Wallet API:**
- Loyalty Class única por comercio
- Loyalty Object por cliente final (referencia a la Class del comercio + puntos)
- Link "Add to Google Wallet" generado vía JWT signing
- Updates a través de Google Wallet API REST cuando cambian puntos

**PWA fallback:**
- Para clientes que no quieran/puedan usar Wallet
- Login magic-link, mismo backend
- Service worker para uso offline básico

## Fases del proyecto

| Semana | Fase | Output |
|---|---|---|
| S1 | Discovery & Validación | Wireframes Figma + diseño Wallet pass |
| S2 | Infraestructura Base | AWS deployable, auth funcional, Google Wallet API setup |
| S3 | Backend Core | API + tests |
| S4 | Frontend Core | Editor + dashboards |
| S5 | Motor de Puntos + Cliente Final | E2E funcional (web/PWA) |
| S6 | Integraciones core | Stripe + WhatsApp + SES |
| S7 | Apple Wallet + Google Wallet | Passes activos en iOS y Android reales |
| S8 | Piloto & Testing | Validado con 2-3 comercios reales |
| S9 | Entrega & Capacitación | Producción + workshop + docs |

## KPIs objetivo (mes 12 post-lanzamiento)

- 250 comercios pagando
- $250k MXN MRR
- 50,000 clientes finales
- **>65% de tarjetas en Apple Wallet o Google Wallet**
- Time-to-first-card <10 min
- Churn mensual <10%

## Riesgos principales (de discovery)

1. **Adopción baja por baja sofisticación técnica** → mitigación: onboarding por WhatsApp + workshop + 1 mes soporte
2. **Conexión inestable** → mitigación: PWA con cache offline
3. **Costos AWS escalan más rápido que ingresos** → mitigación: stack 100% serverless + alertas billing
4. **Cumplimiento LFPDPPP** → mitigación: aviso de privacidad + encriptación + retención configurable
5. **Cuenta Apple Developer Individual demora más de 1 día** → bajo riesgo (cuenta Individual a nombre de Maximiliano persona física, sin DUNS, ~24h aprobación); fallback: arrancar Wallet sin cert y sumarlo al final de S7
6. **Apple rechaza certificado** → mitigación: validar nombre y branding antes de generar el cert

## Documentos de onboarding

Los 8 docs del paquete oficial al cliente viven en `docs/onboarding/`:

- `01-welcome.md`
- `02-discovery.md` ← más rica en contexto del producto
- `03-acuerdo.md` ← contrato
- `04-cotizacion.md`
- `05-forma-trabajo.md`
- `06-portal.md`
- `07-roadmap.md` ← timeline detallado por semana
- `08-objetivos.md` ← KPIs y baseline

Para entender el producto a fondo, leer en este orden: 02 → 07 → 08 → 03.

## Datos abiertos / por levantar

- Razón social, RFC, datos fiscales del cliente
- Email principal y cargo de Maximiliano
- Comercios piloto identificados (necesarios para S8)
- Modelo de pricing final que cobra Coutiño a sus comercios
- Necesidad de marca blanca (fuera de scope Phase 1; cambia complejidad)
- Plan de soporte post-mes 1 (¿retainer con Integra? ¿equipo interno? ¿partner?)
- Localización fuera de México (no en Phase 1)
- **Cuenta Apple Developer Individual** a nombre de Maximiliano Coutiño persona física → trámite ~1 día en S1 (Coutiño aún no es empresa, por eso Individual). Cuando se constituyan, se migra a Organization (requerirá DUNS, gratis o ~$300 USD expedito).
- **¿Cuenta Google Cloud para Google Wallet API?** (gratis pero requiere setup en S2)
- **Coutiño no está constituida como empresa todavía.** Es Maximiliano Coutiño como persona física. Esto afecta facturación, Apple Developer, y eventualmente migración a Organization. Las decisiones de hoy (cuenta Individual, factura a persona física) hay que rehacerlas cuando se constituya.
