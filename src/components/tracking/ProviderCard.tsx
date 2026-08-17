import { Star, MessageCircle } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import type { Provider } from '@/types/domain';

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Card>
      <h3 className="mb-3.5 text-[13px] font-semibold uppercase tracking-wider text-text-muted">
        Assigned Provider
      </h3>

      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">
          {provider.avatarInitials}
        </span>
        <div className="min-w-0">
          <div className="truncate text-[14px] font-semibold text-text-primary">{provider.name}</div>
          <div className="truncate text-[11px] text-text-muted">{provider.role}</div>
        </div>
      </div>

      <div className="mt-3.5 flex items-center gap-4 border-t border-border-subtle pt-3.5 text-[12px]">
        <div className="flex items-center gap-1">
          <Star size={13} className="fill-gold text-gold" aria-hidden="true" />
          <span className="font-semibold text-text-primary">{provider.rating.toFixed(1)}</span>
        </div>
        <div className="text-text-muted">
          <span className="font-semibold text-text-primary">{provider.projectCount}</span> projects
        </div>
      </div>

      <Button variant="secondary" className="mt-4 w-full justify-center">
        <MessageCircle size={15} />
        Message
      </Button>
    </Card>
  );
}