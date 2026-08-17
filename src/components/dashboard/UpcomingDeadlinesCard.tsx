import { Card } from '@/components/common/Card';
import { StatusBadge } from '@/components/common/StatusBadge';
import { DEADLINE_URGENCY_MAP } from '@/utils/statusMaps';
import type { Deadline } from '@/types/domain';

export function UpcomingDeadlinesCard({ deadlines }: { deadlines: Deadline[] }) {
  return (
    <Card>
      <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-text-muted">
        Upcoming Deadlines
      </h3>
      {deadlines.length === 0 ? (
        <p className="py-6 text-center text-xs text-text-muted">No upcoming deadlines. You're all caught up.</p>
      ) : (
        <ul>
          {deadlines.map((d) => (
            <li
              key={d.id}
              className="flex items-center gap-3.5 border-b border-border-subtle py-2.5 last:border-b-0 last:pb-0"
            >
              <div className="w-10 shrink-0 rounded-lg bg-gold-tint-adaptive px-1 py-1.5 text-center">
                <div className="font-display text-[17px] font-bold leading-none text-navy dark:text-gold">
                  {d.day}
                </div>
                <div className="text-[9px] uppercase text-text-muted">{d.month}</div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[13px] font-medium text-text-primary">{d.title}</div>
                <div className="truncate text-[11px] text-text-muted">{d.relatedProject}</div>
              </div>
              <StatusBadge label={d.remainingLabel} tone={DEADLINE_URGENCY_MAP[d.urgency].tone} />
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
