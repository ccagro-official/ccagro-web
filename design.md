# CC Agro Design System

> This is a record of the implemented design language, not a proposed redesign.

## Design direction

The site combines premium agricultural branding with a friendly, contemporary landing-page aesthetic. Warm cream and clay tones communicate natural products; a deep brown creates credibility and contrast; muted green supports the farming theme. Large type, rounded surfaces, restrained shadows, and ample space keep the experience approachable. The scroll-driven egg-to-chicken scene adds an editorial, immersive quality.

The page alternates among three main surface treatments:

- warm cream for the page, hero, and 3D story;
- white for product and advisory content;
- deep brown for trust and conversion sections.

## Global styling

Tailwind CSS 4 is imported in `src/app/globals.css` with `@import "tailwindcss"`. Custom theme colors are declared through Tailwind's `@theme` block and are consumed through utilities such as `bg-brand-light` and `text-brand-primary`. There is no separate Tailwind config file, CSS Module, Sass layer, styled-components setup, or component library.

Global CSS also:

- sets cream background and deep-brown foreground custom properties;
- hides horizontal overflow;
- applies a narrow 6px WebKit scrollbar with clay/orange thumb colors;
- relies on Tailwind Preflight for normalization;
- receives antialiasing and text-selection colors from the root `<body>` classes.

## Color palette

### Semantic brand tokens

| Token / Tailwind name | Hex | Current role |
| --- | --- | --- |
| `--color-brand-primary` / `brand-primary` | `#D97736` | Primary actions, headings, icons, accents, focus rings, selection, scrollbar |
| `--color-brand-secondary` / `brand-secondary` | `#8C5C38` | Primary hover state and secondary earthy text |
| `--color-brand-accent` / `brand-accent` | `#E5B25D` | Declared warm highlight; not currently used in JSX |
| `--color-brand-green` / `brand-green` | `#5C7A46` | Secondary buttons and decorative CTA glow |
| `--color-brand-light` / `brand-light` | `#F9F6F0` | Page background, light text, cards, and scrollbar track |
| `--color-brand-dark` / `brand-dark` | `#2C241E` | Primary text and dark section backgrounds |

The `:root` aliases are `--background: #F9F6F0` and `--foreground: #2C241E`.

### Supporting colors

- White (`#FFFFFF`) is used for content sections, button text, icon tiles, and translucent story cards.
- Black (`#000000`) is used for procedural model eyes.
- 3D-only material colors include eggshell `#F5E6D3`, chick yellow `#FFDB58`, beak orange `#FCA311`, wattle red `#D62828`, feed brown `#8B5A2B`, and chicken white `#FFFFFF`.
- Opacity modifiers are a core part of the palette: body copy commonly uses `/70` or `/80`; borders use `/10` to `/40`; the story cards use `bg-white/60`; the scrolled nav uses `bg-white/90`.

## Typography

`src/app/layout.tsx` imports Inter from `next/font/google` and registers it as `--font-sans`. The body declaration currently asks for `--font-geist-sans`, which is not defined by the layout. Consequently, Inter is loaded but is not connected to the declared body font family; the page inherits the available Tailwind/browser sans stack instead. The variable names should be aligned in a future typography fix.

The implemented type hierarchy is:

- Hero heading: `text-5xl md:text-7xl`, bold, tight tracking.
- Major section headings: usually `text-4xl`, bold; final CTA grows to `md:text-5xl`.
- Story headings: `text-3xl`, bold, primary color.
- Card titles: `text-xl`, bold.
- Body/lead copy: `text-lg`, sometimes `md:text-xl`, generally at 70–80% dark/light opacity.
- Supporting and navigation text: `text-sm` to base size, medium/semibold.
- Brand wordmark: `text-2xl`, bold, tight tracking, with “Agro” in the primary color.

Headings use weight, scale, and color rather than a separate display typeface.

## Responsive system

The project uses Tailwind's default mobile-first breakpoints:

| Prefix | Minimum width | Current use |
| --- | --- | --- |
| `sm` | `40rem` / 640px | horizontal CTAs, two-column trust checklist, three guidance cards, visible quote button |
| `md` | `48rem` / 768px | desktop navigation, larger hero/CTA type, split trust layout, three-column footer, wider story padding |
| `lg` | `64rem` / 1024px | three-column offering grid |
| `xl` | `80rem` / 1280px | available but unused |
| `2xl` | `96rem` / 1536px | available but unused |

