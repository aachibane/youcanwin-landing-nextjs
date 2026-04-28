# YouCanWin – Landing Page

Pixel-perfect Next.js implementation of the YouCanWin landing page, converted from a Figma design as part of a frontend challenge for [VOID Agency](https://void.fr).

**Live demo:** https://nextjs-rg3l0gqhz-achibanes-projects.vercel.app  
**Figma design:** [View on Figma](https://www.figma.com/design/KLwSpqc82RtMw83V93Qwaa/YouCanWin-%E2%80%93-Landing-Page)

---

## About the project

YouCanWin is a Moroccan gamification platform that connects brands to football fans through digital collectible cards, QR code activations, and reward mechanics. This repo contains the marketing landing page — a static, responsive implementation built from a Figma spec.

---

## Tech stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Deployment | Vercel |

---

## Features

- Pixel-accurate implementation from Figma
- Fully responsive — mobile, tablet, desktop
- Smooth scroll navigation
- Optimized images via `next/image`
- Clean component structure, one component per section

---

## Getting started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── Backoffice.tsx
│   ├── Pricing.tsx
│   ├── Games.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── public/
    └── (assets from Figma)
```

---

## Notes

This was built as a frontend challenge — the goal was faithful Figma reproduction with clean, maintainable code. No backend, no CMS — pure static implementation.
