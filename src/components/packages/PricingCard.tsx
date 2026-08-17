import { useNavigate } from 'react-router-dom';
import { FeatureList } from '@/components/packages/FeatureList';
import { Button } from '@/components/common/Button';
import type { ServicePackage } from '@/types/domain';

export function PricingCard({ pkg, serviceName }: { pkg: ServicePackage; serviceName?: string }) {
  const navigate = useNavigate();

  function handleSelect() {
    const numericPrice = Number(pkg.price.replace(/[^0-9]/g, ''));

    navigate('/checkout', {
      state: {
        serviceName: serviceName ?? 'Startup Service',
        packageName: pkg.name,
        processingTime: pkg.period || '7–10 business days',
        subtotal: numericPrice,
      },
    });
  }

  return (
    <div
      className={[
        'relative flex flex-col rounded-2xl border-[1.5px] bg-surface p-5.5 transition-colors duration-150',
        pkg.popular ? 'border-gold' : 'border-border-subtle hover:border-gold',
      ].join(' ')}
    >
      {pkg.popular && (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-3.5 py-1 text-[9px] font-bold uppercase tracking-wide text-navy">
          Most Popular
        </span>
      )}

      <div className="font-display text-xl font-bold leading-none text-text-primary">{pkg.name}</div>
      <div className="mt-0.5 text-[11px] text-text-muted">{pkg.tierLabel}</div>

      <div className="mt-3.5 font-display text-[28px] font-bold leading-none text-navy dark:text-white">
        {pkg.price}
      </div>
      <div className="mt-1 text-[11px] text-text-muted">{pkg.period}</div>

      <div className="my-3.5 h-px bg-border-subtle" />

      <div className="flex-1">
        <FeatureList features={pkg.features} />
      </div>

      <Button
        variant={pkg.popular ? 'gold' : 'primary'}
        className="mt-4 w-full"
        onClick={handleSelect}
      >
        Select {pkg.name}
      </Button>
    </div>
  );
}