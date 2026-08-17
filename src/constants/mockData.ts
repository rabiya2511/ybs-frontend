import {
  Building2,
  DollarSign,
  CheckCircle2,
  Gift,
  Palette,
  Users,
} from 'lucide-react';
import type {
  Deadline,
  Notification,
  Order,
  Project,
  Provider,
  StatCardData,
  TrackedProject,
} from '@/types/domain';

export const DASHBOARD_STATS: StatCardData[] = [
  {
    id: 'active-projects',
    label: 'Active Projects',
    value: '3',
    icon: Building2,
    tone: 'gold',
    trendDirection: 'up',
    trendLabel: '1 new this week',
  },
  {
    id: 'total-invested',
    label: 'Total Invested',
    value: '₹84K',
    icon: DollarSign,
    tone: 'info',
    trendDirection: 'neutral',
    trendLabel: 'Across 5 services',
  },
  {
    id: 'completion-rate',
    label: 'Completion Rate',
    value: '68%',
    icon: CheckCircle2,
    tone: 'success',
    trendDirection: 'up',
    trendLabel: '12% from last month',
  },
  {
    id: 'referral-rewards',
    label: 'Referral Rewards',
    value: '₹1,500',
    icon: Gift,
    tone: 'warning',
    trendDirection: 'up',
    trendLabel: '3 successful refs',
  },
];

export const ACTIVE_PROJECTS: Project[] = [
  {
    id: 'sas-0042',
    code: '#SAS-0042',
    name: 'TechVenture Pvt Ltd',
    type: 'Registration',
    icon: Building2,
    iconBgClass: 'bg-gold-tint-adaptive text-navy dark:text-gold',
    progress: 72,
    status: 'in-progress',
    dueDate: 'Mar 22',
  },
  {
    id: 'sas-0039',
    code: '#SAS-0039',
    name: 'Brand Identity',
    type: 'Branding',
    icon: Palette,
    iconBgClass: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-300',
    progress: 90,
    status: 'in-review',
    dueDate: 'Mar 18',
  },
  {
    id: 'sas-0044',
    code: '#SAS-0044',
    name: 'HR & Payroll Setup',
    type: 'HR',
    icon: Users,
    iconBgClass: 'bg-success-bg text-success dark:bg-emerald-950/40 dark:text-emerald-300',
    progress: 10,
    status: 'queued',
    dueDate: 'Apr 5',
  },
];

export const RECENT_ORDERS: Order[] = [
  {
    id: 'ord-1',
    service: 'Company Registration',
    package: 'Growth',
    amount: '₹11,799',
    date: 'Mar 12',
    status: 'active',
  },
  {
    id: 'ord-2',
    service: 'Brand Identity',
    package: 'Standard',
    amount: '₹8,999',
    date: 'Mar 10',
    status: 'done',
  },
  {
    id: 'ord-3',
    service: 'Accounting',
    package: 'Monthly',
    amount: '₹2,999',
    date: 'Feb 1',
    status: 'active',
  },
  {
  id: 'ord-4',
  service: 'Digital Marketing',
  package: 'Starter',
  amount: '₹14,999/mo',
  date: 'Jan 20',
  status: 'done',
 },
];



export const UPCOMING_DEADLINES: Deadline[] = [
  {
    id: 'dl-1',
    day: '18',
    month: 'Mar',
    title: 'GST Return (Feb)',
    relatedProject: 'TechVenture Pvt Ltd',
    remainingLabel: '3 days',
    urgency: 'urgent',
  },
  {
    id: 'dl-2',
    day: '25',
    month: 'Mar',
    title: 'ROC Annual Filing',
    relatedProject: 'TechVenture Pvt Ltd',
    remainingLabel: '10 days',
    urgency: 'soon',
  },
  {
    id: 'dl-3',
    day: '31',
    month: 'Mar',
    title: 'TDS Q3 Return',
    relatedProject: 'All entities',
    remainingLabel: '16 days',
    urgency: 'later',
  },
];

const PROVIDER_RAJ: Provider = {
  id: 'prov-1',
  name: 'Rajiv Mehta',
  role: 'Senior CA Consultant',
  avatarInitials: 'RM',
  rating: 4.8,
  projectCount: 142,
};

const PROVIDER_ANITA: Provider = {
  id: 'prov-2',
  name: 'Anita Desai',
  role: 'Brand Strategist',
  avatarInitials: 'AD',
  rating: 4.9,
  projectCount: 87,
};

export const TRACKED_PROJECTS: TrackedProject[] = [
  {
    id: 'sas-0042',
    orderId: '#SAS-0042',
    name: 'TechVenture Pvt Ltd',
    packageName: 'Growth',
    provider: PROVIDER_RAJ,
    progress: 72,
    estimatedCompletion: 'Mar 22, 2026',
    milestones: [
      { id: 'm1', title: 'Documents Submitted', date: 'Mar 1', status: 'done' },
      { id: 'm2', title: 'Name Approval', date: 'Mar 5', status: 'done' },
      { id: 'm3', title: 'MOA & AOA Drafting', date: 'Mar 12', status: 'active' },
      { id: 'm4', title: 'ROC Filing', date: 'Mar 18', status: 'pending' },
      { id: 'm5', title: 'Certificate of Incorporation', date: 'Mar 22', status: 'pending' },
    ],
  },
  {
    id: 'sas-0039',
    orderId: '#SAS-0039',
    name: 'Brand Identity',
    packageName: 'Standard',
    provider: PROVIDER_ANITA,
    progress: 90,
    estimatedCompletion: 'Mar 18, 2026',
    milestones: [
      { id: 'm1', title: 'Discovery Call', date: 'Feb 20', status: 'done' },
      { id: 'm2', title: 'Logo Concepts', date: 'Feb 28', status: 'done' },
      { id: 'm3', title: 'Brand Guidelines', date: 'Mar 15', status: 'active' },
    ],
  },
];

export const NOTIFICATIONS: Notification[] = [
  {
    id: 'n1',
    category: 'deadline',
    title: 'GST Return due in 3 days',
    description: 'File your February GST return for TechVenture Pvt Ltd before Mar 18.',
    timestamp: '2 hours ago',
    read: false,
  },
  {
    id: 'n2',
    category: 'update',
    title: 'MOA & AOA Drafting started',
    description: 'Rajiv Mehta has begun drafting your MOA & AOA documents.',
    timestamp: '5 hours ago',
    read: false,
  },
  {
    id: 'n3',
    category: 'payment',
    title: 'Payment received',
    description: 'We received your payment of ₹11,799 for Company Registration — Growth.',
    timestamp: '1 day ago',
    read: true,
  },
  {
    id: 'n4',
    category: 'design',
    title: 'Brand Identity — review ready',
    description: 'Your logo concepts are ready for review. 3 concepts to choose from.',
    timestamp: '1 day ago',
    read: false,
  },
  {
    id: 'n5',
    category: 'referral',
    title: 'Referral reward credited',
    description: 'You earned ₹500 for referring Priya Sharma. Funds added to your wallet.',
    timestamp: '2 days ago',
    read: true,
  },
  {
    id: 'n6',
    category: 'provider',
    title: 'New provider assigned',
    description: 'Anita Desai has been assigned as your Brand Strategist.',
    timestamp: '3 days ago',
    read: true,
  },
];