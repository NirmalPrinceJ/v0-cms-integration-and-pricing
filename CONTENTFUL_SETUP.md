# Contentful Setup Guide for Pricing Page

This guide explains how to set up the content models and content in Contentful to power the pricing page.

## Environment Variables

Make sure these environment variables are set in your `.env.local`:

```
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Content Models to Create

### 1. Pricing Tier Model

Create a new content model called **"Pricing Tier"** (API ID: `pricingTier`) with these fields:

| Field Name | Field Type | Required | Notes |
|-----------|-----------|----------|-------|
| Name | Short text | Yes | The name of the pricing tier (e.g., "Starter", "Pro", "Enterprise") |
| Price | Number (Integer) | Yes | Monthly price in dollars (e.g., 29) |
| Description | Short text | Yes | Brief description of the tier |
| Features | Long text (JSON) | Yes | Array of feature strings as JSON: `["Feature 1", "Feature 2"]` |
| CTA | Short text | No | Call-to-action text (default: "Get Started") |
| Highlighted | Boolean | No | Check to mark as "Most Popular" |
| Order | Number (Integer) | Yes | Display order (1, 2, 3, etc.) |

**Important**: Set "Features" as a Long Text field and input an array like:
```json
["Feature 1", "Feature 2", "Feature 3"]
```

### 2. Pricing Page Model

Create a new content model called **"Pricing Page"** (API ID: `pricingPage`) with these fields:

| Field Name | Field Type | Required | Notes |
|-----------|-----------|----------|-------|
| Title | Short text | Yes | Main heading for pricing page |
| Subtitle | Long text | Yes | Subheading/description text |

## Creating Content

### Step 1: Create Pricing Tiers

1. Go to Content → Add Entry → Pricing Tier
2. Create entries for each tier (Starter, Pro, Enterprise, etc.)
3. Fill in all fields following this example:

**Example - Starter Tier:**
- Name: `Starter`
- Price: `29`
- Description: `Perfect for small teams and solo developers`
- Features: `["5 team members", "Basic analytics", "Email support", "1 GB storage"]`
- CTA: `Get Started`
- Highlighted: `unchecked`
- Order: `1`

**Example - Pro Tier (Most Popular):**
- Name: `Pro`
- Price: `79`
- Description: `For growing teams that need advanced features`
- Features: `["25 team members", "Advanced analytics", "Priority support", "100 GB storage", "Custom integrations", "API access"]`
- CTA: `Start Free Trial`
- Highlighted: `checked` ✓
- Order: `2`

**Example - Enterprise Tier:**
- Name: `Enterprise`
- Price: `Custom`
- Description: `For large organizations with custom needs`
- Features: `["Unlimited team members", "Custom analytics", "24/7 dedicated support", "Unlimited storage", "White-label options", "Advanced security", "SLA guarantee"]`
- CTA: `Contact Sales`
- Highlighted: `unchecked`
- Order: `3`

### Step 2: Create Pricing Page Entry

1. Go to Content → Add Entry → Pricing Page
2. Fill in:
   - Title: `Simple, Transparent Pricing`
   - Subtitle: `Choose the perfect plan for your team. Always flexible to scale as you grow.`
3. Publish

## Publishing Content

After creating your entries:

1. Click **Publish** on each entry
2. Content will be immediately available to your Next.js app via the Content Delivery API

## Updating Pricing

To update pricing information:

1. Go to Content in Contentful
2. Edit the relevant Pricing Tier entry
3. Update the fields (price, features, description, etc.)
4. Click **Publish**
5. The Next.js app will fetch updated content on the next request (or within 60 seconds due to ISR revalidation)

## Troubleshooting

### Content not appearing on the page?

1. Verify `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` and `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN` are correct
2. Check that entries are **Published** (not in Draft)
3. Confirm content type API IDs are exactly `pricingPage` and `pricingTier`
4. Check browser console for error messages
5. Verify the Pricing Page entry exists and is published

### Features array not showing?

Make sure the Features field is entered as valid JSON:
```json
["Feature 1", "Feature 2", "Feature 3"]
```

### Pricing page not loading?

Check the console logs in your Next.js dev server for specific error messages. If you see authentication errors, re-verify your access token has "Content Delivery" permissions in Contentful.

## Next Steps

- Add a link to the pricing page in your navigation
- Test the page by visiting `/pricing`
- Monitor the page in production for performance
- Update pricing in Contentful as needed without touching code
