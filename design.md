# Global CSS Design System

## 01. Design Direction

**Visual identity:**
Luxury Indian contemporary art / bridal-inspired editorial aesthetic.

**Core visual language:**

* Ivory-white
* Pearl-white
* Silk-white
* Soft champagne-gold
* Pale warm yellow-gold
* Warm neutrals
* Natural skin and material tones
* Soft luminosity
* Subtle contrast
* No dark or heavy visual language

The website should feel:

**Elegant · Warm · Refined · Luminous · Premium · Artisanal · Timeless**

Avoid:

* Pure black as a dominant color
* Dark backgrounds
* Crimson / maroon / burgundy
* Harsh metallic gold
* Neon colors
* High-saturation colors
* Strong gradients
* Excessive shadows
* Glossy / artificial luxury effects

---

# 02. Color Tokens

```css
:root {

  /* =========================================
     CORE PALETTE
     ========================================= */

  --color-ivory: #F8F5EE;
  --color-pearl: #FCFAF5;
  --color-silk: #FFFDF8;

  --color-champagne: #E8D7B5;
  --color-champagne-light: #F1E5CC;
  --color-champagne-deep: #D6BE8F;

  --color-gold-soft: #CDB27A;
  --color-gold-muted: #BFA36B;

  --color-warm-white: #F5F1E8;
  --color-sand: #E8E0D2;
  --color-stone: #CFC6B7;

  /* =========================================
     TEXT
     ========================================= */

  --color-text-primary: #3F3A32;
  --color-text-secondary: #71695D;
  --color-text-muted: #968D80;

  --color-text-gold: #9B8150;

  /* =========================================
     BORDERS
     ========================================= */

  --color-border: #E7DFD1;
  --color-border-soft: #EEE8DE;
  --color-border-gold: #DCC9A4;

  /* =========================================
     SURFACES
     ========================================= */

  --color-background: var(--color-ivory);
  --color-surface: var(--color-silk);
  --color-surface-soft: var(--color-pearl);
  --color-surface-warm: var(--color-warm-white);

  /* =========================================
     ACCENT
     ========================================= */

  --color-accent: var(--color-gold-soft);
  --color-accent-hover: var(--color-gold-muted);

}
```

---

# 03. Background System

The site should primarily use **light, warm backgrounds** rather than dark luxury backgrounds.

```css
:root {

  --background-page: #F8F5EE;

  --background-primary: #FCFAF5;

  --background-secondary: #F5F1E8;

  --background-elevated: #FFFDF8;

  --background-gold-wash:
    linear-gradient(
      135deg,
      #FFFDF8 0%,
      #F8F2E7 50%,
      #F1E5CC 100%
    );

}
```

### Background principles

* Main pages: ivory
* Content sections: pearl / silk white
* Highlight sections: very subtle champagne wash
* Product/art sections: predominantly neutral
* Gold should appear as an accent, not as a background color

---

# 04. Typography

Typography should combine **editorial sophistication with modern readability**.

### Primary display font

Use a refined serif for:

* Hero headings
* Collection titles
* Artist names
* Editorial statements
* Major section headings

Suggested direction:

```css
--font-display:
  "Cormorant Garamond",
  "Times New Roman",
  serif;
```

### Primary UI font

Use a clean modern sans-serif for:

* Navigation
* Buttons
* Product information
* Metadata
* Body copy
* Forms
* Admin interfaces

```css
--font-sans:
  "Inter",
  "Helvetica Neue",
  Arial,
  sans-serif;
```

### Typography tokens

```css
:root {

  --font-display:
    "Cormorant Garamond",
    "Times New Roman",
    serif;

  --font-sans:
    "Inter",
    "Helvetica Neue",
    Arial,
    sans-serif;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;

  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.75rem;
  --text-4xl: 3.5rem;
  --text-5xl: 4.5rem;

  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.08em;
  --tracking-widest: 0.16em;

}
```

---

# 05. Typography Hierarchy

## Display

Large editorial headlines:

