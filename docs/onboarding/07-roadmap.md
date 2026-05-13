# Calendario & Roadmap — Coutiño

**Proyecto:** Lealtad Digital
**Duración estimada:** 8-10 semanas (target: 9 semanas)
**Fecha de inicio:** 08/05/2026 *(se confirma al firmar contrato)*

---

## Roadmap General

| Semana | Fase | Entregable | Status |
|---|---|---|---|
| S1 | Discovery & Validación | Doc de requerimientos + wireframes Figma (incluye Wallet pass) | Pendiente |
| S2 | Infraestructura Base | AWS + auth multi-tenant + 3 ambientes operativos | Pendiente |
| S3 | Backend Core | API completa + modelo DynamoDB + tests | Pendiente |
| S4 | Frontend Core | Editor drag-drop + dashboard del comercio | Pendiente |
| S5 | Motor de Puntos + Cliente Final | Producto E2E funcional (web/PWA) | Pendiente |
| S6 | Integraciones core | Stripe + WhatsApp + SES operativos | Pendiente |
| S7 | Apple Wallet + Google Wallet | Tarjetas activas en iOS y Android reales | Pendiente |
| S8 | Piloto & Testing | Validación con 2-3 comercios reales | Pendiente |
| S9 | Entrega & Capacitación | Producción + workshop + documentación | Pendiente |
| S9+ | Soporte Inicial | 1 mes de soporte post-entrega incluido | Pendiente |

---

## Detalle por Semana

### Semana 1 — Discovery & Validación

| Día | Actividad | Participantes |
|---|---|---|
| Lunes | Kick-off + alineación de objetivos | Maximiliano + Integra |
| Lunes | **Crear cuenta Apple Developer Individual** (Maximiliano persona física, ~1 día, sin DUNS) | Maximiliano |
| Martes | Sesión discovery 1: caso de uso, perfil de comercio target, modelo de pricing | Maximiliano + Integra |
| Miércoles | Entrevistas con 2-3 comercios potenciales | Integra (Maximiliano observa) |
| Jueves | Diseño de wireframes en Figma + diseño de Wallet pass | Integra |
| Viernes | Review semanal + aprobación de wireframes | Maximiliano + Integra |

**Entregable:** Documento de discovery + wireframes Figma + diseño Wallet pass aprobados

---

### Semana 2 — Infraestructura Base

| Día | Actividad | Participantes |
|---|---|---|
| Lunes | Planeación + setup cuenta AWS + IAM + dominios | Integra (Coutiño provee credenciales) |
| Martes-Jueves | CDK skeleton + Cognito multi-tenant + DynamoDB + API Gateway + pipelines CI/CD | Integra |
| Jueves | **Setup Google Wallet API en Google Cloud Console** | Maximiliano + Integra |
| Viernes | Demo: auth flow funcionando en 3 ambientes | Maximiliano + Integra |

**Entregable:** Infra deployable, login funcional, ambientes dev/staging/prod operativos, Google Wallet API habilitada

---

### Semana 3 — Backend Core

| Día | Actividad | Participantes |
|---|---|---|
| Lunes | Planeación sprint backend | Integra |
| Martes-Jueves | Modelo single-table + endpoints CRUD comercios + clientes finales + tarjetas + tests | Integra |
| Viernes | Demo: API completa (walkthrough de Postman + tests) | Maximiliano + Integra |

**Entregable:** Backend funcional con suite de tests verde

---

### Semana 4 — Frontend Core

| Día | Actividad | Participantes |
|---|---|---|
| Lunes | Planeación sprint frontend | Integra |
| Martes-Jueves | Editor drag-and-drop + dashboard comercio + flujo cliente final (PWA fallback) | Integra |
| Viernes | Demo: editor + dashboards operativos integrados con backend | Maximiliano + Integra |

**Entregable:** Frontend funcional integrado end-to-end

---

### Semana 5 — Motor de Puntos + Flujo Cliente Final

| Día | Actividad | Participantes |
|---|---|---|
| Lunes | Planeación + reglas de motor de puntos | Maximiliano + Integra |
| Martes-Jueves | Implementación earn/redeem + flujo cliente final + generación de QR + magic-link | Integra |
| Viernes | Demo: ciclo completo (alta comercio → tarjeta → cliente final → canje) | Maximiliano + Integra |

**Entregable:** Producto funcional end-to-end (web/PWA)

---

### Semana 6 — Integraciones core

| Día | Actividad | Participantes |
|---|---|---|
| Lunes | Planeación integraciones | Integra |
| Martes-Miércoles | Stripe (suscripciones + portal de billing + webhooks) | Integra |
| Jueves | WhatsApp Meta Cloud API + AWS SES email transaccional | Integra |
| Viernes | Demo: cobro automático funcionando + onboarding por WhatsApp | Maximiliano + Integra |

**Entregable:** Stripe y WhatsApp operativos

---

### Semana 7 — Apple Wallet + Google Wallet

