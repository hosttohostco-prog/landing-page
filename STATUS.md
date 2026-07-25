# Landing Page Concepts — Status
Last updated: 2026-06-12 (copy audit pass on home page — approved; see "Copy audit pass" section)

## Git repo (NEW 2026-06-11)
- This folder is now a git repo: **https://github.com/hosttohostco-prog/landing-page** (branch `main`)
- Auth: **SSH** (key `~/.ssh/id_ed25519`, in macOS keychain, account hosttohostco-prog). Switched from HTTPS/PAT on 2026-06-15 because the fine-grained token kept expiring and breaking pushes. Remote = `git@github.com:hosttohostco-prog/landing-page.git`. Same key authenticates all hosttohostco-prog repos (incl. `shopify`); SSH keys don't expire, so no re-auth needed.
- Workflow: one commit per James-approved change, small diffs. Push after approval.
- Keep this repo separate from the `hosttohostco-prog/shopify` theme repo

## Main pages (the site)
**THREE main HTML pages** — all self-contained, same design system (Cormorant Garamond + Space Grotesk, cream + coral, GSAP + Lenis motion with nomotion/no-JS fallbacks):

| File | Page / URL | Status |
|------|-----------|--------|
| **concepts/concept-a-main.html** | Home — hosttohost.co | Active, James reviewing |
| **concepts/coaching.html** | Coaching — /coaching | Built + approved 2026-06-11 |
| **concepts/recursos.html** | Recursos — /recursos | Built + approved 2026-06-11 (card images pending) |

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
2. **Hero** — Mafe's voice first. Headline (2026-06-12, outcome-led): "Mejores reseñas, menos plata quemada. Te cuento cómo lo logré siendo Superhost." Two CTAs. Hero image = `assets/hero-cocina.png`. **Copy APPROVED 2026-06-12 — do not modify**
3. **Lead magnet** — "La checklist de los 5 esenciales que tu propiedad necesita antes del próximo check-in." (2026-06-12, checklist reframe) — email capture. **APPROVED 2026-06-12 — do not modify.** The page's ONLY email capture (newsletter + coaching forms removed).
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

## Recursos page (concepts/recursos.html, NEW 2026-06-11 — approved)
Built 1:1 from James's reference board (attached in chat; full-board copy at `mock-ups/resources-background.png`). Colombian Spanish (voseo), same tokens/fonts/footer as home/coaching.
1. **Hero — light variant** — cream, photo full-bleed behind (`assets/recursos-hero.png`, from `mock-ups/resources-background1.png`: warm interior, shelving, doorway to pool), cream legibility wash strongest top-left (extended right 2026-06-11 because the bright doorway sat under the side paragraph). Coral "Recursos" eyebrow, 4-line serif headline "Todo lo que me hubiera gustado tener antes de lanzar mi *primer Airbnb.*", side paragraph right. Nav = ink variant from home (cream frosted glass on scroll). Graceful plain-cream fallback if the image fails.
2. **Resource library** — 6 white cards, 3×2, hairline borders, image inset + badge bottom-left. Live row: Empezá tu Airbnb (Gratis) · Checklist de esenciales Host-to-Host (Pago) · Manual de bienvenida para huéspedes (Gratis), coral arrow links. Coming-soon row (dark scrim + lock + "Muy pronto"): El playbook de lanzamiento · Framework de precios y ocupación · Base de proveedores.
3. **CTA banner** — same dark rounded card as coaching, 3 columns: "Tu próxima buena decisión *empieza acá.*" · "Acompañamiento 1:1" + sub · pill "Agendá tu sesión" → /coaching.
4. **Footer** — identical to home/coaching.
- **New badge tones** (derived from board, not in base palette): `--badge-free: #3E4232` (deep olive-ink) · `--badge-paid: #BC5B2E` (burnt coral; also card-link color — coral-d too light on white).
- Motion: hero photo fade/scale-settle + parallax, SplitText headline reveals, card cascade, banner line reveal + magnetic CTA. Same reduced-motion/no-JS safety as the other pages.
- Verified in headless Chrome: desktop 1440, true 390px mobile, zero console errors.
- **Open:** 6 card images pending (placeholders show a cream-d block): `assets/recurso-empeza-tu-airbnb.png`, `recurso-checklist-esenciales.png`, `recurso-manual-bienvenida.png`, `recurso-playbook-lanzamiento.png`, `recurso-precios-ocupacion.png`, `recurso-proveedores.png`. Card links are `#` placeholders (download/checklist destinations TBD). Compress recursos-hero.png (2MB).