```css
font-family: var(--font-display);
font-weight: 400;
letter-spacing: var(--tracking-tight);
color: var(--color-text-primary);
```

## Body

```css
font-family: var(--font-sans);
font-weight: 400;
line-height: 1.7;
color: var(--color-text-secondary);
```

## Navigation

```css
font-family: var(--font-sans);
font-size: var(--text-sm);
letter-spacing: var(--tracking-wide);
text-transform: uppercase;
```

## Gold labels

```css
font-family: var(--font-sans);
font-size: var(--text-xs);
letter-spacing: var(--tracking-widest);
text-transform: uppercase;
color: var(--color-text-gold);
```

---

# 06. Layout Tokens

```css
:root {

  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1440px;

  --page-padding-mobile: 1.25rem;
  --page-padding-tablet: 2rem;
  --page-padding-desktop: 4rem;

  --section-space-sm: 4rem;
  --section-space-md: 6rem;
  --section-space-lg: 8rem;
  --section-space-xl: 10rem;

}
```

---

# 07. Spacing Philosophy

Use generous whitespace.

The design should feel:

**spacious rather than dense**

Avoid:

* tightly packed cards
* excessive UI elements
* small margins
* crowded navigation
* too many visual accents

Large artwork and imagery should have room to breathe.

---

# 08. Image System

Images and videos are a major part of the visual identity.

### Image treatment

```css
.image-editorial {
  border-radius: 0;
  overflow: hidden;
}

.image-soft {
  border-radius: 2px;
  overflow: hidden;
}

.image-card {
  border-radius: 4px;
  overflow: hidden;
}
```

Avoid excessive rounded cards.

The imagery itself should provide the emotional richness.

### Image overlays

Use extremely subtle overlays only when required for readability.

```css
.image-overlay-light {
  background:
    linear-gradient(
      to bottom,
      rgba(255, 253, 248, 0.02),
      rgba(255, 253, 248, 0.18)
    );
}
```

---

# 09. Silk / Luminosity Effect

For selected hero sections and premium visual areas:

```css
.silk-surface {
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(255, 255, 255, 0.85),
      transparent 45%
    ),
    linear-gradient(
      135deg,
      #FFFDF8,
      #F8F2E7
    );
}
```

Use sparingly.

The effect should suggest **silk catching natural light**, not a glossy digital gradient.

---

# 10. Gold Accent System

Gold should feel like **hand-applied champagne leaf / embroidery**, not metallic UI.

Preferred:

```css
.gold-accent {
  color: var(--color-text-gold);
}

.gold-line {
  background: var(--color-border-gold);
}

.gold-border {
  border-color: var(--color-border-gold);
}
```

Avoid:

```css
/* DO NOT USE AS PRIMARY BRAND TREATMENT */

background: linear-gradient(
  90deg,
  #FFD700,
  #FFF,
  #FFD700
);
```

No bright yellow-gold.

---

# 11. Buttons

Buttons should be understated and elegant.

### Primary

```css
.button-primary {
  background: var(--color-text-primary);
  color: var(--color-silk);
  border: 1px solid var(--color-text-primary);

  padding: 0.85rem 1.5rem;

  font-family: var(--font-sans);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;

  transition:
    background 250ms ease,
    color 250ms ease,
    border-color 250ms ease;
}
```

### Secondary

```css
.button-secondary {
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-gold);

  padding: 0.85rem 1.5rem;

  font-family: var(--font-sans);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}
```

### Gold button

Gold should be reserved for specific premium CTAs.

```css
.button-gold {
  background: var(--color-champagne);
  color: var(--color-text-primary);
  border: 1px solid var(--color-champagne-deep);
}
```

---

# 12. Cards

Cards should feel like **gallery presentation**, not e-commerce boxes

Cards should not feel like generic rectangular web UI. Use soft, architectural curves inspired by textiles, framed artwork, arches, and flowing fabric.

