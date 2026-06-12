# Landing Page Concepts — Status
Last updated: 2026-06-11

## What exists
Three self-contained HTML concept files at `/landing page/concepts/`:

| File | Concept | Type system | Palette lead | Layout signature |
|------|---------|-------------|--------------|-----------------|
| concept-a.html | The Editorial | Cormorant Garamond + Space Grotesk | Cream + coral | Left/right hero split, cascading product cards |
| concept-b.html | After Dark | Archivo Black + Cormorant italic | Ink-deep + coral | Floating pill nav, dark atmospheric, side-by-side splits |
| concept-c.html | The Object Room | Space Grotesk only (lowercase) | Off-white + olive | Grid-bordered square tiles, editorial FAQ list |
| concept-a-outfit.html | The Editorial (font variant) | Outfit + Archivo + Shantell Sans | Cream + coral | Identical to concept-a, font swap only |

## Selected direction
**Concept A** is the active direction. Refinement is in progress.

## Page structure (concept-a — restructured 2026-06-10/11)
Everything after Products was rebuilt around the positioning "We already did the research" (Host-to-Host = the shortcut; products/resources/coaching are one system, not three offers):

1. **Nav** — Recursos · Tienda · Sobre Mafe · Coaching · "Ir a la tienda" CTA
2. **Hero** — Mafe's voice first. Headline: "Te voy a contar todo lo que aprendí siendo Superhost". Two CTAs: download free resource OR go to shop. **APPROVED — do not modify**
3. **Lead magnet** — "9 años de errores caros. Resumidos en 5 productos." — email capture form. **APPROVED — do not modify**
4. **Products** — "Lo que uso en mis propios Airbnbs" — exactly 4 products (copas, **pétalos** [replaced velas 2026-06-11, James's call], toallas, cubiertos) + "Ver toda la tienda" link. **APPROVED — do not modify** (photo swap + velas→pétalos card was James-directed). Card 2 is now "Pétalos que celebran" / "De reserva a ocasión especial." / 25.000 COP (price is a placeholder — confirm with James)
5. **El Problema** (`#problema`, ink-dark) — creates tension. Centered pill + two-tone Cormorant headline "Ser buen anfitrión **no alcanza.**" + subline. Three horizontal cards (image above copy): Todo está disperso / Los costos son invisibles / La calidad se aprende a prueba y error. Progression: where do I buy it → what will it really cost → how do I know it's good. Does NOT introduce H2H as solution.
6. **Ecosystem reveal** (`#que-es`, ink-dark) — resolves tension. Outcome-led headline "Una forma más simple de ser anfitrión." + "Ya hicimos la investigación." Three pillars as hairline-divided columns (01 Productos / 02 Recursos / 03 Coaching) — mechanism, not the story.
7. **Mafe as proof** (`#sobre`, cream) — "Nueve años de errores. Para que no sean los tuyos." Evidence the system works, not protagonist. Short copy + WhatsApp CTA.
8. **Coaching contextual** (`#coaching`, cream-d) — single narrow column, no feature list, outlined "Próximamente" pill, borderless bottom-border email form. Deliberately secondary.
9. **Newsletter** — "10 productos en 10 días" email signup (unchanged)
10. **FAQ** — 7 Q&As accordion (unchanged)
11. **Footer** — Recursos / Contacto columns + legal links (unchanged)

## El Problema — current state (2026-06-11)
- Dark (var(--ink)) section matching reference James supplied (Linear-style problem section, adapted to brand: coral accent, Cormorant display, cream text)
- Card copy locked by James (verbatim, staccato lines): see section in concept-a.html
- Card visuals: three art-directed images James generated (dark still-life plates: supplier-map, receipt breakdown, towel Día 1 vs Lavado 30)
- ~~BLOCKED on James~~ **RESOLVED 2026-06-11:** all three images saved to `concepts/assets/` (`problema-1-proveedores.jpg`, `problema-2-costos.jpg`, `problema-3-calidad.jpg`) — section complete, pending browser review
- History of this section (for context, all superseded): CSS still-life recreation (rejected — "dreadful"), single-artwork layout (assets/el-problema-artwork.jpg, never supplied), 3-row editorial w/ 5 Unsplash cards, CSS abstract panels → now image cards
- Note: Problema + Ecosystem are adjacent ink sections, separated by ecosystem's hairline top border. James hasn't flagged this; option to differentiate ecosystem remains open

## Files
- `concepts/concept-a.html` — ACTIVE file, all current work
- `concepts/concept-a-updated.html` — externally-created draft (2026-06-10, not Claude), rough; superseded by concept-a.html. Can be deleted
- `concepts/assets/` — contains the 3 problema images. **WAITING on 4 product photos from James** (new candlelit/editorial set, shown in chat 2026-06-11): save as `producto-copas.jpg`, `producto-petalos.jpg`, `producto-toallas.jpg`, `producto-cubiertos.jpg` — HTML already references these paths (1:1 crop via object-fit)
- `product photos/` (project root) — existing product photo library (older style); the new product card set is NOT from this library

## Key brand references used
- **Palette:** #FCF3E9 cream · #E8825F coral · #96A1D2 periwinkle · #989C6F olive · #FAB95B yellow · #403E3F ink
- **Fonts (concept-a.html):** Cormorant Garamond · Space Grotesk · Caveat
- **Fonts (concept-a-outfit.html):** Outfit · Archivo · Shantell Sans (matches Shopify theme + brand kit)
- **SVG assets:** `../../Home Page/assets/` (logo-lockup-ink.png, logo-lockup-cream.png, etc.)
- **Product images:** Unsplash direct URLs (no API key needed), consistent seeds per product
- **Brand DNA source:** commerce-DNA.md + homepage-blueprint.txt + live site fetch

## Refinement log (2026-06-09)

### FAQ
- Layout changed from 2-column static grid to single-column accordion
- White card rows with rounded corners, coral chevron toggle, smooth expand/collapse
- One item open at a time; scroll-in animation preserved
- Matches the layout of the live site

### Hero
- Metrics row removed (9 años / 5 propiedades / 100+ proveedores)
- Vertical height reduced to fit above the fold on a standard laptop (`height: 100dvh`, `max-height: 92rem`, tightened padding and spacing)
- CTAs simplified: stacked column → inline row, circle icon removed, copy tightened ("Descargá los 5 esenciales ↓" / "Ver la tienda →")
- Typography, palette, and left/right composition preserved

### Lead magnet
- Position: confirmed second (hero CTA links here; visitor at peak curiosity)
- Headline rewritten to lead with mistake-avoidance positioning: "9 años de errores caros. Resumidos en 5 productos."
- Body copy rewritten: "lo aprendí después de una estadía que salió mal — para que no tengas que descubrirlos a las malas"
- Form redesigned from SaaS box to editorial open form: bordered container removed, bottom-border-only input (notebook feel), Shantell-style handwriting quote above form, button copy changed to "Quiero la lista →"

### Products
- Product card image height reduced ~25% (aspect-ratio 3/4 → 1/1)
- Card width unchanged; image quality preserved via object-fit: cover
- Improves page rhythm and allows more content above the fold on laptops

### Nav
- "Newsletter" removed from top nav; retained in footer and on the page

## Outstanding decisions

| Decision | Options | Status |
|----------|---------|--------|
| Font set | A) Keep Cormorant Garamond + Space Grotesk + Caveat (editorial, distinct from store) · B) Switch to Outfit + Archivo + Shantell Sans (matches Shopify theme + brand kit) | **Pending — James to decide** · concept-a-outfit.html exists for comparison |

