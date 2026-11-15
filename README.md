<div align="center">

# Hash — Technical Systems Consulting & Engineering

**Production AI, Data Architecture & Full-Stack Systems**

[![Node Version](https://img.shields.io/badge/node-20%2B-blue.svg)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/React-19.1-61dafb.svg)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/Vite-7.1-646cff.svg)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/framer--motion-12.23-black.svg)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()

</div>

---

## Overview

**Hash** is an engineering-led technical consultancy delivering high-assurance distributed systems, autonomous AI agents, enterprise data platforms, and performant web/mobile applications.

This repository powers the official web property at [hash.engineering](https://hash.engineering).

### Key Architecture Pillars
- **Zero-AI-Slop Visual Design:** Warm Ivory (`#F6F4EF`), Deep Editorial Ink (`#111113`), Burnt Amber (`#9A3412`), and Signal Vermilion (`#E6481E`) with a contrasting Dark Obsidian (`#0D0E10`) architecture console.
- **Volumetric Generative Silk Backdrop:** High-performance 60fps HTML5 canvas ribbon simulation with continuous Bézier harmonic oscillation, 45px cursor magnetic deflection, and scroll-linked velocity modulation.
- **Interactive Architecture Blueprint:** 4-stage technical inspector allowing clients to explore distributed execution, fault tolerance, streaming ingest, and security invariants.
- **Engagement Scope Builder:** Real-time scope estimation and technical brief builder.
- **Serverless Resend Ingestion:** Honeypot-shielded, rate-limited `/api/contact` endpoint delivering structured technical inquiries via Resend.
- **Hybrid SSR Prerender Engine:** Custom node prerender pipeline generating static HTML, Schema.org JSON-LD, `sitemap.xml`, and `robots.txt` for sub-second TTFB and crawlability.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Core Framework** | React 19 (`react`, `react-dom`, `react-router-dom` v7) |
| **Build Tooling** | Vite 7 (`@vitejs/plugin-react`) |
| **Motion & Physics** | `framer-motion` v12 with `reducedMotion="user"` accessibility guards |
| **Typography** | Space Grotesk (Headings), Instrument Sans (Body), JetBrains Mono (Technical/Metrics) |
| **Email Ingestion** | Resend (`resend`) via Vercel Serverless `/api/contact` |
| **Code Quality** | ESLint 9 (Flat Config), PostCSS, Autoprefixer |
| **Package Manager** | `pnpm` |

---

## Quick Start

### Prerequisites
- Node.js 20+
- pnpm 9+

### Installation & Local Development

```bash
# Install dependencies
pnpm install

# Start Vite hot-reloading development server
pnpm dev
```
Navigate to `http://localhost:5173`.

### Production Build & Static Prerendering

```bash
# Run ESLint validation
pnpm lint

# Execute multi-stage production build (Client + SSR + Static Prerender + Sitemap)
pnpm build

# Preview production build locally
pnpm start
```
Navigate to `http://localhost:4173`.

---

## Environment Variables

Copy `.env.example` to `.env.local` to configure local variables:

```bash
cp .env.example .env.local
```

### Client-Side Variables
- `VITE_CONTACT_TO_EMAIL`: Destination contact address (default: `contact@hash.engineering`)
- `VITE_CALENDLY_URL`: Direct link to technical discovery calendar
- `VITE_DEFAULT_WEBMAIL`: Mailto client fallback (`gmail` / `outlook` / `yahoo`)

### Server-Side Variables (Vercel / Render Production Environment)
- `RESEND_API_KEY`: Secret API key from [resend.com](https://resend.com)
- `CONTACT_FROM_EMAIL`: Verified sender address (e.g. `Hash Engineering <contact@hash.engineering>`)
- `CONTACT_TO_EMAIL`: Lead notification destination (e.g. `contact@hash.engineering`)

---

## Deployment

### Render
The repository includes a ready-to-deploy [`render.yaml`](render.yaml) specification:
- **Build Command:** `pnpm install --frozen-lockfile && pnpm build`
- **Start Command:** `pnpm start`

### Vercel
Deploy seamlessly to Vercel with zero extra configuration. [`vercel.json`](vercel.json) handles caching headers and `/api/contact` serverless function execution out of the box.

---

## Directory Structure

```
.
├── api/
│   └── contact.js             # Vercel serverless function (Resend integration + rate limit)
├── public/
│   └── favicon.svg            # Hash geometric logo mark
├── scripts/
│   └── prerender.mjs          # Static SSR prerenderer, sitemap, and robots generator
├── src/
│   ├── components/
│   │   ├── Ambience.jsx       # Volumetric golden silk canvas physics
│   │   ├── ArchitectureBlueprint.jsx # Interactive 4-stage architecture console
│   │   ├── Capabilities.jsx   # 4 core consulting practice pillars
│   │   ├── CaseStudies.jsx    # Real-world engineering case studies & benchmarks
│   │   ├── Engagement.jsx     # Interactive Scope Builder & inquiry submission
│   │   ├── Footer.jsx         # Architecture metrics strip & navigation
│   │   ├── Hero.jsx           # Editorial hero with multi-stop gradient & metrics
│   │   ├── Logo.jsx           # Precision SVG Hash brand mark
│   │   ├── Manifesto.jsx      # De-boxed philosophy & scroll-scrubbed typography
│   │   ├── Navbar.jsx         # Framer-motion reading bar & active section tracking
│   │   ├── PageContainer.jsx  # Viewport shell & backdrop orchestration
│   │   └── ScrollRail.jsx     # Scroll-linked connector rail
│   ├── css/                   # Scoped modular stylesheets
│   ├── routes/
│   │   ├── Home.jsx           # Main landing page composition
│   │   └── NotFound.jsx       # Custom 404 page
│   ├── App.jsx                # Application shell with Framer Motion configuration
│   ├── entry-server.jsx       # Server-side entry for static prerendering
│   ├── main.jsx               # Client bootstrap entry
│   ├── seo.js                 # SEO metadata & JSON-LD schemas
│   └── site.js                # Global configuration & navigation constants
├── package.json
├── pnpm-lock.yaml
├── render.yaml
└── vite.config.js
```

---

## License

Proprietary © Hash Engineering. All rights reserved.