.card {
  background: var(--color-surface);

  border: 1px solid var(--color-border-soft);

  border-radius: clamp(
    1rem,
    2vw,
    2rem
  );

  overflow: hidden;

  transition:
    transform 500ms var(--ease-luxury),
    box-shadow 500ms var(--ease-luxury),
    border-color 500ms ease;
}

.card:hover {
  transform: translateY(-4px);

  border-color: var(--color-border-gold);

  box-shadow:
    0 18px 50px rgba(63, 58, 50, 0.08);
}
Editorial / Art Cards

For featured artwork, artists and collection imagery, use more pronounced curves:

.card-editorial {
  border-radius: clamp(
    1.5rem,
    3vw,
    3rem
  );

  overflow: hidden;
}
Organic / Asymmetric Cards

Selected hero or editorial elements can use an intentionally irregular silhouette rather than a standard rounded rectangle:

.card-organic {
  border-radius:
    3rem
    1.25rem
    3rem
    1.25rem;
}

For premium feature sections:

.card-organic-soft {
  border-radius:
    4rem
    1.5rem
    4rem
    1.5rem;
}
Image Containers

Artwork imagery should feel framed rather than boxed:

.image-frame {
  border-radius: clamp(
    1.5rem,
    3vw,
    3rem
  );

  overflow: hidden;
}
Design Rule

Do not apply the same radius mechanically to every component.

Use:

UI cards        → soft rounded
Artwork cards   → deeply rounded
Hero imagery    → large editorial curves
Feature panels  → occasional organic curves
Buttons         → restrained pill / soft radius
Forms           → subtle radius

The overall interface should feel crafted and tactile, rather than like a collection of standard rectangular SaaS components.

Avoid heavy shadows.

---

# 13. Borders

Use subtle borders rather than strong separators.

```css
.border-subtle {
  border-color: var(--color-border-soft);
}

.border-standard {
  border-color: var(--color-border);
}

.border-gold {
  border-color: var(--color-border-gold);
}
```

---

# 14. Shadows

Shadows should be soft and warm.

```css
:root {

  --shadow-soft:
    0 8px 30px rgba(63, 58, 50, 0.06);

  --shadow-medium:
    0 15px 45px rgba(63, 58, 50, 0.08);

  --shadow-image:
    0 20px 60px rgba(63, 58, 50, 0.10);

}
```

No harsh black shadows.

---

# 15. Motion

Motion should feel:

**slow · graceful · natural · luxurious**

```css
:root {

  --ease-luxury:
    cubic-bezier(0.22, 1, 0.36, 1);

  --duration-fast: 200ms;
  --duration-normal: 350ms;
  --duration-slow: 700ms;
  --duration-editorial: 1200ms;

}
```

Preferred transitions:

```css
transition:
  transform var(--duration-normal) var(--ease-luxury),
  opacity var(--duration-normal) ease,
  color var(--duration-normal) ease;
```

Avoid:

* bouncy animations
* aggressive scaling
* rapid transitions
* excessive parallax
* distracting hover effects

---

# 16. Hero Sections

Hero sections should prioritize imagery.

```css
.hero {
  min-height: 80vh;
  background: var(--background-page);
}

.hero-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(3rem, 7vw, 7rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
}
```

Hero imagery should occupy significant visual space.

Text should remain minimal.

---

# 17. Section Labels

```css
.section-label {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 500;

  letter-spacing: 0.18em;
  text-transform: uppercase;

  color: var(--color-text-gold);
}
```

---

# 18. Decorative Gold Rule

```css
.gold-rule {
  width: 48px;
  height: 1px;

  background: var(--color-champagne-deep);
}
```

Use as a subtle editorial detail.

---

# 19. Navigation

Navigation should remain minimal.

```css
.nav {
  background: rgba(255, 253, 248, 0.92);
  border-bottom: 1px solid var(--color-border-soft);
}

.nav-link {
  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: var(--text-sm);

  letter-spacing: 0.08em;
  text-transform: uppercase;

  transition: color 250ms ease;
}

.nav-link:hover {
  color: var(--color-text-gold);
}
```

---

# 20. Forms