## Refinement log (2026-06-10/11) — post-products restructure
- Old Founder + Coaching sections replaced by 4-section narrative: Problema (tension) → Ecosystem (resolution) → Mafe (proof) → Coaching (contextual)
- El Problema iterated 5 times (see "El Problema — current state"); final form = dark section, centered header, 3 image cards w/ locked copy
- Skills used per James's instruction: redesign-existing-projects, high-end-visual-design, brandkit
- Workflow note: James supplies visual references/assets as images; recreating art-directed still-lifes in CSS was explicitly rejected — use his generated images as-is

## What's next
- **James:** save the 4 new product photos to `concepts/assets/` (exact filenames in Files section)
- **James:** confirm pétalos price (25.000 COP placeholder) and card copy ("Pétalos que celebran")
- **James:** card 4 is named "Cubiertos negros" but the new photo is GOLD cutlery — confirm whether to rename the card or use a different photo
- **James:** review El Problema + Products in browser (all problema images now in place)
- James reviews outstanding font decision (Cormorant set vs Outfit set)
- Real product photography replaces Unsplash placeholders when available
- Open option: differentiate Ecosystem section from now-adjacent dark Problema section

## What NOT to do
- Do not rebuild these as Shopify store homepages with collection grids / category tiles
- The live landing page is founder-led + lead-gen-first, not ecommerce-first
- Products are secondary to Mafe's voice and the email capture
