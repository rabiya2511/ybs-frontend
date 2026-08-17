type StatusTone = 'green' | 'blue' | 'orange' | 'gray' | 'gold';

interface StatusBadgeProps {
  label: string;
  tone: StatusTone;
}

const TONE_CLASSES: Record<StatusTone, string> = {
  green: 'bg-success-bg text-[#1B5E35] dark:bg-emerald-950/40 dark:text-emerald-300',
  blue: 'bg-info-bg text-[#0D47A1] dark:bg-blue-950/40 dark:text-blue-300',
  orange: 'bg-warning-bg text-[#BF360C] dark:bg-orange-950/40 dark:text-orange-300',
  gray: 'bg-canvas text-text-muted',
  gold: 'bg-gold-tint-adaptive text-[#7A5800] dark:text-gold',
};

/** Small rounded status pill, e.g. "In Progress", "Active", "Done". */
export function StatusBadge({ label, tone }: StatusBadgeProps) {
  return (
    <span
      className={[
        'inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold',
        TONE_CLASSES[tone],
      ].join(' ')}
    >
      {label}
    </span>
  );
}
