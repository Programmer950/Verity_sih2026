# Verity — Evidence-Backed Verification & Regulatory Scrutiny

> **Tagline:** Evidence-backed verification. Traceable decisions.  
> **Smart India Hackathon 2026** · **Problem Statement:** SIH26261  
> **Team:** Code Zero · **Team ID:** 197410  
> **Status:** Temporary Project Landing Page · Prototype Under Development

---

## Overview

**Verity** is an evidence-linked regulatory application scrutiny assistant designed to help reviewers examine institutional applications, reconcile claims across disparate documents, apply reviewed regulatory rules, inspect verification results, and trace every finding to its supporting physical evidence.

Its defining technical contribution is a **Regulatory Evidence Graph combined with dependency-aware validation**: when evidence or a rule changes, the system identifies strictly affected checks, executes targeted re-evaluations, and permanently preserves earlier evaluation states for legal audit and appeals.

---

## Core Sections

1. **Top Navigation**: Verity geometric wordmark, smooth-scroll section routing, and persistent `PROTOTYPE IN DEVELOPMENT` indicator.
2. **Hero & Regulatory Evidence Graph**: Interactive SVG/CSS graph connecting source documents, extracted claims, regulatory rules, central findings, and validation results with an inspectable provenance drawer.
3. **The Problem**: Editorial breakdown of regulatory realities — fragmented multi-source evidence, context-dependent rules, and findings without sufficient traceability.
4. **How Verity Works**: Six disciplined scrutiny phases: *Ingest &rarr; Extract &rarr; Reconcile &rarr; Validate &rarr; Review &rarr; Track*.
5. **Technical Differentiator (Core Feature)**: Interactive dependency simulation with local React state demonstrating:
   - Dynamic evidence correction (`38` &rarr; `42` faculty headcount).
   - Real-time re-evaluation of dependent checks (`#CHK-CADRE-04`).
   - Immutable audit ledger retaining both Run #1 and Run #2.
   - Proof of graph isolation: unrelated check (`#CHK-LAND-01`) remains strictly cached and unaffected.
6. **Modular Architecture**: Layered schematic spanning Presentation, Coordination, Compliance/Processing, and Persistence with an interactive component inspector.
7. **Responsible Verification**: Operational principles guaranteeing evidence-first findings, explicit uncertainty handling, independent check boundaries, and human reviewer authority.
8. **Project Status & Roadmap**: Five sequenced engineering phases with verified SIH 2026 credentials (no fabricated percentages or misleading progress bars).
9. **Footer**: Quick navigation, legal and submission identifiers, and jump-to-top controls.

---

## Tech Stack & Design Principles

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Modular CSS Architecture + Design Tokens (`src/index.css`)
- **Typography:** Inter (editorial text) + JetBrains Mono (technical codes, hashes, citations)
- **Icons:** Lucide React
- **Design Philosophy:** Restrained, editorial, institutional credibility. Avoids generic AI gradients, neon blobs, fake testimonials, or unanchored claims.
- **Accessibility:** Semantic HTML5, visible focus states, skip-to-content anchor, and `prefers-reduced-motion` compliance.

---

## Local Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```
Build output is generated into the `dist/` directory.

### 4. Code Quality & Linting
```bash
npm run lint
```

---

## Vercel Deployment

This project is fully configured for deployment on [Vercel](https://vercel.com):
- **Framework Preset:** Vite
- **Build Command:** `npm run build` (or `tsc -b && vite build`)
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- No environment variables or external API keys are required.
