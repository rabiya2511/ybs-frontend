import {
  Bell,
  Clock,
  CreditCard,
  Gift,
  UserCheck,
  Paintbrush,
  type LucideIcon,
} from 'lucide-react';
import type { Notification, NotificationCategory } from '@/types/domain';

const CATEGORY_META: Record<NotificationCategory, { icon: LucideIcon; tone: string }> = {
  update: { icon: Bell, tone: 'bg-info-bg text-info dark:bg-blue-950/40 dark:text-blue-300' },
  deadline: { icon: Clock, tone: 'bg-warning-bg text-warning dark:bg-orange-950/40 dark:text-orange-300' },
  payment: { icon: CreditCard, tone: 'bg-success-bg text-success dark:bg-emerald-950/40 dark:text-emerald-300' },
  referral: { icon: Gift, tone: 'bg-gold-tint-adaptive text-navy dark:text-gold' },
  provider: { icon: UserCheck, tone: 'bg-info-bg text-info dark:bg-blue-950/40 dark:text-blue-300' },
  design: { icon: Paintbrush, tone: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-300' },
};

interface NotificationCardProps {
  notification: Notification;
  onMarkRead: (id: string) => void;
}

export function NotificationCard({ notification, onMarkRead }: NotificationCardProps) {
  const meta = CATEGORY_META[notification.category];
  const Icon = meta.icon;

  return (
    <button
      type="button"
      onClick={() => !notification.read && onMarkRead(notification.id)}
      className={[
        'flex w-full items-start gap-3 rounded-[10px] border p-3.5 text-left transition-colors',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
        notification.read
          ? 'border-border-subtle bg-surface'
          : 'border-gold/25 bg-gold-tint-adaptive/40 hover:bg-gold-tint-adaptive/60',
      ].join(' ')}
    >
      <span className={['flex h-9 w-9 shrink-0 items-center justify-center rounded-full', meta.tone].join(' ')}>
        <Icon size={16} />
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <span className={['text-[13px]', notification.read ? 'font-medium text-text-primary' : 'font-semibold text-text-primary'].join(' ')}>
            {notification.title}
          </span>
          {!notification.read && (
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" aria-label="Unread" />
          )}
        </div>
        <p className="mt-0.5 text-[12px] text-text-muted">{notification.description}</p>
        <span className="mt-1.5 block text-[11px] text-text-muted">{notification.timestamp}</span>
      </div>
    </button>
  );
}