# CC Agro Architecture & Routing

> This map covers the meaningful source and deployment files. Generated directories and installed dependencies are omitted.

## Important folder tree

```text
ccagro-web/
├── AGENTS.md                         # Repository-specific Next.js rule
├── CLAUDE.md                         # Points other agents to AGENTS.md
├── README.md                         # Generic create-next-app instructions
├── package.json                      # Scripts and dependency manifest
├── package-lock.json                 # Locked npm dependency graph
├── next.config.ts                    # Next.js config; currently no custom options
├── tsconfig.json                     # Strict TS, bundler resolution, @/* alias
├── eslint.config.mjs                 # Next Core Web Vitals + TS lint config
├── postcss.config.mjs                # Tailwind v4 PostCSS plugin
├── open-next.config.ts               # OpenNext Cloudflare config
├── wrangler.jsonc                    # Cloudflare worker/assets/compatibility config
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg                    # Unused create-next-app starter assets
└── src/
    ├── app/
    │   ├── favicon.ico               # Site favicon
    │   ├── globals.css               # Tailwind import, brand tokens, global base styles
    │   ├── layout.tsx                # Root HTML shell, Inter loading, metadata, SmoothScroll
    │   └── page.tsx                  # Only route: composes the landing-page sections
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx            # Fixed nav and local scrolled state
    │   │   ├── Footer.tsx            # Brand, quick links, contact, dynamic year
    │   │   └── SmoothScroll.tsx      # Global Lenis lifecycle client boundary
    │   ├── sections/
    │   │   ├── HeroSection.tsx       # Hero copy and primary CTAs
    │   │   ├── StoryScrollSection.tsx# 600vh story, progress tracking, copy overlays
    │   │   ├── OfferingsSection.tsx  # Data-driven product/service cards
    │   │   ├── WhyChooseUsSection.tsx# Trust narrative, benefits, statistic
    │   │   ├── GuidanceSection.tsx   # Advisory copy and three guidance cards
    │   │   └── CTASection.tsx        # Final contact/WhatsApp conversion block
    │   ├── three/
    │   │   ├── PoultryScene.tsx      # R3F Canvas, camera, lights, environment, floor
    │   │   ├── StoryController.tsx   # Scroll timeline, materials, feed, model transitions
    │   │   └── models/
    │   │       ├── ProceduralEgg.tsx
    │   │       ├── ProceduralChick.tsx
    │   │       └── ProceduralChicken.tsx
    │   └── ui/
    │       └── Button.tsx            # Shared button variants and sizes
    └── lib/
        └── utils.ts                  # cn(): clsx + tailwind-merge
```

## Routing

The project uses the Next.js App Router under `src/app/`.

| URL | File | Role |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | The complete public landing page |

There are no nested routes, dynamic segments, route handlers, middleware/proxy, loading boundaries, error boundaries, or not-found overrides.

`src/app/layout.tsx` is the required root layout. It owns:

- the `<html lang="en">` and `<body>` shell;
- global Inter font registration;
- global metadata title and description;
- the `SmoothScroll` wrapper around every route.

`src/app/page.tsx` defines the current render order:

```text
Navbar
HeroSection
StoryScrollSection
OfferingsSection
WhyChooseUsSection
GuidanceSection
CTASection
Footer
```

All visible navigation is currently same-page in concept, but the navbar/footer anchors use placeholder `href="#"` values. No section currently exposes an `id`, so there are no working deep links.

## Server/client component boundaries

App Router components are Server Components by default. The explicit client boundaries are:

| Component | Why it runs on the client |
| --- | --- |
| `SmoothScroll.tsx` | Initializes/destroys Lenis in an effect and drives `requestAnimationFrame` |
| `Navbar.tsx` | Reads `window.scrollY` and tracks the scrolled visual state |
| `StoryScrollSection.tsx` | Uses refs and Framer Motion scroll/spring hooks |
| `PoultryScene.tsx` | Hosts React Three Fiber's Canvas |
| `StoryController.tsx` | Reads motion progress in `useFrame` and animates Three.js objects |

