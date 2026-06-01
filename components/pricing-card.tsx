import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { PricingTier } from '@/lib/contentful';

interface PricingCardProps {
  tier: PricingTier;
  isHighlighted?: boolean;
}

export function PricingCard({ tier, isHighlighted }: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-lg border transition-all duration-300 ${
        isHighlighted
          ? 'border-primary bg-primary/5 shadow-lg ring-2 ring-primary/20'
          : 'border-border bg-card shadow-md hover:shadow-lg'
      }`}
    >
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground">
          Most Popular
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* Tier Name */}
        <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

        {/* Pricing */}
        <div className="mb-6">
          <span className="text-4xl font-bold text-foreground">
            ${tier.price}
          </span>
          <span className="text-muted-foreground ml-2">/month</span>
        </div>

        {/* CTA Button */}
        <Button
          className="w-full mb-8"
          variant={isHighlighted ? 'default' : 'outline'}
        >
          {tier.cta}
        </Button>

        {/* Features List */}
        <div className="space-y-4">
          {tier.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
