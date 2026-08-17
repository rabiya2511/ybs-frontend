import { useState } from 'react';
import { Gift, Share2, Check } from 'lucide-react';
import { copyReferralCode } from '../../services/referral.api';

interface ReferralHeroProps {
  referralCode: string;
}

export function ReferralHero({ referralCode }: ReferralHeroProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const ok = await copyReferralCode(referralCode);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mb-[18px] rounded-2xl bg-navy-2 px-6 py-7 text-center">
      <div className="mb-3 text-4xl">🎁</div>
      <h2 className="mb-1.5 font-serif text-2xl font-bold text-white">
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
          {referralCode}
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
  );
}