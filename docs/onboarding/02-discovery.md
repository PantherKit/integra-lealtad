# Discovery & Estrategia — Coutiño

**Proyecto:** Plataforma SaaS de Tarjetas de Lealtad Digital
**Fecha:** Mayo 2026
**Elaborado por:** Integra Group AI

> **Nota:** Este documento es un *discovery preliminar* basado en la conversación inicial. Algunos campos se levantan formalmente en la sesión de Discovery (Semana 1) con Maximiliano y 2-3 comercios piloto. Los puntos marcados como `(Por levantar en discovery)` son explícitamente parte de la agenda de esa semana.

---

## 1. Perfil del Cliente

| Campo | Detalle |
|---|---|
| Empresa | Coutiño — operada por Maximiliano Coutiño persona física *(aún no constituida como persona moral)* |
| Industria | Software (SaaS) — Distribución de tecnología |
| Tipo | B2B2C — Coutiño vende a comercios; los comercios atienden a consumidores finales |
| Contacto | Maximiliano Coutiño |
| Cargo | Founder |
| Email | *(por confirmar)* |
| Teléfono | +52 55 6075 1194 |

---

## 2. Contexto del Negocio

**¿A qué se dedica Coutiño?**
Coutiño es una empresa SaaS en construcción enfocada en distribución de tecnología accesible para comercios pequeños y medianos del interior de la República Mexicana. La tesis del negocio es que existe una brecha tecnológica significativa entre los comercios de los grandes núcleos urbanos (Ciudad de México, Monterrey, Guadalajara) y los del interior, y que herramientas digitales que han sido históricamente reservadas a cadenas grandes pueden capturar un segmento desatendido si se diseñan específicamente para esa realidad.

**¿Cuál es el core business?**
Vender suscripciones mensuales de software a comercios independientes del interior de México que quieren fidelizar a sus clientes recurrentes pero no tienen herramientas adecuadas a su realidad operativa.

**¿Quiénes son sus clientes?**
Los **clientes directos de Coutiño** (los que pagan la suscripción) son comercios locales pequeños y medianos: cafeterías, salones de belleza, papelerías, restaurantes de barrio, lavanderías, gimnasios pequeños, boutiques. Localizados principalmente en Mérida, Puerto Escondido, Oaxaca, San Cristóbal y plazas similares fuera de los grandes núcleos urbanos.

Los **clientes finales** (los que reciben las tarjetas de lealtad) son los consumidores recurrentes de esos comercios — vecinos, clientes habituales, gente que vuelve por costumbre y conexión local.

**¿Cuál es el canal de venta principal?**
*(Por levantar en discovery — hipótesis: ventas directas asistidas, WhatsApp Business, presencia local, alianzas con cámaras de comercio regionales, referidos boca-a-boca dado el perfil del cliente target. Definir esto es crítico porque el onboarding del producto se diseña en torno al canal.)*

**Stack tecnológico actual:**

- *(Por levantar en discovery — Coutiño está en fase pre-producto; no hay stack heredado que respetar.)*
- *(Por levantar)* Cuentas existentes: AWS, GitHub, Stripe, dominio, Google Workspace, Apple Developer Program, Google Wallet API
- *(Por levantar)* Equipo técnico interno: ¿solo Maximiliano? ¿partner técnico? ¿ninguno?

---

## 3. Requerimiento Identificado

**Requerimiento principal:**
Construir una plataforma SaaS multi-tenant que permita a comercios no técnicos del interior de México crear y distribuir programas de lealtad digital en minutos, con tarjetas que se entregan al cliente final en Apple Wallet y Google Wallet (sin app que instalar) y operación amigable para usuarios con baja sofisticación técnica y conexiones a internet inestables.

**¿Por qué este requerimiento?**

