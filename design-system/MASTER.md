# Forbes Court Reporting Design System

This is the single source of truth for the visual system. It merges the existing `Stalwart Juris` palette from the Forbes reference file with the Claude UI/UX Pro Max recommendation for legal trust and authority.

## Palette

Use the Forbes palette first.

| Token | Value | Usage |
| --- | --- | --- |
| `--surface` | `#F9F9F9` | Main page background |
| `--paper` | `#FFFFFF` | Content panels and forms |
| `--surface-soft` | `#F3F3F4` | Alternating section backgrounds |
| `--surface-line` | `#C6C6CE` | Borders and dividers |
| `--primary` | `#131D34` | Primary buttons, headers, footer |
| `--deep-navy` | `#28324A` | Brand surfaces and section accents |
| `--serene-blue` | `#D3DBEB` | Soft panels and hover states |
| `--ink` | `#1A1F2C` | Body text |
| `--slate` | `#5C667A` | Secondary text |
| `--heritage-gold` | `#AE986C` | Restrained accent, rules, small labels |
| `--warning` | `#BA1A1A` | Validation and errors only |

Do not introduce random colors. If a page needs a new tone, derive it from these tokens.

## Typography

- Display/headlines: Oswald, fallback sans-serif.
- Body: Raleway, fallback sans-serif.
- Labels: Oswald, uppercase, tracked, restrained.
- Body copy line length: 65-75 characters.
- Minimum body font size on mobile: 16px.

## Layout

- Max content width: 1280px.
- Desktop margin: 64px when space allows.
- Tablet margin: 32px.
- Mobile margin: 16px.
- Use 8px spacing increments.
- Favor full-width bands with constrained inner content.
- Use cards only for actual repeated items or grouped form/service details.

## Components

- Buttons: 4px radius, uppercase Oswald labels, clear focus states.
- Primary buttons: deep navy background, white text.
- Secondary buttons: serene blue or transparent with navy border.
- Cards: no heavy shadows; use 1px borders and tonal fills.
- Inputs: label above field, helper/error text below, 44px minimum height.
- Icons: Lucide line icons, 1.75-2px stroke.

## Motion

- Use Framer Motion only for subtle section reveal, staggered entrance, and hover/tap feedback.
- Animate transform and opacity only.
- Respect `prefers-reduced-motion`.
- No perpetual decorative motion.

## Absolute Bans

- No purple AI gradients.
- No glassmorphism by default.
- No shader hero.
- No identical generic three-card feature grid as the main page structure.
- No fake logos, fake testimonials, or fake stats.
- No emoji icons.
- No stock gavel imagery.
