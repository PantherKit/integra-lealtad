'use client';

import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Plus, Trash2, Sparkles, Coffee, Scissors, BookOpen, ShoppingBag, Utensils, Dumbbell } from 'lucide-react';
import { WalletCard, CardConfig, IconKey } from '@/components/WalletCard';
import { cn } from '@/lib/utils';

type Preset = {
  id: string;
  label: string;
  icon: IconKey;
  config: Partial<CardConfig>;
  perks: string[];
};

const PRESETS: Preset[] = [
  {
    id: 'cafe',
    label: 'Café',
    icon: 'coffee',
    config: { businessName: 'Café Mérida', tagline: 'Tostado de altura', color: '#5B3A1F', reward: 'Café gratis', stampsRequired: 7, iconKey: 'coffee' },
    perks: ['Sello doble los lunes', 'Cumpleaños = café gratis'],
  },
  {
    id: 'estetica',
    label: 'Estética',
    icon: 'scissors',
    config: { businessName: 'Salón Aurora', tagline: 'Belleza local', color: '#C2185B', reward: '10% en tu próximo corte', stampsRequired: 5, iconKey: 'scissors' },
    perks: ['Manicure gratis al canjear', 'Referidos = 1 sello extra'],
  },
  {
    id: 'papeleria',
    label: 'Papelería',
    icon: 'book',
    config: { businessName: 'Papelería Vázquez', tagline: 'Útiles y más', color: '#1E5BBF', reward: 'Cuaderno gratis', stampsRequired: 10, iconKey: 'book' },
    perks: ['Vuelta a clases: sello triple', 'Compras > $200 = doble sello'],
  },
  {
    id: 'restaurante',
    label: 'Restaurante',
    icon: 'utensils',
    config: { businessName: 'La Cocina de Tía', tagline: 'Sabor de casa', color: '#B22222', reward: 'Postre cortesía', stampsRequired: 6, iconKey: 'utensils' },
    perks: ['Menú del día = sello automático', 'Grupos > 4 personas = 2 sellos'],
  },
  {
    id: 'gym',
    label: 'Gimnasio',
    icon: 'dumbbell',
    config: { businessName: 'FitLocal', tagline: 'Tu mejor versión', color: '#0F766E', reward: '1 mes gratis', stampsRequired: 8, iconKey: 'dumbbell' },
    perks: ['Visita en sábado = sello doble', 'Trae a un amigo = 2 sellos'],
  },
  {
    id: 'boutique',
    label: 'Boutique',
    icon: 'bag',
    config: { businessName: 'Boutique Selva', tagline: 'Diseño local', color: '#7C3AED', reward: '15% en tu próxima compra', stampsRequired: 5, iconKey: 'bag' },
    perks: ['Compra > $500 = sello inmediato', 'Eventos VIP a partir del 3er sello'],
  },
];

const COLORS = ['#5B3A1F', '#C2185B', '#1E5BBF', '#B22222', '#0F766E', '#7C3AED', '#111827', '#E88D2A'];
const ICON_OPTIONS: { key: IconKey; Icon: typeof Coffee; label: string }[] = [
  { key: 'coffee', Icon: Coffee, label: 'Café' },
  { key: 'scissors', Icon: Scissors, label: 'Estética' },
  { key: 'book', Icon: BookOpen, label: 'Papelería' },
  { key: 'utensils', Icon: Utensils, label: 'Restaurante' },
  { key: 'dumbbell', Icon: Dumbbell, label: 'Gimnasio' },
  { key: 'bag', Icon: ShoppingBag, label: 'Tienda' },
];

function SortablePerk({ id, text, onChange, onRemove }: { id: string; text: string; onChange: (v: string) => void; onRemove: () => void }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };
  return (
    <div ref={setNodeRef} style={style} className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-2">
      <button {...attributes} {...listeners} className="touch-none cursor-grab text-gray-400 hover:text-gray-700 p-1">
        <GripVertical size={16} />
      </button>
      <input
        value={text}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
        placeholder="ej. Sello doble los lunes"
      />
      <button onClick={onRemove} className="text-gray-400 hover:text-red-600 p-1">
        <Trash2 size={14} />
      </button>
    </div>
  );
}

