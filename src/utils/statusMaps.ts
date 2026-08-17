import type { DeadlineUrgency, OrderStatus, ProjectStatus } from '@/types/domain';

export const PROJECT_STATUS_MAP: Record<ProjectStatus, { label: string; tone: 'green' | 'blue' | 'orange' | 'gray' | 'gold' }> = {
  'in-progress': { label: 'In Progress', tone: 'blue' },
  'in-review': { label: 'In Review', tone: 'gold' },
  queued: { label: 'Queued', tone: 'orange' },
  done: { label: 'Done', tone: 'green' },
};

export const ORDER_STATUS_MAP: Record<OrderStatus, { label: string; tone: 'green' | 'blue' | 'orange' | 'gray' | 'gold' }> = {
  active: { label: 'Active', tone: 'blue' },
  done: { label: 'Done', tone: 'green' },
  pending: { label: 'Pending', tone: 'orange' },
};

export const DEADLINE_URGENCY_MAP: Record<DeadlineUrgency, { tone: 'green' | 'blue' | 'orange' | 'gray' | 'gold' }> = {
  urgent: { tone: 'orange' },
  soon: { tone: 'blue' },
  later: { tone: 'gray' },
};
