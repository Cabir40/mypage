# Cabir Çelik — Portfolio

Personal portfolio site built with React + Vite + TypeScript, deployed to GitHub Pages.

**Live:** https://cabir40.github.io/mypage/

## Stack

- **React 18** + React Router 6
- **Vite 5** (base path `/mypage/`)
- **TypeScript 5**
- **Tailwind CSS 3** + shadcn-ui
- **Supabase** — auth & Edge Functions
- **Stripe** — membership / payments

## Getting started

```sh
# Install dependencies
npm install

# Start dev server (http://localhost:8080/mypage/)
npm run dev

# Production build → dist/
npm run build

# Preview production build locally
npm run preview
```

## Project structure

```
src/
  App.tsx          ← router + providers
  components/      ← shared UI components + shadcn-ui primitives (ui/)
  data/            ← all site content as TypeScript files
    types.ts       ← shared interfaces
    loader.ts      ← multi-format collection loader (ts / json / yaml)
    about/         ← about.ts, experience.ts, education.ts
    projects/      ← 001.ts … 019.ts
    blogs/         ← P001.ts … P004.ts, clinical-nlp-101.ts
    articles/      ← aggregator (projects + blogs)
    contact/       ← contact.ts
    source/        ← items.ts
  hooks/           ← useAuth, useSubscription, use-toast
  integrations/    ← Supabase + Lovable clients
  pages/           ← one file per route
scripts/
  generate-sitemap.ts   ← auto-generates public/sitemap.xml
supabase/
  functions/       ← Stripe checkout, portal, webhook Edge Functions
  migrations/      ← Postgres SQL migrations
```

## Adding content

Drop a new file in the right folder — `import.meta.glob` picks it up automatically, no router changes needed.

| Content | Folder | Naming |
|---------|--------|--------|
| Projects | `src/data/projects/` | `020.ts`, `021.ts`, … |
| Blog posts | `src/data/blogs/` | `P005.ts`, `P006.ts`, … |

Each file must `export default` an object matching the `Project` interface from `src/data/types.ts`.  
See [`src/data/README.md`](src/data/README.md) for the full schema and `.json` / `.yaml` alternatives.

## Deployment

Push to `main` — GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) builds and deploys to GitHub Pages automatically.
