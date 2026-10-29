# Design spec: measured from arcticbase.tech

*Measured on 29 October 2026 from the live site's code (the computed CSS and Tailwind classes),
not from screenshots. Desktop = 1440 px wide, phone = 390 px wide.*

**What we copy and what we don't.** We copy the layout system, measurements, type scale,
colour roles and interactions. We do **not** copy their wording, logo, images, photos or
source files. Every word, image and line of code on our site is our own.

---

## 1. Their stack (use the same)

| Part | What they use | What we use |
|---|---|---|
| Framework | Next.js (App Router) | Next.js |
| Styling | Tailwind CSS v4 + shadcn/ui tokens | Tailwind CSS v4 + shadcn/ui |
| Smooth scroll | Lenis (`<html class="lenis lenis-smooth dark">`) | `lenis` package |
| Icons | Lucide (`arrow-right`, `copy`, `menu`, `x`) | `lucide-react` |
| Theme | Always dark (`class="dark"` on `<html>`) | Same: dark only |
| Animation library | None (CSS transitions only) | Same to match; GSAP optional later |
| Hosting | Vercel | Vercel (₹0) |

Tailwind breakpoints (defaults): `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536.
Spacing unit: `--spacing: 0.25rem` (4 px), so `mt-40` = 160 px.
**The layout changes only at `md` (768 px).** Below it the layout is phone; at 768 px and wider it's desktop.

---

## 2. Fonts

| Role | Their font file | Use in our build | Weight |
|---|---|---|---|
| Big headlines, numbers, buttons | GeistBold | Geist | 700 |
| Eyebrow labels, names, mobile menu | GeistMedium | Geist | 500 |
| Paragraphs | Geist | Geist | 400 |
| Nav links, service descriptions, footer © | Poppins Regular / Medium | Poppins (Google Fonts) | 400 / 500 |

- Geist is free (SIL Open Font License): `npm i geist`, then `import { GeistSans } from "geist/font/sans"`.
- They load each weight as a separate family name (`GeistBold`, `GeistMedium`). We use one family
  with real weights, which looks the same and loads less.
- Fallback: `sans-serif`.
- Note: most of their "bold" text is the GeistBold file with `font-weight: 400`. With one
  family, use `font-bold` (700) to get the same look.

---

## 3. Colours (the dark theme that's actually shown)

| Token | Value | Used for |
|---|---|---|
| `--background` | `#000000` | Page, nav, buttons' text |
| `--foreground` | `#f0f0f0` | All main text, 1 px row dividers |
| `--primary` | `#eac5ff` (lilac) | Buttons, eyebrow labels, active rows, hover |
| `--primary-foreground` | `#000000` | Text on lilac |
| `--muted-foreground` | `#cccccc` | Secondary text (e.g. job titles) |
| `--card` | `#1a1a1a` | Cards / popovers |
| `--accent` | `#2a2a2a` | Subtle fills |
| `--border` | `rgba(255,255,255,0.10)` | Nav bottom border, menu border |
| `--ring` | `#555555` | Focus ring |
| Section tint | `rgba(255,255,255,0.05)` (`bg-white/5`) | Alternate section backgrounds |
| Dim text | `#f0f0f0` at 50% (`text-foreground/50`) | Hero line 2, contact sub-text |
| Dim accent | `#eac5ff` at 50% (`text-primary/50`) | Highlighted words in hero line 2 |
| `--radius` | `0.625rem` (10 px) | Default radius (buttons are fully round) |

**For our site:** keep the same *roles*, but choose our own accent colour instead of their lilac
so we don't look like a copy. Every place that says "lilac" below means "our accent".

---

## 4. Grid and spacing system

- **Content column:** `max-w-6xl` (1152 px) and `w-[95%]`, centred. At 1440 px the content runs from x = 144 to x = 1296.
  On a 390 px phone it's 371 px wide with about 10 px on each side.
- **Full-bleed bands:** section backgrounds and row dividers run the full screen width (`w-full`);
  only the content inside is limited to 1152 px.
