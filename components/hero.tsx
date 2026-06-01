'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative px-6 py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block rounded-full bg-accent/10 px-4 py-2">
          <span className="text-sm font-semibold text-accent">New: AI-Powered Triage Bot</span>
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
          Account Success meets{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Business Intelligence
          </span>
        </h1>

        <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          IntegrateWise empowers customer success teams and operations leaders with unified visibility across accounts and departments. Reduce churn, accelerate growth, and make confident decisions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/signup">Start free trial</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#demo">Watch demo</Link>
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          No credit card required • Setup in minutes • Free for teams up to 10 users
        </p>
      </div>
    </section>
  );
}
