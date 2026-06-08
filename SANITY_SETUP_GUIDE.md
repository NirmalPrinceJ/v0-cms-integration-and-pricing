# IntegrateWise CMS Integration Guide

## Overview

Your IntegrateWise site now has:
- **BrowserRouter** (clean URLs, no hash routing) - `/pricing` instead of `/#/pricing`
- **Sanity CMS integration** ready to manage your pricing page dynamically
- **Demo pricing data** that displays by default when CMS is not connected
- **Full TypeScript support** with types for pricing data
- **SEO ready** with metadata, JSON-LD structured data, and per-route meta tags

## Current Status

✅ **BrowserRouter enabled** - Navigation uses clean URLs  
✅ **Pricing page created** - Fetches from Sanity with fallback demo data  
✅ **Sanity queries & types** - All pricing query logic in place  
✅ **Environment variables** - VITE_SANITY_* variables configured  
⏳ **Pending** - Create pricing content in Sanity Studio

## Setting Up Sanity CMS

### Step 1: Get Your Sanity Credentials

If you don't have a Sanity account:
1. Go to https://www.sanity.io/
2. Sign up for free
3. Create a new project
4. Create a new dataset (e.g., "production")
5. Go to Settings → API → Tokens
6. Create a new token with "Editor" permissions
7. Copy your **Project ID**, **Dataset**, and **API Token**

### Step 2: Add Your Credentials to Environment Variables

Your environment variables are already configured in v0:
- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_SANITY_API_TOKEN`

Make sure they're set to your actual Sanity project values.

### Step 3: Create Sanity Schemas

The pricing schemas are defined in `sanity-schemas.js`. Add them to your Sanity Studio:

1. Go to your Sanity Studio (https://manage.sanity.io/projects/YOUR_PROJECT_ID/datasets/YOUR_DATASET/schema)
2. Create two new document types:
   - **pricingTier** - Individual pricing tier
   - **pricingPage** - The page containing all tiers

Use the schema definitions from `sanity-schemas.js` as a reference.

### Step 4: Create a Pricing Tier

In Sanity Studio, create a new "Pricing Tier" document:

**Starter Tier:**
- Name: `Starter`
- Price: `299`
- Currency: `USD`
- Description: `Perfect for small teams getting started with Account Success automation.`
- Features:
  - Up to 50 accounts
  - Basic Account Success module
  - 3 team members
  - Email support
  - 30-day data retention
  - Standard API access
- CTA: `Get Started`
- Most Popular: unchecked
- Order: `1`
- Publish this document

**Professional Tier (Recommended):**
- Name: `Professional`
- Price: `999`
- Currency: `USD`
- Description: `For growing teams that need advanced automation and intelligence.`
- Features:
  - Up to 500 accounts
  - Full Account Success + Business Intelligence
  - 10 team members
  - Priority email & chat support
  - 1-year data retention
  - Advanced API access
  - Custom workflows
  - Role-based governance
- CTA: `Start Free Trial`
- Most Popular: checked ✓
- Order: `2`
- Publish this document

**Enterprise Tier:**
- Name: `Enterprise`
- Price: `0` (will display as "Custom")
- Currency: `USD`
- Description: `Custom solution for large organizations with dedicated support.`
- Features:
  - Unlimited accounts
  - All modules and features
  - Unlimited team members
  - 24/7 phone & chat support
  - Unlimited data retention
  - Premium API access
  - White-label options
  - Advanced security & compliance
  - Dedicated account manager
  - Custom SLA
- CTA: `Contact Sales`
- Most Popular: unchecked
- Order: `3`
- Publish this document

### Step 5: Create the Pricing Page

In Sanity Studio, create a new "Pricing Page" document:

- Title: `Simple, Transparent Pricing`
- Subtitle: `Choose the plan that works for your business.`
- Description: `All plans include core features. Scale as you grow.`
- Tiers: Select all three tiers you created (they'll display in order)
- SEO Title: `Pricing | IntegrateWise`
- SEO Description: `Transparent pricing for Account Success. Starter $299, Professional $999, Enterprise custom.`
- Publish this document

### Step 6: Verify the Integration

1. Go to http://localhost:3000/pricing
2. You should see your pricing data from Sanity (if credentials are correct)
3. The three tiers should display with correct prices, descriptions, and features
4. The Professional tier should be highlighted as "Most Popular"

## How It Works

### Pricing Data Flow

```
Pricing Page Component
  ↓
fetchPricingPage() function
  ↓
Sanity CMS API (if connected)
  ↓
Returns pricing data OR fallback to demo data
  ↓
Page renders with actual or demo pricing
```

### Fallback Demo Data

If Sanity is not configured or the API call fails, the site automatically displays professional demo pricing:
- Starter: $299/month
- Professional: $999/month (highlighted)
- Enterprise: Custom pricing

This ensures your site always works, even if the CMS is temporarily unavailable.

## Code Structure

### Pricing Components & Files

```
src/
  lib/
    queries.ts          ← Sanity GROQ query for pricing
    cms-data.ts         ← Pricing fetcher function & demo data
    sanity.ts           ← Sanity client initialization
    sanity-types.ts     ← TypeScript interfaces for pricing
  pages/
    Pricing.tsx         ← Pricing page component (fetches CMS data)
  hooks/
    useSeo.ts           ← SEO metadata hook
```

### Key Functions

**`fetchPricingPage()`** - Fetches pricing from Sanity with fallback:
```typescript
export async function fetchPricingPage(): Promise<PricingPageData> {
  if (!hasSanityConfig) return defaultPricingData;
  try {
    const data = await sanityClient.fetch<PricingPageData>(pricingPageQuery);
    return data || defaultPricingData;
  } catch (error) {
    console.error('[v0] Failed to fetch pricing:', error);
    return defaultPricingData;
  }
}
```

**`pricingPageQuery`** - GROQ query that fetches pricing page with all tiers:
```groq
*[_type == "pricingPage"][0] {
  _id,
  title,
  subtitle,
  tiers[]-> { ... }
}
```

## Updating Pricing in the Future

Once Sanity is set up, to update your pricing:

1. Go to Sanity Studio
2. Edit the existing Pricing Tier documents or create new ones
3. Edit the Pricing Page document to add/remove tiers
4. Publish your changes
5. Your website updates automatically within 60 seconds (ISR cache)

## Troubleshooting

### Pricing page shows demo data instead of Sanity data

**Possible causes:**
- Sanity credentials not set correctly
- Sanity project/dataset doesn't exist
- Pricing Page document hasn't been published in Sanity
- API token doesn't have read permissions

**Solutions:**
1. Check that `VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET`, and `VITE_SANITY_API_TOKEN` are set correctly
2. Verify the Pricing Page document exists in Sanity and is published
3. Check browser console for error messages (Network tab)
4. Ensure API token has "Editor" or "Viewer" permissions

### Tiers display in wrong order

- Make sure each pricing tier has a unique `order` number (1, 2, 3, etc.)
- The query sorts by order automatically

### SEO metadata not showing

- Edit the Pricing Page document in Sanity
- Fill in `seoTitle` and `seoDescription` fields
- Publish and wait 60 seconds for cache refresh

## Next Steps

1. ✅ You now have the site running with BrowserRouter
2. ✅ Pricing page is set up and ready
3. ⏳ Create Sanity account and project (5 minutes)
4. ⏳ Add pricing schemas to Sanity Studio (2 minutes)
5. ⏳ Create pricing tiers and page in Sanity (5 minutes)
6. ✅ Site automatically fetches and displays pricing

Your IntegrateWise site is now ready to ship with dynamic pricing management!