Forms should follow the same quiet luxury language.

```css
.input {
  width: 100%;

  background: var(--color-silk);

  border: 1px solid var(--color-border);

  padding: 0.9rem 1rem;

  color: var(--color-text-primary);

  transition:
    border-color 250ms ease,
    box-shadow 250ms ease;
}

.input:focus {
  outline: none;

  border-color: var(--color-champagne-deep);

  box-shadow:
    0 0 0 3px rgba(232, 215, 181, 0.25);
}
```

---

# 21. Accessibility

Maintain sufficient contrast despite the soft palette.

Primary readable text:

```css
color: var(--color-text-primary);
```

Secondary text:

```css
color: var(--color-text-secondary);
```

Do not use champagne-gold as the primary color for long body text.

Gold is primarily decorative / accentual.

---

# 22. Dark Mode

Do **not** create a conventional dark luxury mode.

The visual identity is intentionally built around:

**Ivory → Pearl → Silk → Champagne → Soft Gold**

If a dark surface is ever required for a specific visual section, it should be treated as an editorial exception rather than a second theme.

---

# 23. Global CSS Principles

```text
LIGHT > DARK
WARM > COOL
SOFT > HARSH
NATURAL > DIGITAL
EDITORIAL > GENERIC
SPACIOUS > DENSE
SUBTLE GOLD > BRIGHT GOLD
SILK MATTE > GLOSSY
ARTWORK > UI
```

The final interface should feel like a **luxury Indian gallery / fashion editorial photographed in soft natural light**, with ivory silk and champagne-gold details providing the consistent visual thread across the website, images, videos, products and artist presentations.

# 24. Responsive Typography

Typography should scale fluidly between mobile, tablet, and large desktop rather than relying on abrupt breakpoint jumps.

Use `clamp()` wherever possible.

```css
:root {

  /* =========================================
     RESPONSIVE TYPE SCALE
     ========================================= */

  --text-xs: clamp(0.6875rem, 0.65rem + 0.15vw, 0.75rem);
  --text-sm: clamp(0.8125rem, 0.78rem + 0.15vw, 0.875rem);
  --text-base: clamp(0.9375rem, 0.9rem + 0.2vw, 1rem);
  --text-lg: clamp(1.0625rem, 1rem + 0.3vw, 1.25rem);

  --text-xl: clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
  --text-2xl: clamp(1.6rem, 1.35rem + 1vw, 2rem);
  --text-3xl: clamp(2rem, 1.6rem + 1.8vw, 2.75rem);
  --text-4xl: clamp(2.5rem, 1.9rem + 2.8vw, 3.5rem);
  --text-5xl: clamp(3rem, 2.2rem + 4vw, 4.5rem);

}
```

---

# 25. Editorial Display Typography

Hero typography should scale dramatically while remaining elegant.

```css
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(
    3rem,
    8vw,
    7rem
  );

  line-height: 0.92;
  letter-spacing: -0.035em;
  font-weight: 400;
}
```

For secondary editorial headings:

```css
.editorial-title {
  font-family: var(--font-display);
  font-size: clamp(
    2.25rem,
    5vw,
    5rem
  );

  line-height: 0.98;
  letter-spacing: -0.025em;
  font-weight: 400;
}
```

Section headings:

```css
.section-title {
  font-family: var(--font-display);
  font-size: clamp(
    2rem,
    4vw,
    3.5rem
  );

  line-height: 1;
  letter-spacing: -0.02em;
  font-weight: 400;
}
```

---

# 26. Body Typography

Body copy should remain highly readable across screen sizes.

```css
.body-large {
  font-family: var(--font-sans);
  font-size: clamp(
    1rem,
    0.95rem + 0.25vw,
    1.125rem
  );

  line-height: 1.75;
  max-width: 65ch;
}

.body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.7;
  max-width: 70ch;
}

.body-small {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: 1.6;
}
```

Avoid extremely wide paragraphs.

Ideal reading width:

```css
.prose {
  max-width: 65ch;
}
```

---

