# Sakib Global Trading — Shawket & Son's Trading

A production-ready, multilingual (English / Indonesian / Bangla) import–export company website
built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

The brand is intentionally premium and international-B2B — white / green / dark accents,
Playfair Display for headings, Inter for body copy, Hind Siliguri for Bangla.

---

## Tech stack

- **Next.js 14** (App Router, Metadata API, sitemap/robots)
- **TypeScript** in strict mode
- **Tailwind CSS 3** with a custom `brand` palette and component classes
- **React 18** (client-side language context for instant language switching)
- No database / CMS — content lives in typed translation files, easy to edit

---

## Getting started

```bash
# 1. Install
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm run start
```

No environment variables are required for local development.

For production, you can optionally set:

| Variable               | Purpose                                         | Default                             |
| ---------------------- | ----------------------------------------------- | ----------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Base URL used in metadata, sitemap and robots  | `https://sakibglobaltrading.com`    |

Deploy anywhere that supports Next.js (Vercel, Netlify, self-hosted Node). Vercel is the
simplest: push the repo, import it in Vercel, done.

---

## File / folder structure

```
.
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── package.json
├── public/
│   └── favicon.svg                     # Placeholder wordmark icon
└── src/
    ├── app/
    │   ├── layout.tsx                  # Root layout (<html>, providers, header, footer)
    │   ├── page.tsx                    # Home page
    │   ├── globals.css                 # Tailwind layers + component classes
    │   ├── sitemap.ts                  # /sitemap.xml (SEO)
    │   ├── robots.ts                   # /robots.txt  (SEO)
    │   ├── not-found.tsx               # 404 page
    │   ├── about/
    │   │   ├── page.tsx                # Server wrapper → exports <metadata>
    │   │   └── View.tsx                # Client UI
    │   ├── products/{page,View}.tsx
    │   ├── services/{page,View}.tsx
    │   ├── why-choose-us/{page,View}.tsx
    │   └── contact/{page,View}.tsx
    ├── components/                     # Reusable UI
    │   ├── Header.tsx                  # Sticky header + mobile menu + language switcher
    │   ├── Footer.tsx
    │   ├── LanguageSwitcher.tsx
    │   ├── Logo.tsx
    │   ├── Hero.tsx
    │   ├── IntroSection.tsx
    │   ├── FeaturedProducts.tsx
    │   ├── ProductCard.tsx
    │   ├── WhyUsSection.tsx
    │   ├── Testimonials.tsx            # Placeholder partnership/quotes section
    │   ├── CTASection.tsx              # "Request a Quote" block
    │   ├── ContactTeaser.tsx
    │   ├── WhatsAppButton.tsx          # Floating WhatsApp CTA
    │   ├── InquiryForm.tsx             # Buyer/supplier inquiry form (client-validated)
    │   ├── PageHero.tsx
    │   ├── SectionHeading.tsx
    │   └── Reveal.tsx                  # Scroll-in animation wrapper
    ├── i18n/
    │   ├── config.ts                   # Locale list + labels
    │   ├── LanguageProvider.tsx        # React context, persists choice in localStorage
    │   └── translations/
    │       ├── index.ts                # Registers every dictionary
    │       ├── en.ts                   # Source of truth (exports `Dictionary` type)
    │       ├── id.ts                   # Bahasa Indonesia
    │       └── bn.ts                   # বাংলা
    └── lib/
        └── products.ts                 # Product catalogue (data-only)
```

---

## How the i18n works

- A typed dictionary is defined by `src/i18n/translations/en.ts`. The `Dictionary`
  type is exported from that file — every other language file must satisfy it, so if
  you add a new key it's a compile-time error to forget the translation elsewhere.
- `LanguageProvider` exposes `{ locale, setLocale, t }` via React context.
- The chosen locale is persisted to `localStorage` (`sst-locale`) and `<html lang>`
  is kept in sync for accessibility and SEO.
- The switcher in the header is visible on every page on mobile and desktop.

