# IntegrateWise Marketing Site — SEO & Branding Audit
**Auditor:** Senior Branding & SEO Specialist
**Date:** June 2026
**Site:** https://integratewise.ai

---

## EXECUTIVE SUMMARY

The IntegrateWise marketing site demonstrates **strong brand positioning** and **visual design consistency** but has **critical SEO infrastructure gaps** that will prevent organic discovery. The most urgent issue: the site is essentially invisible to search engines due to HashRouter architecture and missing page-level metadata.

### Severity Breakdown
| Severity | Count | Categories |
|----------|-------|------------|
| CRITICAL | 5 | SEO infrastructure, crawlability |
| HIGH | 8 | Content, UX, conversion |
| MEDIUM | 7 | Brand consistency, trust signals |
| LOW | 4 | Polish, optimization |

---

## PART A: CRITICAL ISSUES (Fix Immediately)

### A1. HashRouter Makes Site Uncrawlable [CRITICAL — SEO]

**Problem:** The site uses React HashRouter. Every URL is `https://integratewise.ai/#/page`. Search engines (Google, Bing) do NOT crawl or index hash-based URLs. The fragment (`#/`) is client-side only — it never reaches the server.

**Evidence:**
- Sitemap contains: `https://integratewise.ai/#/platform`
- Google Search Console would report zero indexed pages
- All 17 routes are invisible to crawlers

**Impact:** The entire site is invisible to organic search. Zero pages indexed. Zero organic traffic.

**Fix Options (in order of preference):**

**Option A: Switch to BrowserRouter + SPA prerendering (Recommended)**
Implement a prerendering solution like `react-snap`, `prerender.io`, or Cloudflare SSR. This generates static HTML for each route that crawlers can read while keeping the SPA experience for users.

**Option B: Switch to BrowserRouter with Netlify/Vercel redirect rules**
Configure `_redirects` or `vercel.json` to serve `index.html` for all routes. This is the simplest fix for static hosting.

**Option C: Migrate to Next.js**
Full server-side rendering with Next.js. Overkill for the current scope but the best long-term solution.

> **Immediate action:** Add a `_redirects` file to `/public/` with: `/* /index.html 200`

---

### A2. No Per-Page Document Titles [CRITICAL — SEO]

**Problem:** Every page displays the same static `<title>` from `index.html`: "IntegrateWise — B2B Integration & Workflow Automation Platform". No page updates `document.title`.

**Impact:** Search results show identical titles for all pages. Users can't distinguish pages. Google may deduplicate or rank pages lower.

**Required titles for each page:**

| Page | Current | Required Title |
|------|---------|----------------|
| Home | Same static | `IntegrateWise — One Connected Workspace for Humans and Their Digital Twin` |
| Platform | Same static | `Platform — The Orchestration & Data Control Plane \| IntegrateWise` |
| Features | Same static | `Features — Spine, Twin, Memory & Governance \| IntegrateWise` |
| Solutions | Same static | `Solutions — Account Success & Business Operations \| IntegrateWise` |
| Pricing | Same static | `Pricing — Starter from $49/seat/month \| IntegrateWise` |
| About | Same static | `About — Built from Conviction \| IntegrateWise` |
| Case Study | Same static | `Case Study — How the Spine Saved an $8M Account \| IntegrateWise` |
| Architecture | Same static | `Architecture — Six Pillars, One Spine \| IntegrateWise` |
| Twin | Same static | `Digital Twin — Not a Chatbot, Your Operational Companion \| IntegrateWise` |
| Governance | Same static | `Governance — Approval-First, Full Audit Trail \| IntegrateWise` |
| Security | Same static | `Security & Compliance — SOC 2, Encryption, Audit Logs \| IntegrateWise` |
| Integrations | Same static | `Integrations — Connect Your Entire Stack \| IntegrateWise` |
| FAQ | Same static | `FAQ — Questions Answered \| IntegrateWise` |
| Resources | Same static | `Resources — Guides, Case Studies & Documentation \| IntegrateWise` |

**Fix:** Create a `useDocumentTitle` hook and call it in each page component:

```tsx
// hooks/useDocumentTitle.ts
import { useEffect } from 'react';
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
```

---

### A3. No Per-Page Meta Descriptions [CRITICAL — SEO]

**Problem:** Same `<meta name="description">` on every page. Search engines use this for the snippet in results.

**Fix:** Add a `useMetaDescription` hook alongside the title hook:

```tsx
export function useMetaDescription(description: string) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }, [description]);
}
```

---

### A4. Sitemap Contains Uncrawlable URLs [CRITICAL — SEO]

**Problem:** `sitemap.xml` lists hash-based URLs (`/#/platform`) which search engines cannot crawl.

