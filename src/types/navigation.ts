import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  to: string;
  icon: LucideIcon;
  badge?: number;
}

export interface NavSection {
  id: string;
  label: string;
  items: NavItem[];
}