# 27. Responsive Letter Spacing

Display typography should become slightly tighter as it gets larger.

```css
.display-text {
  letter-spacing: clamp(
    -0.04em,
    -0.025em,
    -0.015em
  );
}
```

Navigation and labels should retain generous tracking:

```css
.eyebrow,
.section-label,
.nav-link {
  letter-spacing: 0.12em;
}

@media (min-width: 768px) {
  .eyebrow,
  .section-label,
  .nav-link {
    letter-spacing: 0.16em;
  }
}
```

---

# 28. Responsive Spacing Scale

Use fluid spacing instead of fixed spacing wherever practical.

```css
:root {

  --space-1: clamp(0.25rem, 0.2rem + 0.1vw, 0.375rem);
  --space-2: clamp(0.5rem, 0.4rem + 0.15vw, 0.75rem);
  --space-3: clamp(0.75rem, 0.6rem + 0.2vw, 1rem);
  --space-4: clamp(1rem, 0.8rem + 0.3vw, 1.5rem);

  --space-5: clamp(1.25rem, 1rem + 0.4vw, 2rem);
  --space-6: clamp(1.5rem, 1.2rem + 0.5vw, 2.5rem);

  --space-8: clamp(2rem, 1.5rem + 0.8vw, 3rem);
  --space-10: clamp(2.5rem, 2rem + 1vw, 4rem);

  --space-12: clamp(3rem, 2.25rem + 1.4vw, 5rem);
  --space-16: clamp(4rem, 3rem + 2vw, 7rem);

  --space-20: clamp(5rem, 3.5rem + 3vw, 9rem);
  --space-24: clamp(6rem, 4rem + 4vw, 11rem);

}
```

---

# 29. Page Padding

Page padding should grow gradually with viewport width.

```css
.page-container {
  width: min(
    100%,
    var(--container-2xl)
  );

  margin-inline: auto;

  padding-inline: clamp(
    1.25rem,
    4vw,
    4rem
  );
}
```

This creates approximately:

* Mobile: `20px`
* Tablet: `32–48px`
* Desktop: `48–64px`

without requiring multiple breakpoint overrides.

---

# 30. Section Spacing

Major sections should have generous vertical rhythm.

```css
.section {
  padding-block: clamp(
    4rem,
    8vw,
    9rem
  );
}
```

Compact sections:

```css
.section-compact {
  padding-block: clamp(
    2.5rem,
    5vw,
    5rem
  );
}
```

Large editorial sections:

```css
.section-editorial {
  padding-block: clamp(
    5rem,
    10vw,
    12rem
  );
}
```

---

# 31. Responsive Grid Gaps

```css
.grid {
  display: grid;

  gap: clamp(
    1rem,
    2.5vw,
    2.5rem
  );
}
```

Editorial grids:

```css
.editorial-grid {
  display: grid;

  gap: clamp(
    1.5rem,
    4vw,
    4rem
  );
}
```

---

# 32. Responsive Columns

Default mobile:

```css
.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
}
```

Tablet:

```css
@media (min-width: 640px) {
  .responsive-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
```

Desktop:

