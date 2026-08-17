export interface PaymentPayload {
  amount: number;
  method: 'card' | 'upi' | 'netbanking';
  orderId: string;
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
}

/**
 * Stub only. Swap this implementation for a real Razorpay (or similar)
 * checkout call once the backend payment endpoints exist — the calling
 * code in Checkout.tsx does not need to change.
 */
export async function initiatePayment(payload: PaymentPayload): Promise<PaymentResult> {
  console.warn('[payment.api] initiatePayment is a stub. No real payment was processed.', payload);
  await new Promise((resolve) => setTimeout(resolve, 800));
  return { success: true, transactionId: `MOCK-${Date.now()}` };
}