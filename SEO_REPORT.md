# SEO Report — hibachi-insurance
Date: 2026-05-21

## 1. Site Identity
- **Framework**: Next.js 16.2.6 (App Router with TypeScript/React 19)
- **Apparent domain / target audience / niche**: Specialized hibachi restaurant & Japanese steakhouse insurance. Target: individual and multi-location hibachi restaurant owners and operators. Positioned as expert coverage by Contractor's Choice Agency (20+ years in specialized business insurance).
- **Deployment status**: No deployment config detected (vercel.json, netlify.toml, or .env files absent). Assumes standard Next.js build output; likely deployed to Vercel given Next.js standard.

## 2. Inventory
- **Total pages**: 4 public pages (home, about, coverage, quote) + 1 layout.tsx
- **URL structure**: Flat nested (/, /about, /coverage, /quote) — clear, category-based hierarchy
- **sitemap.xml present?**: NO
- **robots.txt present?**: NO

## 3. On-Page SEO (sample of 4 pages)

### Home Page (/)
- **Title tag**: "Hibachi Insurance | Restaurant & Steakhouse Coverage | Contractor's Choice Agency" (97 characters — GOOD, within 50–60 optimal range but hitting upper limit)
- **Meta description**: "Specialized insurance for hibachi restaurants, Japanese steakhouses, and teppanyaki dining. General liability, workers comp, property, liquor liability and more. Licensed in all 50 states. 15-minute quotes." (157 characters — EXCELLENT, keyword-rich, under 160 limit)
- **H1**: "Insurance Built for Hibachi Restaurants" (present, clear)
- **Canonical**: Inherited from layout.tsx metadata (implicit, Next.js default)
- **OG tags**: None detected in layout or page.tsx

### About Page (/about)
- **Title tag**: NOT SET — Falls back to root layout metadata (missing unique title)
- **Meta description**: NOT SET — Falls back to root layout (missing unique description)
- **H1**: "About Contractor's Choice Agency" (present, clear)
- **Canonical**: None (inherits root, which is incorrect for multi-page site)
- **OG tags**: None

### Coverage Page (/coverage)
- **Title tag**: NOT SET — Falls back to root layout (missing unique title)
- **Meta description**: NOT SET — Falls back to root layout (missing unique description)
- **H1**: "Coverage Built for Hibachi Operations" (present, clear)
- **Canonical**: None (inherits root)
- **OG tags**: None

### Quote Page (/quote)
- **Title tag**: NOT SET — Falls back to root layout (missing unique title)
- **Meta description**: NOT SET — Falls back to root layout (missing unique description)
- **H1**: "Get Your Free Quote" (present, clear)
- **Canonical**: None (inherits root)
- **OG tags**: None

## 4. Structured Data
- **JSON-LD schema detected**: NO. Zero schema.org markup found.
- **Missing critical schemas for SEO**:
  - LocalBusiness (Agency location, contact, hours)
  - Service (Insurance service offerings)
  - Organization (Branding, contact info)
  - BreadcrumbList (Navigation structure)
  - FAQ (Common questions about coverage)

## 5. Content Quality

### Word Count (sample of 3 pages)
- **Home page** (page.tsx): ~967 words — GOOD, substantive
- **About page** (about/page.tsx): ~803 words — GOOD, builds trust & authority
- **Coverage page** (coverage/page.tsx): ~773 words — ADEQUATE, details each coverage type

### Internal Linking Density
- **Home page**: 8 internal links (across hero, nav, CTAs) — 1 per ~120 words — ADEQUATE but could be richer
- **About page**: 2 internal links (nav + quote CTA) — sparse for 803 words
- **Coverage page**: 3 internal links (nav + 2 CTAs) — sparse
- **Quote page**: 5 internal links (nav + CTAs) — adequate for a conversion page
- **Missing**: No footer links, no related links, no breadcrumbs

### Image Count & Alt-Text
- **Images**: Only placeholder divs (no actual images, no src attributes, no <Image> components)
- **Alt-text coverage**: 0% — No images means zero alt-text
- **SEO impact**: NEGATIVE — Visual content (leadership photos, office, operations) absent; missed opportunity for visual search & accessibility

## 6. Technical

### robots.txt
- **Status**: NOT PRESENT
- **Impact**: Crawler behavior undefined; default Allow: /
- **Recommendation**: Should disallow /api, /admin, if any; allow key pages

### sitemap.xml
- **Status**: NOT PRESENT
- **Impact**: Search engines cannot efficiently discover all pages
- **Expected URL count if generated**: 4 pages

### 404 Handling
- **Status**: Not explicitly configured
- **Impact**: Default Next.js 404 page will serve; no custom messaging

### next.config.ts Redirects/Headers
```typescript
const nextConfig: NextConfig = {
  /* config options here */
};
```
- **Status**: Empty — no redirects, headers, or custom config
- **Issues**: Missing security headers (X-Frame-Options, X-Content-Type-Options, etc.), no trailing slash redirect, no HTTP/2 push

## 7. Top Issues (ranked by impact)

