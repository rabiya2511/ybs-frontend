import { useParams } from 'react-router-dom';
import { PageHeader } from '@/components/common/PageHeader';
import { PricingCard } from '@/components/packages/PricingCard';
import { getPackagesForService } from '@/constants/packages';
import { getServiceById } from '@/constants/services';

export default function Packages() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = getServiceById(serviceId);
  const packages = getPackagesForService(serviceId);

  return (
    <div>
      <PageHeader
        title="Choose a Package"
        subtitle={
          service
            ? `${service.name} — Select the plan that fits your stage`
            : 'Select the plan that fits your stage'
        }
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {packages.map((pkg) => (
          <PricingCard key={pkg.id} pkg={pkg} serviceName={service?.name} />
        ))}
      </div>
    </div>
  );
}