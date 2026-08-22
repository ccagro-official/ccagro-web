# CC Agro Project Overview & Rules

> Baseline recorded on 2026-08-22. This document describes the repository before the planned content and link update.

## Project genre and purpose

CC Agro is a premium, single-page marketing website for a poultry trading and farm-support business. It presents the company as an end-to-end partner for desi chicken, day-old chicks, poultry feed, equipment, logistics, and farm guidance.

The page is designed as a conversion-focused landing experience:

1. A full-viewport hero introduces the value proposition and calls to action.
2. A long, scroll-controlled 3D story depicts the poultry lifecycle from egg to market-ready chicken.
3. Product, trust, and advisory sections explain the offer.
4. A final CTA and footer provide conversion and contact touchpoints.

The visual genre is warm, approachable agri-business branding with a modern premium finish: earthy colors, generous whitespace, rounded cards, pill buttons, soft shadows, translucent story panels, and an interactive 3D centerpiece.

## Core stack

| Concern | Current implementation |
| --- | --- |
| Framework | Next.js 16.2.11, App Router |
| UI runtime | React 19.2.4 / React DOM 19.2.4 |
| Language | TypeScript 5.9 with `strict: true` and no emitted JS from `tsc` |
| Styling | Tailwind CSS 4.2 through `@tailwindcss/postcss`; theme tokens live in `src/app/globals.css` |
| Animation | Framer Motion 12.38 for scroll progress/spring smoothing; Lenis 1.3 for smooth scrolling |
| 3D | Three.js 0.184, React Three Fiber 9.6, and Drei 10.7 |
| Icons | Lucide React |
| Class composition | `clsx` plus `tailwind-merge` through `src/lib/utils.ts` |
| Linting | ESLint 9 with Next.js Core Web Vitals and TypeScript presets |
| Deployment | OpenNext for Cloudflare Workers, configured by `open-next.config.ts` and `wrangler.jsonc` |
| Package manager | npm, with a committed `package-lock.json` and `legacy-peer-deps=true` |

There is no global state library, database client, CMS, API integration, authentication layer, or environment-variable dependency in the current source. State is local to the few interactive client components.

## Environment setup

No Node.js engine is pinned in `package.json`. The baseline was inspected successfully with Node.js 24.13.0 and npm 11.6.2; this is observational, not a declared project requirement.

```bash
npm ci              # install the lockfile-pinned dependency graph
npm run dev         # local Next.js development server
npm run lint        # ESLint checks
npm run build       # production Next.js build
npm run build:cf    # build the OpenNext Cloudflare artifact
npm run preview     # build and preview via OpenNext/Cloudflare
npm run deploy      # build and deploy via OpenNext/Cloudflare
```

Generated output is ignored under `.next/`, `.open-next/`, and `.wrangler/`. All `.env*` files are also ignored.

## Architecture rules for future changes

### Next.js and React boundaries

- Follow `AGENTS.md`: before changing framework behavior, read the relevant installed guide under `node_modules/next/dist/docs/`. This repository uses Next.js 16 conventions, not assumptions from older versions.
- Keep `src/app/page.tsx` and `src/app/layout.tsx` as Server Components unless a browser-only capability genuinely requires a client boundary.
- Add `"use client"` only at the smallest interactive boundary. Current client components use browser scroll position, React effects/refs, Framer Motion values, or React Three Fiber.
- Use App Router file conventions under `src/app/` for any new route. Use `next/link` for navigation between application routes; simple hash anchors remain appropriate for sections on the same page.
- Preserve the root layout's metadata ownership in `src/app/layout.tsx`; update its title and description whenever the public positioning changes materially.

### TypeScript and component organization

- Keep strict TypeScript types and the existing semicolon/double-quote style.
- Prefer the `@/*` alias for imports from `src/`.
- Put page-level marketing blocks in `src/components/sections/`, site chrome in `src/components/layout/`, reusable primitives in `src/components/ui/`, and 3D scene/model code in `src/components/three/`.
- Use the shared `cn()` helper when classes depend on variants, state, or caller overrides.
- Preserve component responsibilities: `src/app/page.tsx` should compose sections rather than accumulate section markup or business copy.

### Content and link rules

- At present, copy is intentionally co-located with the component that renders it. Keep small one-off copy there unless the next update introduces localization, a CMS, or enough repetition to justify a typed content module.
- Repeated collections should remain data-driven, as demonstrated by `offerings` and `points`, rather than duplicating card/list markup.
- The current navbar and footer links all use `href="#"`, every CTA is a non-navigating `<button>`, and no section has an `id`. Treat these as placeholders, not working navigation.
- For the planned link pass, define stable section IDs first, point same-page links at those IDs, and use `next/link` for any new internal page routes. Use normal anchors for external, telephone, email, and WhatsApp URLs.
- Do not nest an anchor inside the existing `Button`; that produces invalid interactive markup. Either add an anchor-compatible button primitive/variant or apply the same documented button classes directly to the link.
- When adding external links that open a new tab, include `rel="noopener noreferrer"`. Use `tel:` and `mailto:` for contact details and a properly encoded HTTPS URL for WhatsApp.
- Keep link labels descriptive and ensure every visible CTA has a real destination before release.

### Styling and interaction rules

- Reuse the semantic `brand-*` Tailwind color tokens in `src/app/globals.css`; do not scatter replacement brand hex values through JSX.
- Preserve the established container widths (`max-w-4xl` and `max-w-6xl`), section rhythm (`py-24 px-6`), responsive mobile-first classes, rounded geometry, and warm light/dark section alternation unless intentionally redesigning the system.
- Reuse `src/components/ui/Button.tsx` for actual buttons and preserve its variants, sizes, focus ring, and disabled behavior.
- Treat the 600vh story height and its five screen-height content stages as one coordinated animation timeline. Any added or removed story stage must also be reconciled with the progress thresholds in `src/components/three/StoryController.tsx`.
- Keep decorative/3D layers non-blocking where the code currently uses `pointer-events-none`.
- Account for the fixed navbar when adding hash targets, either with global `scroll-padding-top` or per-section `scroll-margin-top`.

## Known baseline caveats

- `src/app/layout.tsx` loads Inter into `--font-sans`, while `src/app/globals.css` references `--font-geist-sans`. The declared body font therefore does not consume the loaded Inter variable. Resolve this deliberately during a typography change; do not silently describe the mismatch as the intended state.
- The stock SVGs in `public/` are unused create-next-app assets. The poultry visuals are generated procedurally in code rather than loaded from `public/`.
- `src/components/three/StoryController.tsx` updates React state from the render loop to toggle feed visibility. It works as local animation state but is a sensitive performance area and should not be mixed into routine copy/link work.
- The repository currently has no automated test suite. Required checks for low-risk content work are lint and a production build, followed by a manual responsive/link check.

## Baseline validation

On 2026-08-22, `npm run build` completed successfully and reported `/` as statically prerendered. `npm run lint` did not pass because of existing source findings:

- `src/components/sections/CTASection.tsx`: one `react/no-unescaped-entities` error.
- `src/components/sections/WhyChooseUsSection.tsx`: one `react/no-unescaped-entities` error.
- `src/components/three/PoultryScene.tsx`: unused `useRef` import warning.
- `src/components/three/StoryController.tsx`: unused `state` callback parameter warning.

These were observed only and were not changed during documentation generation.
