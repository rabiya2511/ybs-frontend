import { useEffect, useState } from 'react';
import { Share2, Check, Users, UserCheck, Wallet } from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';
import { RewardHistoryTable } from '@/components/referral/RewardHistoryTable';
import { getReferralData, copyReferralCode } from '@/services/referral.api';
import type { ReferralData } from '@/types/referral';
import type { StatCardData } from '@/types/domain';

export default function Referral() {
  const [data, setData] = useState<ReferralData | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    getReferralData()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  const handleShare = async () => {
    if (!data) return;
    const ok = await copyReferralCode(data.referralCode);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading || !data) {
    return <div className="text-sm text-text-muted">Loading…</div>;
  }

  const { stats } = data;

  const statCards: StatCardData[] = [
    {
      id: 'friends-referred',
      label: 'Friends Referred',
      value: String(stats.friendsReferred),
      icon: Users,
      tone: 'gold',
      trendDirection: 'up',
      trendLabel: `↑ ${stats.friendsReferredDeltaThisMonth} this month`,
    },
    {
      id: 'successful-conversions',
      label: 'Successful Conversions',
      value: String(stats.successfulConversions),
      icon: UserCheck,
      tone: 'info',
      trendDirection: 'neutral',
      trendLabel: `${stats.conversionRate}% conversion rate`,
    },
    {
      id: 'total-earned',
      label: 'Total Earned',
      value: `₹${stats.totalEarned.toLocaleString('en-IN')}`,
      icon: Wallet,
      tone: 'success',
      trendDirection: 'up',
      trendLabel: 'Wallet balance',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-[22px]">
        <h1 className="mb-1 text-[26px] font-bold text-text-primary">Refer & Earn</h1>
        <p className="text-[13px] text-text-muted">
          Invite friends to DIOS and earn ₹500 per successful referral
        </p>
      </div>

      {/* Hero */}
      <div className="mb-[18px] rounded-2xl bg-navy-2 px-6 py-7 text-center">
        <div className="mb-3 text-4xl">🎁</div>
        <h2 className="mb-1.5 font-display text-2xl font-bold text-white">
          Earn ₹500 for every friend you refer
        </h2>
        <p className="mb-[18px] text-[13px] text-white/50">
          Your friend also gets ₹300 off their first order — everyone wins
        </p>

        <div className="inline-block rounded-[10px] border border-dashed border-gold/50 bg-gold/10 px-7 py-3">
          <div className="mb-1 text-[11px] uppercase tracking-wider text-white/40">
            Your Referral Code
          </div>
          <div className="font-mono text-2xl font-bold tracking-[0.2em] text-gold">
            {data.referralCode}
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 rounded-[9px] bg-white px-[22px] py-2.5 text-[13px] font-semibold text-navy transition-opacity hover:opacity-90"
          >
            {copied ? <Check size={15} /> : <Share2 size={15} />}
            {copied ? 'Copied!' : 'Share Your Code'}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-5 grid grid-cols-3 gap-3.5">
        {statCards.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Reward History */}
      <RewardHistoryTable entries={data.history} />
    </div>
  );
}