import {
  Building2,
  Scale,
  ShieldCheck,
  Palette,
  Megaphone,
  Globe,
  Smartphone,
  Calculator,
  Users,
  UtensilsCrossed,
  Award,
  TrendingUp,
} from 'lucide-react';
import type { Service, ServiceCategory } from '@/types/domain';

export const SERVICE_CATEGORIES: { id: 'all' | ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Services' },
  { id: 'legal', label: 'Legal' },
  { id: 'design', label: 'Design' },
  { id: 'tech', label: 'Tech' },
  { id: 'finance', label: 'Finance' },
  { id: 'food', label: 'Food & ISO' },
];

export function getServiceById(serviceId?: string): Service | undefined {
  return SERVICES.find((service) => service.id === serviceId);
}

export const SERVICES: Service[] = [
  {
    id: 'company-registration',
    name: 'Company Registration',
    description: 'LLP, Pvt Ltd, OPC incorporation with full documentation',
    category: 'legal',
    startingPrice: 'From ₹4,999',
    icon: Building2,
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity',
    description: 'Logo, color palette, typography & brand guidelines',
    category: 'design',
    startingPrice: 'From ₹8,999',
    icon: Palette,
  },
  {
    id: 'website-design',
    name: 'Website Design',
    description: 'Corporate sites, landing pages & e-commerce',
    category: 'tech',
    startingPrice: 'From ₹24,999',
    icon: Globe,
  },
  {
    id: 'mobile-app-development',
    name: 'Mobile App Development',
    description: 'iOS & Android native and cross-platform apps',
    category: 'tech',
    startingPrice: 'From ₹79,999',
    icon: Smartphone,
  },
  {
    id: 'accounting-gst',
    name: 'Accounting & GST',
    description: 'Bookkeeping, GST filing, TDS returns',
    category: 'finance',
    startingPrice: 'From ₹2,999/mo',
    icon: Calculator,
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'SEO, Google Ads, social media management',
    category: 'design',
    startingPrice: 'From ₹14,999/mo',
    icon: Megaphone,
  },
  {
    id: 'legal-compliance',
    name: 'Legal Compliance',
    description: 'MCA, ROC annual filings & secretarial services',
    category: 'legal',
    startingPrice: 'From ₹5,999',
    icon: Scale,
  },
  {
    id: 'ip-trademarks',
    name: 'IP & Trademarks',
    description: 'Brand protection, trademark filing & monitoring',
    category: 'legal',
    startingPrice: 'From ₹6,999',
    icon: ShieldCheck,
  },
  {
    id: 'hr-payroll',
    name: 'HR & Payroll',
    description: 'PF, ESI, salary management & employee onboarding',
    category: 'finance',
    startingPrice: 'From ₹3,499/mo',
    icon: Users,
  },
  {
    id: 'fssai-license',
    name: 'FSSAI License',
    description: 'Food business registration — Basic, State & Central',
    category: 'food',
    startingPrice: 'From ₹2,499',
    icon: UtensilsCrossed,
  },
  {
    id: 'iso-certification',
    name: 'ISO Certification',
    description: 'ISO 9001, 14001, 27001 certification & consulting',
    category: 'food',
    startingPrice: 'From ₹18,999',
    icon: Award,
  },
  {
    id: 'startup-funding',
    name: 'Startup Funding',
    description: 'Pitch deck, financial modeling & investor connect',
    category: 'finance',
    startingPrice: 'From ₹9,999',
    icon: TrendingUp,
  },
];
