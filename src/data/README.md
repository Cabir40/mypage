# Content data

Each item lives in its own file under a topic folder. Three formats are supported:

- `.ts` — `export default { ... }` (best for type safety and IDE autocomplete)
- `.json` — plain JSON object
- `.yml` / `.yaml` — YAML mapping

Folders:

- `projects/` — items shown on `/projects`
- `blogs/` — items shown on `/blogs`
- `source/` — items shown on `/source`

All formats are aggregated automatically at build time via `import.meta.glob`
in each folder's `index.ts`, then re-exported through `src/data/articles/articles.ts`.
Items are sorted by `id`.

## Example — JSON project

`src/data/projects/004.json`

```json
{
  "id": "004",
  "title": "My Project",
  "subtitle": "...",
  "category": "Lifestyle",
  "date": "Jan 1, 2026",
  "readTime": "4 min",
  "image": "https://...",
  "author": { "name": "...", "avatar": "...", "bio": "..." },
  "content": { "introduction": "...", "sections": [], "conclusion": "" },
  "tags": []
}
```

## Example — YAML blog

`src/data/blogs/B002.yml`

```yaml
id: B002
title: My Blog Post
subtitle: ...
category: Blogs
date: Jan 1, 2026
readTime: 5 min
image: https://...
author:
  name: ...
  avatar: ...
  bio: ...
content:
  introduction: ...
  sections: []
  conclusion: ''
tags: []
membersOnly: false
```

The `section` field is set automatically by the folder loader, so you don't
need to include it.
