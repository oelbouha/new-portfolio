# SEO Inspection & Analysis Report

**Project**: Outman Elbouhali Portfolio (`https://www.outmanelbouhali.online`)  
**Audit Source**: Seobility Score 53% Remediation  
**Date**: November 2026  

---

## 1. Project Architecture & Environment

| Property | Value / Status |
|---|---|
| **Next.js Version** | `16.4.5` (Turbopack, React 19.2.0) |
| **Routing Architecture** | App Router (`app/src/app`) |
| **Language** | TypeScript 5.9.3 (`tsconfig.json`, `next.config.ts`) |
| **Styling System** | Tailwind CSS 3.4.19, CSS Variables, Radix UI Primitives |
| **Animation Engines** | GSAP 3.15, Lenis Smooth Scroll, Framer Motion |
| **Deployment Target** | Vercel (`app/vercel.json` present) |

> [!NOTE]
> The repository was recently refactored from a Vite single-page application to Next.js App Router. The historical Seobility 53% score resulted from crawling the previous Vite SPA HTML output (a 2.3 kB shell with 0 words in raw HTML, no server-rendered headings, and long static metadata). In addition, `vercel.json` contains legacy SPA rewrite rules that will be cleaned up.

---

## 2. Server-Rendered HTML Inspection Findings

Inspection of the production build (`npm run build`) and raw HTML (`index.html`):

| Check Item | Current State | Target Requirement | Status |
|---|---|---|---|
| **Raw HTML Headings** | 1 `<h1>`, 3 `<h2>`, 0 `<h3>` | 1 `<h1>`, logical `<h2>`s per section | ⚠️ Needs semantic structure |
| **H1 Text** | `"Full Stack Web and Mobile App Development — Outman Elbouhali I BUILD DIGITAL PRODUCTS"` (split across sr-only and hero words) | `"Full Stack Web & Mobile Developer"` | ⚠️ Needs clean single H1 |
| **Paragraphs (`<p>`)** | **Only 1 `<p>` element** on the entire page | Multiple `<p>` & `<li>` containing **250+ words of real body text** | ❌ Failing (text in raw HTML is mostly navigation/labels) |
| **Home Sections** | `HeroSection`, `VideoSection`, `IntroSection`, `PlaygroundSection`, `ServicesSection`, `Footer`. (`AboutSection` was omitted) | Include About content, Service descriptions, Project context | ⚠️ Key copy missing from home |
| **Meta Title** | `"Full Stack Web & Mobile App Development \| Outman Elbouhali"` (58 chars) | `"Outman Elbouhali \| Full Stack Web & Mobile Developer"` (~51 chars) | ⚠️ Needs exact target text |
| **Meta Description** | `"Independent Full Stack Developer specializing in custom web development, Flutter cross-platform mobile apps, Django APIs, and n8n workflow automation."` (150 chars) | `"Full stack developer building web and mobile apps with React, Next.js and Flutter. I help startups and SaaS teams build, launch and scale their MVP fast."` (~153 chars) | ⚠️ Needs exact target text |
| **Internal Links** | Header, Fullscreen Menu, Footer | Main navigation + anchor links + section routes | ⚠️ Expand anchor navigation |
| **External Links** | GitHub, LinkedIn (rel="noopener noreferrer") | Verified; add any missing social/profile links | ✅ Available in footer |
| **Sitemap & Robots** | `app/src/app/sitemap.ts`, `app/src/app/robots.ts`, plus static files in `public/` | 200 OK responding with proper base URL | ✅ Ready (needs sync) |
| **JSON-LD Schema** | `Person` & `WebSite` rendered via `<JsonLd>` | Person (with `sameAs`, `jobTitle`, `url`) + WebSite | ✅ Present |
| **Favicon & Icons** | `/images/icon.png` referenced in layout | Favicon & Apple touch icon working | ✅ Intact |

---

## 3. Root Cause Analysis of Seobility Audit Findings

