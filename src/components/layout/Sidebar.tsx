import { Moon, Sun, X } from 'lucide-react';
import { NAV_SECTIONS } from '@/constants/navigation';
import { PLACEHOLDER_USER } from '@/constants/placeholderUser';
import { SidebarNavItem } from '@/components/navigation/SidebarNavItem';
import { useTheme } from '@/hooks/useTheme';

interface SidebarProps {
  /** Controls the mobile drawer visibility; ignored on desktop where the sidebar is always visible. */
  isOpen: boolean;
  onClose: () => void;
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex h-full flex-col bg-navy">
      <div className="border-b border-white/[0.07] px-5 py-6">
        <div className="font-display text-xl font-bold leading-none text-white">DIOS</div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.08em] text-white/35">
          Digital Intelligence Operating System
        </div>
      </div>

      <nav className="scroll-thin flex-1 overflow-y-auto px-3 py-4" onClick={onNavigate}>
        {NAV_SECTIONS.map((section) => (
          <div key={section.id} className="mb-1 first:mt-0">
            <div className="mb-2 mt-4 px-2 text-[10px] uppercase tracking-[0.1em] text-white/30 first:mt-0">
              {section.label}
            </div>
            {section.items.map((item) => (
              <SidebarNavItem key={item.id} item={item} />
            ))}
          </div>
        ))}
      </nav>

      <div className="border-t border-white/[0.07] p-3">
        <button
          type="button"
          className="flex w-full items-center gap-2.5 rounded-[10px] p-2.5 text-left transition-colors duration-150 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
            {PLACEHOLDER_USER.initials}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-xs font-medium text-white/80">
              {PLACEHOLDER_USER.name}
            </span>
            <span className="block truncate text-[10px] text-white/35">
              {PLACEHOLDER_USER.membership}
            </span>
          </span>
          <span
            role="button"
            tabIndex={-1}
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme();
            }}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-white/60 opacity-70 transition-opacity hover:opacity-100"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </span>
        </button>
      </div>
    </div>
  );
}

/**
 * Desktop: a fixed-width column that is always visible.
 * Mobile/tablet: an off-canvas drawer toggled from the Topbar, with a
 * dimming overlay behind it.
 */
export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-(--sidebar-width) shrink-0 lg:block">
        <div className="fixed inset-y-0 left-0 w-(--sidebar-width)">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile drawer */}
      <div
        className={[
          'fixed inset-0 z-40 lg:hidden',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
        aria-hidden={!isOpen}
      >
        <div
          onClick={onClose}
          className={[
            'absolute inset-0 bg-navy/60 transition-opacity duration-200',
            isOpen ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />
        <div
          className={[
            'absolute inset-y-0 left-0 w-[260px] max-w-[80vw] shadow-2xl transition-transform duration-200',
            isOpen ? 'translate-x-0' : '-translate-x-full',
          ].join(' ')}
        >
          <div className="flex justify-end p-2">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-white/60 hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
          <SidebarContent onNavigate={onClose} />
        </div>
      </div>
    </>
  );
}
