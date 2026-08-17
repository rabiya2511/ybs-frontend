import type { ServicePackage } from '@/types/domain';

const COMPANY_REGISTRATION_PACKAGES: ServicePackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    tierLabel: 'For solo founders',
    price: '₹4,999',
    period: 'one-time',
    features: [
      { label: 'Pvt Ltd Registration', included: true },
      { label: 'DIN & DSC for 2 Directors', included: true },
      { label: 'MOA & AOA Drafting', included: true },
      { label: 'GST Registration', included: false },
      { label: 'Trademark Filing', included: false },
      { label: 'Bank Account Help', included: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    tierLabel: 'For early-stage teams',
    price: '₹9,999',
    period: 'one-time',
    popular: true,
    features: [
      { label: 'Everything in Starter', included: true },
      { label: 'GST Registration', included: true },
      { label: 'PAN & TAN Application', included: true },
      { label: 'Bank Account Assistance', included: true },
      { label: 'Trademark Filing', included: false },
      { label: 'MSME Registration', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tierLabel: 'Full-stack launch',
    price: '₹18,999',
    period: 'one-time',
    features: [
      { label: 'Everything in Growth', included: true },
      { label: 'Trademark Registration', included: true },
      { label: 'MSME / Startup India', included: true },
      { label: '1-Year Compliance', included: true },
      { label: 'Dedicated CA Manager', included: true },
      { label: 'Priority Support', included: true },
    ],
  },
];

const PACKAGES_BY_SERVICE: Record<string, ServicePackage[]> = {
  'company-registration': COMPANY_REGISTRATION_PACKAGES,
};

/**
 * Returns the pricing tiers for a given service. Until every service has
 * bespoke packages configured, unknown ids fall back to a generic set so
 * the Packages page always has something sensible to render.
 */
export function getPackagesForService(serviceId?: string): ServicePackage[] {
  if (serviceId && PACKAGES_BY_SERVICE[serviceId]) {
    return PACKAGES_BY_SERVICE[serviceId];
  }
  return COMPANY_REGISTRATION_PACKAGES;
}
