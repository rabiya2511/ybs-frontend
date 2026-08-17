import type { LucideIcon } from 'lucide-react';

export type TrendDirection = 'up' | 'down' | 'neutral';

export interface StatCardData {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  /** Tailwind color token driving the icon chip background, e.g. 'gold' | 'info' | 'success' | 'warning' */
  tone: 'gold' | 'info' | 'success' | 'warning';
  trendDirection: TrendDirection;
  trendLabel: string;
}

export type ProjectStatus = 'in-progress' | 'in-review' | 'queued' | 'done';

export interface Project {
  id: string;
  code: string;
  name: string;
  type: string;
  icon: LucideIcon;
  iconBgClass: string;
  progress: number;
  status: ProjectStatus;
  dueDate: string;
}

export type OrderStatus = 'active' | 'done' | 'pending';

export interface Order {
  id: string;
  service: string;
  package: string;
  amount: string;
  date: string;
  status: OrderStatus;
}

export type DeadlineUrgency = 'urgent' | 'soon' | 'later';

export interface Deadline {
  id: string;
  day: string;
  month: string;
  title: string;
  relatedProject: string;
  remainingLabel: string;
  urgency: DeadlineUrgency;
}

export type ServiceCategory = 'legal' | 'design' | 'tech' | 'finance' | 'food';

export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  startingPrice: string;
  icon: LucideIcon;
}

export interface PackageFeature {
  label: string;
  included: boolean;
}

export interface ServicePackage {
  id: string;
  name: string;
  tierLabel: string;
  price: string;
  period: string;
  features: PackageFeature[];
  popular?: boolean;
}

export type MilestoneStatus = 'done' | 'active' | 'pending';

export interface Milestone {
  id: string;
  title: string;
  date: string;
  status: MilestoneStatus;
}

export interface Provider {
  id: string;
  name: string;
  role: string;
  avatarInitials: string;
  rating: number;
  projectCount: number;
}

export interface TrackedProject {
  id: string;
  orderId: string;
  name: string;
  packageName: string;
  provider: Provider;
  progress: number;
  estimatedCompletion: string;
  milestones: Milestone[];
}

export type NotificationCategory = 'update' | 'deadline' | 'payment' | 'referral' | 'provider' | 'design';

export interface Notification {
  id: string;
  category: NotificationCategory;
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
}