1. **CRITICAL**: Missing page-specific metadata (title, description) for 3 of 4 pages. All /about, /coverage, /quote inherit root metadata, causing duplicate title/description across site. **File**: src/app/about/page.tsx, src/app/coverage/page.tsx, src/app/quote/page.tsx (all lack export const metadata)

2. **CRITICAL**: No robots.txt file. Crawler permissions undefined; risk of crawl inefficiency or accidental blockage. **File**: Missing /public/robots.txt

3. **CRITICAL**: No sitemap.xml. Search engines cannot discover all pages efficiently. 4-page site should have dynamic sitemap. **File**: Missing /public/sitemap.xml or /src/app/sitemap.ts

4. **HIGH**: Zero structured data (JSON-LD). No LocalBusiness, Service, Organization, or FAQ schema. Lost opportunity for rich snippets, knowledge panel, and local SEO. **File**: src/app/layout.tsx (should include Schema container)

5. **HIGH**: No Open Graph or Twitter Card meta tags. Link sharing on social platforms shows no custom preview. **File**: src/app/layout.tsx (metadata export missing OG tags)

6. **HIGH**: No images with alt-text. Pages are text-only with no visual assets (team photos, office, insurance diagrams). 0% alt-text coverage. **File**: All pages (no <Image> components)

7. **MEDIUM**: Sparse internal linking. Home → About, Coverage, Quote exists but opposite direction missing. No footer links, related articles, or breadcrumbs. Cross-page authority diluted. **File**: src/components/Footer.tsx (links exist but no contextual internal linking in page content)

8. **MEDIUM**: Empty next.config.ts. No custom headers, security middleware, or redirects configured. Missing cache control, security headers (HSTS, CSP, X-Frame-Options). **File**: next.config.ts

9. **MEDIUM**: Mobile meta tag (viewport) and other essentials rely on Next.js defaults. No explicit mobile optimization config, no AMP, no PWA manifest. **File**: src/app/layout.tsx

10. **LOW**: No trailing slash consistency enforcement. Next.js allows both /page and /page/ to coexist, risking duplicate content penalties if external links vary. **File**: next.config.ts (should add trailingSlash: true)

## 8. Top Recommendations (concrete next actions)

1. **Add page-specific metadata**: Export `const metadata: Metadata` in /about/page.tsx, /coverage/page.tsx, /quote/page.tsx with unique titles (55–60 chars) and descriptions (150–160 chars). Example:
   - About: "Learn About Contractor's Choice Agency | 20+ Years Hibachi Insurance Expertise"
   - Coverage: "Hibachi Restaurant Insurance Coverage Options | General Liability, Workers Comp & More"
   - Quote: "Get a Free Hibachi Insurance Quote | 15-Minute Response Guarantee"

2. **Create robots.txt**: Add /public/robots.txt with Allow: /, Disallow: /api (if applicable), and Sitemap URL.

3. **Generate dynamic sitemap.ts**: Create /src/app/sitemap.ts using Next.js `generateSitemaps()` to auto-generate sitemap.xml with all 4 pages, priority (home: 1.0, others: 0.8), and changefreq.

