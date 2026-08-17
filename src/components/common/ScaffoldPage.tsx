import type { LucideIcon } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Card } from '@/components/common/Card';

interface ScaffoldPageProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  /** Which build phase (see project brief) fills in this page's real content. */
  phase: string;
}

/**
 * Placeholder body used by every page in Phase 1 so routing and layout can
 * be verified end-to-end. Each page below will replace <ScaffoldPage> with
 * its real content in its corresponding phase.
 */
export function ScaffoldPage({ title, subtitle, icon: Icon, phase }: ScaffoldPageProps) {
  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} />
      <Card className="flex flex-col items-center justify-center gap-3 py-16 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-tint-adaptive text-navy dark:text-gold">
          <Icon size={22} />
        </span>
        <p className="text-sm font-medium text-text-primary">{title} is coming in {phase}</p>
        <p className="max-w-sm text-xs text-text-muted">
          Layout, navigation, and routing are wired up now. This page's real content lands in a
          later build phase.
        </p>
      </Card>
    </div>
  );
}
