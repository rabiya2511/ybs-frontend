import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface SettingsRowProps {
  icon: string;
  label: string;
  onClick?: () => void;
  /** Overrides the default chevron, e.g. for the dark-mode toggle switch. */
  trailing?: ReactNode;
}

export function SettingsRow({ icon, label, onClick, trailing }: SettingsRowProps) {
  return (
    <div
      onClick={onClick}
      className={[
        'flex items-center gap-3 border-b border-border-subtle px-4 py-3.5 last:border-b-0',
        onClick ? 'cursor-pointer hover:bg-canvas' : '',
      ].join(' ')}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-canvas text-[15px]">
        {icon}
      </div>
      <span className="flex-1 text-[13px] font-medium text-text-primary">{label}</span>
      {trailing ?? <ChevronRight size={16} className="text-text-muted" />}
    </div>
  );
}