- Las soluciones existentes (Toast, Square, Smile.io, Loyverse) están diseñadas para mercado USA o cadenas grandes — caras, en inglés, no adaptadas al contexto del comercio independiente mexicano
- El comercio pequeño del interior no tiene tiempo ni paciencia para configurar herramientas complejas — necesita drag-and-drop y resultados visibles en 15 minutos
- El consumidor del interior usa teléfono Android de gama media-baja y conexiones inestables — la solución tiene que funcionar en esas condiciones, no en un iPhone con WiFi de fibra
- La integración con Apple Wallet y Google Wallet elimina la barrera de "instalar una app" — el cliente final agrega la tarjeta con un tap, recibe notificaciones nativas y siente un producto premium, no un experimento
- Existe demanda comprobada (cualquier negocio de barrio sigue usando tarjetas físicas con sellos manuales) pero no hay oferta digital accesible localizada
- Nicho desatendido = competencia baja = ventana de oportunidad real para Coutiño antes de que llegue Stripe / Toast a México formalmente

**¿Cómo lo resuelven hoy?**
Hoy los comercios target manejan lealtad con tarjetas físicas selladas (la cartulina con espacios para el sello del café), o no manejan lealtad en absoluto y pierden recurrencia. Los pocos que digitalizaron lo hicieron con WhatsApp y libretas o Excel — sin métricas, sin escalabilidad, sin posibilidad de notificar al cliente cuando tiene un premio listo.

**Enfoque del proyecto:**

1. Levantar requerimientos detallados con Maximiliano y validar con 2-3 comercios reales del interior **antes** de codificar
2. Diseñar UX drag-and-drop priorizando claridad para usuarios no técnicos sobre features avanzadas
3. Construir backend serverless en AWS con multi-tenancy lógica y escalabilidad de costo cero a miles de tenants
4. Integrar Apple Wallet (PassKit) y Google Wallet API con updates automáticos vía webhooks
5. Implementar onboarding por WhatsApp como diferenciador clave para el target
6. Lanzar piloto controlado con 2-3 comercios reales en la última fase antes de apertura comercial

---

## 4. Estrategia del Proyecto

### Fase 1 — Discovery & Validación (Semana 1)
- Sesiones de discovery con Maximiliano para definir funcionalidad y prioridades
- Entrevistas a 2-3 comercios potenciales (validación del problema en el mercado real)
- Diseño de wireframes drag-and-drop en Figma + diseño de Wallet pass
- Definición del modelo de datos multi-tenant
- Aprobación de stack técnico y arquitectura
- **Duración:** 1 semana

### Fase 2 — Infraestructura Base (Semana 2)
- Setup AWS (CDK + GitHub Actions, 3 ambientes: dev/staging/prod)
- Auth multi-tenant con Cognito
- Modelo DynamoDB single-table
- API Gateway + Lambda + framework Hono
- Pipelines CI/CD
- **Duración:** 1 semana

### Fase 3 — Producto Core (Semanas 3-5)
- Backend Core (Semana 3): endpoints CRUD, modelo de datos, tests
- Frontend Core (Semana 4): editor drag-and-drop + dashboards (Next.js + shadcn)
- Motor de puntos + flujo cliente final (Semana 5): earn/redeem, QR, magic-link
- **Duración:** 3 semanas

### Fase 4 — Integraciones core (Semana 6)
- Stripe (suscripciones recurrentes a comercios)
- WhatsApp (Meta Cloud API)
- Email transaccional (AWS SES)
- **Duración:** 1 semana

### Fase 5 — Apple Wallet + Google Wallet (Semana 7)
- Diseño y firma de Apple PassKit pass
- Configuración de Google Wallet API + clases de objeto
- Webhook service para updates push (puntos cambian → Wallet se actualiza)
- Notificaciones push con geofence (Apple)
- Generación dinámica de pass por cliente final
- **Duración:** 1 semana

### Fase 6 — Piloto & Testing (Semana 8)
- Setup piloto con 2-3 comercios reales identificados por Coutiño
- Testing E2E (incluyendo Wallet en iOS y Android reales)
- Ajustes basados en uso real del piloto
- **Duración:** 1 semana

