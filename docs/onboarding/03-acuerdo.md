# Acuerdo de Servicios

**Número de proyecto:** IG-006
**Fecha:** 08/05/2026
**Vigencia:** A partir de la firma hasta la entrega final + periodo de soporte — 08/05/2026

---

## 1. Partes

**Proveedor:** Integra Group AI
Representante: Jorge Jimenez
Email: jorgejimenez@integra-group.ai
Web: https://integra-group.ai

**Cliente:** Coutiño — operado por **Maximiliano Coutiño** (persona física)
Cargo: Founder
Email: *(por confirmar)*
Teléfono: +52 55 6075 1194

> *Nota:* Coutiño aún no se ha constituido como persona moral. El contrato se firma con Maximiliano Coutiño persona física. Cuando Coutiño se constituya legalmente, se actualizan razón social, RFC y datos fiscales mediante adenda.

---

## 2. Objeto del Contrato

Integra Group AI desarrollará una **Plataforma SaaS de Tarjetas de Lealtad Digital** para Coutiño, conforme al alcance descrito en este documento. La plataforma incluye integración nativa con **Apple Wallet (PassKit)** y **Google Wallet API** para que los clientes finales reciban sus tarjetas directamente en su Wallet, sin necesidad de instalar una app móvil.

---

## 3. Alcance del Proyecto

### 3.1 Incluye:

**Discovery & Estrategia:**
- 2 sesiones de discovery con Maximiliano (60-90 min cada una)
- 2-3 entrevistas con comercios potenciales para validación del producto
- Wireframes aprobados en Figma (editor + dashboards + flujo cliente final + diseño Wallet pass)
- Documento de arquitectura técnica y modelo de datos
- Plan de stack y costo estimado de AWS

**Desarrollo:**
- Frontend Next.js completo: editor drag-and-drop, dashboard del comercio, panel maestro de Coutiño, flujo del cliente final (PWA fallback)
- Backend serverless en AWS: API Gateway + Lambda + DynamoDB single-table
- Auth multi-tenant con AWS Cognito
- Motor de puntos (acumular / canjear) con reglas configurables por programa
- Editor de tarjetas con previsualización en vivo (incluyendo cómo se verá en Wallet)
- Sistema de inscripción de clientes finales (QR físico + magic-link)
- Multi-tenancy lógica por `tenant_id`

**Apple Wallet (PassKit):**
- Diseño y firma de pass por comercio (logo + branding)
- Generación dinámica de pass `.pkpass` por cliente final
- Servicio de updates push vía APNs (cuando cambian puntos, la tarjeta se actualiza sola)
- Notificaciones push con geofence (lock-screen al pasar cerca del comercio)
- Endpoints de PassKit Web Service para registro/des-registro de devices

**Google Wallet:**
- Configuración de Loyalty Class y Loyalty Object por comercio
- Generación de "Add to Google Wallet" link por cliente final
- Updates push vía Google Wallet API (sincronizado con cambios de puntos)
- Notificaciones nativas Android

**Integraciones core:**
- Stripe (suscripciones recurrentes a comercios + manejo de webhooks + portal de billing)
- WhatsApp vía Meta Cloud API (onboarding básico de comercios, notificaciones a clientes finales)
- Email transaccional vía AWS SES
- Encriptación at-rest (DynamoDB) e in-transit (HTTPS / CloudFront)
- Aviso de privacidad LFPDPPP

**Entrega:**
- Deploy en producción con 3 ambientes: dev, staging, prod
- Documentación técnica
- Manual de usuario para comercios (incluye cómo explicarle al cliente final que use Wallet)
- Workshop de capacitación a Maximiliano (90 minutos, grabado)
- 1 mes de soporte post-entrega incluido (sin costo)

### 3.2 No incluye:

- App nativa iOS / Android (las tarjetas viven en Apple Wallet / Google Wallet, no requieren app)
- Integraciones contables (CONTPAQi, Aspel, otros)
- Multi-idioma (sólo español inicialmente)
- Sistema POS integrado (escaneo de productos, inventario, ventas)
- Marca blanca por comercio o white-label (cambia el alcance significativamente)
- Onboarding asistido / call-center para comercios — Coutiño lo opera
- Costos de infraestructura post-año 1 (Coutiño asume costo AWS desde lanzamiento, estimado en $30-60 USD/mes inicial)
- **Costo del Apple Developer Program** ($99 USD/año, a cargo de Coutiño)
- Migración de datos de sistemas legados de comercios
- Soporte 24/7

---

## 4. Entregables

| # | Entregable | Descripción |
|---|---|---|
| 1 | Documento de discovery aprobado | Requerimientos detallados, casos de uso, decisiones de stack, validación con piloto |
| 2 | Wireframes en Figma | Editor drag-drop + dashboards comercio + admin Coutiño + flujo cliente final + diseño Wallet pass |
| 3 | Arquitectura técnica documentada | Diagrama AWS, modelo de datos DynamoDB, contratos de API, flujo de Wallet updates |
| 4 | Plataforma SaaS funcional en AWS | Frontend + backend + 3 ambientes operativos |
| 5 | Apple Wallet operativo | Pass firmado por comercio, generación dinámica, updates push APNs, geofence |
| 6 | Google Wallet operativo | Loyalty Class + Object por comercio, link "Add to Google Wallet", updates push |
| 7 | Integración Stripe operativa | Cobro automático, gestión de suscripciones, webhooks |
| 8 | Onboarding WhatsApp | Flujo automatizado para comercios nuevos vía Meta Cloud API |
| 9 | Documentación técnica + manual de usuario | Para soporte ongoing del producto por parte de Coutiño |
| 10 | Workshop de capacitación | Sesión en vivo de 90 minutos con Maximiliano + grabación |
| 11 | 1 mes de soporte post-entrega | Bug fixes, ajustes menores, vía email + WhatsApp |

