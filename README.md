# SEREN

A polished, fully responsive marketing landing page built with **Next.js 16**, **Tailwind CSS**, and **shadcn/ui** components — demo storefront-style homepage for a fictional probiotic snack brand ("frais").

## Features

- **Animated hero section** — Framer Motion entrance animations, oversized serif typography
- **Marketing sections** — header, shop favorites, product highlights, "most popular" carousel, brand story, footer
- **shadcn/ui + Radix primitives** — accordion, dialog, dropdown, popover, select, tabs and more pre-wired
- **MDX editor** included (`@mdxeditor/editor`) for content blocks
- **Prisma + SQLite** data layer scaffolded (`prisma/schema.prisma`, `db/custom.db`) — optional, unused by the page
- **Dark/light theming** support via `next-themes`
- **ESLint + Prettier-friendly** TypeScript codebase

## Tech stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS, shadcn/ui, Radix UI |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Database (optional) | Prisma ORM + SQLite |
| Package manager | npm (a `bun.lock` is also present) |

## Quick start

```bash
npm install --legacy-peer-deps
npm run dev        # -> http://localhost:3000
```

### Optional: database

```bash
npx prisma generate
npm run db:push
```

`DATABASE_URL` in `.env` points at the local SQLite file (`db/custom.db`).

## Build & deploy (static)

The demo homepage is fully static. `next.config.ts` uses `output: "export"`:

```bash
npm run build      # -> static files in out/
```

Deploy the contents of `out/` to any static host (GitHub Pages, Cloudflare Pages, Netlify).

> Note: the sample `src/app/api/route.ts` "hello world" endpoint and the Prisma scaffold are not part of the static build output.

## Project structure

```
src/
  app/               # App Router: layout, page (homepage), globals.css
  components/
    frais/           # Brand sections: header, hero, shop-favorites, ...
    ui/              # shadcn/ui primitives
  lib/               # utils, db client
prisma/              # Prisma schema (SQLite)
public/              # Static assets
mini-services/       # (placeholder)
download/            # (assets)
```

## Screenshots

Several full-page screenshots (`screenshot-*.png`) are included in the repo root showing the desktop, mobile, and section views.

## Credits

Built by **Girish Lade** — [ladestack.in](https://ladestack.in)