### Fase 7 — Entrega & Capacitación (Semana 9)
- Bug fixes finales basados en piloto
- Documentación técnica + manual de usuario
- Workshop de capacitación a Maximiliano (90 min, grabado)
- Deploy producción + smoke tests + handover formal
- **Duración:** 1 semana

**Total target: 9 semanas. Rango estimado: 8-10 semanas.**

---

## 5. Definición Funcional

### Para el comercio (cliente directo de Coutiño)

- Registro y onboarding (autoservicio web o asistido por WhatsApp)
- Editor drag-and-drop de tarjeta de lealtad: logo, colores, texto, reglas
- Configuración de programa: cuántos sellos = 1 premio, qué premios, vigencia
- Inscripción de clientes finales mediante QR físico imprimible o link compartible
- Operación diaria: marcar visita / canje desde el teléfono del dueño o cajero
- Dashboard con métricas: clientes activos, tasa de canje, top clientes, % de clientes con tarjeta en Wallet
- Cobro automático mensual de su suscripción (Stripe)
- Soporte vía WhatsApp

### Para el cliente final del comercio

- Recepción del link de la tarjeta por WhatsApp del comercio o escaneo de QR físico
- **Add to Apple Wallet** (un tap en iOS) o **Add to Google Wallet** (un tap en Android)
- La tarjeta queda en su Wallet — visible en pantalla de bloqueo, accesible sin abrir el navegador
- **Notificaciones push nativas con geofence** — al pasar cerca del comercio, recibe un aviso del Wallet
- **La tarjeta se actualiza sola** cuando suman puntos (sin abrir nada — APNs / Google push)
- Puntos visibles en tiempo real en el frente de la tarjeta del Wallet
- Premio canjeable se anuncia por push notification del Wallet
- Backup web (PWA) para clientes que no quieran usar Wallet — login magic-link sin password

### Para Coutiño (administrador maestro)

- Panel global: lista de comercios, MRR, churn, soporte
- Suspender / reactivar comercios
- Override de configuración para casos especiales
- Reportes financieros para conciliación con Stripe
- Métricas de uso por estado, por industria, por antigüedad
- Métricas de Wallet adoption (% iOS / Android / web fallback)

---

## 6. Indicadores Clave (KPIs)

| KPI | Meta inicial (mes 3 post-lanzamiento) | Meta crecimiento (mes 12) |
|---|---|---|
| Comercios activos pagando | 25 | 250 |
| MRR (Monthly Recurring Revenue) | $20,000 MXN | $250,000 MXN |
| Tasa de retención mensual | >85% | >92% |
| Clientes finales registrados | 5,000 | 50,000 |
| **% de clientes finales con tarjeta en Wallet (iOS o Android)** | **>40%** | **>65%** |
| Time-to-first-card (onboarding) | <15 min | <10 min |
| NPS de comercios | >40 | >55 |

---

## 7. Stack Tecnológico Propuesto

| Capa | Tecnología | Justificación |
|---|---|---|
| Frontend | Next.js 14 (App Router) + Tailwind + shadcn/ui | Editor drag-and-drop performante, mobile-first, ecosistema maduro y rápido de desarrollar |
| Backend API | Lambda (Node 20) + Hono framework + Zod validation | Pago por request, scale-to-zero, costo $0 sin tráfico |
| Auth | AWS Cognito User Pools | Gratis hasta 50k MAU, magic-link nativo, multi-tenant friendly |
| Base de datos | DynamoDB single-table | $0 idle, auto-scaling, sin admin de RDS, ~$2-5/mes los primeros 100 comercios |
| Storage | S3 + CloudFront | Imágenes de tarjetas / logos, costo de centavos |
| Pagos | Stripe (suscripciones) | Estándar global, webhooks fáciles, captura tarjetas mexicanas |
| Email | AWS SES | $0.10 por cada 1,000 envíos |
| WhatsApp | Meta Cloud API directo | Sin intermediario (más barato que Twilio), nativo de Meta |
| **Apple Wallet** | **Apple PassKit + APNs** | **Estándar nativo iOS, push automático cuando cambian puntos** |
| **Google Wallet** | **Google Wallet API (Loyalty Class + Loyalty Object)** | **Estándar nativo Android, gratis hasta volumen alto** |
| IaC | AWS CDK (TypeScript) | Mismo lenguaje que el frontend, preview de cambios pre-deploy |
| CI/CD | GitHub Actions | Estándar, gratis para repo privado de tamaño moderado |
| Observabilidad | CloudWatch + AWS X-Ray | Incluido en AWS, sin servicios extra |

