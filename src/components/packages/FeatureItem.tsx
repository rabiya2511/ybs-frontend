import { Check, X } from 'lucide-react';
import type { PackageFeature } from '@/types/domain';

export function FeatureItem({ feature }: { feature: PackageFeature }) {
  return (
    <li className="flex items-center gap-2 py-1 text-xs">
      <span
        className={[
          'flex h-4 w-4 shrink-0 items-center justify-center rounded-full',
          feature.included
            ? 'bg-gold-tint-adaptive text-navy dark:text-gold'
            : 'bg-canvas text-text-muted',
        ].join(' ')}
      >
        {feature.included ? <Check size={10} strokeWidth={3} /> : <X size={10} strokeWidth={3} />}
      </span>
      <span className={feature.included ? 'text-text-primary' : 'text-text-muted'}>
        {feature.label}
      </span>
    </li>
  );
}
