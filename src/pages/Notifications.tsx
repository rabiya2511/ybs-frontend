import { useMemo, useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { NotificationCard } from '@/components/notifications/NotificationCard';
import { NOTIFICATIONS } from '@/constants/mockData';
import type { Notification, NotificationCategory } from '@/types/domain';

type FilterValue = 'all' | 'update' | 'deadline' | 'payment';

const FILTERS: { id: FilterValue; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'update', label: 'Updates' },
  { id: 'deadline', label: 'Deadlines' },
  { id: 'payment', label: 'Payments' },
];

function matchesFilter(category: NotificationCategory, filter: FilterValue): boolean {
  if (filter === 'all') return true;
  return category === filter;
}

export default function Notifications() {
  const [items, setItems] = useState<Notification[]>(NOTIFICATIONS);
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const filteredItems = useMemo(
    () => items.filter((n) => matchesFilter(n.category, activeFilter)),
    [items, activeFilter],
  );

  const unreadCount = items.filter((n) => !n.read).length;

  function markRead(id: string) {
    setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }

  function markAllRead() {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  return (
    <div>
      <PageHeader
        title="Notifications"
        subtitle="Stay on top of updates, deadlines, and payments."
        action={
          unreadCount > 0 ? (
            <Button variant="secondary" size="sm" onClick={markAllRead}>
              Mark all read
            </Button>
          ) : undefined
        }
      />

      <div className="mb-4 flex flex-wrap gap-2" role="tablist" aria-label="Filter notifications">
        {FILTERS.map((filter) => (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={[
              'rounded-full border px-4 py-1.5 text-xs font-medium transition-colors duration-150',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
              activeFilter === filter.id
                ? 'border-navy bg-navy text-white'
                : 'border-border-subtle bg-surface text-text-muted hover:border-gold hover:text-text-primary',
            ].join(' ')}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <Card>
        {filteredItems.length === 0 ? (
          <p className="py-12 text-center text-xs text-text-muted">
            No notifications in this category.
          </p>
        ) : (
          <div className="flex flex-col gap-2.5">
            {filteredItems.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                onMarkRead={markRead}
              />
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}