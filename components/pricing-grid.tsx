import { PricingTier } from '@/lib/contentful';
import { PricingCard } from './pricing-card';

interface PricingGridProps {
  tiers: PricingTier[];
}

export function PricingGrid({ tiers }: PricingGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {tiers.map((tier) => (
        <PricingCard
          key={tier.id}
          tier={tier}
          isHighlighted={tier.highlighted}
        />
      ))}
    </div>
  );
}
