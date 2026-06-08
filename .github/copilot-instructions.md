# Cabir Çelik — Portfolio Site (mypage)

> Full architecture, content schema, and conventions: [AGENTS.md](../AGENTS.md)

## Stack
- **Eleventy v3** — config in [`.eleventy.js`](../.eleventy.js); Nunjucks templates; path prefix `/mypage/`

## Build Commands
```bash
npm run serve   # dev server with live reload
npm run build   # production build → _site/
npm run debug   # DEBUG=Eleventy* for troubleshooting
```

## Quick Reference

- **Add content** → drop a YAML/Markdown file in the right `content/` subdirectory; it appears automatically
- **File order** → controlled by `NN-` numeric prefix (`01-foo.yaml`, `02-bar.yaml`)
- **Nav/pages** → edit [`content/index.yaml`](../content/index.yaml)
- **Project ↔ Demo link** → set `demo: <slug>` in the project YAML to match a `content/demos/<slug>.md`

## Content Locations

| Type | Path |
|------|------|
| Experience | `content/home/experience/NN-slug.yaml` |
| Education | `content/home/education/NN-slug.yaml` |
| Publications | `content/home/publications/NN-slug.yaml` |
| Projects | `content/projects/NN-slug.yaml` |
| Demos | `content/demos/slug.md` |
| About | `content/about/about.md` |
| Contact | `content/contact/contact.yaml` |

See [AGENTS.md](../AGENTS.md) for full field schemas, canonical examples, and the v2 architecture vision.

