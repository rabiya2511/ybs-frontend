import {
  LayoutDashboard,
  Zap,
  Package,
  CreditCard,
  FolderKanban,
  Bell,
  Gift,
  UserCircle,
  Bot,
} from 'lucide-react';
import type { NavSection } from '@/types/navigation';

/**
 * Central source of truth for the sidebar. Adding a page to the app means
 * adding one entry here plus a matching route in routes/index.tsx -- nothing
 * inside the Sidebar component itself should ever need to change.
 */
export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'main',
    label: 'Main',
    items: [
      { id: 'dashboard', label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
      { id: 'services', label: 'Services', to: '/services', icon: Zap },
      { id: 'packages', label: 'Packages', to: '/packages', icon: Package },
      { id: 'checkout', label: 'Checkout', to: '/checkout', icon: CreditCard },
    ],
  },
  {
    id: 'projects',
    label: 'Projects',
    items: [
      { id: 'tracking', label: 'Project Tracker', to: '/projects', icon: FolderKanban },
      { id: 'notifications', label: 'Notifications', to: '/notifications', icon: Bell },
    ],
  },
  {
    id: 'account',
    label: 'Account',
    items: [
      { id: 'referral', label: 'Refer & Earn', to: '/referrals', icon: Gift },
      { id: 'profile', label: 'Profile', to: '/profile', icon: UserCircle },
      { id: 'assistant', label: 'AI Assistant', to: '/assistant', icon: Bot },
    ],
  },
];