**Estimación de costo AWS** (primeros 100 comercios pagando, 5,000 clientes finales activos): **$30-60 USD/mes**. Apple Developer Program: $99 USD/año (lo paga Coutiño). Google Wallet API: gratis a este volumen.

---

## 8. Riesgos y Mitigación

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Adopción baja por baja sofisticación técnica del target | Alto | Onboarding asistido por WhatsApp + workshop opcional + 1 mes de soporte handhold incluido |
| Conexión inestable de comercios del interior | Medio | PWA con cache offline + sync diferido cuando vuelve la conexión |
| Costos AWS escalan más rápido que ingresos | Medio | Stack 100% serverless con scale-to-zero; alertas de billing en CloudWatch a $50/$100/$200 USD |
| Cumplimiento de protección de datos personales (LFPDPPP México) | Medio | Aviso de privacidad explícito, encriptación at-rest (Dynamo) y in-transit (HTTPS), retención configurable por tenant |
| Coutiño solicita features fuera del alcance original | Alto | Proceso documentado de adendas; el alcance está cerrado en el Acuerdo de Servicios |
| Stripe rechaza por modelo de negocio o jurisdicción | Bajo | Plan B con Conekta o Mercado Pago si Stripe no procede |
| **Cuenta Apple Developer Individual demora más de lo esperado** | **Bajo** | **Cuenta Individual a nombre de Maximiliano persona física — sin DUNS, ~1 día de aprobación. Se crea en S1.** |
| **Apple rechaza el certificado de pass por temas de marca** | **Bajo** | **Se valida nombre y branding antes de generar el certificado** |
| **Coutiño no constituida — facturación a persona física** | **Bajo** | **Contrato firmado con Maximiliano persona física; cuando se constituya, se actualiza vía adenda** |
| Validación con comercios piloto revela un fit más débil del esperado | Alto | El piloto está en Semana 8 — hay tiempo de iterar antes del lanzamiento comercial |

---

## 9. Preguntas Pendientes de Discovery

- Datos de facturación de Maximiliano persona física (RFC, dirección)
- Email principal y canal preferido de comunicación formal
- Plan / fecha tentativa de constitución legal de Coutiño como persona moral
- ¿Maximiliano tiene 2-3 comercios piloto identificados para validar antes del lanzamiento?
- ¿Modelo de pricing final que Maximiliano cobrará a sus comercios? (afecta UI del onboarding y panel maestro)
- ¿Necesidad de marca blanca o rebranding por comercio? (cambia complejidad significativamente — se sale de alcance Phase 1)
- ¿Hay restricciones presupuestarias hard que ajusten el alcance de Phase 1?
- ¿Plan de soporte post-entrega? (¿Integra continúa con un retainer? ¿Coutiño construye equipo interno? ¿Partner externo?)
- ¿Localización fuera de México eventualmente? (afecta decisiones de moneda, tax y datos)
- ¿Existen comercios que Maximiliano ya conoce que estarían dispuestos a participar como piloto pago en Semana 8?
- **¿Maximiliano ya tiene Apple ID con tarjeta de crédito vinculada?** (Sólo eso requiere para abrir cuenta Apple Developer Individual en ~1 día)
- **¿Cuenta Google Cloud para Google Wallet API?** (Gratis pero requiere setup en S2)

---

*Integra Group AI · jorgejimenez@integra-group.ai*
*Confidencial — Coutiño (Maximiliano Coutiño persona física)*
