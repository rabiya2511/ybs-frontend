import { FeatureItem } from '@/components/packages/FeatureItem';
import type { PackageFeature } from '@/types/domain';

export function FeatureList({ features }: { features: PackageFeature[] }) {
  return (
    <ul>
      {features.map((feature) => (
        <FeatureItem key={feature.label} feature={feature} />
      ))}
    </ul>
  );
}
