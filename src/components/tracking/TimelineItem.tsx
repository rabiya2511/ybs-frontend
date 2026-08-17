import { Check } from 'lucide-react';
import type { Milestone } from '@/types/domain';

const STATUS_STYLES: Record<Milestone['status'], { dot: string; line: string; text: string }> = {
  done: {
    dot: 'bg-success border-success text-white',
    line: 'bg-success',
    text: 'text-text-primary',
  },
  active: {
    dot: 'bg-gold border-gold text-navy',
    line: 'bg-border-subtle',
    text: 'text-text-primary',
  },
  pending: {
    dot: 'bg-surface border-border-subtle text-text-muted',
    line: 'bg-border-subtle',
    text: 'text-text-muted',
  },
};

interface TimelineItemProps {
  milestone: Milestone;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ milestone, index, isLast }: TimelineItemProps) {
  const styles = STATUS_STYLES[milestone.status];

  return (
    <li className="relative flex gap-3.5 pb-7 last:pb-0">
      {!isLast && (
        <span
          aria-hidden="true"
          className={['absolute left-[13px] top-[26px] w-[2px]', 'bottom-0', styles.line].join(' ')}
        />
      )}

      <span
        className={[
          'relative z-10 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-bold',
          styles.dot,
        ].join(' ')}
      >
        {milestone.status === 'done' ? <Check size={13} strokeWidth={3} /> : index + 1}
      </span>

      <div className="min-w-0 flex-1 pt-0.5">
        <div className={['text-[13px] font-semibold', styles.text].join(' ')}>{milestone.title}</div>
        <div className="mt-0.5 text-[11px] text-text-muted">{milestone.date}</div>
      </div>
    </li>
  );
}