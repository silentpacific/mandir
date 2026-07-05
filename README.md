# Belur Lokenath Mandir — Astro Static Site

Free static website built with Astro for deployment on Cloudflare Pages.

## Local setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Cloudflare Pages settings:
- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

## Editing

- Common header: `src/components/Header.astro`
- Common footer: `src/components/Footer.astro`
- Shared styles: `src/styles/global.css`
- Pages: `src/pages/*.astro`
- Images: `public/images/`

Replace placeholder image files/paths with real temple photos.
