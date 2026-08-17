import { Bell, Menu, Plus, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { usePageTitle } from '@/hooks/usePageTitle';

interface TopbarProps {
  onMenuClick: () => void;
  /** Whether the notification bell should show an unread indicator dot. */
  hasUnreadNotifications?: boolean;
}

export function Topbar({ onMenuClick, hasUnreadNotifications = true }: TopbarProps) {
  const title = usePageTitle();
  const navigate = useNavigate();

  return (
    <header className="flex h-(--topbar-height) shrink-0 items-center gap-3 border-b border-border-subtle bg-surface px-4 sm:gap-4 sm:px-7">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open navigation"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-subtle text-text-primary lg:hidden"
      >
        <Menu size={17} />
      </button>

      <h1 className="min-w-0 flex-1 truncate font-display text-xl font-bold text-text-primary sm:text-[22px]">
        {title}
      </h1>

      <div className="hidden w-[220px] shrink-0 items-center gap-2 rounded-lg border border-border-subtle bg-canvas px-3.5 py-1.5 md:flex">
        <Search size={15} className="shrink-0 text-text-muted" aria-hidden="true" />
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search"
          className="w-full bg-transparent font-sans text-[13px] text-text-primary outline-none placeholder:text-text-muted"
        />
      </div>

      <button
        type="button"
        aria-label={
          hasUnreadNotifications ? 'Notifications (unread)' : 'Notifications'
        }
        onClick={() => navigate('/notifications')}
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-canvas text-text-primary transition-colors hover:border-gold"
      >
        <Bell size={16} />
        {hasUnreadNotifications && (
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-[1.5px] border-surface bg-danger" />
        )}
      </button>

      <Button
        size="md"
        onClick={() => navigate('/services')}
        className="hidden sm:inline-flex"
      >
        <Plus size={15} strokeWidth={2.5} />
        New Service
      </Button>
      <Button
        size="sm"
        onClick={() => navigate('/services')}
        aria-label="New service"
        className="sm:hidden"
      >
        <Plus size={16} strokeWidth={2.5} />
      </Button>
    </header>
  );
}
