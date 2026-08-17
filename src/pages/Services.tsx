import { useMemo, useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { CategoryFilter } from '@/components/services/CategoryFilter';
import { ServiceCard } from '@/components/services/ServiceCard';
import { SERVICES, SERVICE_CATEGORIES } from '@/constants/services';
import type { ServiceCategory } from '@/types/domain';

type CategoryFilterValue = 'all' | ServiceCategory;

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilterValue>('all');

  const filteredServices = useMemo(
    () =>
      activeCategory === 'all'
        ? SERVICES
        : SERVICES.filter((service) => service.category === activeCategory),
    [activeCategory],
  );

  return (
    <div>
      <PageHeader
        title="Services"
        subtitle="Everything your startup needs, end-to-end managed."
      />

      <CategoryFilter
        categories={SERVICE_CATEGORIES}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      {filteredServices.length === 0 ? (
        <p className="py-16 text-center text-sm text-text-muted">
          No services in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
}
