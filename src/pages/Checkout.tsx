import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreditCard, Landmark, Smartphone } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Card } from '@/components/common/Card';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';
import { Button } from '@/components/common/Button';
import { initiatePayment } from '@/services/payment.api';

interface CheckoutState {
  serviceName: string;
  packageName: string;
  processingTime: string;
  subtotal: number;
}

const FALLBACK_ORDER: CheckoutState = {
  serviceName: 'Company Registration',
  packageName: 'Growth',
  processingTime: '7–10 business days',
  subtotal: 11799,
};

const BUSINESS_TYPES = [
  { value: 'pvt-ltd', label: 'Private Limited Company' },
  { value: 'llp', label: 'LLP' },
  { value: 'opc', label: 'One Person Company' },
  { value: 'partnership', label: 'Partnership' },
];

const PAYMENT_METHODS = [
  { id: 'card', label: 'Credit / Debit Card', icon: CreditCard },
  { id: 'upi', label: 'UPI', icon: Smartphone },
  { id: 'netbanking', label: 'Net Banking', icon: Landmark },
] as const;

type PaymentMethodId = (typeof PAYMENT_METHODS)[number]['id'];

interface FormValues {
  companyName: string;
  businessType: string;
  directorName: string;
  address: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const order = (location.state as CheckoutState | null) ?? FALLBACK_ORDER;

  const [values, setValues] = useState<FormValues>({
    companyName: '',
    businessType: BUSINESS_TYPES[0].value,
    directorName: '',
    address: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodId>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const gst = Math.round(order.subtotal * 0.18);
  const total = order.subtotal + gst;

  function updateField(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): boolean {
    const nextErrors: FormErrors = {};
    if (!values.companyName.trim()) nextErrors.companyName = 'Company name is required';
    if (!values.directorName.trim()) nextErrors.directorName = 'Director name is required';
    if (!values.address.trim()) nextErrors.address = 'Registered address is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handlePay() {
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const result = await initiatePayment({
        amount: total,
        method: paymentMethod,
        orderId: `${order.serviceName}-${Date.now()}`,
      });
      if (result.success) {
        navigate('/projects');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <PageHeader title="Checkout" subtitle="Complete your order to get started." />

      <div className="grid grid-cols-1 gap-4.5 xl:grid-cols-[1.6fr_1fr]">
        <div className="flex min-w-0 flex-col gap-4.5">
          <Card>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-text-muted">
              Business Details
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Company Name"
                name="companyName"
                value={values.companyName}
                onChange={(e) => updateField('companyName', e.target.value)}
                error={errors.companyName}
                placeholder="Acme Pvt Ltd"
              />
              <Select
                label="Business Type"
                name="businessType"
                options={BUSINESS_TYPES}
                value={values.businessType}
                onChange={(e) => updateField('businessType', e.target.value)}
              />
              <Input
                label="Director Name"
                name="directorName"
                value={values.directorName}
                onChange={(e) => updateField('directorName', e.target.value)}
                error={errors.directorName}
                placeholder="Full legal name"
              />
              <Input
                label="Registered Address"
                name="address"
                value={values.address}
                onChange={(e) => updateField('address', e.target.value)}
                error={errors.address}
                placeholder="Street, city, state, PIN"
              />
            </div>
          </Card>

          <Card>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-text-muted">
              Payment Method
            </h3>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {PAYMENT_METHODS.map((method) => {
                const Icon = method.icon;
                const isActive = paymentMethod === method.id;
                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id)}
                    className={[
                      'flex flex-col items-center gap-2 rounded-[10px] border px-3 py-4 text-xs font-medium transition-colors',
                      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
                      isActive
                        ? 'border-gold bg-gold-tint-adaptive text-navy dark:text-gold'
                        : 'border-border-subtle text-text-muted hover:border-gold/50',
                    ].join(' ')}
                  >
                    <Icon size={18} />
                    {method.label}
                  </button>
                );
              })}
            </div>
          </Card>
        </div>

        <div className="min-w-0">
          <Card className="xl:sticky xl:top-4.5">
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-text-muted">
              Order Summary
            </h3>
            <div className="flex flex-col gap-2.5 text-[13px]">
              <div className="flex justify-between">
                <span className="text-text-muted">Service</span>
                <span className="font-medium text-text-primary">{order.serviceName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Package</span>
                <span className="font-medium text-text-primary">{order.packageName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Processing time</span>
                <span className="font-medium text-text-primary">{order.processingTime}</span>
              </div>
              <div className="my-1 border-t border-border-subtle" />
              <div className="flex justify-between">
                <span className="text-text-muted">Subtotal</span>
                <span>₹{order.subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">GST (18%)</span>
                <span>₹{gst.toLocaleString('en-IN')}</span>
              </div>
              <div className="my-1 border-t border-border-subtle" />
              <div className="flex justify-between text-base font-bold text-text-primary">
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <Button
              variant="gold"
              className="mt-5 w-full justify-center"
              onClick={handlePay}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing…' : `Pay ₹${total.toLocaleString('en-IN')}`}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}