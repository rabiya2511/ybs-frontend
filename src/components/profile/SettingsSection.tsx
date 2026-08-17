import type { ReactNode } from 'react';
import { Card } from '@/components/common/Card';

interface SettingsSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function SettingsSection({ title, description, children }: SettingsSectionProps) {
  return (
    <Card noPadding>
      <div className="px-4.5 pb-1 pt-4.5">
        <h3 className="text-[14px] font-semibold text-text-primary">{title}</h3>
        {description && <p className="mt-0.5 text-[11px] text-text-muted">{description}</p>}
      </div>
      <div className="flex flex-col">{children}</div>
    </Card>
  );
}