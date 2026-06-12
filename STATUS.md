# Landing Page Concepts — Status
Last updated: 2026-06-11 (coaching page built — **the site now has TWO main pages: `concepts/concept-a-main.html` (home) + `concepts/coaching.html` (coaching)**)

## Git repo (NEW 2026-06-11)
- This folder is now a git repo: **https://github.com/hosttohostco-prog/landing-page** (branch `main`)
- Auth: fine-grained token "h2h-mac" in macOS keychain (user hosttohostco-prog), now scoped to both `shopify` and `landing-page` repos
- Workflow: one commit per James-approved change, small diffs. Push after approval.
- Keep this repo separate from the `hosttohostco-prog/shopify` theme repo

## Main pages (the site)
**TWO main HTML pages** — both self-contained, same design system (Cormorant Garamond + Space Grotesk, cream + coral, GSAP + Lenis motion with nomotion/no-JS fallbacks):

| File | Page / URL | Status |
|------|-----------|--------|
| **concepts/concept-a-main.html** | Home — hosttohost.co | Active, James reviewing |
| **concepts/coaching.html** | Coaching — /coaching | Built + approved 2026-06-11 |

A **Recursos** page is planned next (James to brief).

## What exists
Concept exploration files at `/landing page/concepts/`:

| File | Concept | Type system | Palette lead | Layout signature |
|------|---------|-------------|--------------|-----------------|
| **concept-a-main.html** | **The Editorial, Directed (ACTIVE)** | Cormorant Garamond + Space Grotesk | Cream + coral | concept-a structure + GSAP motion layer (see below) |
| concept-a.html | The Editorial (static predecessor) | Cormorant Garamond + Space Grotesk | Cream + coral | Left/right hero split, editorial dark sections |
| concept-b.html | After Dark | Archivo Black + Cormorant italic | Ink-deep + coral | Floating pill nav, dark atmospheric, side-by-side splits |
| concept-c.html | The Object Room | Space Grotesk only (lowercase) | Off-white + olive | Grid-bordered square tiles, editorial FAQ list |
| concept-a-outfit.html | The Editorial (font variant) | Outfit + Archivo + Shantell Sans | Cream + coral | Stale — predates 2026-06-11 changes, font-swap comparison only |

## Selected direction
**Concept A** is the active direction. The working file is now **`concepts/concept-a-main.html`** (2026-06-11): a GSAP-directed redesign of concept-a. `concept-a.html` is kept untouched as the static reference.

## Motion layer (concept-a-main.html, NEW 2026-06-11)
- **Stack:** GSAP 3.13 + ScrollTrigger + SplitText + Lenis smooth scroll (all jsDelivr CDN; no build step)
- **Hero:** SplitText line-masked headline reveal, clip-path image wipe + scale-settle, scroll parallax. CTAs animate as one group (level by construction). Hero has `min-height: fit-content` so short viewports grow instead of overflowing into the marquee
- **Marquee:** new editorial ticker strip under the hero (CSS keyframes, pauses on hover)
- **Products:** desktop = pinned horizontal shelf (section pins, cards glide sideways, ends on "Esto es solo el comienzo" → tienda card); mobile/reduced-motion = grid fallback. Approved card content unchanged
- **El Problema:** left headline pins while the three numbered problems scroll past
- **Ecosystem:** scrubbed word-by-word reveal on intro paragraph; pillars stagger in
- **New final CTA band** before footer: "Empezá con los 5 esenciales. Gratis, en tu correo." → #lead, magnetic-hover nested button
- **Nav:** transparent over hero → frosted glass bar on scroll
- **Safety:** `prefers-reduced-motion` (or `?nomotion` query param) serves a fully static page; no-JS also renders complete. All copy, assets, palette, fonts unchanged from approved concept-a
- Removed during review (James 2026-06-11): inline photo pill in products headline; staggered CTA entrance (caused momentary misalignment)

