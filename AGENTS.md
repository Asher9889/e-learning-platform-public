<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design System — Playful Academic

## Quick Reference

**Always use tokens, never hardcode values.**

### File Structure
- `src/styles/tokens.css` — All CSS custom properties (colors, typography, spacing, radii, shadows)
- `src/styles/components.css` — Reusable UI patterns (buttons, cards, badges, inputs, modals)
- `DESIGN.md` — Full design system documentation
- `PRODUCT.md` — Strategic product context

### Color Tokens (most used)
| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#ae3115` | CTAs, active states, progress |
| `--primary-container` | `#ff6b4a` | Lighter primary containers |
| `--on-primary` | `#ffffff` | Text on primary |
| `--surface` | `#fff8f6` | Page background |
| `--surface-container-lowest` | `#ffffff` | Card backgrounds |
| `--on-surface` | `#261815` | Primary text |
| `--on-surface-variant` | `#59413c` | Secondary/muted text |
| `--outline` | `#8d716a` | Borders |
| `--outline-variant` | `#e1bfb8` | Light borders |

### Typography
- **Display/Headlines:** `font-family: var(--font-display)` (Plus Jakarta Sans, 700/600)
- **Body:** `font-family: var(--font-body)` (Inter, 400)
- Use font shorthand: `font: var(--text-headline-lg)` or `font: var(--text-body-md)`

### Spacing
- Use `--spacing-unit` (8px) as base
- Container padding: `--spacing-container-padding` (32px)
- Gutters: `--spacing-gutter` (24px)

### Border Radius
- Cards/containers: `--radius-xl` (24px) or `--radius-lg` (16px)
- Buttons/inputs: `--radius-md` (12px)
- Pills/badges: `--radius-full` (9999px)

### Component Classes
- Buttons: `.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`, `.btn--sm`
- Cards: `.card`, `.card--flat`, `.card__body`
- Badges: `.badge`, `.badge--school`, `.badge--diploma`, etc.
- Inputs: `.input`, `.input--search`, `.select`
- Layout: `.container`, `.section`, `.grid`, `.flex`

### Rules
1. Never use hardcoded hex values — always reference tokens
2. Never use inline `style` for colors/fonts/spacing — use CSS classes or token references
3. Category colors use `--category-*` tokens (school, diploma, undergraduate, postgraduate, professional)
4. Transitions use `--duration-*` and `--ease-out` tokens
5. Z-index uses semantic `--z-*` tokens (dropdown, sticky, modal, toast, tooltip)