The page, layout, footer, hero, offerings, trust, guidance, CTA, button, utility, and procedural model components do not declare their own client boundary. Components imported beneath a client boundary participate in that client subtree where applicable.

## State and data flow

There is no application-wide store or React context.

- `Navbar.tsx` owns one boolean, `scrolled`, set from the window scroll event.
- `StoryScrollSection.tsx` derives a `MotionValue<number>` from section progress and passes its spring-smoothed value into `PoultryScene`.
- `PoultryScene.tsx` passes progress into `StoryController`.
- `StoryController.tsx` reads progress each animation frame, mutates Three.js group transforms/visibility, and owns local `showFeed` state.
- All other data is static JSX or local arrays. There are no `fetch` calls, server actions, route handlers, subscriptions, persistence layers, or environment-backed data sources.

## Content ownership

Content is distributed by visual responsibility rather than centralized in a content layer:

| Content | Source file |
| --- | --- |
| Browser title and meta description | `src/app/layout.tsx` |
| Navbar brand, nav labels, quote CTA | `src/components/layout/Navbar.tsx` |
| Hero heading, lead, two CTAs, scroll cue | `src/components/sections/HeroSection.tsx` |
| Five lifecycle story headings and paragraphs | `src/components/sections/StoryScrollSection.tsx` |
| Six offering titles/descriptions/icons | `src/components/sections/OfferingsSection.tsx` in the module-level `offerings` array |
| Partnership paragraph, six trust points, “10+” statistic | `src/components/sections/WhyChooseUsSection.tsx` |
| Guidance intro and three advisory cards | `src/components/sections/GuidanceSection.tsx` |
| Closing pitch and two CTAs | `src/components/sections/CTASection.tsx` |
| Footer summary, quick links, contact data, copyright label | `src/components/layout/Footer.tsx` |

The only generated content is the footer year (`new Date().getFullYear()`). No CMS, JSON/YAML content file, localization catalog, or database is present.

## Link ownership

The current link/action inventory is:

- `Navbar.tsx`: three placeholder anchors (`Offerings`, `Process`, `Guidance`) plus a non-navigating `Get Quote` button.
- `HeroSection.tsx`: non-navigating `Explore Our Services` and `Contact Us Today` buttons.
- `CTASection.tsx`: non-navigating `Contact Us Now` and `WhatsApp Us` buttons.
- `Footer.tsx`: four placeholder anchors (`Our Offerings`, `Business Guidance`, `About Us`, `Contact`); contact text is not linked.

Before wiring same-page links, add stable IDs to their target section roots. Likely mappings are `offerings` → `OfferingsSection`, `process` → `StoryScrollSection`, `guidance` → `GuidanceSection`, `about` → `WhyChooseUsSection`, and `contact` → `CTASection` or `Footer`. Confirm the final naming and whether contact should point to an on-page target or an external channel before implementation.

## Styling and asset ownership

- `src/app/globals.css` is the single global stylesheet and source of semantic brand colors.
- Almost all component styling is inline Tailwind utility composition.
- `src/components/ui/Button.tsx` is the only shared UI primitive.
- `src/lib/utils.ts` is the only general utility module.
- `src/app/favicon.ico` is the only project-specific static asset currently in use.
- `public/` contains unused starter SVGs.
- Poultry imagery is procedural Three.js geometry in `src/components/three/models/`; it does not depend on external images, GLTF files, or remote media.

## Deployment architecture

The standard Next.js build is available through `npm run build`. Cloudflare deployment uses `@opennextjs/cloudflare`:

```text
Next.js source
  → opennextjs-cloudflare build
  → .open-next/worker.js + .open-next/assets
  → Wrangler / Cloudflare Workers
```

`wrangler.jsonc` enables `nodejs_compat`, binds the generated static assets as `ASSETS`, and uses compatibility date `2026-08-21`. `next.config.ts` and `open-next.config.ts` currently rely on defaults.
