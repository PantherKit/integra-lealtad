'use client';

import { getContrastColor } from '@/lib/utils';
import { Coffee, Scissors, BookOpen, ShoppingBag, Utensils, Dumbbell, Sparkles } from 'lucide-react';

const ICONS = {
  coffee: Coffee,
  scissors: Scissors,
  book: BookOpen,
  bag: ShoppingBag,
  utensils: Utensils,
  dumbbell: Dumbbell,
  sparkles: Sparkles,
} as const;

export type IconKey = keyof typeof ICONS;

export type CardConfig = {
  businessName: string;
  tagline: string;
  color: string;
  iconKey: IconKey;
  reward: string;
  stampsRequired: number;
  customerName: string;
  currentStamps: number;
};

export function WalletCard({
  config,
  size = 'md',
}: {
  config: CardConfig;
  size?: 'sm' | 'md' | 'lg';
}) {
  const Icon = ICONS[config.iconKey] ?? Coffee;
  const fg = getContrastColor(config.color);
  const dimMap = {
    sm: 'w-64',
    md: 'w-80',
    lg: 'w-[22rem]',
  };
  const stamps = Array.from({ length: config.stampsRequired }, (_, i) => i < config.currentStamps);

  return (
    <div
      className={`${dimMap[size]} aspect-[1.586/1] rounded-2xl wallet-shadow p-5 flex flex-col justify-between relative overflow-hidden`}
      style={{ background: config.color, color: fg }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-md grid place-items-center"
            style={{ background: fg === '#fff' ? 'rgba(255,255,255,.15)' : 'rgba(0,0,0,.08)' }}
          >
            <Icon size={18} />
          </div>
          <div className="leading-tight">
            <div className="text-[11px] uppercase tracking-wider opacity-70">{config.tagline}</div>
            <div className="font-semibold text-base">{config.businessName}</div>
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-widest opacity-70">Lealtad</div>
      </div>

      <div>
        <div className="text-[10px] uppercase tracking-wider opacity-70 mb-1.5">
          {config.customerName}
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {stamps.map((filled, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border-2 grid place-items-center"
              style={{
                borderColor: fg === '#fff' ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.3)',
                background: filled ? fg : 'transparent',
              }}
            >
              {filled && (
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: config.color }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-baseline justify-between">
          <div className="text-[11px] opacity-80">
            {config.currentStamps}/{config.stampsRequired} sellos
          </div>
          <div className="text-[11px] opacity-80 truncate ml-2">Premio: {config.reward}</div>
        </div>
      </div>

      <div
        className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full opacity-10"
        style={{ background: fg }}
      />
    </div>
  );
}
