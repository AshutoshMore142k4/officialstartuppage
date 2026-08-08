# 11startups.tech — professional redesign (Vercel-grade mono + orange)

## Context

The site is a Vite/React/TS marketing site for an AI consulting studio. Exploration found it is not YC-presentable in its current state — not because it looks bad, but because **most of what it claims is invented and most of its buttons do nothing**:

- 12 fabricated client logos ("TechCorp", "NeuralNet", "ScaleAI"…) in a "Trusted by innovative companies worldwide" marquee.
- Fabricated traction: "50+ Projects Delivered", "30+ Happy Clients", "3x Avg. ROI", "99.9% Uptime SLA", "Enterprise-Grade Security (SOC 2)", and a "How we compare" table asserting 7 wins over unnamed competitors.
- **9 dead CTAs.** Hero "Pricing", all 3 pricing buttons, "Book Free Call", "hello@11startups.tech" (not even a `mailto:`), About "Work With Us", both Services CTAs.
- **Silent data loss:** `src/pages/Support.tsx` shows "Message Sent!" and discards the message — it never reaches Supabase or anywhere else.
- **Two competing headers.** `/` uses `ui/header-2.tsx`; every other page uses `Navbar.tsx`. They have different logos, different links, and the theme toggle exists only on `/`. Worse, header-2's `WordmarkIcon` is **a different company's wordmark**, not 11startups.
- A dead "Sign In" button with no auth behind it anywhere in the repo.
- ~800 lines of dead components, 2 dead CSS utilities, and `three`/`@react-three/fiber`/`@paper-design/shaders-react` shipped for code nothing imports.

The intended outcome: a fast, credible, monochrome-with-orange site that reads like Vercel's, states only what is true, and routes every CTA to a real destination.

**Note:** there are no testimonials anywhere in the codebase — nothing to remove on that front.

## Confirmed decisions