- **Section rhythm:**
  - Statement block: `mt-40` (160 px) above, or `my-40` (160 px above and below).
  - Gap from statement to stats band: `mt-30` (120 px).
  - Testimonials section: `my-32` (128 px) outside, grid `my-20` (80 px).
- **Alternating backgrounds:** Hero black → About tint → Services black → Why tint (+40 px top margin) → Testimonials black → Contact tint.
- **No cards with shadows or rounded corners.** Structure comes only from 1 px full-width lines (`border-y border-foreground`).

---

## 5. Type scale

| Element | Phone (<768) | Desktop (≥768) | Font | Other |
|---|---|---|---|---|
| Hero headline (2 lines of h2) | 48 / 48 px (`text-5xl`) | **96 / 96 px** (`md:text-8xl`) | Geist 700 | Uppercase, line-height 1 |
| Eyebrow label ("ABOUT US") | 20 / 28 px | 24 / 32 px | Geist 500 | Uppercase, lilac, left |
| Section statement | 36 / 40 px | **48 / 48 px** | Geist 700 | Uppercase, full 1152 px width |
| Service row title | 36 / 40 px | 48 / 48 px | Geist 700 | Sentence case, not uppercase |
| Service row description | 14 / 20 px | 20 / 28 px | Poppins 400 | Only visible on the active row |
| "Why us" number (01) | 36 / 40 px | 48 / 48 px | Geist 700 | |
| "Why us" text | 24 / 32 px | 30 / 36 px | Geist 700 | 70% width, right side |
| Stat number | 60 / 60 px | 60 / 60 px | Geist 700 | |
| Stat label + text | 14 / 20 px | 14 / 20 px | Geist 400 | Text has 20 px top margin |
| Hero paragraph | 14 / 20 px | 20 / 28 px | Geist 400 | max-width 700 px |
| Contact headline | 36 / 40 px | 48 / 48 px | Geist 700 | Centred, max-width 768 px |
| Contact sub-text | 14 / 20 px | 18 / 28 px | Geist 400 | 50% white, max-width 576 px |
| Footer social links | 30 / 36 px | 30 / 36 px | Geist 700 | Uppercase |
| Nav links | hidden | 18 / 28 px | Poppins 500 | Uppercase, 24 px apart |
| Mobile menu links | 30 / 36 px | — | Geist 500 | Uppercase, 16 px apart |
| Person name / title | 18 / 28 px · 14 / 20 px | same | Geist 500 · Geist 400 | Title in #ccc |
| Footer © | 16 / 24 px | same | Poppins 400 | Centred |

No letter-spacing changes anywhere; everything uses normal tracking.

---

## 6. Components, section by section

### Nav (fixed)
- `fixed top-0 inset-x-0 z-50`, height **48 px** (`h-12`), black background, 1 px bottom border at 10% white, `shadow-md`.
- Side padding: 16 px phone, 24 px at `sm`, **32 px** at `lg`. Full width (no max width).
- Left: logo image **250 × 50 px**.
- Right (desktop): 5 uppercase links (Poppins 18 px, 500), 24 px apart, hover → lilac (300 ms),
  then a **pill button**: lilac background, black text, Geist 700 18 px uppercase,
  padding 8 × 24 px, height 36 px, fully rounded, hover → lilac at 90%.
- Phone: 28 px menu icon (Lucide `menu`, switching to `x`). The menu opens below the bar, black,
  84vh tall, 16 px padding, links 30 px Geist 500 uppercase stacked 16 px apart,
  and a full-width pill button pinned at the bottom (90% wide, 56 px tall, 24 px text).
  Opens with a 300 ms opacity/height transition.

### Hero
- Full screen height (`min-h-screen`), content centred vertically, column 1152 px.
- Headline block is 95% of the column. Line 1: left-aligned, full white.
  Line 2: **right-aligned**, 50% white, with the last words in lilac at 50%.
- Below, 40 px gap, a row: **on desktop the button is on the left and the paragraph on the right**
  (`md:flex-row-reverse justify-between items-center`). On a phone the paragraph comes first and the button sits under it with 40 px space.
