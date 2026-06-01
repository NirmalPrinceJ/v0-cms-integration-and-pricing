import { createClient } from 'contentful';

const client = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID && 
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  ? createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    })
  : null;

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface PricingPage {
  id: string;
  title: string;
  subtitle: string;
  tiers: PricingTier[];
}

export async function getPricingData(): Promise<PricingPage> {
  // If Contentful credentials are not configured, throw error to use demo data
  if (!client) {
    throw new Error('Contentful not configured - using demo data');
  }

  try {
    // Fetch pricing page content
    const entries = await client.getEntries({
      content_type: 'pricingPage',
      limit: 1,
    });

    if (!entries.items.length) {
      throw new Error('No pricing page found in Contentful');
    }

    const pricingPageEntry = entries.items[0] as any;
    const pricingPageData = pricingPageEntry.fields;

    // Fetch all pricing tiers
    const tiersEntries = await client.getEntries({
      content_type: 'pricingTier',
      order: ['fields.order'],
    });

    const tiers: PricingTier[] = tiersEntries.items.map((item: any) => {
      let features: string[] = [];
      
      // Handle features field - can be JSON string or array
      if (item.fields.features) {
        if (typeof item.fields.features === 'string') {
          try {
            features = JSON.parse(item.fields.features);
          } catch {
            features = [item.fields.features];
          }
        } else if (Array.isArray(item.fields.features)) {
          features = item.fields.features;
        }
      }

      return {
        id: item.sys.id,
        name: item.fields.name,
        price: item.fields.price,
        description: item.fields.description,
        features,
        cta: item.fields.cta || 'Get Started',
        highlighted: item.fields.highlighted || false,
      };
    });

    return {
      id: pricingPageEntry.sys.id,
      title: pricingPageData.title,
      subtitle: pricingPageData.subtitle,
      tiers,
    };
  } catch (error) {
    console.error('Error fetching pricing data from Contentful:', error);
    throw error;
  }
}

// Demo data for testing (use when Contentful is not set up)
export function getDemoPricingData(): PricingPage {
  return {
    id: 'demo-pricing',
    title: 'Simple, Transparent Pricing',
    subtitle: 'Choose the perfect plan for your business. Always flexible to scale as you grow.',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        price: 29,
        description: 'Perfect for small teams and solo developers',
        features: [
          '5 team members',
          'Basic analytics',
          'Email support',
          '1 GB storage',
        ],
        cta: 'Get Started',
        highlighted: false,
      },
      {
        id: 'pro',
        name: 'Pro',
        price: 79,
        description: 'For growing teams that need advanced features',
        features: [
          '25 team members',
          'Advanced analytics',
          'Priority support',
          '100 GB storage',
          'Custom integrations',
          'API access',
        ],
        cta: 'Start Free Trial',
        highlighted: true,
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 299,
        description: 'For large organizations with custom needs',
        features: [
          'Unlimited team members',
          'Custom analytics',
          '24/7 dedicated support',
          'Unlimited storage',
          'White-label options',
          'Advanced security',
          'SLA guarantee',
        ],
        cta: 'Contact Sales',
        highlighted: false,
      },
    ],
  };
}