| Día | Actividad | Participantes |
|---|---|---|
| Lunes | Setup certificados Apple PassKit + diseño de pass | Integra (Coutiño provee Apple Developer) |
| Martes | Generación dinámica de `.pkpass` por cliente final + endpoint PassKit Web Service | Integra |
| Miércoles | Servicio de updates push (APNs) + notificaciones con geofence | Integra |
| Jueves | Google Wallet: Loyalty Class + Loyalty Object por comercio + link "Add to Google Wallet" + updates push | Integra |
| Viernes | Demo en vivo con iPhone y Android reales: tarjeta agregada, puntos suben, push llega, geofence dispara | Maximiliano + Integra |

**Entregable:** Apple Wallet + Google Wallet operativos en dispositivos reales

---

### Semana 8 — Piloto & Testing

| Día | Actividad | Participantes |
|---|---|---|
| Lunes | Setup piloto con 2-3 comercios reales identificados por Coutiño | Maximiliano + Integra + comercios |
| Martes-Jueves | Testing E2E + ajustes basados en uso real del piloto (incluyendo Wallet en condiciones reales del interior) | Integra (con feedback de comercios piloto) |
| Viernes | Review de bugs + plan de cierre + reporte de validación | Maximiliano + Integra |

**Entregable:** Sistema validado con uso real por 2-3 comercios piloto

---

### Semana 9 — Entrega & Capacitación

| Día | Actividad | Participantes |
|---|---|---|
| Lunes | Bug fixes finales basados en piloto | Integra |
| Martes | Documentación técnica + manual de usuario para comercios | Integra |
| Miércoles | Workshop de capacitación (90 min, grabado) — incluye cómo explicar Wallet a clientes finales | Maximiliano + Integra |
| Jueves | Deploy producción + smoke tests + monitoreo post-deploy | Integra |
| Viernes | Cierre formal + handover + inicio de soporte post-entrega | Maximiliano + Integra |

**Entregable:** Sistema en producción + workshop completado + documentación final + soporte iniciado

---

## Milestones Clave

| Milestone | Fecha estimada | Dependencia |
|---|---|---|
| Wireframes aprobados (incl. Wallet) | Fin S1 (15/05/2026) | Discovery completo |
| Apple Developer Individual activo | Fin S1 (15/05/2026) | Cuenta a nombre de Maximiliano persona física, ~1 día |
| Auth multi-tenant funcional | Fin S2 (22/05/2026) | Infra AWS |
| Backend API completo | Fin S3 (29/05/2026) | Modelo de datos |
| Editor drag-drop funcional | Fin S4 (05/06/2026) | Backend API |
| Producto E2E funcional (web) | Fin S5 (12/06/2026) | Motor de puntos |
| Cobros Stripe operativos | Fin S6 (19/06/2026) | Backend + cuenta Stripe |
| **Wallet operativo en iOS y Android** | **Fin S7 (26/06/2026)** | **Apple Developer + Google Wallet API** |
| Piloto validado con 2-3 comercios | Fin S8 (03/07/2026) | Producto + comercios reales |
| Producción + handover | Fin S9 (10/07/2026) | Workshop + deploy |

> Fechas tentativas asumiendo arranque el 08/05/2026. Se confirman al firmar contrato.

---

## Reuniones en Calendario

| Reunión | Día | Hora | Recurrencia |
|---|---|---|---|
| Kick-off | S1 Lunes | 10:00 AM | Una vez |
| Discovery 1 | S1 Martes | 10:00 AM | Una vez |
| Discovery 2 (entrevistas con comercios) | S1 Miércoles | 10:00 AM | Una vez |
| Setup Google Wallet | S2 Jueves | 11:00 AM | Una vez |
| Review semanal | Viernes | 11:00 AM | Semanal (S1-S9) |
| Demo Wallet | S7 Viernes | 11:00 AM | Una vez (con teléfonos reales) |
| Sesión piloto | S8 Lunes | 10:00 AM | Una vez |
| Workshop | S9 Miércoles | 10:00 AM | Una vez |

*(Horarios tentativos — se confirman al inicio del proyecto)*

---

## Notas

- Las fechas se confirman al firmar el contrato
- Si Coutiño necesita más tiempo para revisiones, el timeline se ajusta proporcionalmente
- Los reviews de viernes son de 30 minutos máximo
- El workshop de capacitación es de 90 minutos
- El piloto en S8 requiere coordinación previa con los comercios — Maximiliano debe identificarlos a más tardar S5
- **La cuenta Apple Developer Individual se crea el lunes de S1** (Maximiliano persona física, ~1 día, sin DUNS). Si por alguna razón se demora, la fase Wallet (S7) puede arrancar sin cert y sumarlo al final de la semana.
- Cuando Coutiño se constituya como empresa (post-proyecto o durante), la cuenta Apple puede migrar a Organization — eso requerirá DUNS, gratis o ~$300 USD expedito, y se coordina como adenda.

---

*Integra Group AI · jorgejimenez@integra-group.ai*
*Confidencial — Coutiño (Maximiliano Coutiño persona física)*
