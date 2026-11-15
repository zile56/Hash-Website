---
name: Hash
description: Engineering-led technical consulting in AI & agentic systems, data engineering, full-stack web, and mobile apps.
colors:
  primary: "#e6481e"
  primary-hover: "#f05a30"
  primary-glow: "rgba(230, 72, 30, 0.22)"
  ivory-canvas: "#f6f4ef"
  warm-surface: "#ffffff"
  surface-raised: "#ece8de"
  surface-hover: "#e2dcd0"
  obsidian-board: "#0d0e10"
  board-surface: "#14161a"
  border-subtle: "rgba(17, 17, 19, 0.08)"
  border-default: "rgba(17, 17, 19, 0.12)"
  border-strong: "rgba(17, 17, 19, 0.22)"
  text-primary: "#111113"
  text-secondary: "#52514d"
  text-muted: "#9a9892"
  text-mono: "#52514d"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Space Grotesk, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Space Grotesk, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Instrument Sans, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.2em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  2xl: "72px"
  3xl: "120px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 20px"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.03)"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 20px"
  button-secondary-hover:
    backgroundColor: "rgba(255, 255, 255, 0.07)"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 20px"
  card-default:
    backgroundColor: "{colors.slate-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
  chip-mono:
    backgroundColor: "{colors.slate-surface}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
---

# Design System: Hash

## Overview

**Creative North Star: "The Obsidian Engine"**

Hash is an engineering-led technical consulting firm specializing in AI & agentic systems, distributed data engineering, full-stack platforms, and mobile apps. The visual language conveys quiet authority, cryptographic precision, and architectural resilience. Rather than relying on generic, over-decorated AI tropes (such as neon purple blobs, iridescent glassmorphism, or cartoon illustrations), Hash grounds its identity in deep obsidian surfaces, crisp 1px structural hairlines, and a single, focused technical Cobalt blue accent.

The interface prioritizes dense, high-signal information architecture over decorative filler. Every surface feels engineered from solid matter: typography is disciplined and legible, borders define layout boundaries with micro-precision, and motion behaves with immediate mechanical certainty.

**Key Characteristics:**
- **Sovereign Monolith:** 90–95% obsidian neutrals and dark slate surfaces.
- **Micro-Engineered Borders:** Crisp 1px hairlines (`rgba(255, 255, 255, 0.08)`) that subtly illuminate on hover.
- **Single Sharp Accent:** Pure technical cobalt (`#1E6BFF`), hue 255° in OKLCH, with zero purple/violet pollution.
- **Tabular Rigor:** JetBrains Mono for system metrics, execution statuses, and technical metadata.
- **Symmetric Spatial Rhythm:** Locked 1280px container, strict vertical flow, zero horizontal overflow.

---

## Colors

The palette is engineered around high-contrast technical obsidian neutrals, structural boundary hairlines, and a singular focused accent.

### Primary
- **Technical Cobalt** (`#1E6BFF`): Reserved strictly for primary calls-to-action, focus indicators, active link highlights, and critical interaction cues. Its scarcity maintains its visual hierarchy.
- **Cobalt Lift** (`#3B82F6`): Elevated hover state providing immediate tactile feedback.
- **Cobalt Glow** (`rgba(30, 107, 255, 0.15)`): Focused directional ambient light behind primary actions.

### Neutral
- **Obsidian Canvas** (`#08090B`): The foundational canvas for the entire application. Deep, non-reflective, and restful.
- **Slate Surface** (`#0E1117`): Card, container, and section panel backgrounds. Provides clear architectural contrast against the canvas.
- **Slate Raised** (`#151A22`): Elevated interactive elements, modals, dropdown menus, and popovers.
- **Slate Hover** (`#1C222D`): Active hover states on elevated components.
- **Border Subtle** (`rgba(255, 255, 255, 0.08)`): Universal 1px structural divider and component contour.
- **Border Default** (`rgba(255, 255, 255, 0.12)`): Resting border on interactive cards and inputs.
- **Border Strong** (`rgba(255, 255, 255, 0.20)`): Hovered card perimeter and active boundaries.
- **Text Primary** (`#F0F2F5`): Headlines and key metrics (exceeding 14:1 contrast ratio against obsidian).
- **Text Secondary** (`#9DA7B3`): Body copy and descriptions (exceeding 7:1 contrast ratio).
- **Text Muted** (`#5E6875`): Metadata, timestamps, and secondary captions (meeting 4.5:1 minimum).
- **Text Mono** (`#809BBD`): Technical parameters, code badges, and system readouts.

