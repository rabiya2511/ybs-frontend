import type { ReferralData } from '@/types/referral';

/**
 * Stub only. Swap for a real GET /api/referrals call once the backend
 * endpoint exists — callers don't need to change.
 */
export async function getReferralData(): Promise<ReferralData> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return {
    referralCode: 'RAJESH300',
    stats: {
      friendsReferred: 5,
      friendsReferredDeltaThisMonth: 2,
      successfulConversions: 3,
      conversionRate: 60,
      totalEarned: 1500,
    },
    history: [
      { id: '1', friendName: 'Priya Sharma', signedUpDate: '2024-03-11', firstOrderService: 'Company Registration', status: 'converted', rewardAmount: 500 },
      { id: '2', friendName: 'Amit Verma', signedUpDate: '2024-03-05', firstOrderService: 'Brand Identity', status: 'converted', rewardAmount: 500 },
      { id: '3', friendName: 'Neha Gupta', signedUpDate: '2024-02-28', firstOrderService: 'Accounting', status: 'converted', rewardAmount: 500 },
      { id: '4', friendName: 'Karan Singh', signedUpDate: '2024-02-20', firstOrderService: null, status: 'pending', rewardAmount: null },
      { id: '5', friendName: 'Anita Roy', signedUpDate: '2024-01-15', firstOrderService: null, status: 'pending', rewardAmount: null },
    ],
  };
}

export async function copyReferralCode(code: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(code);
    return true;
  } catch {
    return false;
  }
}