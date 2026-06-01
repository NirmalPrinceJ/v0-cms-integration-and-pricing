import { Metadata } from 'next';
import { getPricingData, getDemoPricingData } from '@/lib/contentful';
import { PricingGrid } from '@/components/pricing-grid';

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata(): Promise<Metadata> {
  let pricingData;
  
  try {
    pricingData = await getPricingData();
  } catch (error) {
    console.log('[v0] Using demo pricing data for metadata');
    pricingData = getDemoPricingData();
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  return {
    title: `${pricingData.title} | Pricing`,
    description: pricingData.subtitle,
    canonical: `${baseUrl}/pricing`,
    openGraph: {
      title: pricingData.title,
      description: pricingData.subtitle,
      url: `${baseUrl}/pricing`,
      type: 'website',
    },
  };
}

export default async function PricingPage() {
  let pricingData;

  try {
    pricingData = await getPricingData();
    console.log('[v0] Loaded pricing data from Contentful');
  } catch (error) {
    console.log('[v0] Using demo pricing data (Contentful not configured)');
    pricingData = getDemoPricingData();
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PricingPage',
    name: pricingData.title,
    description: pricingData.subtitle,
    offers: pricingData.tiers.map((tier) => ({
      '@type': 'Offer',
      name: tier.name,
      price: tier.price,
      priceCurrency: 'USD',
      description: tier.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              {pricingData.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance">
              {pricingData.subtitle}
            </p>
          </div>

          {/* Pricing Grid */}
          <PricingGrid tiers={pricingData.tiers} />
        </div>
      </main>
    </>
  );
}
