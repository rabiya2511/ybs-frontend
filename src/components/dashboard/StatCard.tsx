import { ArrowUp, ArrowDown } from 'lucide-react';
import { Card } from '@/components/common/Card';
import type { StatCardData } from '@/types/domain';

const TONE_CLASSES: Record<StatCardData['tone'], string> = {
  gold: 'bg-gold-tint-adaptive text-navy dark:text-gold',
  info: 'bg-info-bg text-info dark:bg-blue-950/40 dark:text-blue-300',
  success: 'bg-success-bg text-success dark:bg-emerald-950/40 dark:text-emerald-300',
  warning: 'bg-warning-bg text-warning dark:bg-orange-950/40 dark:text-orange-300',
};

const TREND_CLASSES: Record<StatCardData['trendDirection'], string> = {
  up: 'text-success',
  down: 'text-warning',
  neutral: 'text-text-muted',
};

export function StatCard({ stat }: { stat: StatCardData }) {
  const Icon = stat.icon;
  return (
    <Card>
      <div className="flex items-start justify-between">
        <span className="text-[11px] font-medium uppercase tracking-wider text-text-muted">
          {stat.label}
        </span>
        <span
          className={['flex h-9 w-9 items-center justify-center rounded-[10px]', TONE_CLASSES[stat.tone]].join(
            ' ',
          )}
        >
          <Icon size={16} strokeWidth={2} />
        </span>
      </div>
      <div className="mt-2 font-display text-[30px] font-bold leading-none text-text-primary">
        {stat.value}
      </div>
      <div className={['mt-1.5 flex items-center gap-1 text-[11px]', TREND_CLASSES[stat.trendDirection]].join(' ')}>
        {stat.trendDirection === 'up' && <ArrowUp size={11} />}
        {stat.trendDirection === 'down' && <ArrowDown size={11} />}
        <span>{stat.trendLabel}</span>
      </div>
    </Card>
  );
}