---

## 5. Timeline

| Fase | Duración | Semana |
|---|---|---|
| Discovery & Validación | 1 semana | S1 |
| Infraestructura Base | 1 semana | S2 |
| Backend Core | 1 semana | S3 |
| Frontend Core | 1 semana | S4 |
| Motor de Puntos + Cliente Final | 1 semana | S5 |
| Integraciones core (Stripe + WhatsApp + SES) | 1 semana | S6 |
| Apple Wallet + Google Wallet | 1 semana | S7 |
| Piloto & Testing | 1 semana | S8 |
| Entrega & Capacitación | 1 semana | S9 |

**Duración total estimada:** 8-10 semanas (target: 9 semanas)

---

## 6. Inversión

| Concepto | Monto (MXN) |
|---|---|
| Lealtad Digital (llave en mano, incluye Apple Wallet + Google Wallet) | $160,000 MXN |

**Forma de pago:**
- 50% al inicio del proyecto ($80,000 MXN) — resto a la entrega final ($80,000 MXN) ✓
- 40% al inicio — 30% en hito intermedio (S5) — 30% a la entrega (alternativa)
- Otro: _______________

**Método de pago:**
- Transferencia bancaria
- Otro: _______________

---

## 7. Soporte Post-Entrega

**Incluido en el proyecto:**
- 1 mes de soporte post-entrega incluido (sin costo)
- Corrección de bugs encontrados
- Ajustes menores de configuración
- Renovación o asistencia con certificados Apple Wallet si fuera necesario en el primer mes
- Canal: Email y WhatsApp

**Soporte continuo (opcional):**

Después del mes de soporte incluido, Coutiño puede contratar soporte mensual:

| Plan | Incluye | Costo mensual |
|---|---|---|
| Soporte Básico | Corrección de bugs, uptime, actualizaciones de seguridad, ajustes menores, monitoreo AWS, asistencia con renovación anual de certificado Apple | $4,000 MXN/mes |
| Soporte Plus *(opcional)* | Lo del plan básico + nuevas features menores (hasta 8 hrs/mes) + revisiones de seguridad | $8,000 MXN/mes |

---

## 8. Responsabilidades

**Integra Group AI:**
1. Entregar la solución según el alcance definido
2. Mantener comunicación constante sobre el avance
3. Proveer soporte técnico durante el periodo acordado
4. Capacitar al equipo administrador de Coutiño
5. Garantizar la calidad y seguridad del sistema
6. Respetar la confidencialidad de la información

**Coutiño:**
1. Designar un punto de contacto principal
2. Proveer información necesaria (visión de producto, perfiles de comercios target, datos de mercado)
3. Identificar y coordinar 2-3 comercios piloto para validación en Semana 8
4. Participar en sesiones de discovery y revisión semanal
5. Realizar revisiones y aprobaciones en tiempo (3 días hábiles por entregable)
6. Cumplir con los pagos según calendario
7. Proveer cuenta AWS (creación o transferencia de propiedad al cierre del proyecto)
8. Proveer cuenta Stripe operativa
9. Proveer dominio del producto
10. **Proveer cuenta Apple Developer Program Individual** a nombre de Maximiliano Coutiño persona física ($99 USD/año, ~1 día de trámite, sin DUNS requerido). Cuando Coutiño se constituya como empresa, la cuenta puede migrarse a Organization (requerirá DUNS, gratis o ~$300 USD expedito).
11. **Proveer cuenta Google Cloud con Google Wallet API habilitada** (gratuita; setup asistido por Integra)

---

## 9. Confidencialidad

Ambas partes se comprometen a mantener estricta confidencialidad sobre toda información compartida durante el proyecto, incluyendo: datos de clientes, procesos internos, información comercial, modelo de negocio y propiedad intelectual.

---

## 10. Propiedad Intelectual

- El software desarrollado para Coutiño es propiedad de Coutiño una vez liquidado el proyecto
- Frameworks, librerías y componentes reutilizables de Integra Group AI permanecen como propiedad de Integra Group AI
- Coutiño tiene licencia de uso perpetua sobre los componentes de Integra Group AI usados en su solución
- Datos de comercios y clientes finales de Coutiño son propiedad exclusiva de Coutiño
- Los certificados Apple Wallet y configuración Google Wallet quedan vinculados a las cuentas de Coutiño (no transferibles a Integra)

---

## 11. Cambios al Alcance

Cualquier cambio al alcance:

1. Se solicita por escrito (email)
2. Integra Group AI evalúa impacto (tiempo y costo) en máximo 3 días hábiles
3. Se aprueba por ambas partes
4. Se documenta como adenda a este acuerdo

---

## 12. Cancelación

- Cualquier parte puede cancelar con 15 días de aviso por escrito
- Se factura el trabajo completado hasta la fecha de cancelación
- Los entregables completados se entregan al cliente
- Las cuotas pagadas no son reembolsables, pero los entregables ya producidos quedan en propiedad del cliente

---

## 13. Firmas

**Por Integra Group AI:**

Nombre: Jorge Jimenez
Cargo: Cofounder & Arquitecto MLOps
Firma: ___________________________
Fecha: 08/05/2026

**Por Coutiño:**

Nombre: ___________________________
Cargo: ___________________________
Firma: ___________________________
Fecha: 08/05/2026

---

*Integra Group AI · jorgejimenez@integra-group.ai · https://integra-group.ai*
*Confidencial — Coutiño (Maximiliano Coutiño persona física)*
