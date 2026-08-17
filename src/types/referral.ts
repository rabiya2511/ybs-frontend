export interface ReferralStats {
  friendsReferred: number;
  friendsReferredDeltaThisMonth: number;
  successfulConversions: number;
  conversionRate: number; // percentage, e.g. 60
  totalEarned: number; // in rupees
}

export type ReferralStatus = 'converted' | 'pending';

export interface ReferralEntry {
  id: string;
  friendName: string;
  signedUpDate: string; // ISO date
  firstOrderService: string | null; // null if no order yet
  status: ReferralStatus;
  rewardAmount: number | null; // null if pending
}

export interface ReferralData {
  referralCode: string;
  stats: ReferralStats;
  history: ReferralEntry[];
}