### Named Rules
**The 90/10 Neutral Supremacy Rule.** The visual canvas must maintain at least 90–95% obsidian and slate neutrals. The primary accent is restricted to under 10% of any viewport. Its rarity is the core of its authority.

**The Anti-Neon Doctrine.** Purple, violet, magenta, and multi-colored rainbow gradients are explicitly prohibited. Gradient text is restricted to high-contrast white-to-slate sweeps.

---

## Typography

**Display Font:** `Space Grotesk` (fallback: `system-ui`, `-apple-system`, `sans-serif`)  
**Body Font:** `Instrument Sans` (fallback: `system-ui`, `-apple-system`, `sans-serif`)  
**Label/Mono Font:** `JetBrains Mono` (fallback: `ui-monospace`, `monospace`)

**Character:** Bold geometric clarity in headlines paired with neutral typographic efficiency in body prose and tabular precision in monospaced technical readouts.

### Hierarchy
- **Display** (`weight: 500/600`, `size: clamp(2.5rem, 5vw, 4.25rem)`, `line-height: 1.04`, `tracking: -0.03em`): Primary hero statements and category proclamations.
- **Headline (H2)** (`weight: 600`, `size: clamp(1.75rem, 3.5vw, 2.75rem)`, `line-height: 1.04`, `tracking: -0.03em`): Section anchors; always top-aligned.
- **Title (H3)** (`weight: 600`, `size: clamp(1.125rem, 1.6vw, 1.375rem)`, `line-height: 1.25`, `tracking: -0.015em`): Card headers, capability titles, and architecture modules.
- **Body** (`weight: 400/500`, `size: 1rem (16px)`, `line-height: 1.65`, `measure: max 68ch`): Primary prose, technical explanations, and case study briefs.
- **Label / Mono** (`weight: 500`, `size: 0.6875rem (11px)`, `letter-spacing: 0.2em`, `tabular figures`): Uppercase section eyebrows, code blocks, parameter chips, and timestamps.

### Named Rules
**The Tabular Precision Rule.** Every numeric figure, performance metric, latency readout, and timestamp must render in JetBrains Mono with tabular figures enabled.

**The Sentence Case Law.** All titles, headings, navigation links, and button labels must use sentence case. Never use uppercase for long headings.

---

## Layout

The layout follows a locked 1280px spatial rhythm with strict horizontal symmetry:

- **Primary Container (`--shell`):** `1280px` maximum width (`.wrap` / `.shell`), horizontally centered (`margin-inline: auto`).
- **Gutters (`--gut`):** Desktop (≥1024px): `80px`. Mobile (≤640px): `24px`.
- **Vertical Padding:** Desktop: `--padt: 120px`, `--padb: 72px`. Mobile: `--padt: 96px`, `--padb: 48px`.
- **Navigation Height (`--nav`):** Desktop: `72px`. Mobile: `56px`.
- **Grid Architecture:** 12 equal columns with 24px gap on desktop, collapsing to 12px gap on mobile.
- **Section Box Rhythm:** Full-screen sections adhere to `calc(var(--h, 1) * 100svh)` where `--h: 1` or `2`.
- **Zero Horizontal Overflow:** Strict containment (`overflow-x: hidden` on body and page container).

---

## Elevation & Depth

Hash uses tonal layering and micro-hairlines rather than heavy drop shadows. Surfaces elevate visually by stepping up in lightness and receiving crisper 1px borders.

