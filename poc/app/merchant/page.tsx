'use client';

import { useState } from 'react';
import {
  Users, DollarSign, TrendingUp, Smartphone, Search, Coffee, Bell, Award,
  ArrowUpRight, ArrowDownRight, Plus, Filter
} from 'lucide-react';

const KPIS = [
  { label: 'Clientes activos', value: '342', delta: '+18.4%', positive: true, icon: Users, hint: 'últimos 30 días' },
  { label: 'MRR estimado', value: '$8,720 MXN', delta: '+12.1%', positive: true, icon: DollarSign, hint: 'recurrencia comercio' },
  { label: 'Tasa de canje', value: '24.6%', delta: '+3.2pp', positive: true, icon: Award, hint: 'sobre clientes con tarjeta' },
  { label: 'Adopción Wallet', value: '67%', delta: '+9pp', positive: true, icon: Smartphone, hint: 'iOS + Android' },
];

const TOP_CUSTOMERS = [
  { name: 'María González', phone: '+52 999 ··· 4471', stamps: 6, total: 7, visits: 14, lastVisit: 'hoy 09:24' },
  { name: 'Juan Pérez', phone: '+52 999 ··· 9210', stamps: 5, total: 7, visits: 12, lastVisit: 'ayer' },
  { name: 'Ana Domínguez', phone: '+52 999 ··· 1158', stamps: 7, total: 7, visits: 11, lastVisit: 'hoy 11:02', ready: true },
  { name: 'Carlos Ek', phone: '+52 999 ··· 6622', stamps: 4, total: 7, visits: 10, lastVisit: 'lun.' },
  { name: 'Lucía Pat', phone: '+52 999 ··· 0331', stamps: 3, total: 7, visits: 8, lastVisit: 'lun.' },
  { name: 'Diego Couoh', phone: '+52 999 ··· 7894', stamps: 2, total: 7, visits: 6, lastVisit: 'sáb.' },
];

const ACTIVITY = [
  { ts: '11:14', text: 'Ana D. canjeó café gratis', type: 'redeem' },
  { ts: '11:02', text: 'Ana D. completó 7/7 sellos', type: 'milestone' },
  { ts: '10:48', text: 'Nuevo cliente: Renata M.', type: 'signup' },
  { ts: '10:31', text: 'María G. sumó 1 sello (6/7)', type: 'stamp' },
  { ts: '09:55', text: 'Push enviado a 14 clientes en geofence', type: 'push' },
  { ts: '09:24', text: 'María G. sumó 1 sello (5/7)', type: 'stamp' },
];

// Last 14 days mock — visits per day
const VISITS = [12, 18, 14, 22, 19, 24, 31, 28, 22, 35, 29, 33, 38, 41];

