import { PageHeader } from '@/components/common/PageHeader';
import { StatCard } from '@/components/dashboard/StatCard';
import { ActiveProjectsCard } from '@/components/dashboard/ActiveProjectsCard';
import { RecentOrdersCard } from '@/components/dashboard/RecentOrdersCard';
import { UpcomingDeadlinesCard } from '@/components/dashboard/UpcomingDeadlinesCard';
import { QuickActionsCard } from '@/components/dashboard/QuickActionsCard';
import {
  ACTIVE_PROJECTS,
  DASHBOARD_STATS,
  RECENT_ORDERS,
  UPCOMING_DEADLINES,
} from '@/constants/mockData';
import { PLACEHOLDER_USER } from '@/constants/placeholderUser';

const today = new Intl.DateTimeFormat('en-IN', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
}).format(new Date());

export default function Dashboard() {
  const firstName = PLACEHOLDER_USER.name.split(' ')[0];

  return (
    <div>
      <PageHeader
        title={`Welcome back, ${firstName}`}
        subtitle={`Here's what's happening with your startup today — ${today}`}
      />

      <div className="mb-4.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
        {DASHBOARD_STATS.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4.5 xl:grid-cols-[2fr_1fr]">
        <div className="flex min-w-0 flex-col gap-4.5">
          <ActiveProjectsCard projects={ACTIVE_PROJECTS} />
          <RecentOrdersCard orders={RECENT_ORDERS} />
        </div>
        <div className="flex min-w-0 flex-col gap-4.5">
          <UpcomingDeadlinesCard deadlines={UPCOMING_DEADLINES} />
          <QuickActionsCard />
        </div>
      </div>
    </div>
  );
}
