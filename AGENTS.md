# mypage — Cabir Celik portfolio site

Eleventy v3 static site deployed to GitHub Pages via GitHub Actions on every push to `main`.
Design direction and design tokens: [DESIGN.md](../resume/DESIGN.md) (shared with `resume/`).
Master content source of truth: `../resume.md`.

## Build & dev

```bash
npm run serve   # local dev server (hot-reload)
npm run build   # production build → _site/
npm run debug   # DEBUG=Eleventy* for troubleshooting
```

CI: `.github/workflows/deploy.yml` — pushes `_site/` to GitHub Pages automatically.

## Architectural Vision (v2 — see [README.md](../README.md))

This is a **portfolio knowledge base**, not a blog. The long-term goal is:

> Drop a folder into `content/projects/`, add assets beside it, push — the site auto-discovers and publishes everything. No nav updates. No config edits.

The target workflow:
```bash
mkdir content/projects/new-agent
# add index.md, images/, paper.pdf, demo.mp4
git add . && git commit -m "new project" && git push
# → site updates automatically
```

**Planned repository structure:**
```
content/
├── home/
├── projects/
│   ├── healthcare-rag/
│   │   ├── index.md        ← title, tags, github, demo + markdown body
│   │   ├── images/
│   │   ├── pdfs/
│   │   ├── code/
│   │   ├── videos/
│   │   └── assets/
│   └── medical-chatbot/
│       ├── index.md
│       └── ...
├── demos/
│   └── rag-optimization/
│       ├── index.md
│       ├── paper.pdf
│       └── images/
├── about/
└── contact/

assets/                     ← shared/global static assets only
├── images/
├── pdfs/
├── icons/
└── code/
```

**Asset co-location rule:** Assets belong *beside* their content file (`healthcare-rag/architecture.png`), not in a shared `assets/` folder. A flat `assets/500-files/` becomes unmaintainable.

**Auto-generated pages** (no manual registration):
- `/projects` — scanned from `content/projects/*`
- `/publications` — scanned from `content/publications/*`, filterable by year/topic/venue
- Homepage — auto-renders Featured Projects, Latest Publications, Experience Timeline

**Only manual pages:** `content/about/about.md`, `content/contact/contact.yaml`

**Tech stack under consideration for v2:** Astro + Content Collections + MDX + Pagefind (search) + Tailwind + GitHub Actions

## Current State (v1 — YAML-driven)

This is a **YAML-driven** site. Almost all content is `.yaml`; only demos and the About section use `.md` with front matter. The site reads `content/index.yaml` for page order.

```
content/
├── index.yaml                                    ← site config (name, baseUrl) + page/nav ordering
├── about/about.md                                ← front-matter: name, title, location, badges[], profiles[]
├── contact/contact.yaml                          ← heading, email, location, languages[], profiles[], body
├── home/
│   ├── experience/
│   │   ├── 01-john-snow-labs.yaml
│   │   ├── 02-eu-project.yaml
│   │   ├── 03-jotform.yaml
│   │   ├── 04-gittigidiyor.yaml
│   │   └── 05-bootcamp-eu.yaml                   ← role, org, location, dates, bullets[]
│   ├── education/
│   │   ├── 01-msc-software-engineering.yaml
│   │   ├── 02-bsc-computer-engineering.yaml
│   │   └── 03-msc-bsc-mathematics-teaching.yaml  ← degree, institution, location, dates, thesis?
│   ├── publications/
│   │   ├── 01-rag-thesis.yaml
│   │   ├── 02-beyond-negation-detection.yaml
│   │   ├── 03-smm4h22.yaml
│   │   └── 04-healthcare-llm-blog-post.yaml      ← title, venue, link, tag, tldr, citation?
│   └── projects/
│       └── 01-project_summary.md                 ← project summary/teaser (placeholder)
├── projects/
│   ├── 01-healthcare-rag-llm-system.yaml
│   ├── 02-medical-multimodal-chatbot.yaml
│   ├── 03-handwritten-medication-extraction.yaml
│   ├── 04-healthcare-nlp-suite.yaml
│   ├── 05-llm-document-qa-system.yaml
│   ├── 06-brain-tumor-multi-classification.yaml
│   ├── 07-mask-detection-yolov5.yaml
│   ├── 08-stock-price-prediction.yaml
│   └── 09-arduino-arm-car-robot.yaml             ← title, stack, demo (slug or ""), link, description
└── demos/
    ├── healthcare-rag-llm-system.md              ← title, subtitle, volume, issue, pullquote,
    ├── agents/                                      pullquoteCite, media[], links[] + markdown body
    └── healthcare/                               ← placeholder subdirs (empty)
```

## Content conventions (v1)

- **Add a file → entry appears. Remove a file → entry disappears.** No other files need changing for home sections.
- Filenames use `NN-slug` prefix (`01-john-snow-labs.yaml`) to control display order; prefix is stripped for the slug.
- `projects/*.yaml` `demo` field links a project card to its `/demos/<slug>/` page. Only set if a matching `demos/<slug>.md` exists.
- `content/index.yaml` controls nav order and which sections appear on the home page — edit this to add/remove top-level pages or home sections.

### Content schema by type

| Type | Location | Format | Key Fields |
|------|----------|--------|------------|
| Experience | `content/home/experience/NN-slug.yaml` | YAML | `role`, `org`, `location`, `dates`, `bullets[]` |
| Education | `content/home/education/NN-slug.yaml` | YAML | `degree`, `institution`, `location`, `dates`, `thesis?`, `body` |
| Publications | `content/home/publications/NN-slug.yaml` | YAML | `title`, `venue`, `link`, `tag` (`Thesis`/`Paper`/`Blog post`), `tldr`, `citation?` |
| Projects | `content/projects/NN-slug.yaml` | YAML | `title`, `stack`, `demo` (slug or `""`), `link`, `description` |
| Demos | `content/demos/slug.md` | Markdown + front matter | `title`, `subtitle`, `volume`, `issue`, `pullquote`, `pullquoteCite`, `media[]`, `links[]` |
| About | `content/about/about.md` | Markdown + front matter | `name`, `title`, `location`, `email`, `phone`, `avatar`, `badges[]`, `profiles[]` |
| Contact | `content/contact/contact.yaml` | YAML | `heading`, `email`, `location`, `languages[]`, `profiles[]`, `body` |

### Canonical examples
- Experience: [`content/home/experience/01-john-snow-labs.yaml`](../content/home/experience/01-john-snow-labs.yaml)
- Publication: [`content/home/publications/01-rag-thesis.yaml`](../content/home/publications/01-rag-thesis.yaml)
- Project card: [`content/projects/01-healthcare-rag-llm-system.yaml`](../content/projects/01-healthcare-rag-llm-system.yaml)
- Demo article: [`content/demos/healthcare-rag-llm-system.md`](../content/demos/healthcare-rag-llm-system.md)

## Templates

`src/` is the Eleventy `input` directory (`.eleventy.js`: `input: "src"`):
- Layouts → `src/_layouts/`
- Partials/includes → `src/_includes/`
- Global data loaders → `src/_data/` (JS files read YAML via `js-yaml`/`gray-matter` → Eleventy global data, via `src/_lib/contentLoader.js`)
- CSS → `src/css/`
- Entry templates → `src/*.njk`

## Key config

- `pathPrefix: "/mypage/"` — all URLs are rooted at `/mypage/` (GitHub Pages sub-path)
- Eleventy version: `^3.0.0`
- Front-matter parsing: `gray-matter`; Markdown rendering: `markdown-it`; YAML parsing: `js-yaml`
- `{% currentYear %}` shortcode available in all Nunjucks templates