## Copy audit pass (2026-06-12 — APPROVED, home page only)
Four-expert copy audit (competitor / ideal customer / UI-UX / Hormozi-Priestley offer strategist) scored the page 5.5/10 average; James approved these fixes in `concept-a-main.html`:
- **Hero headline → outcome-led (Option B):** "Mejores reseñas, menos plata quemada. Te cuento cómo lo logré siendo Superhost." — 5 controlled lines desktop, `<title>` updated to match. CSS: `.hero-content` max-width 56rem→66rem (line 2 didn't fit); mobile `.hero-h1 br { display:none }` (natural wrap; markup has spaces before each `<br>` so hidden breaks don't jam words).
- **Lead magnet → checklist reframe (Option C):** "La checklist de los 5 esenciales que tu propiedad necesita antes del próximo check-in." + body adjusted ("Te mando la checklist gratis…"). Button stays "Quiero la lista →".
- **Coaching FAQ contradiction resolved** (coaching is LIVE): "¿Cuándo empieza…?"/waitlist answer → "¿Cómo funciona el coaching?" + 1:1 60-min Zoom + link to /coaching. New CSS rule `.faq-a a` (underline, inherit color).
- **English product badges → Spanish:** La elección de Mafe · Lo volvería a comprar · Disponible en Colombia · Favorito de anfitriones.
- **"Sin importaciones" → buyer benefit:** hero subline now "Te llegan en días, desde Colombia — sin aranceles ni esperas de importación."; marquee item → "Sin aranceles sorpresa" (×2).
- **Unit counts on product cards** (verified against live store): Copas "Pack de 2 ·", Pétalos "100 por pack ·", Cubiertos "4 puestos completos ·". Toallas sold individually — no count.
- **Post-submit expectation:** form small print now starts "Te llega al correo en minutos." (true only once the form is wired to an ESP).
- **Guarantee:** deliberately NOT on the landing page (James 2026-06-12) — lives on the Shopify store. NOTE: store refund policy is unedited English boilerplate with "[INSERT RETURN ADDRESS]" — logged with payments setup in parent `docs/build-status.md` → "Store Operations — Pre-Launch".
- **Open from audit (next session): section ORDER of the home page** (products-before-problem inversion). Hero CTA hierarchy confirmed correct as-is (lead magnet primary, store secondary).