## Page structure (concept-a — current 2026-06-11 evening)
1. **Nav** — Recursos · Tienda · Coaching · "Ir a la tienda" CTA ("Sobre Mafe" removed 2026-06-11). Logo enlarged 50% (4.2rem). Hero padding-top raised to 10rem so the fixed nav no longer overlaps the hero image.
2. **Hero** — Mafe's voice first. Headline: "Te voy a contar todo lo que aprendí siendo Superhost". Two CTAs. Hero image = `assets/hero-cocina.png` (James's Cocina_New photo, replaced Unsplash 2026-06-11). **Copy APPROVED — do not modify**
3. **Lead magnet** — "9 años de errores caros. Resumidos en 5 productos." — email capture. **APPROVED — do not modify.** Now the page's ONLY email capture (newsletter + coaching forms removed).
4. **Products** — "Lo que uso en mis propios Airbnbs" — 4 products + "Ver toda la tienda" link. **APPROVED — do not modify**
5. **El Problema** (`#problema`, dark) — REBUILT 2026-06-11 to match James's reference mock-up (`mock-ups/El Problema_new.png` board): two-column editorial layout. Left ~40%: headline "Ser buen anfitrión **no alcanza.**" + subline. Right: three stacked editorial blocks (large italic coral numbers 01/02/03, hairline dividers, vertical rule beside numbers) — NO cards, NO thumbnails, NO lightbox. Still-life product photo (`assets/problema-still-life.png`) anchored bottom-left as decorative background with top mask-fade into the section. Mobile: headline → problems → image stacked.
6. **Ecosystem reveal** (`#que-es`, #3B393A) — "Una forma más simple de ser anfitrión." Three pillar cards now each have an outlined CTA button (2026-06-11): Productos → https://tienda.hosttohost.co/ · Recursos → /recursos · Coaching → /coaching (placeholder paths — confirm real URLs).
7. **Mafe as proof** (`#sobre`, cream) — photo replaced with James's real photo `assets/sobre-mafe.jpg` (3:4, 2026-06-11). WhatsApp CTA.
8. **FAQ** — 7 Q&As accordion
9. **Footer** — logo enlarged to match header (4.2rem); first column renamed "Servicios" with Productos/Recursos/Coaching links (same targets as pillar CTAs); "Sobre Mafe" removed; © year now auto-updates via JS (shows 2026)

**REMOVED 2026-06-11 (James's call):** Coaching contextual section ("¿Querés acompañamiento personalizado?") and Newsletter section ("10 productos en 10 días") — HTML, CSS, and responsive rules all deleted.

## Coaching page (concepts/coaching.html, NEW 2026-06-11 — approved)
Built 1:1 from James's reference board. Colombian Spanish (voseo), same tokens/fonts/nav/footer as home.
1. **Hero** — dark, photo full-bleed behind (`assets/coaching-hero.png`, from `mock-ups/coaching-background.png`), left-to-right legibility gradient, coral pill CTA "Agendá tu sesión". Graceful dark fallback if the image fails to load.
2. **En qué podemos trabajar** — 6 columns, hairline dividers, coral line icons.
3. **Los resultados que importan** — 4 columns (Más reservas / Mayor ocupación / Mejores reseñas / Menos errores costosos).
4. **CTA banner** — rounded dark card: "Tu próxima buena decisión *empieza acá.*" + 60 min / 1:1 Zoom meta + pill CTA.
5. **Footer** — identical to home.
- Motion: hero photo scale-settle + parallax, SplitText headline reveals, staggered grid cascades, magnetic banner CTA, dark frosted nav on scroll. Same reduced-motion/no-JS safety as home.
- Verified in headless Chrome: desktop 1440, true 390px mobile (iframe harness — headless has a 500px min window), zero console errors.
- **Open:** real booking link (both CTAs placeholder), compress coaching-hero.png (2MB).

## Visual system changes (2026-06-11)
- **Dark section background:** new token `--ink-bg: #2B2826` applied to `.lead`, `.problem`, `.footer`. `--ink` (#403E3F) unchanged — still used for text and button fills. Ecosystem deliberately stays #3B393A (lighter, differentiated) — open question whether to unify.
- All images now local in `concepts/assets/` (logos copied from Home Page so the repo is self-contained). concept-a has NO external image dependencies left except Google Fonts.

## Files
- `concepts/concept-a-main.html` — **MAIN PAGE: home** (GSAP motion redesign, 2026-06-11)
- `concepts/coaching.html` — **MAIN PAGE: coaching** (built + approved 2026-06-11)
- `concepts/concept-a.html` — static predecessor, kept as reference. Do not edit
- `concepts/concept-a-updated.html` — externally-created draft, superseded. Can be deleted
- `concepts/assets/` — all images: 4 product photos, 3 problema diagram jpgs (no longer referenced by concept-a after rebuild — kept for history), problema-still-life.png, hero-cocina.png, sobre-mafe.jpg, logo-lockup-ink.png, logo-lockup-cream.png
- `mock-ups/` — James's reference boards (El Problema_new.png = source of the still-life + layout reference)
- Older concepts (b, c, outfit) still reference `../../Home Page/assets/` for logos — broken if opened from a clean clone; only concept-a was made self-contained

## Key brand references
- **Palette:** #FCF3E9 cream · #E8825F coral · #96A1D2 periwinkle · #989C6F olive · #403E3F ink · **#2B2826 dark section bg (new)**
- **Fonts (concept-a.html):** Cormorant Garamond · Space Grotesk · Caveat
- **Brand DNA source:** commerce-DNA.md + homepage-blueprint.txt + live site fetch

## Outstanding decisions
| Decision | Options | Status |
|----------|---------|--------|
| Font set | A) Cormorant Garamond set (current) · B) Outfit + Archivo + Shantell Sans (matches Shopify theme) | **Pending — James to decide** |
| Recursos/Coaching URLs | Pillar CTAs + footer point at `/recursos` and `/coaching` placeholders | **Pending — confirm real URLs** |
| Ecosystem bg | Keep #3B393A or unify with #2B2826 | Open option |
| Footer "Sobre Mafe" | Removed from nav; footer link also removed. Nav "Recursos" label kept | Done unless James revisits |

## What's next
- **Recursos page** — James to brief next (third main page; when it lands, consider extracting shared nav/footer/token CSS into a brand.css)
- Coaching booking link — both CTAs are placeholders (Calendly? WhatsApp?)
- James reviews concept-a-main.html in browser (GSAP motion + all 2026-06-11 changes)
- Confirm pétalos price (25.000 COP placeholder) and gold-vs-black cubiertos naming (carried over, still open)
- Font decision (Cormorant vs Outfit set)
- Decide deploy host (page is static HTML; GitHub Pages/Netlify/Vercel all work from the repo) — repo exists, deployment not set up
- Compress hero-cocina.png (1.5MB) and sobre-mafe.jpg (1.6MB) before launch

## What NOT to do
- Do not rebuild these as Shopify store homepages with collection grids / category tiles
- The live landing page is founder-led + lead-gen-first, not ecommerce-first
- Products are secondary to Mafe's voice and the email capture
- Do not recreate art-directed imagery in CSS — James supplies images; wire HTML to asset paths
