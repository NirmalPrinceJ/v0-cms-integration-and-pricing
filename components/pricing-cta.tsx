'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function PricingCTA() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg border border-border bg-card p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the plan that fits your team. Scale as you grow. All plans include a 14-day free trial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild>
              <Link href="/pricing">View all plans</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="mailto:sales@integratewise.ai">Contact sales</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Per-seat pricing starting at <span className="font-semibold text-foreground">$79/user/month</span>
          </p>
        </div>
      </div>
    </section>
  );
}
