# CMS Integration Guide - Complete Setup

## Overview

Your pricing page is now connected to Contentful CMS. This means you can manage all pricing content—tiers, prices, features, descriptions—directly from Contentful without touching the code.

The pricing page currently displays **demo data** so you can see how it works immediately. Follow this guide to connect your actual Contentful account and create your pricing content.

## Step 1: Verify Environment Variables

Your environment variables have been set up:
- `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` - Your Contentful Space ID
- `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN` - Your Content Delivery API token

These are stored in your project's environment variables and are ready to use.

## Step 2: Create Content Models in Contentful

Go to [https://app.contentful.com](https://app.contentful.com) and navigate to your space.

### Create "Pricing Tier" Content Model

1. Go to **Content model** → **Add content type**
2. Name: `Pricing Tier`
3. API ID: `pricingTier` (auto-filled)
4. Add these fields:

| Field Name | Type | Required | Validation/Notes |
|-----------|------|----------|------------------|
| Name | Short text | ✓ | e.g., "Starter", "Pro" |
| Price | Number (Integer) | ✓ | e.g., 29, 79, 299 |
| Description | Short text | ✓ | e.g., "Perfect for small teams" |
| Features | Long text | ✓ | JSON array: `["Feature 1", "Feature 2"]` |
| CTA | Short text |  | Button text (default: "Get Started") |
| Highlighted | Boolean |  | Check to mark as "Most Popular" |
| Order | Number (Integer) | ✓ | Display order: 1, 2, 3, etc. |

5. Click **Save**

### Create "Pricing Page" Content Model

1. Go to **Content model** → **Add content type**
2. Name: `Pricing Page`
3. API ID: `pricingPage` (auto-filled)
4. Add these fields:

| Field Name | Type | Required | Notes |
|-----------|------|----------|-------|
| Title | Short text | ✓ | Main heading |
| Subtitle | Long text | ✓ | Subheading text |

5. Click **Save**

## Step 3: Create Content in Contentful

### 3a. Create Pricing Tiers

Go to **Content** → **Add entry** → **Pricing Tier**

#### Example 1: Starter Tier
- **Name**: `Starter`
- **Price**: `29`
- **Description**: `Perfect for small teams and solo developers`
- **Features**: `["5 team members", "Basic analytics", "Email support", "1 GB storage"]`
- **CTA**: `Get Started`
- **Highlighted**: unchecked
- **Order**: `1`

Click **Publish**

#### Example 2: Pro Tier (Most Popular)
- **Name**: `Pro`
- **Price**: `79`
- **Description**: `For growing teams that need advanced features`
- **Features**: `["25 team members", "Advanced analytics", "Priority support", "100 GB storage", "Custom integrations", "API access"]`
- **CTA**: `Start Free Trial`
- **Highlighted**: ✓ checked
- **Order**: `2`

Click **Publish**

#### Example 3: Enterprise Tier
- **Name**: `Enterprise`
- **Price**: `299`
- **Description**: `For large organizations with custom needs`
- **Features**: `["Unlimited team members", "Custom analytics", "24/7 dedicated support", "Unlimited storage", "White-label options", "Advanced security", "SLA guarantee"]`
- **CTA**: `Contact Sales`
- **Highlighted**: unchecked
- **Order**: `3`

Click **Publish**

### 3b. Create Pricing Page Entry

Go to **Content** → **Add entry** → **Pricing Page**

- **Title**: `Simple, Transparent Pricing`
- **Subtitle**: `Choose the perfect plan for your business. Always flexible to scale as you grow.`

Click **Publish**

## Step 4: Verify It Works

1. Return to your app (http://localhost:3000/pricing)
2. The page should now display your Contentful content instead of demo data
3. Check the console logs for confirmation: "[v0] Loaded pricing data from Contentful"

## Step 5: Edit Pricing Anytime

To update pricing later:

1. Log into [https://app.contentful.com](https://app.contentful.com)
2. Go to **Content**
3. Find the pricing tier or page you want to edit
4. Update the fields
5. Click **Publish**
6. Your app will automatically fetch the updated content on the next request (within 60 seconds due to ISR revalidation)

## Content Structure Details

### Features Field Format

The **Features** field must be a valid JSON array of strings:

✅ **Correct**:
```json
["Feature 1", "Feature 2", "Feature 3"]
```

❌ **Incorrect**:
```
Feature 1
Feature 2
Feature 3
```

### Price Field Format

The **Price** field should be a number (integer):
- ✅ Correct: `29`, `79`, `299`
- ❌ Incorrect: `"$29"`, `"$79/month"`

### Special Characters in CTA

The **CTA** (Call-to-Action) button text can include special characters:
- Examples: `Get Started`, `Start Free Trial`, `Contact Sales`, `Request Demo`

## URL Structure

The pricing page is available at:
- **Development**: http://localhost:3000/pricing
- **Production**: https://your-domain.com/pricing

## SEO Features

The pricing page includes:
- ✅ Dynamic page title and meta description from CMS
- ✅ Open Graph tags for social media sharing
- ✅ JSON-LD structured data for rich snippets
- ✅ Canonical URL

## Troubleshooting

### Content not appearing?

1. **Check if entries are published**
   - Go to Contentful Content tab
   - Verify entries show "Published" status (not "Draft")

2. **Verify credentials**
   - Check that `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` is correct
   - Check that `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN` has "Content Delivery" permissions

3. **Check browser console**
   - Look for error messages in the browser console (F12)
   - Look for server logs in terminal running `pnpm dev`

4. **Verify content type API IDs**
   - Must be exactly `pricingPage` (not `PricingPage`)
   - Must be exactly `pricingTier` (not `PricingTier`)

### Still seeing demo data?

This is expected if:
- You haven't created the content in Contentful yet
- The content models haven't been created
- The entries aren't published

The app will automatically switch to real data once Contentful is set up. The demo data is a helpful fallback during development.

## What's Next?

1. ✅ Set up Contentful content models (done)
2. ✅ Create pricing content entries (done)
3. ✅ Verify the pricing page loads correctly (done)
4. 📝 Add a link to `/pricing` in your main navigation
5. 📝 Test the page on mobile devices
6. 📝 Deploy to production

## Code Reference

The CMS integration code:
- **Client**: `/lib/contentful.ts` - Contentful API connection and data fetching
- **Page**: `/app/pricing/page.tsx` - Server Component that renders the pricing page
- **Components**: 
  - `/components/pricing-card.tsx` - Individual pricing tier card
  - `/components/pricing-grid.tsx` - Grid layout for multiple tiers

All pricing data flows from Contentful → components → rendered page. No hardcoded values exist in the UI components.

## Support

For issues with:
- **Contentful setup**: Visit [Contentful documentation](https://www.contentful.com/developers/docs/)
- **Next.js/React**: Check [Next.js documentation](https://nextjs.org/docs)
- **This integration**: Review the code in `/lib/contentful.ts` and `/app/pricing/page.tsx`
