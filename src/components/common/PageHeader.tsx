import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="text-[26px] font-bold leading-tight text-text-primary">{title}</h2>
        {subtitle && <p className="mt-1 text-[13px] text-text-muted">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
