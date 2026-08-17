import { NavLink } from 'react-router-dom';
import { Badge } from '@/components/common/Badge';
import type { NavItem } from '@/types/navigation';

export function SidebarNavItem({ item }: { item: NavItem }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        [
          'group mb-0.5 flex items-center gap-2.5 rounded-[10px] px-2.5 py-2.5',
          'text-[13px] font-normal transition-colors duration-150',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
          isActive
            ? 'border border-gold/25 bg-gold/15 text-gold'
            : 'border border-transparent text-white/65 hover:bg-white/[0.07]',
        ].join(' ')
      }
    >
      <Icon size={17} strokeWidth={2} className="w-5 shrink-0" aria-hidden="true" />
      <span className="truncate">{item.label}</span>
      {typeof item.badge === 'number' && <Badge count={item.badge} />}
    </NavLink>
  );
}