1. **Word Count & Paragraphs**:
   - The homepage omitted `AboutSection` (`app/src/sections/home/AboutSection`), which houses Outman's biographical and technical copy.
   - Services in `ServicesSection` only rendered service titles in `<span>` tags without introductory paragraphs or capability lists.
   - Result: Crawlers see fewer than 20 words in semantic text tags (`<p>`), despite the visual richness.
2. **H1 Alignment**:
   - The H1 combines an `sr-only` tag with hero display words ("I BUILD DIGITAL PRODUCTS"), confusing search engines about the actual primary keyword hierarchy.
3. **Keyword Matching**:
   - The title keywords ("Full Stack", "Web", "Mobile", "Developer", "React", "Flutter", "MVP", "Startups") are not adequately represented in the initial server-rendered paragraphs on the home page.
4. **Vercel Rewrite Risk**:
   - Legacy `app/vercel.json` has `{"source": "/((?!.*\\..*).*)", "destination": "/index.html"}`, which was used for Vite SPA client routing and could override Next.js App Router server responses on Vercel.

---

## 4. Phase 2 Implementation Plan

### Step 1: Server-Rendered Content & Semantic Structure
- **H1 Heading**: Set the single `<h1>` cleanly to:
  `Full Stack Web & Mobile Developer`
  Preserve the exact visual hero typography and GSAP animations while ensuring the `<h1>` is semantically exact.
- **Section Headings (`<h2>`)**:
  - `Hero / Intro`: `Full Stack Web & Mobile Developer` (`<h1>`) + Intro statement
  - `About Section`: Add `AboutSection` to `page.tsx` with `<h2>About Outman Elbouhali</h2>` and rich paragraphs detailing React, Next.js, Flutter, Django, and MVP development for startups and SaaS.
  - `Services Section`: Add an `<h2>Services & Expertise</h2>` heading, and include semantic `<p>` / `<li>` descriptions for each service (Custom Web Apps, Flutter Mobile, Django Backend, n8n Automation, WordPress).
  - `Playground / Projects Section`: Ensure section has `<h2>Featured Projects</h2>` with descriptive project text.
  - `Contact / CTA Section`: Ensure `<h2>Let's Build Together</h2>` with contact details.
- **Word Count Guarantee**:
  - Ensure 350+ words of real, human-written copy inside `<p>` and `<li>` elements in the server-rendered HTML.
  - Reuse authentic data from `app/src/data/pages/home.ts`, `app/src/data/pages/about.ts`, and `app/src/data/services/`.
  - Zero placeholder fabrication — mark any missing detail with `TODO`.

### Step 2: Metadata & Keyword Optimization
- Update `app/src/data/pages/home.ts` and `app/src/app/layout.tsx`:
  - **Title**: `Outman Elbouhali | Full Stack Web & Mobile Developer` (51 characters, within 55-60 char / 580 px limit).
  - **Description**: `Full stack developer building web and mobile apps with React, Next.js and Flutter. I help startups and SaaS teams build, launch and scale their MVP fast.` (153 characters, within 150-160 char / 1000 px limit).
  - Ensure title words (`Full Stack`, `Web`, `Mobile`, `Developer`, `React`, `Flutter`, `MVP`) are naturally used in the `<h1>` and opening `<p>` paragraph.
  - Keep `metadataBase: https://www.outmanelbouhali.online`, `canonical: "/"`, `lang="en"`.
  - Reference Open Graph image (pointing to `/og.png` / `/opengraph-image`).

### Step 3: Links & Semantic Landmarks
- Add semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- Ensure internal anchor links (`#services`, `#projects`, `#about`, `#contact`) and route links (`/services`, `/work`, `/about`) are crawlable in the raw HTML.
- Verify all external links (GitHub, LinkedIn) have `rel="noopener noreferrer"`.
- Ensure footer social links are crawlable.

### Step 4: Technical SEO Clean-up & Verification
- Clean up legacy rewrite in `app/vercel.json` so Vercel doesn't rewrite dynamic Next.js routes to `/index.html`.
- Verify `sitemap.ts` and `robots.ts` build cleanly and pass Next.js route tests.
- Re-run `npm run build && node scripts/check-seo.cjs`.
- Test raw server output with `curl` to verify word count, headings, and metadata.