**Fix:** After switching to BrowserRouter (A1), update the sitemap to clean URLs:

```xml
<url>
  <loc>https://integratewise.ai/platform</loc>
  <priority>0.8</priority>
  <changefreq>weekly</changefreq>
  <lastmod>2026-06-01</lastmod>
</url>
```

Also add missing pages: `/twin`, `/governance`, `/workbench`, `/faq`, `/resources`, `/request-access`, `/terms`, `/privacy`

---

### A5. "Book Demo" CTA Confusion [CRITICAL — CONVERSION]

**Problem:** Every CTA says "Book Demo" but links to `/request-access`. The destination page title is "Request Early Access" — not "Book a Demo." This is a classic bait-and-switch that destroys trust.

**Evidence:**
- Header: "Book Demo" → `/request-access`
- Footer: "Book Demo" → `/request-access`
- Sticky bar: "Book a Demo" → `/request-access`
- Homepage hero: "Book a Demo" → `/request-access`
- But the form page says: "REQUEST EARLY ACCESS" (all caps, no "demo" language)

**Fix:** Align language everywhere. Two options:

**Option A (if it's actually a demo):**
- Rename page: "Book a Demo" / "Schedule Your Demo"
- Route: `/demo` or `/book-demo`
- Form: Name, email, company, preferred date/time, tools used
- CTA buttons: "Book a Demo" everywhere

**Option B (if it's actually early access/waitlist):**
- Change all CTAs to: "Request Early Access" or "Get Early Access"
- Keep route: `/request-access`
- This is more honest and sets correct expectations

**Recommendation:** Go with Option A for a B2B SaaS. Buyers expect to book demos. "Request access" sounds uncertain.

---

## PART B: HIGH-PRIORITY ISSUES

### B1. Missing Schema.org Structured Data [HIGH — SEO]

No JSON-LD structured data. This dramatically reduces rich snippet eligibility.

**Required schemas:**

```json
// Organization schema (add to all pages)
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IntegrateWise",
  "url": "https://integratewise.ai",
  "logo": "https://integratewise.ai/images/logo-dark.png",
  "description": "One connected workspace for humans and their Digital Twin.",
  "sameAs": [
    "https://linkedin.com/company/integratewise",
    "https://twitter.com/integratewise"
  ]
}
```

```json
// FAQPage schema (add to /faq page)
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is IntegrateWise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "..."
      }
    }
  ]
}
```

Also add: `SoftwareApplication` (for the product), `BreadcrumbList` (for navigation)

---

### B2. OG Tags Not Per-Page [HIGH — SEO/SOCIAL]

Current OG tags are hardcoded in `index.html` and reference the same title/image for every page. When sharing `/pricing` or `/case-study` on LinkedIn, the preview shows generic homepage content.

**Fix:** Update OG tags per page using the same hook pattern as document titles.

---

### B3. No Breadcrumb Navigation [HIGH — SEO/UX]

Missing breadcrumb nav. Important for:
- User orientation (especially on deeper pages like Architecture, Security)
- Google's breadcrumb rich snippets in search results

**Fix:** Add a Breadcrumb component above page content:

```
Home > Platform > Architecture
Home > Solutions > Account Success
```

---

### B4. Footer Use Case Links All Point to Same Page [HIGH — SEO/UX]

All 5 use case footer links (`Account Success`, `Business Operations`, `Team Handovers`, `Documentation`, `AI Workflows`) point to `/solutions`. This is:
1. Bad UX (users click different labels, land same page)
2. Wasted internal linking opportunity
3. Missed SEO (no dedicated pages to rank for specific solution keywords)

**Fix:** Create dedicated solution sub-pages OR use hash sections:

```tsx
// Option: Section anchors
{ label: 'Account Success', href: '/solutions#account-success' }
{ label: 'Business Operations', href: '/solutions#business-operations' }
```

Then update Solutions.tsx to scroll to sections and add id anchors.

---

### B5. Resource Links All Point to Generic Page [HIGH — UX]

Blog, Guides, Docs, Updates all link to `/resources`. Same problem as B4.

**Fix:** Add section anchors (`/resources#blog`) OR mark as "Coming Soon" with a tooltip.

---

### B6. Missing Trust Signals on Homepage [HIGH — CONVERSION]

A B2B buyer landing on the homepage sees zero social proof. No:
- Customer logos
- Testimonials/quotes
- "Trusted by X teams" social proof
- SOC 2 badge or compliance logos
- Case study metrics ("$8M saved" is buried on the About page)

**Fix:** Add a trust strip above the fold or in the hero section:

```
[Stripe logo] [Notion logo] [Slack logo] [Salesforce logo] +12 more
"Trusted by revenue teams at 50+ companies"
```

And move the $8M case study metric closer to the hero.

---

### B7. No Deduplication of Homepage Title Tag Words [HIGH — SEO]

Current title: "IntegrateWise — B2B Integration & Workflow Automation Platform"

The title tag starts with the brand name. For a site with low domain authority, the homepage should lead with the value proposition, not the brand.

**Fix:** `One Connected Workspace for Humans and Digital Twins | IntegrateWise`

This front-loads the search-relevant keywords.

---

### B8. Missing Internal Link from Homepage to Deep Pages [HIGH — SEO]

The homepage (highest authority page) has very few contextual links to deep pages. Most links are CTAs to `/request-access`. The architecture page, twin page, and governance page get zero homepage link equity.

**Fix:** Add contextual inline links within homepage body copy:
- "The Five Pillars" section → link to `/architecture`
- "Digital Twin" section → link to `/twin`
- "Governance" mention → link to `/governance`

---

## PART C: MEDIUM-PRIORITY ISSUES

### C1. Tagline Inconsistency Across Pages [MEDIUM — BRAND]

Different taglines appear on different pages:
- **Homepage hero:** "Shared memory, governance, and continuity across every tool, AI, and operation."
- **Homepage body:** "IntegrateWise creates a shared Spine where humans and AI work from the same context, the same memory, and the same operational context."
- **Features page:** "unified operational reality with governed continuity"
- **Footer:** "One connected, Spine-powered workspace for humans and their Digital Twin"
- **About page:** "Built from conviction, not speculation"

**Fix:** Pick ONE primary tagline and use it everywhere:

**Recommended unified tagline:**
> "One connected workspace for humans and their Digital Twin — with shared memory, governance, and continuity across every tool, AI, and operation."

This should appear:
- Homepage hero subtitle
- Meta description
- OG description
- Footer description
- Pricing page intro

---

### C2. "Context" vs "Truth" Remnants [MEDIUM — BRAND]

The recent terminology change from "truth" to "context" has left some awkward phrasing:
- "CANONICAL SOURCE OF CONTEXT" (SVG) — grammatically awkward
- "operational context" used 3x in one paragraph
- "context" appears 7+ times on the homepage alone

**Fix:** Vary the language. Not everything needs to say "context."
- "CANONICAL CONTEXT LAYER" (not "source of context")
- "operational reality" (alternate)
- "shared understanding" (alternate)
- "connected state" (alternate)

---

### C3. No LinkedIn/Twitter Links in Footer [MEDIUM — BRAND]

The footer has no social media links. For a B2B company, LinkedIn presence is essential.

**Fix:** Add social icons row above copyright:
```
[LinkedIn icon] [Twitter/X icon] [GitHub icon (if OSS)]
```

---

### C4. Missing Hreflang Tags [MEDIUM — SEO]

Single-language site (English). Not critical now, but if expanding to other markets:

**Fix:** Add `<html lang="en">` (already present) and consider:
```html
<link rel="alternate" hreflang="en" href="https://integratewise.ai/" />
```

---

### C5. Image Alt Text Gaps [MEDIUM — SEO/ACCESSIBILITY]

Some images have good alt text. Others are missing:
- Twin Workbench image on Architecture page: has descriptive alt ✓
- Portfolio overview on Workbench page: needs review
- Surface tab images: uses `surfaceLabels[activeSurface]` as alt — functional but could be more descriptive

**Fix:** Ensure every `<img>` has descriptive alt text that describes what's visible in the image, not just the page it links to.

---

### C6. No Keyword-Rich URLs for Solutions [MEDIUM — SEO]

`/solutions` is a generic URL. Better:
- `/solutions/account-success`
- `/solutions/business-operations`
- `/solutions/team-handovers`

This enables ranking for long-tail solution keywords.

---

### C7. Missing "How It Works" Visual on Platform Page [MEDIUM — UX]

The Platform page has the Control Plane architecture diagram (excellent), but the "How It Works" section is text-only. A visual flow diagram showing Connect → Normalize → Orchestrate → Operate would strengthen understanding.

---

## PART D: LOW-PRIORITY POLISH

### D1. Sitemap Missing Lastmod Dates [LOW — SEO]

Add `<lastmod>` and `<changefreq>` to sitemap entries. Signals freshness to crawlers.

### D2. Canonical URL Points to Production [LOW — SEO]

The canonical URL is `https://integratewise.ai/` — correct for production, but if the site is served from a different domain (e.g., the current Kimi deployment), the canonical won't match. Ensure canonical updates when the production domain is finalized.

### D3. No 404 Page [LOW — UX]

Missing a custom 404 page. Default browser 404 breaks the experience.

**Fix:** Add a `NotFound.tsx` page:
```tsx
<Route path="*" element={<NotFound />} />
```

### D4. Mobile Menu Missing Active State [LOW — UX]

The mobile menu doesn't show which page is active (no highlighted state like desktop has with `location.pathname === link.href`).

---

## PART E: BRAND POSITIONING ASSESSMENT

### What Works Exceptionally Well

1. **Differentiated positioning:** "One connected workspace for humans and their Digital Twin" is genuinely unique. It avoids the overcrowded "AI automation" category and creates a new mental model.

2. **Origin story:** The $8M account story on the About page is compelling, specific, and credible. This should be more prominent — possibly on the homepage.

3. **Terminology system:** Spine, Twin, Memory, Governance, Continuity — this is a coherent vocabulary that builds a world. Consistent use across pages strengthens brand recall.

4. **Design language:** The Paper/Forest/Gold palette with heavy borders is distinctive and premium. It doesn't look like every other SaaS site. The editorial typography (Bebas Neue + DM Serif Display + IBM Plex Mono) is sophisticated.

5. **"Surfaced by Spine" badge:** Excellent micro-branding moment. Creates a sense of intelligence and continuity.

### Brand Weaknesses

1. **No competitive differentiation narrative:** The site never mentions competitors or categories (MuleSoft, Zapier, Workato, Unito). Buyers need to know: "Why this instead of what I'm already considering?"

2. **Missing category definition:** What IS IntegrateWise in a category buyers already know? "Control plane" is used but not explained in buyer terms. Is it a CDP? iPaaS? Workflow automation? The answer seems to be "none of the above — it's a new category" — but that needs to be stated explicitly.

3. **Founder identity buried:** The About page has a powerful origin story, but the founder has no name, no photo, no LinkedIn link. For a conviction-driven brand, the founder IS the trust signal.

4. **No social proof:** Zero testimonials, zero customer logos, zero G2/Capterra badges. For a B2B SaaS at $49-$89/seat, this is a major conversion barrier.

---

## PART F: RECOMMENDED PRIORITY ROADMAP

### Week 1: Fix Crawlability & Metadata
1. Switch from HashRouter to BrowserRouter + redirect rules
2. Create `useDocumentTitle` + `useMetaDescription` hooks
3. Add unique titles and descriptions to all 17 pages
4. Fix sitemap.xml with clean URLs
5. Fix "Book Demo" CTA inconsistency

### Week 2: Structured Data & Social
6. Add Organization schema to all pages
7. Add FAQPage schema to /faq
8. Add SoftwareApplication schema to /platform
9. Add per-page OG tags
10. Add BreadcrumbList schema + visual breadcrumbs

### Week 3: Content & Internal Linking
11. Add trust signals (SOC 2 badge, metrics strip, $8M story on homepage)
12. Fix footer links (use section anchors)
13. Add contextual internal links on homepage
14. Unify tagline across all pages
15. Add 404 page

### Week 4: Conversion Optimization
16. Add founder name, photo, LinkedIn to About page
17. Add customer testimonial quotes (even if anonymized initially)
18. Add "Compare" section (vs iPaaS, vs workflow tools, vs CDP)
19. Add LinkedIn/Twitter to footer
20. Add "Trusted by" logo strip

---

## APPENDIX: PAGE-BY-PAGE SCORECARD

| Page | H1 | Unique Title | Meta Desc | Internal Links | Alt Text | Score |
|------|-----|-------------|-----------|----------------|----------|-------|
| Home | Yes | No | No | Poor | Good | C |
| Platform | Yes | No | No | Good | Good | C+ |
| Features | Yes | No | No | Good | N/A | C+ |
| Solutions | Yes | No | No | Fair | N/A | C+ |
| Pricing | Yes | No | No | Good | N/A | C+ |
| About | Yes | No | No | Good | N/A | C+ |
| Case Study | Yes | No | No | Good | N/A | C+ |
| Architecture | Yes | No | No | Good | Yes | C+ |
| Twin | Yes | No | No | Good | Yes | C+ |
| Governance | Yes | No | No | Good | Yes | C+ |
| Security | Yes | No | No | Good | Yes | C+ |
| Integrations | Yes | No | No | Good | Yes | C+ |
| FAQ | Yes | No | No | Good | N/A | C+ |
| Resources | Yes | No | No | Good | N/A | C+ |
| Terms | Yes | No | No | Poor | N/A | D+ |
| Privacy | Yes | No | No | Poor | N/A | D+ |
| Request Access | Yes | No | No | Good | N/A | C |

**Overall Grade: C (Good brand, broken SEO infrastructure)**

After implementing all critical fixes: **A- (Strong brand + functional SEO)**
