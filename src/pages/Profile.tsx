import { useNavigate } from 'react-router-dom';

import { PageHeader } from '@/components/common/PageHeader';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { DataTable } from '@/components/common/DataTable';
import { StatusBadge } from '@/components/common/StatusBadge';
import { SettingsRow } from '@/components/profile/SettingsRow';
import { Toggle } from '@/components/common/Toggle';
import { useTheme } from '@/hooks/useTheme';
import { PLACEHOLDER_USER } from '@/constants/placeholderUser';
import { RECENT_ORDERS } from '@/constants/mockData';
import { ORDER_STATUS_MAP } from '@/utils/statusMaps';
import type { Order } from '@/types/domain';

export default function Profile() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  function handleSignOut() {
    // Placeholder only. Once AuthContext / useAuth() land in Phase 5,
    // this should call the real logout() and clear tokens before redirecting.
    navigate('/dashboard');
  }

  return (
    <div>
      <PageHeader title="Profile & Settings" />

      {/* Hero */}
      <div className="mb-4.5 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-navy px-6 py-5">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold text-lg font-bold text-navy">
            {PLACEHOLDER_USER.initials}
          </span>
          <div>
            <div className="font-display text-lg font-bold text-white">{PLACEHOLDER_USER.name}</div>
            <div className="mt-0.5 text-[12px] text-white/50">
              {PLACEHOLDER_USER.email} · {PLACEHOLDER_USER.phone}
            </div>
            <span className="mt-1.5 inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold text-gold">
              ★ {PLACEHOLDER_USER.membership}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[11px] text-white/40">Member since</div>
          <div className="text-[15px] font-semibold text-white">{PLACEHOLDER_USER.memberSince}</div>
          <div className="mt-0.5 text-[11px] text-white/40">
            {PLACEHOLDER_USER.orderCount} orders · {PLACEHOLDER_USER.totalInvested} invested
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4.5 xl:grid-cols-[1.6fr_1fr]">
        {/* Order History */}
        <Card>
          <h3 className="mb-3.5 text-[13px] font-semibold uppercase tracking-wider text-text-muted">
            Order History
          </h3>
          <DataTable<Order>
            data={RECENT_ORDERS}
            rowKey={(o) => o.id}
            emptyMessage="No orders yet."
            columns={[
              { header: 'Service', render: (o) => o.service },
              { header: 'Package', render: (o) => o.package },
              { header: 'Amount', render: (o) => o.amount },
              {
                header: 'Status',
                render: (o) => {
                  const meta = ORDER_STATUS_MAP[o.status];
                  return <StatusBadge label={meta.label} tone={meta.tone} />;
                },
              },
            ]}
          />
        </Card>

        {/* Settings list */}
<div className="flex flex-col gap-4.5">
  <Card noPadding>
    <div className="flex flex-col">
      <SettingsRow icon="🔔" label="Notifications" onClick={() => navigate('/notifications')} />
      <SettingsRow icon="🎁" label="Refer & Earn" onClick={() => navigate('/referrals')} />
      <SettingsRow icon="💳" label="Payment Methods" />
      <SettingsRow icon="📄" label="Documents & KYC" />
      <SettingsRow icon="🔒" label="Privacy & Security" />
      <SettingsRow
        icon={theme === 'dark' ? '🌙' : '☀️'}
        label="Dark Mode"
        trailing={<Toggle checked={theme === 'dark'} label="Dark mode" onChange={toggleTheme} />}
      />
    </div>
  </Card>

  <Button variant="danger" className="w-full justify-center" onClick={handleSignOut}>
    Sign Out
  </Button>
        </div>
      </div>
    </div>
  );
}