### Adding a new language

1. Pick an ISO code, e.g. `ar` for Arabic.
2. Add it to `locales` and `localeLabels` in `src/i18n/config.ts`.
3. Copy `src/i18n/translations/en.ts` into `src/i18n/translations/ar.ts`, translate
   every value, and export `const ar: Dictionary = { ... }`.
4. Register it in `src/i18n/translations/index.ts`:
   ```ts
   import { ar } from "./ar";
   export const dictionaries = { en, id, bn, ar };
   ```
5. (Optional) For RTL languages set the direction in the provider — the provider
   already syncs `<html lang>`, add a `dir` attribute update if needed.

### Adding a new product

1. Add a new entry under `products.items.<key>` in **every** translation file
   (`en.ts`, `id.ts`, `bn.ts`) — e.g. `coffeeBeans: { name: "...", desc: "..." }`.
2. Add a matching row to the array in `src/lib/products.ts`:
   ```ts
   {
     id: "coffee-beans",
     translationKey: "coffeeBeans",
     imageId: "1559056199-641a0ac8b55e", // Unsplash photo id (see below)
     featured: true
   }
   ```
3. If it should appear on the home page, set `featured: true`. Current vs. upcoming
   is controlled by the `upcoming` flag.

**Product photos** — Cards use `next/image` with URLs built from `imageId`. By default
these point to **Unsplash** (real photography, royalty-free under the [Unsplash
License](https://unsplash.com/license)). Add the hostname to `next.config.js` if you
switch to another CDN. Replace `imageId` with your own hosted images later, or put
files in `public/products/` and set `imageSrc` in code to `/products/....jpg`.

Because product cards link to `/contact?product=<id>`, the inquiry form will
auto-fill the "Product of interest" field.

### Adding a new page

1. Create `src/app/my-page/View.tsx` (client, uses `useLanguage`) and
   `src/app/my-page/page.tsx` (server, exports `metadata`).
2. Add a translation block in every dictionary.
3. Add the route to the `navItems` array in `src/components/Header.tsx` and the
   footer `links` array in `src/components/Footer.tsx`.
4. Add the path to `src/app/sitemap.ts`.

---

## Customising content

- **Company contact details** — edit the `contact.info.*` block in each translation
  file. The WhatsApp floating button and footer pull from there automatically.
- **Logo** — replace the placeholder wordmark in `src/components/Logo.tsx` with an
  `<Image>` when the real logo is ready.
- **Hero visual** — `HeroVisual` inside `src/components/Hero.tsx` is an SVG/gradient
  placeholder; swap it for real product photography later.
- **Inquiry form backend** — `src/components/InquiryForm.tsx` currently simulates a
  successful submission. Replace the commented `TODO` block with a real API call
  (Next.js route handler, Resend, Formspree, SendGrid, etc.).
- **SEO** — each route sets its own `title`/`description` via the Metadata API.
  Per-page Open Graph images can be added by exporting `openGraph.images` in each
  `page.tsx`.

---

## Design notes

- Palette: off-white background, `brand-700/800/900` for trust accents, `ink` family
  for text. Defined in `tailwind.config.ts`.
- Typography: `font-display` (Playfair Display) for all headings, `font-sans`
  (Inter) for body. Bangla automatically switches to Hind Siliguri via a
  `html[lang="bn"]` CSS rule in `globals.css`.
- Motion: respects `prefers-reduced-motion` and uses IntersectionObserver.
- Accessibility: skip-to-content link, labelled form fields, keyboard-navigable
  language switcher, `aria-expanded` on disclosure widgets.

---

## Scripts

| Command         | What it does                  |
| --------------- | ----------------------------- |
| `npm run dev`   | Dev server with HMR           |
| `npm run build` | Production build              |
| `npm run start` | Serve the production build    |
| `npm run lint`  | ESLint with `next/core-web-vitals` rules |

---

## License

Proprietary — Shawket & Son's Trading. All rights reserved.