| Decision | Choice |
|---|---|
| Palette | Black & white + restrained orange accent. Light default, dark toggle in navbar. |
| Typography | **Geist** (Vercel's typeface), self-hosted via the `geist` npm package. |
| "Get Started" | → `https://cal.com/ash-28uynq/30min` |
| Sign In | Removed entirely |
| Fabricated claims | Reframe as forward-looking commitments where honest; **delete** anything that can't be (see §6) |
| Pricing | Single price shown at a time via **USD / INR toggle**. INR shown **incl. GST**; USD is the international rate. AI token/compute costs are explicitly the client's responsibility. Numbers proposed at market rate, flagged `REVIEW BEFORE LAUNCH`. |
| /features | Merged into `/services`; `/features` redirects |

---

## 1. Design tokens — `src/index.css`

Replace both variable blocks. Keep every existing shadcn variable name so all 48 stock components keep working untouched.

```css
:root {
  --background: 0 0% 100%;      --foreground: 0 0% 4%;
  --card: 0 0% 100%;            --card-foreground: 0 0% 4%;
  --popover: 0 0% 100%;         --popover-foreground: 0 0% 4%;
  --primary: 0 0% 9%;           --primary-foreground: 0 0% 98%;   /* black CTA, Vercel-style */
  --secondary: 0 0% 96%;        --secondary-foreground: 0 0% 9%;
  --muted: 0 0% 96%;            --muted-foreground: 0 0% 40%;     /* #666 — 5.7:1 on white ✓ */
  --accent: 0 0% 96%;           --accent-foreground: 0 0% 9%;
  --destructive: 0 72% 45%;     --destructive-foreground: 0 0% 98%;
  --border: 0 0% 92%;           --input: 0 0% 92%;   --ring: 0 0% 4%;
  --radius: 0.375rem;                                 /* 6px, down from 12px */
  --brand: 22 100% 45%;         --brand-foreground: 0 0% 100%;    /* orange — fills only */
  --success: 142 71% 35%;
}

.dark {
  --background: 0 0% 4%;        --foreground: 0 0% 98%;
  --card: 0 0% 6%;              --card-foreground: 0 0% 98%;
  --popover: 0 0% 6%;           --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;          --primary-foreground: 0 0% 9%;    /* white CTA in dark */
  --secondary: 0 0% 11%;        --secondary-foreground: 0 0% 98%;
  --muted: 0 0% 11%;            --muted-foreground: 0 0% 63%;     /* #a1a1a1 — 8.5:1 ✓ */
  --accent: 0 0% 11%;           --accent-foreground: 0 0% 98%;
  --destructive: 0 62% 50%;     --destructive-foreground: 0 0% 98%;
  --border: 0 0% 16%;           --input: 0 0% 16%;   --ring: 0 0% 83%;
  --brand: 24 100% 55%;         --brand-foreground: 0 0% 100%;
  --success: 142 60% 45%;
}
```

**Orange discipline** — this is what separates a designed site from a themed one. Orange is permitted on: the logo mark, the "Most Popular" pricing badge, section eyebrow labels, active nav underline, focus rings, and inline link hovers. Orange is **banned** from: body text, headings, primary CTAs (those are black/white), card backgrounds, and large fills. If more than ~2% of a viewport is orange, it's wrong.

**Delete these utilities** from `index.css` — glassmorphism is the opposite of the target aesthetic: `.glass`, `.glass-subtle`, `.glass-card`, `.glass-strong`, `.text-gradient` (already dead), `.glow-primary` (already dead), `.glow-primary-sm`. Also drop `--glass-bg` / `--glass-border`. Every consumer is rewritten in §4/§5 anyway; replace with plain `bg-card border border-border rounded-lg`.

`tailwind.config.ts`: add `brand`/`success` to `extend.colors`, add the `fontFamily` extension (§2), delete the `grid` keyframe (references an undefined `--cell-size`) and `marquee` (its only consumer is being deleted), and trim the Next.js leftover content globs (`./pages`, `./components`, `./app`) which match nothing in this Vite repo. Register `@tailwindcss/typography` — it's already a devDependency but was never added to `plugins`, so `prose` classes are currently inert; the privacy policy page needs it.

## 2. Typography

`npm i geist`. In `src/main.tsx` import `geist/font/sans` styles, or import the font CSS in `index.css`. Then:

```ts
// tailwind.config.ts → theme.extend
fontFamily: {
  sans: ['Geist', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
  mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
}
```

Self-hosted, so no external request and no layout shift. Headings get `tracking-tight` (`-0.02em`) and `font-semibold` — Vercel does not use `font-bold` for display type; the current `font-bold` everywhere reads heavier and cheaper than the target. Body copy stays `text-[15px]/relaxed text-muted-foreground`.

## 3. One header, one footer

Collapse two headers into one. **Create `src/components/SiteHeader.tsx`** as the single header for every page:

- Left: `Logo` (`src/assets/logo-s.png`, existing `src/components/Logo.tsx`) + wordmark text `11startups<span class="text-brand">.tech</span>`. **Delete the `WordmarkIcon` export in `ui/header-2.tsx` — it is another company's mark.**
- Center/right nav: Services · Pricing · About · Support
- Right: theme toggle (Sun/Moon, `next-themes`, already wired in `src/App.tsx`) + a single `Get Started` button → cal.com, `target="_blank" rel="noopener noreferrer"`.
- Keep the shrink-on-scroll behaviour from `header-2.tsx` (`useScroll(10)` in `ui/use-scroll.tsx` — reuse as-is) but restyle: hairline bottom border, `bg-background/80 backdrop-blur`, no glass, no shadow.
- Keep the mobile panel + `MenuToggleIcon` + body-scroll lock from `header-2.tsx`. Reuse `ui/menu-toggle-icon.tsx` unchanged.

**Delete:** `src/components/Navbar.tsx`, `src/components/ui/header-2.tsx`, `src/components/ui/menu-toggle.tsx` (only Navbar used it), `src/components/NavLink.tsx` (dead). Update the 5 pages that import `Navbar` to import `SiteHeader`.

**`NeonButton` (`ui/neon-button.tsx`) — delete.** Its gradient neon lines and `rounded-full` pills are the old aesthetic; keeping it means maintaining two button systems. Migrate its 7 consumers to the stock shadcn `Button` (`ui/button.tsx`), which already has the right variants. Also delete the duplicated "neon line" `<span>` pairs copy-pasted into `Features.tsx`, `PricingSection.tsx`, `pages/Features.tsx`, `pages/Services.tsx`.

`Footer.tsx`: rebuild as a 4-column hairline-bordered footer. **Every `#` link must resolve** — 8 of 15 are currently placeholders. Remove Blog and Cookie Policy unless those pages get written; point About at `/about` (currently `#` despite the page existing). Replace hardcoded `© 2026` with `new Date().getFullYear()`.

## 4. Homepage rebuild — `src/pages/Index.tsx`

New order: `SiteHeader → Hero → Services → HowWeWork → Pricing → FAQ → Contact → Footer`.

- **Hero** — delete the three animated purple blur blobs. Vercel-style: centered, generous vertical space, optional subtle dot-grid or radial fade in `--muted`. **Fix the inverted heading hierarchy** — the real headline becomes `<h1>`, the eyebrow becomes a `<p>`. Two CTAs: `Get Started` (black/white solid → cal.com) and `View pricing` (ghost → `#pricing`, currently dead). Below: one honest line of what you do, no metrics.
- **Services** — 6 existing services, kept verbatim (they're real). Rebuild `Features.tsx` as a bordered grid: `divide-x divide-y border` hairline cells, no cards, no shadows, no glass. Icon at 20px in `--muted-foreground`, title `font-medium`, description `text-muted-foreground`. Change framer-motion `initial/animate` → `whileInView` with `viewport={{ once: true }}` — currently everything animates on mount whether visible or not.
- **HowWeWork** *(new)* — the honest-framing replacement for the deleted fake-logo marquee. Reuse the 4-step process already written in `src/pages/Services.tsx` (01 Discovery → 02 Design → 03 Build → 04 Deploy & Scale). A numbered horizontal timeline with hairline connectors.
- **Pricing** — see §7.
- **FAQ** *(new to homepage)* — reuse the 6 real Q&As already in `src/pages/Support.tsx` via the stock shadcn `Accordion`. Also satisfies the `FAQPage` JSON-LD already in `index.html`.
- **Contact** — keep `CTASection.tsx`'s working Supabase logic **exactly as-is** (`contact_submissions` insert, `idle|sending|sent|error` machine, maxLength caps). Only restyle: swap raw `<input>`/`<textarea>` for shadcn `Input`/`Textarea`, drop `glass-subtle` and the radial-gradient overlay. Fix both dead buttons: "Book Free Call" → cal.com, and the email → a real `mailto:hello@11startups.tech`.

**Delete `src/components/TrustedBrands.tsx`** entirely.

## 5. Pages

| Page | Action |
|---|---|
| `/services` | Single source of truth. Absorb the genuinely distinct "Platform Capabilities" block from `pages/Features.tsx`; drop its duplicated 6-service list. Wire both dead CTAs. Remove the unused `ArrowRight` import. |
| `/features` | **Redirect** → `<Route path="/features" element={<Navigate to="/services" replace />} />`. Remove `pages/Features.tsx`. Update `public/sitemap.xml` and the footer link. |
| `/about` | Keep mission + values + team-groups. Delete the fake stat bar (§6). Team section must say what it honestly is — a small senior team — not imply headcount you don't have. Wire "Work With Us" → cal.com. |
| `/support` | **Fix the silent data loss.** `handleSubmit` currently only calls `setSubmitted(true)`. Rewrite it to insert into `contact_submissions` using the same pattern as `CTASection.tsx:15-29`, with real error handling. Change "Live Chat"/"Documentation" from "Coming Soon" cards to something real or remove them — two "Coming Soon" tiles on a support page reads as an empty product. |
| `/privacy-policy` | Restyle with `prose` (once the typography plugin is registered). Fix the `"11startups.tech ."` stray-space typo. Keep the legal text as written. |
| `*` NotFound | Swap the plain `<a href="/">` for a router `<Link>` — it currently forces a full page reload. |

## 6. Fabricated-claims remediation

**Delete outright** (cannot be honestly reframed):

- `TrustedBrands.tsx` — all 12 invented brands (file deleted).
- `pages/About.tsx` — "50+ Projects Delivered", "30+ Happy Clients", "3x Avg. ROI Achieved".
- `pages/Features.tsx` — "50+ Projects", "3× Average ROI", "99.9% Uptime SLA".
- `pages/Features.tsx` — "Enterprise-Grade Security (SOC 2)" → "Security-first architecture" unless you hold the certification.
- `pages/Features.tsx` — the entire "How we compare" table. Seven unsubstantiated ✓-vs-— rows against unnamed competitors is the single worst item on the site.
- `PricingSection.tsx` — "Trusted by startups worldwide."
- `index.html` — the JSON-LD `SearchAction` advertising a `?q=` search endpoint that does not exist.

**Reframe as a forward commitment** (keep, reworded):

- "< 4 wks Time to First Prototype" → "We ship a working prototype in under 4 weeks" — stated as the engagement promise, in the process section rather than a stat block.
- "24/7 dedicated support" → only on the tier where it's genuinely offered.

## 7. Pricing section — `PricingSection.tsx`

Two toggles: **Monthly / Yearly** (exists, keep the framer-motion `layoutId` pill, restyle to a hairline segmented control) and a new **USD / INR** toggle. One currency shown at a time. Default to INR when `navigator.language` ends in `-IN`, USD otherwise.

- INR prices display **incl. GST** with an explicit `Inclusive of 18% GST` line.
- USD prices are the international rate, with `Billed internationally · taxes as applicable`.
- Keep `NumberFlow` for the price transition — it's already a dependency and the animation is genuinely good.
- Popular badge → `bg-brand text-brand-foreground` (the one place orange carries weight).
- **All three CTAs get real destinations** (currently all dead): Starter/Growth → cal.com, Scale → cal.com.

**AI cost transparency** — a bordered callout directly beneath the grid, and the reason this pricing reads honest:

> AI usage — model API tokens, inference, and compute — is billed directly to your own provider accounts. We never mark it up or resell it. You keep full visibility and control of what you spend.

**Proposed numbers — `REVIEW BEFORE LAUNCH.`** All in one `plans` array at the top of the file, so every figure is changed in one place. Yearly ≈ 10× monthly (2 months free).

| Tier | INR /mo (incl. GST) | USD /mo (intl.) |
|---|---|---|
| Starter | ₹45,000 | $599 |
| Growth *(popular)* | ₹1,35,000 | $1,799 |
| Scale | ₹3,50,000 | $4,499 |

These replace the invented $499/$1,499/$3,999. Tier contents carry over from the existing `includes` arrays, minus deleted claims.

## 8. Cleanup

Delete — all confirmed zero imports: `ui/spotlight-card.tsx`, `ui/glare-card.tsx`, `ui/etheral-shadow.tsx` (also hotlinks two `framerusercontent.com` images — an offline/CSP hazard), `ui/background-paper-shaders.tsx`, `ui/icons.tsx`, `src/App.css` (Vite boilerplate, never imported), `public/placeholder.svg`.

Then `npm uninstall three @react-three/fiber @paper-design/shaders-react` — the first two exist solely for `background-paper-shaders.tsx`; the third is imported nowhere at all. Remove the now-unused `ThreeElements` import from `src/vite-env.d.ts`.

`src/App.tsx` mounts both `<Toaster />` (Radix) and `<Sonner />`, but `toast()` is never called anywhere — drop one. `QueryClient` is instantiated with zero `useQuery`/`useMutation` in the codebase; leave it only if you plan to use it soon, otherwise remove.

`.env` is tracked in git. The values are Supabase anon/publishable-tier and are baked into the client bundle regardless, so this is not a key leak — but add it to `.gitignore` and commit a `.env.example` so the pattern doesn't bite later with a real secret.

## 9. SEO & metadata

`SEOHead.tsx` emits no `og:image` and no `twitter:card`, and `index.html` serves the 5KB square `logo-s.png` to a `summary_large_image` card — link previews currently render broken. Create a proper **1200×630** `public/og-cover.png` in the new monochrome style and reference it from both `SEOHead.tsx` and `index.html`. Change `<meta name="theme-color">` from `#7c3aed` (violet) to `#000000`. Remove the bogus `SearchAction` JSON-LD.

## 10. Execution order

Phases are sequential; the app type-checks and runs after each.

0. **`plan.md`** — write this plan into the repo root as `plan.md` (explicitly requested), so execution can be tracked against it.
1. **Tokens + font** — `index.css`, `tailwind.config.ts`, install `geist`. Site will look half-migrated; expected.
2. **Header/footer unification** — `SiteHeader.tsx`, delete `Navbar`/`header-2`/`menu-toggle`/`NavLink`, update all 6 pages.
3. **Delete `NeonButton`** and migrate its 7 consumers to shadcn `Button`. Removes the last dependency on the old look.
4. **Homepage sections** — Hero, Services, HowWeWork, FAQ, Contact restyle; delete `TrustedBrands`.
5. **Pricing** — currency toggle, GST line, AI cost callout, live CTAs.
6. **Pages** — Services merge, `/features` redirect, About, Support form fix, Privacy prose, NotFound `<Link>`.
7. **Claims sweep** — §6, checked file by file.
8. **Cleanup + SEO** — §8 and §9.

Phases 5, 6, and 8 are independent of each other and can be reordered.

## 11. Verification

- `npx tsc --noEmit -p tsconfig.app.json` — clean after every phase. (`node_modules` is installed; use `node_modules\.bin\tsc.cmd` on Windows, not `npx tsc`, which pulls the wrong `tsc` package.)
- `npm run dev` (port 8080) + the MCP browser tool:
  - Loads in **light mode by default**; toggle flips to dark and survives a reload (`localStorage`).
  - Contrast spot-check `--muted-foreground` on `--background` in both themes.
  - Mobile viewport: hamburger opens, body scroll locks, links close the panel.
  - **Click every CTA** and confirm a real destination — this is the main regression risk, given 9 were dead.
  - Submit the homepage contact form and confirm the row lands in Supabase `contact_submissions`; then submit the **Support** form and confirm it lands too (it currently does not).
  - `/features` redirects to `/services`; hard-refresh on a deep route still works (`vercel.json` SPA rewrite).
  - Console clean.
- Grep the repo for the deleted claims (`50+`, `30+`, `99.9%`, `SOC 2`, `Trusted by`, `TechCorp`) and confirm zero hits.
- Tests — the existing vitest setup has one placeholder assertion. Add exactly two that would fail if the logic broke: (1) the pricing currency/period toggle returns the right figure for each tier, (2) the Support form calls the Supabase insert on submit. Nothing else earns its keep here.
