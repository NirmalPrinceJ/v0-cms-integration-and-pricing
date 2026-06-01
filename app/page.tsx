import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { ModulesShowcase } from '@/components/modules-showcase';
import { PricingCTA } from '@/components/pricing-cta';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IntegrateWise.ai | Account Success & Business Intelligence Platform',
  description: 'Empower your customer success team and operations leaders with unified visibility across accounts and departments. Reduce churn, improve NRR, and make confident decisions.',
  openGraph: {
    title: 'IntegrateWise.ai',
    description: 'Account Success meets Business Intelligence',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ModulesShowcase />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
}