### Shadow Vocabulary
- **Resting Surface:** `box-shadow: none` (flat, anchored to canvas).
- **Accent Glow** (`0 0 16px -4px rgba(30, 107, 255, 0.25)`): Applied to primary CTA buttons and focused interactive elements.
- **Card Hover Elevation** (`0 4px 20px -6px rgba(0, 0, 0, 0.6)`): Applied when an interactive card lifts on mouse hover.

### Named Rules
**The Structural Hairline Rule.** Depth is communicated through contrasting surface tones (`#08090B` → `#0E1117` → `#151A22`) coupled with 1px border highlights, never blurry drop shadows.

---

## Shapes

The form language is disciplined, orthogonal, and sharp.

- **Controls & Buttons (`--radius`):** `8px`. Gives buttons and interactive chips a structured, industrial feel.
- **Cards & Architectural Frames (`--radius-lg`):** `12px`. Softens larger bounding boxes without feeling playful or rounded.
- **Status Pills (`--radius-full`):** `999px`. Reserved exclusively for system status pills and category taxonomy tags.
- **Borders:** Universal `1px solid` stroke width.

---

## Components

### Buttons
- **Shape:** `border-radius: 8px` (`--radius`).
- **Primary:** Exactly `44px` height (`--btn-h`). Background: `#1E6BFF`, text: `#FFFFFF`, padding: `0 20px`, font: `Plus Jakarta Sans 500`. On hover, lifts `translateY(-2px)` with intensified cobalt glow.
- **Secondary / Ghost:** `44px` height. Background: `rgba(255, 255, 255, 0.03)`, border: `1px solid rgba(255, 255, 255, 0.12)`, text: `#F0F2F5`. On hover, lifts `translateY(-2px)` with border shifting to `rgba(255, 255, 255, 0.20)`.

### Chips / Tags
- **Style:** Pill shape (`999px`), `JetBrains Mono` 12px, border: `1px solid rgba(255, 255, 255, 0.08)`, background: `#0E1117`, color: `#9DA7B3`.
- **Active / Status:** Live agent or pipeline indicators feature a 6px green dot (`#10B981`) with subtle pulse.

### Cards / Containers
- **Corner Style:** `12px` border-radius.
- **Background:** `#0E1117` (`--bg-surface`).
- **Border:** `1px solid rgba(255, 255, 255, 0.08)`.
- **Internal Padding:** `24px` to `32px`.
- **Hover:** Micro-lift of 2px (`translateY(-2px)`), border shifts to `rgba(255, 255, 255, 0.18)`.

### Navigation
- **Fixed Header:** `72px` height, fixed top anchor, background `rgba(8, 9, 11, 0.85)` with `backdrop-filter: blur(16px)`.
- **Brandmark:** Geometric Hash monogram (`#_`) in a 26×26px engineered container.
- **Links:** 14px Inter 500 in `#9DA7B3`, transitioning to `#F0F2F5` on hover with a 4px cobalt dot indicator when active.
- **Mobile Drawer:** Full-screen modal drawer under 940px breakpoint, displaying indexed links (`01`, `02`, `03`) and full-width CTA.

### Footer
- **Architecture:** Two-row enterprise closing band.
- **Row 1:** High-impact engagement headline, primary and secondary CTA buttons, company description, and capability columns.
- **Row 2:** Monospaced copyright notice, system status, and social vector links (GitHub, LinkedIn).

---

## Do's and Don'ts

### Do:
- **Do** maintain strict 90–95% obsidian neutral dominance on every screen.
- **Do** enforce exact 44px height and 8px border-radius on all interactive buttons.
- **Do** use JetBrains Mono with tabular figures for all metrics, numbers, and system readouts.
- **Do** keep text line lengths between 50 and 68 characters for maximum legibility.
- **Do** test viewports at 1440px and 390px to guarantee zero horizontal scroll.

### Don't:
- **Don't** introduce purple, violet, magenta, or neon rainbow gradients.
- **Don't** use decorative stock 3D cartoons, floating isometric cubes, or generic AI iconography.
- **Don't** use all-caps for headings or navigation links.
- **Don't** set body copy below 16px or with contrast lower than 7:1 against its background.
- **Don't** use multi-level dropdowns or bloated mega-menus.