```css
@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

Large editorial layouts:

```css
@media (min-width: 1280px) {
  .responsive-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
```

---

# 33. Hero Responsive Rules

Mobile heroes should prioritize the visual first.

```css
.hero {
  min-height: clamp(
    70svh,
    85svh,
    100svh
  );

  padding-block: clamp(
    5rem,
    10vw,
    8rem
  );
}
```

Hero content:

```css
.hero-content {
  width: min(
    100%,
    900px
  );
}
```

On mobile:

```css
@media (max-width: 639px) {

  .hero {
    min-height: 85svh;
  }

  .hero-title {
    max-width: 8ch;
  }

}
```

On desktop:

```css
@media (min-width: 1024px) {

  .hero-title {
    max-width: 10ch;
  }

}
```

---

# 34. Responsive Image Aspect Ratios

Editorial imagery should adapt naturally.

```css
.image-portrait {
  aspect-ratio: 4 / 5;
}

.image-landscape {
  aspect-ratio: 16 / 10;
}

.image-square {
  aspect-ratio: 1 / 1;
}

.image-cinematic {
  aspect-ratio: 16 / 9;
}
```

For mobile cinematic media:

```css
@media (max-width: 639px) {

  .image-cinematic {
    aspect-ratio: 4 / 5;
  }

}
```

This allows bridal imagery to feel immersive on phones without simply shrinking the desktop composition.

---

# 35. Responsive Navigation

Desktop navigation:

```css
.nav {
  min-height: 72px;

  padding-inline: clamp(
    1.25rem,
    4vw,
    4rem
  );
}
```

Mobile:

```css
@media (max-width: 767px) {

  .nav {
    min-height: 64px;
  }

  .nav-link {
    font-size: 0.75rem;
  }

}
```

---

# 36. Responsive Buttons

Buttons should remain comfortably tappable.

```css
.button-primary,
.button-secondary,
.button-gold {
  min-height: 44px;

  padding-inline: clamp(
    1.1rem,
    2vw,
    1.75rem
  );

  padding-block: 0.8rem;
}
```

On larger screens:

```css
@media (min-width: 768px) {

  .button-primary,
  .button-secondary,
  .button-gold {
    min-height: 48px;
  }

}
```

---

# 37. Mobile Text Alignment

Avoid forcing centered typography everywhere.

Use centered alignment primarily for:

* Hero statements
* Short editorial introductions
* Collection announcements

Long-form content should remain left aligned.

```css
.hero-copy {
  text-align: center;
}

.prose {
  text-align: left;
}
```

---

# 38. Responsive Content Width

```css
.content-narrow {
  width: min(
    100%,
    640px
  );
}

.content-medium {
  width: min(
    100%,
    820px
  );
}

.content-wide {
  width: min(
    100%,
    1200px
  );
}
```

---

# 39. Breakpoint Philosophy

Keep breakpoints minimal.

```css
/* Small phones */
@media (min-width: 480px) {}

/* Tablet */
@media (min-width: 640px) {}

/* Large tablet / small desktop */
@media (min-width: 768px) {}

/* Desktop */
@media (min-width: 1024px) {}

/* Large desktop */
@media (min-width: 1280px) {}

/* Ultra-wide */
@media (min-width: 1536px) {}
```

Prefer **fluid CSS** with `clamp()`, `%`, `min()`, `max()`, and `minmax()` before adding breakpoint-specific overrides.

---

# 40. Responsive Design Rules

```text
MOBILE
20–24px page padding
Large readable body text
Shorter display lines
Single-column layouts
Vertical editorial rhythm
Large touch targets

TABLET
32–48px page padding
Two-column grids
Moderate display scale
More horizontal composition

DESKTOP
48–64px page padding
Generous whitespace
Large editorial typography
Multi-column compositions
Large cinematic imagery

LARGE DESKTOP
Maximum content width
Do not endlessly enlarge typography
Increase whitespace before increasing text size
Preserve comfortable reading widths
```

---

# 41. Preferred Fluid Pattern

When adding a new component, prefer this pattern:

```css
.component {
  padding:
    clamp(1.5rem, 4vw, 4rem);

  gap:
    clamp(1rem, 2vw, 2rem);

  font-size:
    clamp(1rem, 1vw + 0.5rem, 1.25rem);
}
```

Rather than:

```css
/* Avoid excessive breakpoint overrides */

.component {
  padding: 16px;
}

@media (min-width: 768px) {
  .component {
    padding: 32px;
  }
}

@media (min-width: 1024px) {
  .component {
    padding: 48px;
  }
}
```

---

# 42. Final Responsive Principle

The entire design system should scale according to this hierarchy:

**Viewport grows → whitespace grows → imagery grows → typography grows gently**

Not:

**Viewport grows → everything becomes dramatically larger**

The goal is to preserve the same visual feeling at every size:

**Ivory · Silk · Champagne · Light · Spacious · Editorial · Elegant**