## Visual system changes (2026-06-11)
- **Dark section background:** new token `--ink-bg: #2B2826` applied to `.lead`, `.problem`, `.footer`. `--ink` (#403E3F) unchanged — still used for text and button fills. Ecosystem deliberately stays #3B393A (lighter, differentiated) — open question whether to unify.
- All images now local in `concepts/assets/` (logos copied from Home Page so the repo is self-contained). concept-a has NO external image dependencies left except Google Fonts.

## Files
- `concepts/concept-a-main.html` — **MAIN PAGE: home** (GSAP motion redesign, 2026-06-11)
- `concepts/coaching.html` — **MAIN PAGE: coaching** (built + approved 2026-06-11)
- `concepts/recursos.html` — **MAIN PAGE: recursos** (built + approved 2026-06-11, card images pending)
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

## Hygiene pass (2026-06-11, James-approved — DONE)
- **concepts/brand.css** extracted: tokens, reset, noise, nav (light default + `.nav--dark` variant), `.c-label` eyebrow (+`--cream`), `.btn-pill`, footer, shared mobile rules. All three pages link it; pages keep only page-specific CSS. Pages are no longer single-file self-contained.
- **Eyebrow standardized** (James: coaching style is the keeper): uppercase kicker + short coral line below, on every label across all pages (home hero eyebrow, lead "Guía gratuita", products "La tienda", recursos hero — its under-headline line removed).
- **Home hero → photo-behind** like coaching/recursos: hero-cocina.png full-bleed, cream wash left, transparent nav over it, fade/scale entrance replaces clip-path wipe. Copy/CTAs/hero-note unchanged.
- **Ecosystem bg** unified to `--ink-bg` #2B2826 (was #3B393A) — closes that open question.
- **Real links wired:** home nav/footer (`/recursos`, `/coaching`, tienda); product cards → tienda.hosttohost.co/products/{vasos-irrompibles, petalos, toallas-desmaquillantes, cuberteria} (verified via Shopify API); pétalos price corrected 25.000→**30.000 COP** (store price — closes that open question); "Ver toda la tienda" ×2 → store; footer Instagram → instagram.com/demafetohost (all pages); footer FAQ → #faq / /#faq. WhatsApp still `#` (not set up yet).
- Verified: 1440 desktop screenshots all pages, zero console errors.

## Deploy (DONE 2026-06-12)
- **Live at hosttohost.co** — Netlify connected to `hosttohostco-prog/landing-page`, branch `main`, publish dir `site/`
- Auto-deploy: every push to `main` goes live in ~30s
- URL structure: `/` → home, `/coaching/` → coaching, `/recursos/` → recursos
- Hero images compressed PNG→JPEG (~2MB → 200-300KB each); product photos resized to 900px
- Lead form wired to **MailerLite** (account `2447022`) — see "Lead-magnet system" below. Migrated off Kit 2026-06-15.
- Recursos cards: image-free text-only design (no card images to maintain)

## Lead-magnet system (DONE 2026-06-15)
Three **free** lead magnets, all live, all delivered via MailerLite (account `2447022`). Each = own embedded form + group + "Completes a form" automation → one delivery email (no delay) carrying the magnet's published Notion link.

| Magnet | MailerLite form ID | Notion page | Where on site |
|--------|-------------------|-------------|---------------|
| Los 5 esenciales | `190361827797894240` | `/Productos-2fccb70826d480078a05ca56a7778130` | Home `#lead` form + recursos card |
| Lista de compras para tu primer Airbnb | `190373641874048293` | `/Lista-de-compras...36fcb70826d481d29161cc8b368a3352` | Recursos card |
| Manual de bienvenida para huéspedes | `190375217439179969` | `/Manual-Airbnb-28ccb70826d480e39792d6bc270ae71a` | Recursos card |

- **Capture mechanics:** home hero has its own inline form (5 esenciales). Recursos uses ONE shared on-brand popup (`.magnet-overlay`) — each card carries `data-mlform` + `data-title` + the Notion URL as `href`; JS intercepts → POSTs to `assets.mailerlite.com/jsonp/2447022/forms/{id}/subscribe` → shows the Notion link on success. No-JS fallback = the `href` goes straight to Notion.
- **Popup copy is value-first:** "Gratis, a tu correo" / [magnet name] / "Te llega al correo en minutos." Button "Enviármelo →". (Rejected "Dejame tu correo" as ask-centric.)
- **Delivery emails:** outcome-first, Mafe's voice (voseo), each kept a **products PS → hosttohost.co** (coaching deliberately NOT in first-touch; it belongs in the nurture sequence).
- **Deliverability:** DKIM + SPF live in Namecheap; sender = `hola@hosttohost.co` (off gmail) as of 2026-06-15. Note: delivery email lands in Gmail **Promotions** (normal for ESP bulk mail) — decided not to chase Primary at the cost of design/PS.
- **Privacy:** every form + footer now links to the on-site `/privacidad` page (see section below). Previously pointed at `tienda.hosttohost.co/policies/privacy-policy`, which was broken — the store is password-gated pre-launch, so that Shopify policy URL redirects to `/password` and is unreachable by the public.

## Dedicated opt-in pages (DONE 2026-06-24)
Single-magnet landing pages for Instagram DM sharing — one link = one magnet = one email field, removing the "find the magnet" friction of sending people to `/recursos`. Built because MailerLite hosted landing pages aren't creatable via API/CLI/MCP (dashboard-only); these live on-site instead and reuse the existing JSONP capture, so they feed the same forms/groups and fire the same delivery + nurture.

| Page | URL | MailerLite form ID |
|------|-----|--------------------|
| Los 5 esenciales | `/esenciales` | `190361827797894240` |
| Lista de compras primer Airbnb | `/lista-compras` | `190373641874048293` |
| Manual de bienvenida | `/manual` | `190375217439179969` |
| Tu alojamiento, su oficina | `/oficina` | `191273791381308704` |

- **`/oficina` (NEW 2026-06-24):** 4th magnet, Notion `https://local-fisher-da7.notion.site/Tu-alojamiento-su-oficina-389cb70826d48154a2ece6592609147c`. Group `LM · Tu alojamiento oficina` `191273785310054182`. Delivery automation `191273987595044211` is **INACTIVE — James still needs to (in dashboard): turn double opt-in OFF on the form, write the delivery email (value-first, NO store link), set the button to the Notion URL, add a copy-to-`Nurture · Todos` step, then activate + test.**
- **Design:** deliberately minimal — logo-only nav (no exit links), centered eyebrow + headline + subline + inline email field + button, trust line ("Por Mafe, Superhost…"), slim footer with privacy link. No imagery (James's call). Same brand.css tokens/fonts. `noindex` (DM-only, kept out of search). Reduced-motion / no-JS safe.
- **Capture:** inline form POSTs to `assets.mailerlite.com/jsonp/2447022/forms/{id}/subscribe`; on success shows the magnet's Notion link inline.

## Privacy page (DONE 2026-06-25)
Standalone **public** legal page at `/privacidad` (`site/privacidad/index.html`), built because the store is password-gated and its Shopify privacy URL is therefore unreachable. Colombian Spanish (voseo), brand.css tokens, logo-only nav + slim footer. Covers: who we are, data collected (email/name via forms), purpose, MailerLite as processor, **rights under Ley 1581 de 2012 / Habeas Data**, retention, unsubscribe, contact. All 10 privacy links sitewide (home form, 4 opt-in pages, recursos popup + footer, all slim footers) now point here; verified live (200). **Caveats:** contact email used = `hola@hosttohost.co` (swap if that inbox isn't live); it's a solid template, not legal advice — worth a lawyer's glance.

**Shopify password-page copy** (for James to paste at Online Store → Preferences → password message): *"¡Muy pronto abrimos! Estoy montando la tienda con los productos que de verdad uso en mis Airbnbs. Apenas esté lista, sos de los primeros en saber."*

## What's next
- **Nurture sequence (MailerLite) — COPY DONE 2026-06-15, build pending.** ONE shared sequence (not per-magnet): all 3 magnets feed master group `Nurture · Todos`; one automation triggers on joining it, **re-entry OFF**, so emails 2-4 are IDENTICAL for everyone and you build it once. Emails: (2) día 2-3 why-HtH/convenience story, no ask · (3) día 5-6 products → hosttohost.co · (4) día 8-10 coaching → WhatsApp. v1 is intentionally good-enough: no A/B, no branching, no separate social-proof email (deferred to post-traction). Full bilingual copy + MailerLite build checklist: `Marketing/nurture sequence/nurture-emails.md`. Voice source = `Commerce/commerce-DNA.md` (Mafe's own voice files incoming). **Remaining to go live:** James uploads to MailerLite + builds the automation; WhatsApp link for Email 4 (placeholder, sorting tomorrow).
- **Términos footer link** — decided: REMOVE it from the landing footer (page doesn't transact; terms live on the store). Recursos footer still has `<a href="#">Términos</a>` to delete. (Store terms + refund policy also have `[INSERT ...]` placeholders — separate store-ops task.)
- **Lead-magnet QA** — do one real test signup per recursos card to confirm all three delivery automations fire (5 esenciales confirmed working by James).
- **WhatsApp links** — sitewide `href="#"` placeholders; wire once WhatsApp Business is set up
- **Coaching booking link** — both CTAs on `/coaching/` are `#` placeholders; needs Calendly or WhatsApp link (also unblocks nurture Email 4)
- Confirm pétalos price (30.000 COP — already on store, double-check page matches) and gold-vs-black cubiertos naming

## What NOT to do
- Do not rebuild these as Shopify store homepages with collection grids / category tiles
- The live landing page is founder-led + lead-gen-first, not ecommerce-first
- Products are secondary to Mafe's voice and the email capture
- Do not recreate art-directed imagery in CSS — James supplies images; wire HTML to asset paths
