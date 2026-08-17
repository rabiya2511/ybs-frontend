import { useLocation } from 'react-router-dom';
import { NAV_SECTIONS } from '@/constants/navigation';

const ALL_ITEMS = NAV_SECTIONS.flatMap((section) => section.items);

/** Resolves the current route to its sidebar label, for display in the Topbar. */
export function usePageTitle(): string {
  const { pathname } = useLocation();
  const match = ALL_ITEMS.find(
    (item) => pathname === item.to || pathname.startsWith(`${item.to}/`),
  );
  return match?.label ?? 'DIOS';
}