Layout is mobile-first: grids begin at one column, paired layouts stack vertically, and CTAs become full-width or vertically stacked before `sm`/`md`.

## Layout primitives and spacing

- Site-wide content generally uses `max-w-6xl mx-auto`; focused copy and CTAs use `max-w-4xl`, while lead paragraphs use `max-w-2xl`.
- Standard content sections use `py-24 px-6`.
- The hero uses `h-screen` and centers its content in both axes.
- The story is a special `h-[600vh]` scroll container with a sticky `h-screen` canvas and five `h-screen` copy stages.
- Gaps are generous: `gap-8` for cards/footer, `gap-16` for the trust split, and `space-y-6`/`space-y-8` for editorial blocks.
- Sections and layout wrappers use full width; horizontal overflow is suppressed globally.

## Standard components

### Buttons

`src/components/ui/Button.tsx` is a native `<button>` primitive. Every variant is pill-shaped (`rounded-full`), medium weight, transition-enabled, and includes a primary-colored two-pixel focus ring with offset.

| Variant | Classes / behavior |
| --- | --- |
| Primary | primary background, white text, secondary-brown hover |
| Secondary | green background, white text, dark hover |
| Outline | 2px primary border and primary text; fills primary with white text on hover |

| Size | Dimensions |
| --- | --- |
| `sm` | `h-9 px-4 text-sm` |
| `md` | `h-11 px-8 text-base` |
| `lg` | `h-14 px-10 text-lg` |

Callers can add classes, and `cn()` resolves Tailwind conflicts so caller overrides such as the light CTA treatment win predictably. The primitive does not currently render links or support an `asChild` pattern.

### Cards

There are three recurring card forms:

- Offering card: cream surface, `p-8`, `rounded-3xl`, subtle primary border, small-to-medium shadow, and hover border/shadow. Its icon sits on a white `w-16 h-16 rounded-2xl` tile that scales on group hover.
- Guidance card: simpler cream surface, `p-6`, `rounded-2xl`, left-aligned copy.
- Story card: translucent white (`bg-white/60`), backdrop blur, `p-8`, `rounded-2xl`, strong shadow, and a translucent white border over the 3D canvas.

The trust statistic uses an `aspect-square`, `rounded-3xl`, faint light surface/border, and a primary-tinted diagonal overlay.

### Navigation and footer

- The navbar is fixed at the top with `z-50`, 24px horizontal padding, and a transparent initial state. After 50px of window scroll it becomes translucent white with backdrop blur and a small shadow.
- Desktop navigation appears at `md`; the quote button appears at `sm`. There is no mobile menu.
- Text links transition to the primary color on hover.
- The footer is dark, separated with low-opacity white borders, and changes from one to three columns at `md`.

## Motion and 3D language

- Lenis applies a 1.2-second exponential smooth-scroll response globally.
- Framer Motion maps the story section's scroll progress through a spring (`stiffness: 100`, `damping: 30`).
- The 3D scene uses warm sunset environment reflections, soft shadows, adaptive device pixel ratio, and simple procedural geometry rather than image/model assets.
- Egg, chick, feed, and chicken visibility/scale are tied to progress thresholds. Idle bobbing, cracking, pecking, and a final stance animation give the sequence character.
- Supporting UI motion is restrained: hover color changes, icon scaling, a bouncing scroll cue, pulsing indicator, and soft blurred CTA glows.

## Rules when extending the design

- Use the existing semantic brand tokens and opacity variants before adding a new color.
- Preserve mobile-first behavior and test at the currently active `sm`, `md`, and `lg` transitions.
- Match the existing section rhythm and container widths for new content blocks.
- Use rounded-2xl/3xl cards and pill actions consistently; reserve stronger shadows and backdrop blur for content layered over motion or imagery.
- Maintain readable contrast when using translucent text/surfaces, and retain visible keyboard focus states on every new interactive element.
- Respect reduced-motion preferences if the animation system is modified; the current code has no explicit reduced-motion fallback.
- If hash navigation is introduced, offset targets for the fixed navbar so headings are not obscured.
