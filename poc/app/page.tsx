import Link from 'next/link';
import { WalletCard } from '@/components/WalletCard';
import {
  Palette, Smartphone, BarChart3, ArrowRight, Sparkles,
  Bell, MapPin, Zap, ShieldCheck, Coffee, Scissors, BookOpen,
  Utensils, Dumbbell, ShoppingBag, Check
} from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,141,42,0.25),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider bg-white/10 border border-white/15 px-3 py-1.5 rounded-full backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              POC navegable · v0
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Tarjetas de lealtad{' '}
              <span className="bg-gradient-to-r from-brand-500 to-amber-300 bg-clip-text text-transparent">
                en el Wallet
              </span>
              ,{' '}
              <span className="text-white/70">sin app</span>.
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-xl">
              Plataforma SaaS multi-tenant para que cualquier comercio del interior
              de México lance su programa de lealtad en menos de 15 minutos —
              y se entregue en el Apple Wallet o Google Wallet del cliente con un solo tap.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/editor/"
                className="inline-flex items-center gap-2 bg-brand-500 text-gray-950 font-semibold px-5 py-3 rounded-full hover:bg-brand-600 hover:text-white transition group"
              >
                Probar el editor
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
              </Link>
              <Link
                href="/customer/"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur border border-white/20 text-white px-5 py-3 rounded-full font-semibold transition"
              >
                Ver el journey
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-white/60">
              <Stat label="onboarding del comercio" value="<15 min" />
              <Stat label="apps que instalar" value="0" />
              <Stat label="comercios pagando, mes 12" value="250" />
            </div>
          </div>

          {/* Floating wallet card */}
          <div className="relative grid place-items-center min-h-[360px]">
            <div className="absolute w-72 h-72 bg-brand-500/30 blur-3xl rounded-full" />
            <div className="relative -rotate-6 hover:rotate-0 transition-transform duration-500">
              <WalletCard
                config={{
                  businessName: 'Café Mérida',
                  tagline: 'Tostado de altura',
                  color: '#5B3A1F',
                  iconKey: 'coffee',
                  reward: 'Café gratis',
                  stampsRequired: 7,
                  customerName: 'María González',
                  currentStamps: 5,
                }}
                size="lg"
              />
            </div>
            {/* Floating notification */}
            <div className="absolute top-2 right-0 lg:right-4 bg-white text-gray-900 rounded-xl px-3 py-2 shadow-2xl flex items-center gap-2 max-w-[14rem] rotate-3">
              <div className="w-7 h-7 rounded-md bg-[#5B3A1F] grid place-items-center shrink-0">
                <Bell size={13} className="text-white" />
              </div>
              <div className="text-[11px] leading-tight">
                <div className="font-semibold">Café Mérida</div>
                <div className="text-gray-600">+1 sello · 5/7 — falta poco para tu café</div>
              </div>
            </div>
            <div className="absolute bottom-2 left-0 lg:left-4 bg-white text-gray-900 rounded-xl px-3 py-2 shadow-2xl flex items-center gap-2 max-w-[14rem] -rotate-2">
              <div className="w-7 h-7 rounded-md bg-blue-600 grid place-items-center shrink-0">
                <MapPin size={13} className="text-white" />
              </div>
              <div className="text-[11px] leading-tight">
                <div className="font-semibold">Estás cerca de Café Mérida</div>
                <div className="text-gray-600">Te faltan 2 sellos para tu premio</div>
              </div>
            </div>
          </div>
        </div>

        {/* curve transition */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-gray-50" />
      </section>

      {/* WHY WALLET */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wider text-brand-600">Por qué Wallet</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
              Cero fricción para el cliente.<br />
              <span className="text-gray-500">Cero mantenimiento para ti.</span>
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Zap,
                title: 'Un tap, sin app',
                body:
                  'El cliente agrega la tarjeta a Apple Wallet o Google Wallet desde un QR físico. No descarga, no login, no contraseña.',
              },
              {
                icon: Bell,
                title: 'Push nativo + geofence',
                body:
                  'El Wallet avisa al cliente cuando suma sellos o pasa cerca del comercio. Notificaciones del sistema operativo, no de una app.',
              },
              {
                icon: ShieldCheck,
                title: 'Premium sin presupuesto premium',
                body:
                  'La tarjeta vive en pantalla de bloqueo y se actualiza sola. Imagen de marca grande, sin pagar por una app móvil.',
              },
            ].map((p) => {
              const I = p.icon;
              return (
                <div key={p.title} className="bg-white border border-gray-200 rounded-xl p-6 card-shadow">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 grid place-items-center mb-4">
                    <I size={20} />
                  </div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THREE-VIEW PREVIEW */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-wider text-brand-600">Recorrido</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
                Tres vistas, una historia.
              </h2>
              <p className="mt-3 text-gray-600">
                El POC te lleva por el ángulo del comercio, del cliente final y del operador. Click en cualquiera para empezar.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <ViewCard
              href="/editor/"
              num="01"
              icon={Palette}
              title="Editor del comercio"
              desc="Drag-and-drop, plantillas por industria, reglas, beneficios extras. Live preview de la tarjeta."
              cta="Configurar tarjeta"
              accent="from-amber-100 to-amber-50"
            />
            <ViewCard
              href="/customer/"
              num="02"
              icon={Smartphone}
              title="Journey del cliente"
              desc="QR → landing → Add to Wallet → tarjeta activa con push y geofence simulados → canje."
              cta="Recorrer journey"
              accent="from-rose-100 to-rose-50"
            />
            <ViewCard
              href="/merchant/"
              num="03"
              icon={BarChart3}
              title="Dashboard del comercio"
              desc="KPIs reales: clientes activos, MRR, adopción Wallet por SO, top clientes, feed en vivo."
              cta="Ver dashboard"
              accent="from-emerald-100 to-emerald-50"
            />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium uppercase tracking-wider text-brand-600">Plantillas listas</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
              Pensado para el comercio del interior.
            </h2>
            <p className="mt-3 text-gray-600">
              Cafeterías, salones, papelerías, restaurantes, gimnasios, boutiques. El editor arranca con una plantilla
              por industria y reglas razonables — el dueño solo ajusta logo y color.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {INDUSTRIES.map((i) => {
              const I = i.icon;
              return (
                <div
                  key={i.label}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-500 hover:shadow-md transition group"
                >
                  <div
                    className="w-10 h-10 rounded-lg grid place-items-center mb-3 transition"
                    style={{ background: i.color + '15', color: i.color }}
                  >
                    <I size={20} />
                  </div>
                  <div className="font-semibold text-sm">{i.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{i.example}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUTCOMES / METAS */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wider text-brand-500">Adónde apunta el producto</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
              Métricas reales, no promesas.
            </h2>
            <p className="mt-3 text-white/70">
              Estos son los KPIs que define el discovery. El POC ya está construido alrededor de medirlos.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <KpiCard
              big="250"
              suffix="comercios"
              label="pagando al cierre del año 1"
            />
            <KpiCard
              big="$250k"
              suffix="MRR"
              label="recurrencia mensual proyectada"
            />
            <KpiCard
              big=">65%"
              suffix="Wallet"
              label="clientes con tarjeta en Apple/Google"
            />
            <KpiCard
              big=">92%"
              suffix="retención"
              label="comercios mes a mes"
            />
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-3 text-sm">
            <Bullet>Stack 100% serverless en AWS · scale-to-zero · ~$30-60 USD/mes a 100 comercios</Bullet>
            <Bullet>Multi-tenant con Cognito · DynamoDB single-table · PWA fallback offline-first</Bullet>
            <Bullet>Apple PassKit + Google Wallet API · push/geofence nativo del SO</Bullet>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Sparkles size={28} className="mx-auto text-brand-500" />
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            Empieza por donde quieras.
          </h2>
          <p className="mt-3 text-gray-600">
            Esto es un prototipo navegable — datos mock, sin backend. Sirve para iterar
            la idea antes de codificar la versión real (9 semanas de roadmap).
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/editor/"
              className="inline-flex items-center gap-2 bg-gray-950 hover:bg-gray-800 text-white font-semibold px-5 py-3 rounded-full transition"
            >
              Probar el editor <ArrowRight size={16} />
            </Link>
            <Link
              href="/customer/"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-gray-900 text-gray-900 font-semibold px-5 py-3 rounded-full transition"
            >
              Ver el journey
            </Link>
            <Link
              href="/merchant/"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-gray-900 text-gray-900 font-semibold px-5 py-3 rounded-full transition"
            >
              Ver el dashboard
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xl font-semibold text-white">{value}</div>
      <div className="text-[11px] uppercase tracking-wide text-white/50 mt-0.5">{label}</div>
    </div>
  );
}

function ViewCard({
  href,
  num,
  icon,
  title,
  desc,
  cta,
  accent,
}: {
  href: string;
  num: string;
  icon: typeof Palette;
  title: string;
  desc: string;
  cta: string;
  accent: string;
}) {
  const I = icon;
  return (
    <Link
      href={href}
      className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-900 hover:shadow-xl transition"
    >
      <div className={`h-32 bg-gradient-to-br ${accent} relative`}>
        <span className="absolute top-4 left-5 text-xs font-mono text-gray-500 tracking-widest">{num}</span>
        <div className="absolute -bottom-6 left-5 w-12 h-12 rounded-xl bg-white border border-gray-200 grid place-items-center text-gray-900 group-hover:scale-110 transition">
          <I size={20} />
        </div>
      </div>
      <div className="px-5 pt-10 pb-5">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{desc}</p>
        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 group-hover:gap-2.5 transition-all">
          {cta} <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}

function KpiCard({ big, suffix, label }: { big: string; suffix: string; label: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur">
      <div className="flex items-baseline gap-1.5">
        <span className="text-3xl font-semibold tracking-tight">{big}</span>
        <span className="text-sm text-white/60">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-white/70">{label}</div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-white/80">
      <Check size={16} className="text-brand-500 mt-0.5 shrink-0" /> {children}
    </div>
  );
}

const INDUSTRIES = [
  { label: 'Café', example: 'Café Mérida', icon: Coffee, color: '#5B3A1F' },
  { label: 'Estética', example: 'Salón Aurora', icon: Scissors, color: '#C2185B' },
  { label: 'Papelería', example: 'Vázquez', icon: BookOpen, color: '#1E5BBF' },
  { label: 'Restaurante', example: 'La Tía', icon: Utensils, color: '#B22222' },
  { label: 'Gimnasio', example: 'FitLocal', icon: Dumbbell, color: '#0F766E' },
  { label: 'Boutique', example: 'Selva', icon: ShoppingBag, color: '#7C3AED' },
];
