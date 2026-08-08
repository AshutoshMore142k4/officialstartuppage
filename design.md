# 11startups.tech — Design System

A Vercel-grade design language: monochrome, asymmetric, restrained. This document is the source of truth for layout and motion decisions.

---

## 1. Core principles

1. **Asymmetry over symmetry.** Centered layouts read as templates. Left-aligned headings with content that breathes to one side reads as a designed product. Nothing on this site is centered except the content *inside* a card.
2. **One accent family, deployed twice.** The entire site is black, white, and grey — with exactly one colour *palette* (a cyan → blue → purple → pink prism), used in exactly two places: the hero's Pixel Canvas, and the glow that traces a card's border on hover. Its scarcity is what makes it read as premium. Do not introduce a third use.
3. **Hairlines, not boxes.** 1px borders at low contrast. No heavy shadows except on hover.
4. **Motion with intent.** Every animation answers "what did the user just do?" Ambient motion is slow enough to be felt, not watched (20s+ cycles).
5. **Type does the work.** Geist, tight tracking on display sizes, generous line-height on body. Hierarchy comes from size and weight, never colour.

---

## 2. The hero: Pixel Canvas

The single hero object. A canvas grid of pixels that lights up in the prism palette as the cursor moves across it, decaying into a trail behind it — the counterpart to Vercel's black triangle with a gradient bleeding around its edge, reimagined as something that responds to touch rather than something that spins.

- **Component:** `src/components/ui/pixel-canvas.tsx` (`PixelCanvas`). Canvas-based, not DOM-based — hundreds of pixels would be too many nodes otherwise. Accepts `children`, rendered in normal flow above an `absolute inset-0` canvas inside the same positioned wrapper — this is what lets the pointer paint a trail even while it's over the headline or buttons, since the listener lives on the wrapper the content sits inside, not a sibling.
- **Placement:** full-bleed background of the entire `#hero` section only — `absolute inset-0` on the section, dimmed to `opacity-[0.55]` so the copy on top stays legible everywhere on the canvas, not just where the pixels happen to be dark. The hero copy (`max-w-xl`, left-aligned per principle 1) renders as `PixelCanvas`'s children, so it sits in the same interactive surface.
- **Boundary:** confined strictly to `#hero` — the section ends, the effect ends. It never bleeds under "What We Offer" or any section below.
- **Palette:** `['#00dfd8', '#007cf0', '#7928ca', '#ff0080']` — the same four prism stops used everywhere else colour appears. `variant="glow"` adds a soft blurred halo per pixel; `speed={0.025}` sets how slowly the trail decays, so movement leaves a brief comet rather than an instant on/off.
- **Rest state:** the canvas is genuinely empty until the pointer arrives — no ambient animation, no forced loop. It is a reactive surface, not a background.
- **Touch:** mirrors mouse handling via `touchmove`/`touchend`, so the trail follows a finger on mobile instead of doing nothing. `gap` steps up from `7` to `12` under the `useIsMobile()` (768px) breakpoint — roughly a third of the cells, since a phone GPU redraws this every frame too.

Superseded the earlier hexagon-shaped `PrismHexagon` component (deleted) — same "one coloured hero object" role, different mechanism: reactive pixels instead of a spinning 3D panel. The boxed-card treatment (canvas confined to a small `rounded-2xl` frame with a centered `BrandMark`) was an earlier iteration, also superseded — the canvas is the hero background now, not an object floating inside it.

### Rules

- **Never** duplicate this canvas elsewhere on the site.
- **Never** let it extend past `#hero`'s own boundary — no full-page background, no bleeding into Features.
- The prism palette's only other legitimate use is the `GlowingEffect` hover glow (§4). Nowhere else.

---

## 3. Layout

### Grid

Content max-width `max-w-6xl`, padding `px-4 md:px-8`. Sections separated by `border-b border-border` — the hairline *is* the separator; no background colour changes.

### Section header — the de-centering rule

Every section header is **left-aligned and width-constrained**, never `text-center`:

```tsx
<div className="mb-16 max-w-2xl">
  <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">Eyebrow</p>
  <h2 className="text-3xl text-foreground md:text-5xl">Headline</h2>
  <p className="mt-4 text-lg text-muted-foreground">Supporting line.</p>
</div>
```

The `max-w-2xl` inside a `max-w-6xl` container is what creates the asymmetry — text occupies the left two-thirds, the right third stays open.

### Section-by-section

