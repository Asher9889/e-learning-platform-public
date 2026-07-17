# Design System — Playful Academic

## Register

brand

## Visual Identity

A sophisticated blend of **Corporate Modern** structure and **Soft Minimalism**. High-contrast color blocking categorizes content; hyper-rounded geometry feels tactile and safe. The goal is "productive play" — the interface stays out of the way of content but provides a cheering section of color and clarity.

**Key attributes:**
- **Encouraging:** Warm, vibrant tones highlight progress and actions
- **Structured:** Rigid underlying grid organizes diverse content types
- **Approachable:** Soft corners and generous whitespace lower cognitive load

## Color Palette

### Surface System
| Token | Hex | Usage |
|-------|-----|-------|
| `--surface` | `#fff8f6` | Page background |
| `--surface-dim` | `#edd5cf` | Dimmed surface |
| `--surface-container-lowest` | `#ffffff` | White containers |
| `--surface-container-low` | `#fff0ed` | Low-emphasis containers |
| `--surface-container` | `#ffe9e5` | Default containers |
| `--surface-container-high` | `#fce3dd` | High-emphasis containers |
| `--surface-container-highest` | `#f6ddd8` | Highest emphasis |
| `--surface-variant` | `#f6ddd8` | Variant surface |

### Primary (Vibrant Orange-Red)
| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#ae3115` | CTAs, active states, progress |
| `--on-primary` | `#ffffff` | Text on primary |
| `--primary-container` | `#ff6b4a` | Lighter primary containers |
| `--on-primary-container` | `#661000` | Text on primary container |
| `--inverse-primary` | `#ffb4a3` | Inverse primary |

### Secondary (Deep Slate)
| Token | Hex | Usage |
|-------|-----|-------|
| `--secondary` | `#5f5e5e` | Navigation, headings |
| `--on-secondary` | `#ffffff` | Text on secondary |
| `--secondary-container` | `#e4e2e1` | Secondary containers |
| `--on-secondary-container` | `#656464` | Text on secondary container |

### Tertiary (Gold)
| Token | Hex | Usage |
|-------|-----|-------|
| `--tertiary` | `#6d5e00` | Accent highlights |
| `--on-tertiary` | `#ffffff` | Text on tertiary |
| `--tertiary-container` | `#c5ab02` | Tertiary containers |
| `--on-tertiary-container` | `#4a3f00` | Text on tertiary container |

### Error
| Token | Hex | Usage |
|-------|-----|-------|
| `--error` | `#ba1a1a` | Error states |
| `--on-error` | `#ffffff` | Text on error |
| `--error-container` | `#ffdad6` | Error containers |
| `--on-error-container` | `#93000a` | Text on error container |

### Text
| Token | Hex | Usage |
|-------|-----|-------|
| `--on-surface` | `#261815` | Primary text |
| `--on-surface-variant` | `#59413c` | Secondary text |
| `--inverse-surface` | `#3c2d29` | Dark surface text |
| `--inverse-on-surface` | `#ffede9` | Text on inverse surface |

### Outline
| Token | Hex | Usage |
|-------|-----|-------|
| `--outline` | `#8d716a` | Borders, dividers |
| `--outline-variant` | `#e1bfb8` | Light borders |

### Fixed Colors (Semantic Accents)
| Token | Hex | Usage |
|-------|-----|-------|
| `--primary-fixed` | `#ffdad2` | School category |
| `--primary-fixed-dim` | `#ffb4a3` | School category dim |
| `--secondary-fixed` | `#e4e2e1` | Neutral fixed |
| `--tertiary-fixed` | `#ffe24c` | Marketing category |
| `--tertiary-fixed-dim` | `#e2c62d` | Marketing category dim |

## Typography

### Font Families
- **Display / Headlines:** Plus Jakarta Sans (700, 600)
- **Body:** Inter (400)

### Type Scale
| Token | Family | Size | Weight | Line Height | Letter Spacing |
|-------|--------|------|--------|-------------|----------------|
| `--text-display-lg` | Plus Jakarta Sans | 40px | 700 | 1.2 | -0.02em |
| `--text-headline-lg` | Plus Jakarta Sans | 32px | 700 | 1.2 | -0.01em |
| `--text-headline-md` | Plus Jakarta Sans | 24px | 600 | 1.3 | normal |
| `--text-headline-sm` | Plus Jakarta Sans | 20px | 600 | 1.4 | normal |
| `--text-body-lg` | Inter | 18px | 400 | 1.6 | normal |
| `--text-body-md` | Inter | 16px | 400 | 1.6 | normal |
| `--text-body-sm` | Inter | 14px | 400 | 1.5 | normal |
| `--text-label-md` | Plus Jakarta Sans | 14px | 600 | 1.2 | normal |
| `--text-label-sm` | Plus Jakarta Sans | 12px | 700 | 1.2 | normal |

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-unit` | 8px | Base unit |
| `--spacing-container-padding` | 32px | External margins |
| `--spacing-gutter` | 24px | Grid gutters |
| `--spacing-margin-sm` | 16px | Small margins |
| `--spacing-margin-md` | 24px | Medium margins |
| `--spacing-margin-lg` | 48px | Large margins |

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 0.25rem (4px) | Small elements |
| `--radius` | 0.5rem (8px) | Default |
| `--radius-md` | 0.75rem (12px) | Buttons, inputs |
| `--radius-lg` | 1rem (16px) | Cards |
| `--radius-xl` | 1.5rem (24px) | Large containers, cards |
| `--radius-full` | 9999px | Pills, badges, avatars |

## Elevation

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Card default |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` | Elevated elements |
| `--border-card` | `1px solid rgba(0,0,0,0.05)` | Card borders |

## Layout

- **Grid:** 12-column fluid (desktop), 4-column (mobile)
- **Container max-width:** 1200px
- **Sidebar:** 80px fixed-width (icon nav)
- **Master container radius:** 24px

## Components

### Buttons
- **Primary:** `--primary` bg, white text, 12px radius
- **Secondary:** White bg, `--outline` border, `--on-surface` text
- **Ghost:** No bg, `--on-surface` text, bold weight

### Cards
- Flat color backgrounds with thin borders (sticker effect)
- 24px border radius
- Hover: subtle lift (translateY -4px) + diffused shadow

### Inputs
- Pill-shaped (full radius) white fields
- Subtle inner shadow
- Orange search button nested inside

### Navigation
- Sidebar: muted icons, white/yellow when active
- Tabs/Filters: pill-shaped, solid black active, white inactive

### Avatars
- Circular with 2px white border
- Overlap by 20% in groups
- Count chip: solid black or yellow circle

## Motion

- **Duration:** 200-500ms
- **Easing:** ease-out, cubic-bezier(0.16, 1, 0.3, 1)
- **Stagger:** 50-100ms between siblings
- **Reduced motion:** Crossfade or instant at `prefers-reduced-motion: reduce`

## Category Colors (Semantic)

| Category | Color | Background | Gradient End |
|----------|-------|------------|--------------|
| School | `#3b82f6` | `#eff6ff` | `#1d4ed8` |
| Diploma | `#22c55e` | `#f0fdf4` | `#15803d` |
| Undergraduate | `#a855f7` | `#faf5ff` | `#7c3aed` |
| Postgraduate | `#f97316` | `#fff7ed` | `#ea580c` |
| Professional | `#e11d48` | `#fff1f2` | `#be123c` |