export default function EditorPage() {
  const [config, setConfig] = useState<CardConfig>({
    businessName: 'Café Mérida',
    tagline: 'Tostado de altura',
    color: '#5B3A1F',
    iconKey: 'coffee',
    reward: 'Café gratis',
    stampsRequired: 7,
    customerName: 'María González',
    currentStamps: 3,
  });

  const [perks, setPerks] = useState<{ id: string; text: string }[]>([
    { id: 'p1', text: 'Sello doble los lunes' },
    { id: 'p2', text: 'Cumpleaños = café gratis' },
    { id: 'p3', text: 'Trae a un amigo = 1 sello extra' },
  ]);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));

  const applyPreset = (p: Preset) => {
    setConfig((c) => ({ ...c, ...p.config }) as CardConfig);
    setPerks(p.perks.map((text, i) => ({ id: `p${Date.now()}-${i}`, text })));
  };

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    setPerks((items) => {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Editor de tarjeta</h1>
        <p className="text-gray-600 mt-1 text-sm">
          Configura tu programa de lealtad. Lo que ves aquí es lo que verá tu cliente en su Apple Wallet o Google Wallet.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_22rem] gap-8">
        {/* CONFIG PANEL */}
        <div className="space-y-6">
          {/* Presets */}
          <section>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500">Plantillas por industria</h2>
              <span className="text-xs text-gray-400">click para aplicar</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => applyPreset(p)}
                  className="bg-white border border-gray-200 rounded-lg p-3 hover:border-brand-500 hover:shadow-sm transition flex flex-col items-center gap-1.5"
                >
                  <div className="w-8 h-8 rounded-md bg-gray-100 grid place-items-center">
                    {(() => {
                      const I = ICON_OPTIONS.find((i) => i.key === p.icon)?.Icon ?? Coffee;
                      return <I size={16} />;
                    })()}
                  </div>
                  <div className="text-xs font-medium">{p.label}</div>
                </button>
              ))}
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-xl p-5 card-shadow">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-4">Branding</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Nombre del comercio</label>
                <input
                  value={config.businessName}
                  onChange={(e) => setConfig({ ...config, businessName: e.target.value })}
                  className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:border-brand-500 outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Tagline</label>
                <input
                  value={config.tagline}
                  onChange={(e) => setConfig({ ...config, tagline: e.target.value })}
                  className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:border-brand-500 outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">Color principal</label>
              <div className="mt-2 flex items-center gap-2 flex-wrap">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setConfig({ ...config, color: c })}
                    className={cn(
                      'w-8 h-8 rounded-full border-2 transition',
                      config.color === c ? 'border-gray-900 scale-110' : 'border-white shadow-sm hover:scale-105'
                    )}
                    style={{ background: c }}
                    aria-label={`color ${c}`}
                  />
                ))}
                <input
                  type="color"
                  value={config.color}
                  onChange={(e) => setConfig({ ...config, color: e.target.value })}
                  className="w-8 h-8 rounded-full cursor-pointer border border-gray-200"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">Ícono</label>
              <div className="mt-2 grid grid-cols-6 gap-2">
                {ICON_OPTIONS.map(({ key, Icon, label }) => (
                  <button
                    key={key}
                    onClick={() => setConfig({ ...config, iconKey: key })}
                    className={cn(
                      'aspect-square rounded-lg border flex flex-col items-center justify-center gap-1 text-[10px] transition',
                      config.iconKey === key
                        ? 'border-brand-500 bg-brand-50 text-brand-700'
                        : 'border-gray-200 hover:border-gray-400 text-gray-600'
                    )}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-xl p-5 card-shadow">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-4">Reglas del programa</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Premio</label>
                <input
                  value={config.reward}
                  onChange={(e) => setConfig({ ...config, reward: e.target.value })}
                  className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:border-brand-500 outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Sellos requeridos: <span className="text-brand-600 font-semibold">{config.stampsRequired}</span></label>
                <input
                  type="range"
                  min={3}
                  max={12}
                  value={config.stampsRequired}
                  onChange={(e) => setConfig({ ...config, stampsRequired: Number(e.target.value) })}
                  className="mt-3 w-full accent-brand-600"
                />
              </div>
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-xl p-5 card-shadow">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500">Beneficios extra</h2>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <GripVertical size={12} /> arrastra para reordenar
              </span>
            </div>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={perks.map((p) => p.id)} strategy={verticalListSortingStrategy}>
                <div className="space-y-2">
                  {perks.map((p) => (
                    <SortablePerk
                      key={p.id}
                      id={p.id}
                      text={p.text}
                      onChange={(v) => setPerks(perks.map((x) => (x.id === p.id ? { ...x, text: v } : x)))}
                      onRemove={() => setPerks(perks.filter((x) => x.id !== p.id))}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
            <button
              onClick={() => setPerks([...perks, { id: `p${Date.now()}`, text: '' }])}
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-brand-600 hover:text-brand-700 font-medium"
            >
              <Plus size={14} /> Agregar beneficio
            </button>
          </section>

          <section className="bg-white border border-gray-200 rounded-xl p-5 card-shadow">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-3">Vista previa</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Cliente de prueba</label>
                <input
                  value={config.customerName}
                  onChange={(e) => setConfig({ ...config, customerName: e.target.value })}
                  className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:border-brand-500 outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Sellos actuales: <span className="text-brand-600 font-semibold">{config.currentStamps}/{config.stampsRequired}</span></label>
                <input
                  type="range"
                  min={0}
                  max={config.stampsRequired}
                  value={config.currentStamps}
                  onChange={(e) => setConfig({ ...config, currentStamps: Number(e.target.value) })}
                  className="mt-3 w-full accent-brand-600"
                />
              </div>
            </div>
          </section>
        </div>

        {/* PREVIEW */}
        <aside className="lg:sticky lg:top-20 self-start space-y-4">
          <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-6 grid place-items-center">
            <WalletCard config={config} size="md" />
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-sm">
            <div className="flex items-center gap-2 text-brand-600 font-medium mb-2">
              <Sparkles size={16} /> Cómo se ve para tu cliente
            </div>
            <p className="text-gray-600 leading-relaxed">
              Esta tarjeta vivirá en el Apple Wallet o Google Wallet del cliente. Cuando suma sellos en
              tu mostrador, la tarjeta se actualiza sola en su teléfono — sin que abra ninguna app.
            </p>
          </div>
          <a
            href="/customer/"
            className="block text-center bg-gray-900 text-white rounded-xl py-3 font-medium hover:bg-gray-800 transition"
          >
            Ver el journey del cliente →
          </a>
        </aside>
      </div>
    </div>
  );
}