| Section | Layout |
|---------|--------|
| **Hero** | Single column, left-aligned (`max-w-xl`) over a full-bleed Pixel Canvas background. Full viewport height (`100dvh − 4rem` header) so the next section is never visible on load. |
| **Features** | Left header + **asymmetric bento**. 3-col grid where cards at index 0, 3, 5 span 2 columns → rows read `[wide][narrow] / [narrow][wide] / [narrow][wide]`. Units sum to 9 so the grid fills exactly with no orphan gap. |
| **How We Work** | Left header. 4 steps as top-bordered columns — the `border-t` doubles as the process timeline. |
| **Pricing** | Header left, billing/currency controls pushed **right on the same row** (`justify-between`). Cards in an even 3-col grid — pricing is the one place symmetry is correct, since the tiers are peers. |
| **FAQ** | Two columns. Heading left and `sticky` on desktop, accordion right. |
| **Contact** | Single left-aligned column (`max-w-2xl`) — no form. Two CTAs only: `Book Free Call` (cal.com) and the `hello@` mailto: link. |

---

## 4. Cards

Every card in a grid — Features, Pricing, About values/capabilities, Services cards/capabilities/process, Support's quick-help links — uses the same **single-layer structure**:

```tsx
<div className="glass-card relative rounded-2xl p-6">
  <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} />
  {/* content */}
</div>
```

One bordered, translucent surface. `GlowingEffect` (`src/components/ui/glowing-effect.tsx`) is `absolute inset-0` inside it, tracking the pointer across the whole viewport (not just the card) and tracing the prism-gradient glow around the card's own edge when the pointer is within `proximity` — this is the site's second and last legitimate use of colour. `inactiveZone={0.01}` keeps it live even when the pointer is dead-center; `spread={40}` sets the arc width of the glow. An earlier iteration wrapped each card in a second `border p-2` frame purely to give the glow room to sit outside the glass surface — cut for being an extra div per card with no visible benefit once the glow is this precise; `rounded-[inherit]` on `GlowingEffect`'s own layers means it traces the card's actual corners regardless.

Motion-enabled cards (Features, About values/capabilities, Services) additionally spring-lift `y: -6` on `whileHover`, plus `hover:shadow-xl`.

**Critical implementation note:** on a `motion.div`, the lift *must* come from framer-motion's `whileHover`, not a Tailwind `hover:-translate-y-*` class. Framer-motion writes an inline `transform` for the entrance animation, and inline styles always beat class-based transforms — the Tailwind hover silently does nothing. Non-transform hover properties (shadow, colour) are fine as classes. `GlowingEffect` itself never touches `transform`, so it composes with the lift without conflict.

A card that needs a *static* distinguishing border (Pricing's "Most Popular" tier) uses `ring-1 ring-foreground/30` alongside `glass-card`, never a plain `border-*` utility — `.glass-card` sets its own `border` via a CSS shorthand declared later in the stylesheet than Tailwind's utilities, so a same-specificity `border-foreground` class loses that cascade fight silently. `ring-*` is box-shadow-based and composes cleanly regardless of declaration order.

Single, non-grid cards (the AI-cost-transparency note, the About pull-quote) stay single-layer `glass-card rounded-2xl p-6` — no `GlowingEffect`. It is a grid-card signifier, not a blanket "every bordered box" treatment.

There is no site-hosted contact form. `hello@`/`support@` mailto: links and the cal.com booking link are the only two contact paths — no backend, no data collection, nothing to fail silently.

---

## 5. Colour

Monochrome only. Full token set in `src/index.css`.

| Token | Light | Dark |
|-------|-------|------|
| `--background` | `0 0% 100%` | `0 0% 4%` |
| `--foreground` | `0 0% 4%` | `0 0% 98%` |
| `--muted-foreground` | `0 0% 40%` (5.7:1 ✓) | `0 0% 63%` (8.5:1 ✓) |
| `--border` | `0 0% 92%` | `0 0% 16%` |
| `--radius` | `0.875rem` | — |

`--brand` exists but resolves to plain foreground in both themes. It is **not** an accent colour — it is a hook kept so that if a brand colour is ever introduced, it lands in one place. Do not assign it a hue without revisiting principle 2.

Light is the default theme; dark is opt-in via the header toggle and persists in `localStorage`.

---

## 6. Typography

Geist Variable + Geist Mono, self-hosted from `/public/fonts` — no external request, no layout shift.

| Role | Spec |
|------|------|
| Display / `h1` | `text-4xl md:text-6xl`, `font-semibold`, `tracking-tight` |
| Section `h2` | `text-3xl md:text-5xl`, `font-semibold`, `tracking-tight` |
| Card title | `text-base font-semibold` |
| Body | `text-sm`–`text-lg`, `leading-relaxed`, `text-muted-foreground` |
| Eyebrow | `text-sm font-medium uppercase tracking-widest text-muted-foreground` |

Never `font-bold` for display type — it reads heavier and cheaper than the target. `font-semibold` with tight tracking is the Vercel signature.
