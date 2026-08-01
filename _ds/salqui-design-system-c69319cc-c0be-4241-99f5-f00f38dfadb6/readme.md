# Salqui Design System

**Salqui** is a B2B brand of high-quality ophthalmic lenses (lentes oftálmicos) sold to opticians and optometry practices (ópticas y optometrías). Its strategic wedge: it adopts already-validated optical technology and optimizes it for cost, access and distribution — delivering quality rated *9/10 vs. references like ZEISS or Transitions* at a price the channel can actually sustain a margin on. Salqui does not compete on radical scientific innovation; it competes on **intelligent optimization**: same technology, better access, better price, better aesthetics.

The personality is technical, precise, sober, "quietly premium" with a Northern-European engineering feel (Swiss/German: order, exactness, confidence). The guiding concept is **"Precisión que se ve"** (Precision you can see).

This design system encodes that identity: a monochromatic electric-blue + navy palette, a Swiss geometric grotesque type system, generous whitespace, fine "blueprint" construction lines, and clinical lens imagery.

## Sources
Provided by the client (stored under `/uploads`, working copies in `/assets`):
- `SALQUI_Brief_Estrategico.docx` — full strategic brief (diagnosis, brand-design brief, social-media brief, website brief). **This is the primary source** for everything below.
- Logo suite: horizontal & vertical lockups, isotype symbol, in polychromatic + monochromatic, positive + negative.
- Key visual (`KV.jpg`) and a social post (`Post.jpg`).
- Four brand line-icons ("Recurso 1–4"): target/precision, focus-eye, aspheric lens, low-reflection.

> **Missing source:** the brief references `04 Manual de Marca.pdf`, which was **not present** in the project filesystem. All visual foundations here are derived from the logo files, key visual, and the written brief. If a formal brand manual exists, share it so exact spacing/clear-space and any secondary colors can be reconciled.

---

## CONTENT FUNDAMENTALS

**Language:** Spanish (Colombia / LATAM channel). Technical but accessible — never condescending.

**Audience:** NOT the end wearer. The reader is the **buyer/decision-maker at an óptica** — owners, administrators, optometrists with purchasing power. Copy speaks to the optician who wants to offer real quality without sacrificing margin.

**Voice — the brand speaks:** technical and precise · direct, no filler · sober, no hype · sure of its quality · corporate but not cold.

**The brand never:** uses empty exclamations · promises to "change your life" · gets emotionally exaggerated · uses lifestyle/consumer jargon · attacks competitors aggressively.

**Casing & person:** Sentence case for body and headlines. Tracked UPPERCASE reserved for eyebrows/taglines ("PRECISIÓN QUE SE VE"). Addresses the business directly ("tu óptica", "tu portafolio") — professional *tú*, not distant *usted*, not first person plural bravado. Data and specifics over adjectives.

**Emoji:** never. **Exclamation marks:** avoid.

**Vibe / examples (from the brand):**
- Hero: *"Claridad diseñada — Tecnología óptica avanzada para una visión más limpia y cómoda."*
- Positioning: *"Misma tecnología. Mejor acceso."*
- Insight quote: *"Quiero ofrecer calidad alta… pero que el cliente sí pueda pagarla."*
- Web principle: *"La calidad se nota antes de usarla."*
- CTAs: *"Quiero ser distribuidor" · "Solicitar catálogo" · "Hablar con un asesor"* — short, confident, no punctuation flourish.

Content pillars (for social/comms): 1) Precisión técnica, 2) Experiencia visual del usuario, 3) Negocio para la óptica, 4) Estética y presentación, 5) Autoridad de marca.

---

## VISUAL FOUNDATIONS

**Overall vibe:** minimalist, technical/clinical, confident, "premium silenciosa." Air is part of the design — whitespace is used intensively. Never eco-cliché, never saturated, never decorative, never trendy.

**Color** — deliberately *monochromatic*. One electric blue does the accent work; navy is the ink; everything else is cool neutral. No warmth anywhere.
- `--salqui-blue #1436DD` — primary brand blue (the isotype).
- `--salqui-blue-deep #0416B7` — deeper royal, used in iconography and pressed states.
- `--salqui-blue-bright #2F4DFF` — hover / interactive lift.
- `--salqui-navy #011638` — ink: wordmark, headings, heavy weights, dark sections.
- Cool neutrals `--neutral-50 … 900` (blue-biased grays), pure `--white`.
- Technical accents: `--blueprint-tint #EBF0FF`, `--blueprint-line #C9D6F2`, `--halo #7FA0FF` (the light-beam highlight from the KV).
- Semantic states exist but are used sparingly and clinically (`--success`, `--warning`, `--danger`).

**Type** — Swiss geometric grotesque, clean and airy.
- Display/UI: **Archivo** (headings, wordmark-adjacent; tight tracking `-0.02 → -0.035em` on large sizes).
- Technical annotations, spec values, index numbers: **IBM Plex Mono**.
- Signature move: **wide-tracked uppercase** (`0.18em`) for eyebrows and the tagline.
- Scale is a 1.25 major third; base 16px. Headings can go very large with negative tracking; body stays 15–19px with generous line-height (1.5–1.65).
- *(Font substitution — see Fonts note below.)*

**Spacing & layout:** 8px grid. Generous margins, modular structured grid, clear alignments. Containers cap ~1200px. Sections breathe with 80–96px vertical padding.

