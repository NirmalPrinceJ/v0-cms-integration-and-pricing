# Quick Start Guide

## 🎯 Get Your Pricing Page Live in 5 Minutes

This guide assumes you already have a Contentful account. If not, [sign up for free](https://www.contentful.com/sign-up/).

### Step 1: Create Content Models in Contentful (2 min)

Go to [app.contentful.com](https://app.contentful.com) → Your Space → **Content model**

#### Model 1: Pricing Tier
```
Name: Pricing Tier
API ID: pricingTier

Fields:
├─ Name (Short text) - required
├─ Price (Number, Integer) - required  
├─ Description (Short text) - required
├─ Features (Long text) - required - store as JSON: ["Feature 1", "Feature 2"]
├─ CTA (Short text) - optional
├─ Highlighted (Boolean) - optional
└─ Order (Number, Integer) - required
```

#### Model 2: Pricing Page
```
Name: Pricing Page
API ID: pricingPage

Fields:
├─ Title (Short text) - required
└─ Subtitle (Long text) - required
```

### Step 2: Create Pricing Content (2 min)

Go to **Content** → Add Entry

**Create 1 Pricing Page entry:**
- Title: `Simple, Transparent Pricing`
- Subtitle: `Choose the perfect plan for your business. Always flexible to scale as you grow.`
- **Publish** ✓

**Create 3 Pricing Tier entries:**

**Entry 1: Starter**
- Name: `Starter`
- Price: `29`
- Description: `Perfect for small teams and solo developers`
- Features: `["5 team members", "Basic analytics", "Email support", "1 GB storage"]`
- CTA: `Get Started`
- Highlighted: ☐ unchecked
- Order: `1`
- **Publish** ✓

**Entry 2: Pro**
- Name: `Pro`
- Price: `79`
- Description: `For growing teams that need advanced features`
- Features: `["25 team members", "Advanced analytics", "Priority support", "100 GB storage", "Custom integrations", "API access"]`
- CTA: `Start Free Trial`
- Highlighted: ☑ checked ← This one!
- Order: `2`
- **Publish** ✓

**Entry 3: Enterprise**
- Name: `Enterprise`
- Price: `299`
- Description: `For large organizations with custom needs`
- Features: `["Unlimited team members", "Custom analytics", "24/7 dedicated support", "Unlimited storage", "White-label options", "Advanced security", "SLA guarantee"]`
- CTA: `Contact Sales`
- Highlighted: ☐ unchecked
- Order: `3`
- **Publish** ✓

### Step 3: Get Your Credentials (1 min)

In Contentful:
1. Click **Settings** (bottom left) → **API Keys**
2. Find your Space ID
3. Copy the **Content Delivery API - access token**

### Step 4: Add Credentials to Your App (0 min - Already Done!)

Your app already has the environment variables configured:
- `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
- `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`

Just make sure they're set to your actual Contentful credentials.

### Step 5: Verify It Works! (0 min)

```bash
# Start your dev server (if not already running)
pnpm dev

# Visit the pricing page
open http://localhost:3000/pricing
```

You should see:
- ✅ Three pricing cards (Starter, Pro, Enterprise)
- ✅ Pro tier has "Most Popular" badge
- ✅ All features displayed with checkmarks
- ✅ Correct prices ($29, $79, $299)
- ✅ Button text matches your CMS

**Check console:** Should show `[v0] Loaded pricing data from Contentful`

## ✨ That's It!

Your pricing page is now live and connected to Contentful. 

### Need to update pricing later?

Just log into Contentful, edit the pricing tiers, and click **Publish**. Changes appear in your app within 60 seconds—no code changes needed!

## 📱 Responsive Design

The page automatically adapts to all screen sizes:
- **Mobile**: Single column (stacked tiers)
- **Tablet**: Two columns
- **Desktop**: Three columns (optimal view)

## 🔒 SEO & Sharing

The page includes:
- ✅ Dynamic page title from CMS
- ✅ Meta description for search engines
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data

## 🚀 Deploy to Production

When you're ready to go live:

1. Deploy your Next.js app (to Vercel, AWS, etc.)
2. Set the same environment variables in production:
   - `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
   - `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`
3. Your pricing page goes live at `/pricing`

## 🆘 Troubleshooting

### I'm still seeing demo data
- ✓ Check that all entries are **Published** (not Draft)
- ✓ Verify content type API IDs are exactly `pricingTier` and `pricingPage`
- ✓ Refresh the page

### Features aren't showing
- ✓ Make sure Features field is valid JSON: `["Feature 1", "Feature 2"]`
- ✓ Don't use line breaks, use commas

### "Pro" tier isn't highlighted
- ✓ Check the **Highlighted** checkbox for the Pro tier entry
- ✓ Only one tier should be highlighted

## 📚 Full Documentation

For more details, see:
- `PRICING_PAGE_README.md` - Overview and architecture
- `CMS_INTEGRATION_GUIDE.md` - Detailed setup guide
- `IMPLEMENTATION_SUMMARY.md` - Technical details

## 🎓 What You're Getting

✅ Production-ready pricing page
✅ CMS integration with Contentful
✅ Mobile-responsive design
✅ SEO optimized
✅ Built-in error handling
✅ Demo data fallback
✅ 60-second cache (ISR)

## 💡 Pro Tips

1. **Update prices frequently?** No problem—edit in Contentful anytime
2. **A/B test pricing?** Create multiple pricing tiers, toggle with Highlighted flag
3. **Different pricing by region?** Create separate Pricing Page entries, use URL params to select
4. **Need more tiers?** Just create more Pricing Tier entries—they'll automatically appear

---

**Questions?** Check the documentation files or visit [Contentful Docs](https://www.contentful.com/developers/docs/).

**Ready?** Your pricing page is live now. Visit `/pricing` to see it! 🎉