export default function MerchantPage() {
  const [tab, setTab] = useState<'overview' | 'customers' | 'activity'>('overview');

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Comercio</p>
          <h1 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
            <Coffee size={22} className="text-brand-600" /> Café Mérida
          </h1>
          <p className="text-sm text-gray-600 mt-0.5">Mérida, Yuc. · plan $299/mes · activo desde feb 2026</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 text-sm border border-gray-200 bg-white rounded-lg px-3 py-2 hover:border-gray-400">
            <Filter size={14} /> Últimos 30 días
          </button>
          <button className="inline-flex items-center gap-1.5 text-sm bg-brand-600 text-white rounded-lg px-3 py-2 hover:bg-brand-700">
            <Plus size={14} /> Enviar campaña
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className="flex items-center gap-1 border-b border-gray-200 mb-6 text-sm">
        {(['overview', 'customers', 'activity'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 font-medium border-b-2 -mb-[1px] transition ${
              tab === t ? 'border-brand-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            {t === 'overview' ? 'Resumen' : t === 'customers' ? 'Clientes' : 'Actividad'}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <>
          {/* KPIs */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {KPIS.map((k) => {
              const Icon = k.icon;
              return (
                <div key={k.label} className="bg-white border border-gray-200 rounded-xl p-4 card-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 grid place-items-center">
                      <Icon size={18} />
                    </div>
                    <div className={`text-xs font-medium flex items-center gap-0.5 ${k.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {k.positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                      {k.delta}
                    </div>
                  </div>
                  <div className="text-2xl font-semibold tracking-tight">{k.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{k.label} · {k.hint}</div>
                </div>
              );
            })}
          </div>

          {/* Chart + Wallet split */}
          <div className="grid lg:grid-cols-3 gap-3 mb-6">
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-5 card-shadow">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold">Visitas y sellos</h3>
                <span className="text-xs text-gray-500">últimos 14 días</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">Total visitas: {VISITS.reduce((a, b) => a + b, 0)} · promedio diario: {Math.round(VISITS.reduce((a, b) => a + b, 0) / VISITS.length)}</p>
              <LineChart values={VISITS} />
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 card-shadow">
              <h3 className="font-semibold">Adopción Wallet</h3>
              <p className="text-xs text-gray-500 mb-4">% de clientes con tarjeta agregada</p>
              <Donut value={67} />
              <div className="mt-4 text-xs text-gray-700 space-y-1.5">
                <Row label="Apple Wallet (iOS)" value="38%" color="#111" />
                <Row label="Google Wallet (Android)" value="29%" color="#1E5BBF" />
                <Row label="Web/PWA fallback" value="33%" color="#9CA3AF" />
              </div>
            </div>
          </div>

          {/* Top customers preview */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 card-shadow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Top clientes</h3>
              <button onClick={() => setTab('customers')} className="text-xs text-brand-600 font-medium hover:underline">Ver todos →</button>
            </div>
            <CustomerTable customers={TOP_CUSTOMERS.slice(0, 4)} />
          </div>
        </>
      )}

      {tab === 'customers' && (
        <div className="bg-white border border-gray-200 rounded-xl p-5 card-shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                placeholder="Buscar por nombre o teléfono..."
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-brand-500"
              />
            </div>
            <button className="text-sm border border-gray-200 rounded-lg px-3 py-2 hover:border-gray-400">Exportar CSV</button>
          </div>
          <CustomerTable customers={TOP_CUSTOMERS} />
        </div>
      )}

      {tab === 'activity' && (
        <div className="bg-white border border-gray-200 rounded-xl p-5 card-shadow">
          <h3 className="font-semibold mb-4">Actividad en tiempo real</h3>
          <ul className="divide-y divide-gray-100">
            {ACTIVITY.map((a, i) => {
              const tone =
                a.type === 'redeem' ? 'text-green-700 bg-green-50' :
                a.type === 'milestone' ? 'text-amber-700 bg-amber-50' :
                a.type === 'signup' ? 'text-blue-700 bg-blue-50' :
                a.type === 'push' ? 'text-purple-700 bg-purple-50' :
                'text-gray-700 bg-gray-100';
              const Icon =
                a.type === 'redeem' ? Award :
                a.type === 'milestone' ? Award :
                a.type === 'signup' ? Plus :
                a.type === 'push' ? Bell :
                Coffee;
              return (
                <li key={i} className="flex items-center gap-3 py-3">
                  <div className={`w-8 h-8 rounded-md grid place-items-center ${tone}`}>
                    <Icon size={14} />
                  </div>
                  <div className="flex-1 text-sm">{a.text}</div>
                  <div className="text-xs text-gray-500">{a.ts}</div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

function Row({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full" style={{ background: color }} />
      <span className="flex-1 text-gray-600">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
}

function CustomerTable({ customers }: { customers: typeof TOP_CUSTOMERS }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-gray-500 border-b border-gray-100">
            <th className="py-2 font-medium">Cliente</th>
            <th className="py-2 font-medium">Sellos</th>
            <th className="py-2 font-medium">Visitas</th>
            <th className="py-2 font-medium">Última visita</th>
            <th className="py-2 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.name} className="border-b border-gray-50 hover:bg-gray-50/50">
              <td className="py-3">
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-gray-500">{c.phone}</div>
              </td>
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-500"
                      style={{ width: `${(c.stamps / c.total) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-700">{c.stamps}/{c.total}</span>
                </div>
              </td>
              <td className="py-3 text-gray-700">{c.visits}</td>
              <td className="py-3 text-gray-500 text-xs">{c.lastVisit}</td>
              <td className="py-3 text-right">
                {c.ready ? (
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full">Premio listo</span>
                ) : (
                  <button className="text-xs text-gray-500 hover:text-gray-900">Mensaje</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LineChart({ values }: { values: number[] }) {
  const w = 600;
  const h = 160;
  const max = Math.max(...values);
  const step = w / (values.length - 1);
  const points = values.map((v, i) => [i * step, h - (v / max) * (h - 20) - 10] as const);
  const path = points.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  const area = `${path} L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-40">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#E88D2A" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E88D2A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#g)" />
      <path d={path} fill="none" stroke="#C96F17" strokeWidth="2" />
      {points.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="#C96F17" />
      ))}
    </svg>
  );
}

function Donut({ value }: { value: number }) {
  const r = 50;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  return (
    <div className="grid place-items-center">
      <svg viewBox="0 0 130 130" className="w-32 h-32 -rotate-90">
        <circle cx="65" cy="65" r={r} fill="none" stroke="#F3F4F6" strokeWidth="14" />
        <circle
          cx="65" cy="65" r={r}
          fill="none" stroke="#E88D2A" strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c}`}
        />
      </svg>
      <div className="-mt-[6.5rem] text-center">
        <div className="text-2xl font-semibold">{value}%</div>
        <div className="text-[10px] text-gray-500 uppercase tracking-wide">en Wallet</div>
      </div>
    </div>
  );
}