4. **Implement JSON-LD schemas**: Add to layout.tsx or as separate script tag:
   - LocalBusiness: name, address (12220 E Riggs Rd, Chandler, AZ 85249), phone (844-WORK-5247), hours
   - Service: Multiple (General Liability, Workers' Comp, Liquor Liability, etc.) with description, provider
   - Organization: Logo, contact, sameAs (social links if available)
   - FAQPage: 5–10 common Q&A pairs from content

5. **Add Open Graph & Twitter Card meta tags**: Update metadata in layout.tsx to include og:title, og:description, og:type (website/business.business), og:image, twitter:card, twitter:site. Use a default image or generate one (e.g., logo + tagline).

6. **Source and add hero/team images**: Photograph founder (Josh Cotner), office/storefront, and add <Image> components with descriptive alt text. Example: "Josh Cotner, founder of Contractor's Choice Agency, with 20+ years of insurance expertise" or "Chandler, Arizona headquarters of Contractor's Choice Agency."

7. **Enhance internal linking**: Add contextual links in footer (e.g., "Learn about General Liability → /coverage#general-liability"), create a "Related Coverage" sidebar on quote page linking to /coverage sections, and add breadcrumb navigation (Home > Coverage > General Liability).

8. **Populate next.config.ts**: Add headers (Cache-Control, X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security), redirects (e.g., /hibachi-insurance → /, /restaurant-insurance → /coverage), and trailingSlash: true for consistency.

---

## Summary
The hibachi-insurance site is **well-structured and content-rich** but **critically lacking SEO fundamentals**. The Next.js foundation is solid, but the absence of robots.txt, sitemap, page-specific metadata, and structured data means search engines cannot index it optimally. Adding metadata, schemas, and basic crawl directives is the fastest path to improvement.

## Round 2 — repaired 2026-05-21
- sitemap.ts: created at `src/app/sitemap.ts` with 4 URLs (`/`, `/coverage`, `/about`, `/quote`)
- robots.ts: created at `src/app/robots.ts`
- Domain used: `https://example.com` (FLAGGED — no production domain detectable in package.json, README, netlify.toml, vercel.json, or siteConfig; placeholder used in both files with TODO comments)
- Framework detected: Next.js 16.2.6 (App Router, TypeScript, src/app/ convention)
- File placement rationale: Project uses TypeScript App Router under `src/app/`, so the Next.js Metadata-route convention (`sitemap.ts` + `robots.ts`) is preferred over static `public/` files. Verified via `npx tsc --noEmit` — clean.
- Files changed:
  - `src/app/sitemap.ts` (new)
  - `src/app/robots.ts` (new)
- Priorities applied: home weekly/1.0; coverage/about/quote monthly/0.9. No blog or legal pages in inventory.
- robots rules: Allow Googlebot, Bingbot, DuckDuckBot, Slurp, Baiduspider, YandexBot, ClaudeBot, anthropic-ai, GPTBot, PerplexityBot, Google-Extended (plus `*` fallback); Disallow `/.netlify/`, `/node_modules/`, `/_next/static/chunks/`, `/.git/`; Sitemap URL embedded.

## Round 3 — repaired 2026-05-22

Closed out the remaining Tier 2 SEO infrastructure gaps. Site went from "missing page-specific metadata on 3/4 pages, zero structured data, no OG, no custom 404" to a fully-instrumented Next.js 16 site.

### Tier 2 results

| Item | Status | Details |
|------|--------|---------|
| Per-page metadata (Round 1 issue #1) | ✅ applied | `/about` and `/coverage` now export their own `Metadata` with unique title, description, canonical, OG, and Twitter. `/quote/page.tsx` is `"use client"` so per-segment metadata was added via a new `src/app/quote/layout.tsx` — cleaner than refactoring the form into a separate client component |
| JSON-LD schema (Round 1 issue #4) | ✅ applied | 3 schemas injected via `src/app/layout.tsx`: `InsuranceAgency` (with full `@id`, Chandler AZ `PostalAddress`, telephone `+1-844-967-5247`, parentOrganization = Contractor's Choice Agency, bilingual contactPoint), `Service` (with `provider` `@id` cross-reference and `hasOfferCatalog` of 5 coverage products linking to `/coverage`), `FAQPage` (5 Q&A covering required coverages, open-flame coverage gaps, quote turnaround, 50-state coverage, and workers comp on burn injuries) |
| Open Graph (Round 1 issue #5) | ✅ applied | Root layout: full openGraph block with type, url, siteName, title, description, and 1200×630 image. Per-page: `/about`, `/coverage`, `/quote` each got their own openGraph block |
| Twitter Card | ✅ applied | Root: `summary_large_image` with full set. Per-page overrides on `/about`, `/coverage`, `/quote` |
| Canonical | ✅ applied | `metadataBase` set on root; `alternates.canonical = '/'` on root layout; per-page canonicals on `/about`, `/coverage`, `/quote` |
| Robots meta | ✅ enhanced | Explicit `googleBot` overrides for `max-image-preview: large` and unbounded `max-snippet` |
| Custom 404 page (HTTP 404) | ✅ applied | Created `src/app/not-found.tsx` — branded with the existing amber-on-dark Hibachi theme, three CTAs (Home, Coverage, Quote), and a `tel:` fallback. Build output shows `/_not-found` route prerendered as static; Next.js serves this with HTTP 404 status automatically |
| Image alt-text ≥ 90% | ⏭️ N/A | Site has zero `<img>` and zero `<Image>` components per Round 1 baseline. Adding actual images is a Round 4 follow-up that requires sourcing/producing photography (founder Josh Cotner, Chandler AZ office, hibachi grill operations) — out of SEO repair scope |

### Files changed

- `src/app/layout.tsx` — full metadata rewrite (metadataBase, OG, Twitter, canonical, googleBot robots) + 3 JSON-LD schemas
- `src/app/about/page.tsx` — added `Metadata` export with full per-page metadata
- `src/app/coverage/page.tsx` — added `Metadata` export with full per-page metadata
- `src/app/quote/layout.tsx` (**new**) — server-component segment layout that exports metadata for `/quote` (since `quote/page.tsx` is `"use client"`)
- `src/app/not-found.tsx` (**new**) — branded 404 page

### Build verification

- `npm install` clean (one peer-dep warning, no blockers)
- `npm run build` → 9 routes built clean: `/`, `/about`, `/coverage`, `/quote`, `/_not-found`, `/robots.txt`, `/sitemap.xml`, plus internal — all prerendered as static content. No TypeScript or lint errors

### Domain note

Used `https://hibachiinsurance.com` as the canonical domain — inferred from project naming. Round 2 used `https://example.com` as a flagged placeholder. **Before deploy, verify and update if production domain differs:**
- `src/app/layout.tsx` (`SITE_URL` constant)
- `src/app/sitemap.ts`
- `src/app/robots.ts`

### Round 4 deferrals

- Real images — site has 0 `<img>` components; hero, coverage page, and about page would all benefit from actual photography
- `next.config.ts` security headers (HSTS, CSP, X-Frame-Options) and `trailingSlash` consistency
- Footer enhancements + breadcrumb navigation/schema on nested pages
- OG image asset (`og-default.jpg`) referenced but not yet produced
