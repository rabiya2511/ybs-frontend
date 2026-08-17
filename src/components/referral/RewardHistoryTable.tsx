import { Card } from '@/components/common/Card';
import { StatusBadge } from '@/components/common/StatusBadge';
import type { ReferralEntry } from '@/types/referral';

interface RewardHistoryTableProps {
  entries: ReferralEntry[];
}

export function RewardHistoryTable({ entries }: RewardHistoryTableProps) {
  return (
    <Card>
      <div className="mb-3.5 text-[13px] font-semibold uppercase tracking-wider text-text-muted">
        Reward History
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {['Friend', 'Signed Up', 'First Order', 'Status', 'Reward'].map((h) => (
              <th
                key={h}
                className="border-b border-border-subtle pb-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-text-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id} className="hover:bg-canvas">
              <td className="border-b border-border-subtle py-3 text-[13px]">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-gold-tint-adaptive text-[13px]">
                    👤
                  </div>
                  {entry.friendName}
                </div>
              </td>
              <td className="border-b border-border-subtle py-3 text-[13px]">
                {new Date(entry.signedUpDate).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </td>
              <td className="border-b border-border-subtle py-3 text-[13px]">
                {entry.firstOrderService ?? '—'}
              </td>
              <td className="border-b border-border-subtle py-3 text-[13px]">
                <StatusBadge
                  label={entry.status === 'converted' ? 'Converted' : 'Pending'}
                  tone={entry.status === 'converted' ? 'green' : 'orange'}
                />
              </td>
              <td className="border-b border-border-subtle py-3 text-[13px] font-bold text-success">
                {entry.rewardAmount ? (
                  `+₹${entry.rewardAmount}`
                ) : (
                  <span className="font-normal text-text-muted">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}