**Backgrounds:** predominantly white and `--neutral-50`. Dark sections use `--salqui-navy`. No aggressive gradients — the only gradients are subtle radial *light glows* (halo) echoing the key visual's light beam, always low-opacity on navy. Full-bleed clinical lens photography is the hero device. Fine geometric "blueprint" construction lines (crosshairs, dashed axes, thin rules) are the permitted graphic ornament.

**Imagery vibe:** cool, clean, high-definition. Close-ups of lenses with light; neutral/white backgrounds; clinical lighting. Blue-cast, never warm, never grainy, never heavily saturated. No organic/decorative illustration, no low-quality stock.

**Borders & radii:** near-square. Radii are restrained — `2 / 4 / 8 / 12px`; precision reads as squared corners. Buttons use 4px. Hairline borders `1px` in `--neutral-200`; stronger controls `1.5px`.

**Shadows:** clinical and soft — cool blue-tinted (`rgba(1,22,56,…)`), low opacity, diffuse. Never heavy or dark. `--shadow-xs → lg`.

**Cards:** white, hairline border, 12px radius, `--shadow-sm` at rest → `--shadow-md` + 2px lift + stronger border on hover. Airy internal padding (~28px).

**Motion:** subtle and functional. Standard `cubic-bezier(0.4,0,0.2,1)`, durations 120/200/360ms. Fades and small translations only — **no bounce**, no springy or playful motion.

**Hover states:** primary buttons shift to `--blue-bright`; secondary/outline darken their border to navy; ghost gets a `--blueprint-tint` wash; cards lift + deepen shadow.

**Press/active states:** primary buttons deepen to `--blue-deep`; controls hold focus with a 3px `--focus-ring` (`rgba(20,54,221,0.35)`). No shrink/scale on press.

**Transparency & blur:** used sparingly — the sticky top nav uses `backdrop-filter: blur(12px)` over `rgba(255,255,255,0.86)`. Otherwise surfaces are opaque.

---

## ICONOGRAPHY

Salqui ships a small set of **bespoke technical line-icons** (the brand's "recursos"), delivered as PNGs and copied into `/assets`:
- `icon-target.png` — crosshair / precision.
- `icon-focus-eye.png` — eye inside focus brackets (nitidez).
- `icon-aspheric.png` — aspheric lens cross-section with optical axis.
- `icon-antireflective.png` — light rays reflecting off a curved surface (baja reflexión).

Style: single-color royal blue (`#0416B7`), consistent stroke weight, geometric, technical/blueprint feel — they look like optical diagrams, not generic UI glyphs. Use them large, framed in a `--blueprint-tint` tile with a thin `--blueprint-line` border (see `FeatureItem`).

**UI glyphs** (arrows, chevrons, checks, close, download, WhatsApp): drawn inline as thin (2–2.4px) stroke SVGs matching the technical line style. There is **no icon font** in the brand. For any icon not provided, use a **thin-stroke, geometric outline set** — the closest CDN match is **Lucide** (2px stroke, rounded joins) — and keep it monochrome in navy or brand blue. Flag any substitution.

**Emoji / unicode as icons:** never.

---

## Components

Reusable primitives, exported on `window.SalquiDesignSystem_c69319`. Grouped by concern under `components/`:

**Core** (`components/core/`)
- **Button** — primary / secondary / ghost / inverse; sizes sm/md/lg; icon slots; a starting point.
- **IconButton** — square icon-only action; ghost / outline / solid.
- **Badge** — status / category marker; brand / neutral / success; soft / solid / outline.

**Forms** (`components/forms/`)
- **Input** — labelled text field with hint & error states.
- **Select** — styled native select with chevron.
- **Checkbox** — square precise checkbox.

**Content** (`components/content/`)
- **Card** — base white surface.
- **ProductCard** — lens-line tile (composes Card + Badge).
- **FeatureItem** — icon + title + copy for technical differentiators.
- **SpecList** — ficha-técnica data table (mono values).
- **Eyebrow** — signature tracked-caps label / tagline.
- **Logo** — renders the brand lockups from packaged PNG assets (never redraws the mark).

Each component directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a `*.card.html` specimen.

---

## Fonts note (substitution)
The brief references Helvetica Now / Neue Haas Grotesk / Circular (licensed). Those are not bundled. **Archivo** (Google Fonts) is used as the nearest high-quality Swiss-grotesque substitute for display/UI, with **IBM Plex Mono** for technical text. If you own the licensed originals, drop the font files in and update `tokens/fonts.css` + `tokens/typography.css`.

---

## Index / manifest

**Root**
- `styles.css` — global entry (import this): `@import`s all tokens + base.
- `thumbnail.html` — homepage tile.
- `readme.md` — this file. `SKILL.md` — Agent-Skills wrapper.

**Tokens** (`tokens/`)
- `fonts.css` (webfonts) · `colors.css` · `typography.css` · `layout.css` (spacing/radius/shadow/motion) · `base.css` (element defaults, link colors, eyebrow/rule helpers).

**Assets** (`assets/`)
- Logos: `logo-{horizontal,vertical}-{color,mono}[-negative].png`, `symbol-{color,mono}[-negative].png`.
- Icons: `icon-{target,focus-eye,aspheric,antireflective}.png`.
- Imagery: `keyvisual.jpg`, `post-sample.jpg`.

**Guidelines / specimen cards** (`guidelines/`) — Colors, Type, Spacing, Brand cards for the Design System tab.

**Components** (`components/core|forms|content/`) — see list above.

**UI kit** (`ui_kits/website/`) — interactive B2B site: Home, Products, Why, Contact + shared chrome. See its `README.md`.

**Slides** (`slides/`) — commercial-presentation samples: title, differentiators, statement, closing.
