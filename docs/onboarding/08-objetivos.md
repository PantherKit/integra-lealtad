# Objetivos & Reportes — Coutiño

**Proyecto:** Lealtad Digital

---

## 1. Objetivos del Proyecto

**Objetivo General:**
Lanzar al mercado una plataforma SaaS multi-tenant funcional, escalable y comercialmente viable que permita a Coutiño vender suscripciones de software de tarjetas de lealtad digitales a comercios pequeños y medianos del interior de México, con tarjetas que viven en Apple Wallet y Google Wallet (sin app que instalar) y un producto validado en condiciones reales antes de la apertura comercial.

**Objetivos Específicos:**

| # | Objetivo | Métrica de éxito |
|---|---|---|
| 1 | Plataforma operativa en producción AWS | URL pública estable, 3 ambientes (dev/staging/prod), uptime ≥99% |
| 2 | Onboarding de comercios menor a 15 minutos | Tiempo medido desde registro a primera tarjeta publicada |
| 3 | Tarjetas funcionando en Apple Wallet y Google Wallet | Demostrado en iPhone y Android reales: agregar, ver puntos, recibir push |
| 4 | Piloto exitoso con 2-3 comercios reales | Cada comercio activo, con al menos 10 clientes finales registrados al cierre del piloto |
| 5 | Cobro recurrente automatizado vía Stripe | Suscripciones se renuevan sin intervención manual; reintentos automáticos en caso de falla |
| 6 | Coutiño puede operar el producto solo | Workshop completado + manual entregado + 0 dependencias críticas con Integra al fin del soporte incluido |
| 7 | Costo AWS predecible y bajo | Gasto AWS <$60 USD/mes con hasta 100 comercios pagando |

---

## 2. KPIs

### KPIs de Adopción (primeros 90 días post-lanzamiento)

| KPI | Meta primeros 90 días |
|---|---|
| Comercios registrados | ≥30 |
| Comercios pagando | ≥20 |
| Clientes finales registrados | ≥3,000 |
| Tarjetas creadas (programas activos) | ≥30 |
| Time-to-first-card | <15 min |
| Tasa de activación (registro → primera tarjeta) | >70% |
| Comercios que completan onboarding por WhatsApp | >50% del total |
| **% de clientes finales con tarjeta agregada a Apple Wallet o Google Wallet** | **>40%** |
| **% de clientes finales que abren al menos una notificación push del Wallet** | **>30%** |

### KPIs de Engagement (ongoing)

| KPI | Meta ongoing |
|---|---|
| MAU comercios | >85% de los comercios pagando |
| Visitas escaneadas / comercio / semana | >20 |
| Canjes / comercio / mes | >5 |
| Retención mensual de clientes finales | >40% (vuelve a usar la tarjeta el mes siguiente) |
| Tasa de churn comercios mensual | <10% |
| Tickets de soporte por comercio / mes | <0.5 |
| **Click-through rate de geofence push (Apple Wallet)** | **>5%** |
| **% de updates de puntos que se reflejan en Wallet en <30 segundos** | **>95%** |

### KPIs de Negocio

| KPI | Meta primer año |
|---|---|
| MRR (Monthly Recurring Revenue) | $250,000 MXN al mes 12 |
| ARR (Annual Recurring Revenue) | $3,000,000 MXN al cierre del año |
| CAC (Costo de adquisición de comercio) | <$2,000 MXN |
| LTV (Life-time value de comercio) | >$15,000 MXN |
| Margen bruto | >75% (post-costos AWS + Stripe + comisión WhatsApp + Apple Developer) |
| NPS de comercios | >40 |

---

## 3. Reportes

### Reporte Semanal de Proyecto (durante desarrollo)

Se entrega cada viernes después del review.

**Contenido:**
- Avance de la semana (qué se hizo)
- Siguiente semana (qué se va a hacer)
- Bloqueos o riesgos (si los hay)
- % de avance general del proyecto
- Decisiones pendientes del cliente

### Reporte Mensual del Programa (post-lanzamiento)

Se entrega la primera semana de cada mes.

**Contenido:**
- KPIs de adopción y engagement (incluyendo Wallet adoption rate)
- Tendencias de uso
- Distribución iOS / Android / web fallback
- Insights accionables
- Recomendaciones de optimización
- Reporte de costos AWS + Stripe

---

## 4. Dashboard (incluido en el sistema)

El panel de administración incluye un dashboard con:

- Comercios totales / activos / suspendidos
- MRR actual y trend de los últimos 6 meses
- Top comercios por uso (escaneos / canjes / clientes activos)
- Funnel de adopción (registrados → activos → pagando → renovando)
- Distribución geográfica (mapa de comercios por estado)
- Tasa de churn mensual
- **Wallet adoption: % de tarjetas en Apple Wallet vs Google Wallet vs PWA fallback**
- **Wallet engagement: aperturas de push notifications por geofence**
- Alertas: comercios inactivos >7 días, fallos de pago, errores técnicos

---

## 5. Baseline

Antes de lanzar, necesitamos establecer la línea base:

| Métrica | Cómo medirla | Cuándo se levanta |
|---|---|---|
| Tarjetas físicas que usan los comercios hoy | Encuesta a piloto | Semana 1 |
| Frecuencia de visita promedio del cliente recurrente | Datos reportados por cada comercio | Semana 1 |
| Costo actual de fidelización (impresión cartulinas, sellos, etc.) | Encuesta | Semana 1 |
| Disponibilidad de smartphone entre clientes finales | Encuesta a piloto | Semana 1 |
| **Distribución iOS vs Android entre clientes finales del comercio** | Encuesta a piloto | Semana 1 |
| Conexión a internet promedio en comercio | Speed test guiado | Semana 1 |
| Disposición a pagar (Willingness to pay) por suscripción | Encuesta a piloto | Semana 1 |

Estos datos se levantan en la fase de Discovery (Semana 1) y se contrastan con los resultados del piloto (Semana 8) para validar la propuesta de valor y confirmar las metas de Wallet adoption.

---

## 6. Cadencia de Revisión

| Tipo | Frecuencia | Participantes | Duración |
|---|---|---|---|
| Review de proyecto | Semanal (viernes) | Punto de contacto + Integra Group AI | 30 min |
| Review de KPIs | Mensual (post-lanzamiento) | Stakeholders + Integra Group AI | 45 min |
| Review estratégico | Trimestral (post-lanzamiento) | Dirección + Integra Group AI | 60 min |

---

*Integra Group AI · jorgejimenez@integra-group.ai*
*Confidencial — Coutiño (Maximiliano Coutiño persona física)*
