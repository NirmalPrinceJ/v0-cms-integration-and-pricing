# Pricing Page with Contentful CMS Integration

Your app now includes a **fully functional, CMS-driven pricing page** powered by Contentful. All pricing content (tiers, prices, features, descriptions) is managed in Contentful—no code changes needed to update pricing.

## 🎯 What's Ready

### ✅ Pricing Page
- **URL**: `/pricing`
- **Status**: Fully functional with demo data
- **Features**:
  - Responsive 3-column layout (mobile: 1 col, tablet: 2 cols, desktop: 3 cols)
  - "Most Popular" badge on highlighted tier
  - Call-to-action buttons for each tier
  - Full feature lists for each plan
  - Beautiful card-based design

### ✅ Contentful Integration
- **SDK**: `contentful` package installed
- **Client**: `/lib/contentful.ts` with Content Delivery API client
- **Components**: Reusable pricing cards and grid layout
- **Status**: Ready to connect to your Contentful account

### ✅ SEO & Performance
- Dynamic page titles and meta descriptions from CMS
- Open Graph tags for social sharing
- JSON-LD structured data for search engines
- ISR (Incremental Static Regeneration) with 60-second cache
- Server-side rendering for optimal performance

### ✅ Demo Data Fallback
- Page displays beautiful demo data if Contentful isn't configured
- Automatically switches to real data when CMS is set up
- No errors or blank pages during setup

## 🚀 Getting Started

### Step 1: View the Demo Page

The pricing page is already running with demo data:

```bash
pnpm dev
# Visit: http://localhost:3000/pricing
```

### Step 2: Set Up Your Contentful Account

1. Go to [https://app.contentful.com](https://app.contentful.com)
2. Create a space (or use existing)
3. Create two content models:
   - **Pricing Tier** (API ID: `pricingTier`)
   - **Pricing Page** (API ID: `pricingPage`)

**See detailed instructions in: `CMS_INTEGRATION_GUIDE.md`**

### Step 3: Create Your Pricing Content

In Contentful, create:
- Pricing tiers (Starter, Pro, Enterprise, etc.)
- Pricing page entry with title and subtitle

**See example content in: `CMS_INTEGRATION_GUIDE.md`**

### Step 4: Connect Your Contentful Account

Your environment variables are already configured:
- `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` 
- `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`

Just make sure they're set to your actual Contentful credentials.

### Step 5: Verify It Works

```bash
pnpm dev
# Visit: http://localhost:3000/pricing
# Check console for: "[v0] Loaded pricing data from Contentful"
```

## 📝 Updating Pricing

No code changes needed! To update pricing:

1. Log into Contentful
2. Edit the pricing tier or page entry
3. Update fields (price, features, etc.)
4. Click **Publish**
5. Changes appear in your app within 60 seconds

## 📁 Files Created

### Components
- `/components/pricing-card.tsx` - Individual pricing tier card
- `/components/pricing-grid.tsx` - Grid layout for tiers

### Core
- `/lib/contentful.ts` - Contentful API client and data fetching
- `/app/pricing/page.tsx` - Main pricing page (Server Component)

### Documentation
- `CMS_INTEGRATION_GUIDE.md` - Complete setup instructions
- `PRICING_INTEGRATION_CHECKLIST.md` - Quick reference checklist
- `CONTENTFUL_SETUP.md` - Content model reference

## 🎨 Design Features

- **Responsive**: Works on mobile, tablet, desktop
- **Accessible**: Semantic HTML, ARIA labels, screen reader friendly
- **Themeable**: Uses your app's design tokens (colors, spacing)
- **Interactive**: Hover effects on pricing cards
- **SEO-Optimized**: Rich metadata, structured data, canonical URLs

## 🔧 Technical Details

### Architecture
```
Contentful (content) 
  ↓
lib/contentful.ts (fetch & parse)
  ↓
app/pricing/page.tsx (render)
  ↓
components/pricing-*.tsx (display)
  ↓
Browser (visible UI)
```

### Data Flow
1. Page requests pricing data at build/request time
2. `getPricingData()` fetches from Contentful
3. If Contentful unavailable, uses demo data as fallback
4. Components receive data and render pricing cards
5. All data comes from CMS—no hardcoded values

### Caching Strategy
- **Development**: Fresh data on each request
- **Production**: ISR with 60-second revalidation
- Changes to Contentful appear within 60 seconds

## 📱 Responsive Design

- **Mobile (< 640px)**: Single column
- **Tablet (640px - 1024px)**: Two columns
- **Desktop (> 1024px)**: Three columns
- All tiers visible and clickable on all devices

## 🔒 Security

- Environment variables stored securely
- Content Delivery API token used (read-only)
- No sensitive data exposed in frontend code
- Safe fallback to demo data if credentials missing

## 🚢 Deployment

Deploy to production with confidence:

```bash
# Build
pnpm build

# Deploy (Vercel, your hosting, etc.)
vercel deploy
```

Make sure these env vars are set in production:
- `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
- `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`

## 🐛 Troubleshooting

### Page shows 404?
- Ensure content is **Published** in Contentful (not Draft)
- Check `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` is correct
- Check `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN` has correct permissions

### Seeing demo data instead of real data?
- Create content models in Contentful
- Create and publish pricing entries
- Refresh the page

### Build fails?
- Run `pnpm build` to see the error
- Ensure environment variables are set correctly
- Check that content model API IDs are exactly `pricingPage` and `pricingTier`

## 📚 Resources

- **Contentful Docs**: https://www.contentful.com/developers/docs/
- **Next.js ISR**: https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
- **JSON-LD Schema**: https://schema.org/Offer
- **shadcn/ui**: https://ui.shadcn.com

## ✨ Next Steps

1. ✅ View demo pricing page
2. ✅ Set up Contentful content models
3. ✅ Create pricing content
4. ✅ Verify integration works
5. 📝 Add pricing link to navigation
6. 📝 Test on mobile devices
7. 📝 Deploy to production

## 💡 Tips

- **Keep button text short**: "Get Started", "Start Free Trial", "Contact Sales"
- **Prices as integers**: `29` not `"$29"` or `29.99`
- **Features as JSON array**: `["Feature 1", "Feature 2", "Feature 3"]`
- **One highlighted tier**: Only check "Highlighted" for the most popular plan
- **Order matters**: Set Order field to control tier position (1, 2, 3)

---

**Happy selling!** Your pricing page is ready to go. Update prices anytime in Contentful without touching code.
