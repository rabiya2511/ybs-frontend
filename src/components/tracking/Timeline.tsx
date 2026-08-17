import { TimelineItem } from '@/components/tracking/TimelineItem';
import type { Milestone } from '@/types/domain';

export function Timeline({ milestones }: { milestones: Milestone[] }) {
  if (milestones.length === 0) {
    return <p className="py-6 text-center text-xs text-text-muted">No milestones yet.</p>;
  }

  return (
    <ol>
      {milestones.map((milestone, index) => (
        <TimelineItem
          key={milestone.id}
          milestone={milestone}
          index={index}
          isLast={index === milestones.length - 1}
        />
      ))}
    </ol>
  );
}