- Big pill button: lilac, black Geist 700 20 px uppercase, padding 28 px all round (56 px tall, about 236 px wide).

### Statement block (reused in About, Services, Why, Testimonials)
- Eyebrow label (lilac, Geist 500, uppercase) directly on top of a huge uppercase statement (Geist 700 48 px), both left-aligned across the full 1152 px column.

### Stats band (About)
- Full-width band with a 1 px line top and bottom (`border-y border-foreground`).
- Inside, the 1152 px column uses **CSS columns**: 2 on phone, 3 at `md`, 4 at `lg`, with a 2 px solid rule between columns.
- Each cell: 240 px tall, contents 80% wide, number (60 px) → label (14 px) → text (14 px, 20 px gap).
- Hover: the cell fills lilac and the text turns black (500 ms).

### Service rows (Services)
- 5 full-width rows, each with a 1 px line top and bottom, padding 40 px top and bottom (130 px tall on desktop).
- Inside: title on the left half, description on the right half (`md:flex-row justify-between`).
- **Interaction:** one row is always "active". It starts on the first row; hovering a row makes it active, and it **stays active** after the mouse leaves.
  Active row: lilac background, black text, description fades in (opacity 0 → 1, height 0 → 40 px).
  Inactive: black background, white text, description hidden. All transitions 500 ms ease-in-out.
- After the rows, a centred "View more →" link: lilac, Poppins 24 px, underline on hover, Lucide arrow 24 px.

### Numbered rows (Why us)
- Same active-row behaviour as services (first row starts active, hover changes it, it stays).
- Each row: full-width lines, inner padding 20 px top and bottom; number on the left, text block 70% wide on the right, top-aligned.
- Active row: lilac background, black text, 500 ms.
- *For us: use numbers only if our list is really a sequence (e.g. our process steps).*

### People grid (Testimonials)
- Grid: 2 columns on phone (8 px gap), 3 at `sm`, **4 at `lg`** (24 px gap). Cards are 270 px wide on desktop.
- Each card: a **3:4 photo** (`object-cover`, 270 × 360 px), then name (18 px, Geist 500/600), then role (14 px, #ccc), 4 px apart.
- Their quotes are part of the images. *For us: put real text on the page instead, and only use real quotes from real clients.*

### Contact
- Tinted band. Headline centred (max 768 px), sub-text 12 px below (max 576 px, 50% white).
- 40 px below: email pill button (lilac, Geist 500 20 px, padding 28 px, 56 px tall) and,
  12 px to its right, a **round 58 px copy button**: black fill, 1 px lilac border, Lucide `copy` icon 20 px.
- 120 px below: a full-width band with 1 px lines top and bottom holding social links
  (Geist 700 30 px uppercase, hover → lilac), spread across the column with `justify-between`, padding 20 px top and bottom.
  On a phone they stack in a column.
- Then the © line, centred, Poppins 16 px.

---

## 7. Motion

- **Lenis** smooth scrolling across the whole page.
- **CSS transitions only:** nav links 300 ms, buttons 150 ms, rows and stat cells 500 ms (`ease-in-out`).
- A `fadeInUp` animation exists in their CSS (0.8 s ease-out, from 30 px lower and transparent), but nothing on the homepage uses it right now.
- They don't handle `prefers-reduced-motion` for Lenis. *We should turn Lenis off when reduced motion is on.*

---

## 8. Things we should do better than the original

- Use one real `<h1>` for the hero (they use two `<h2>`s) and real headings for each section.
- Put testimonial quotes in text, not inside images, so they're readable, translatable and searchable.
- Copy button: show "Copied" feedback.
- Respect reduced motion; add visible keyboard focus on every link and button.
- Plan the type for Gujarati and Hindi: those scripts have no capitals, so give them their own heavy font (e.g. Anek Gujarati / Anek Devanagari) at the same sizes.
- Their logo is a 250 × 50 image; ours should be an SVG so it stays sharp.
