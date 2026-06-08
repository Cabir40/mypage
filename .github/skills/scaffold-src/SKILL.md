---
name: scaffold-src
description: 'Reference for rebuilding the src/ template layer of this Eleventy v3 portfolio site from scratch (e.g. after a major restructure). Shows how to create src/_data/ JS loaders for YAML content, src/_layouts/ Nunjucks layouts, src/_includes/ partials, and src/css/. The working src/ tree already exists — only use this if it has been intentionally removed and needs rebuilding. Use when: "rebuild the templates", "recreate src from scratch", "the src/ layer was removed".'
argument-hint: "Optional: which page to scaffold first (e.g. home, projects, demos, about)"
---

# scaffold-src

Builds the complete `src/` template layer for this Eleventy v3 portfolio site. After this skill completes, `npm run build` and `npm run serve` work.

## Context

- Config: [`.eleventy.js`](../../.eleventy.js) — `input: "src"`, layouts in `src/_layouts/`, includes in `src/_includes/`, data in `src/_data/`
- Content: all YAML/Markdown lives in `content/` — see [AGENTS.md](../../AGENTS.md) for full schema
- Routing manifest: [`content/index.yaml`](../../content/index.yaml) — defines pages, nav order, section paths
- Path prefix: `/mypage/` on all URLs
- Template engine: Nunjucks (`.njk`) for both Markdown and HTML

## Step 1: Verify pre-conditions

```bash
# Confirm src/ doesn't already exist (or is empty)
ls src/ 2>/dev/null && echo "SRC_EXISTS" || echo "SRC_MISSING"
# Confirm content exists
ls content/index.yaml && echo "CONTENT_OK"
# Confirm dependencies are installed
ls node_modules/.bin/eleventy && echo "DEPS_OK" || echo "RUN_npm_install_FIRST"
```

If `DEPS_OK` is missing, run `npm install` before continuing.

## Step 2: Create directory structure

```bash
mkdir -p src/_data src/_layouts src/_includes src/css
```

## Step 3: Create _data/ loaders

Each JS file in `src/_data/` becomes Eleventy global data. These read the YAML content files and expose them as template variables.

### `src/_data/site.js` — site config from index.yaml
```js
const yaml = require("js-yaml");
const fs = require("fs");

module.exports = function () {
  const raw = yaml.load(fs.readFileSync("content/index.yaml", "utf8"));
  return raw.site;
};
```

### `src/_data/nav.js` — page list for navigation
```js
const yaml = require("js-yaml");
const fs = require("fs");

module.exports = function () {
  const raw = yaml.load(fs.readFileSync("content/index.yaml", "utf8"));
  return raw.pages.filter((p) => p.nav !== false);
};
```

### `src/_data/experience.js`
```js
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

module.exports = function () {
  const dir = "content/home/experience";
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith(".yaml"))
    .sort()
    .map((f) => yaml.load(fs.readFileSync(path.join(dir, f), "utf8")));
};
```

Create identical loaders for **education**, **publications**, and **projects** — just swap the directory path:
- `src/_data/education.js` → `content/home/education`
- `src/_data/publications.js` → `content/home/publications`
- `src/_data/projects.js` → `content/projects`

> `fs.readdirSync` + `.filter().sort()` is sufficient — don't add a `glob` dependency, it's not in `package.json`.

### `src/_data/about.js` — parses about.md front matter
```js
const matter = require("gray-matter");
const fs = require("fs");

module.exports = function () {
  const { data, content } = matter(fs.readFileSync("content/about/about.md", "utf8"));
  return { ...data, body: content };
};
```

### `src/_data/contact.js`
```js
const yaml = require("js-yaml");
const fs = require("fs");

module.exports = function () {
  return yaml.load(fs.readFileSync("content/contact/contact.yaml", "utf8"));
};
```

## Step 4: Create _layouts/

### `src/_layouts/base.njk` — root layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{ title }} — {{ site.name }}</title>
  <link rel="stylesheet" href="{{ '/css/main.css' | url }}" />
</head>
<body>
  {% include "header.njk" %}
  <main>{{ content | safe }}</main>
  {% include "footer.njk" %}
</body>
</html>
```

### `src/_layouts/home.njk`
```njk
---
layout: base.njk
---
{% include "sections/experience.njk" %}
{% include "sections/education.njk" %}
{% include "sections/publications.njk" %}
```

### `src/_layouts/projects.njk`
```njk
---
layout: base.njk
---
<section class="projects">
  <h1>Projects</h1>
  <div class="project-grid">
    {% for project in projects %}
      {% include "cards/project-card.njk" %}
    {% endfor %}
  </div>
</section>
```

### `src/_layouts/demo.njk`
```njk
---
layout: base.njk
---
<article class="demo">
  <header>
    <p class="eyebrow">{{ volume }} · {{ issue }}</p>
    <h1>{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>
  </header>
  {% if pullquote %}
  <blockquote>
    <p>{{ pullquote }}</p>
    <cite>{{ pullquoteCite }}</cite>
  </blockquote>
  {% endif %}
  <div class="demo-body">{{ content | safe }}</div>
  {% if links %}
  <div class="demo-links">
    {% for link in links %}
      <a href="{{ link.url }}" class="btn btn--{{ link.style }}">{{ link.label }}</a>
    {% endfor %}
  </div>
  {% endif %}
</article>
```

Create minimal layouts for `about.njk` and `contact.njk` following the same `base.njk` pattern.

## Step 5: Create _includes/ partials

### `src/_includes/header.njk`
```njk
<header>
  <a class="site-name" href="{{ '/' | url }}">{{ site.name }}</a>
  <nav>
    {% for page in nav %}
      <a href="{{ ('/' + page.id + '/') | url }}"
         {% if page.id == currentPage %}aria-current="page"{% endif %}>
        {{ page.title }}
      </a>
    {% endfor %}
  </nav>
</header>
```

### `src/_includes/footer.njk`
```njk
<footer>
  <p>&copy; {% currentYear %} {{ site.name }}</p>
</footer>
```

### `src/_includes/sections/experience.njk`
```njk
<section id="experience">
  <h2>Experience</h2>
  {% for job in experience %}
  <article>
    <h3>{{ job.role }}</h3>
    <p>{{ job.org }} · {{ job.location }} · {{ job.dates }}</p>
    <ul>
      {% for bullet in job.bullets %}<li>{{ bullet }}</li>{% endfor %}
    </ul>
  </article>
  {% endfor %}
</section>
```

Create equivalent partials for `education.njk` and `publications.njk` — field names from [AGENTS.md](../../AGENTS.md) content schema table.

### `src/_includes/cards/project-card.njk`
```njk
<article class="project-card">
  <h3>{{ project.title }}</h3>
  <p class="stack">{{ project.stack }}</p>
  <p>{{ project.description }}</p>
  {% if project.demo %}
    <a href="{{ ('/demos/' + project.demo + '/') | url }}">View demo →</a>
  {% endif %}
  {% if project.link %}
    <a href="{{ project.link }}" rel="noopener">GitHub →</a>
  {% endif %}
</article>
```

## Step 6: Create entry pages

These Nunjucks files in `src/` trigger Eleventy to generate output pages.

### `src/index.njk`
```njk
---
layout: home.njk
title: Home
currentPage: home
permalink: /
---
```

### `src/projects.njk`
```njk
---
layout: projects.njk
title: Projects
currentPage: projects
permalink: /projects/
---
```

Create `src/about.njk`, `src/contact.njk` following the same pattern.

### Demo pages — `src/demos.njk` (collection-driven)

Add a custom Eleventy collection in `.eleventy.js` for demo markdown files, or handle via a `src/demos/` directory with a `demos.11tydata.js` file that sets `layout: demo.njk` for all files under it.

Simpler approach: copy `content/demos/*.md` handling by adding to `.eleventy.js`:
```js
eleventyConfig.addCollection("demos", (api) =>
  api.getFilteredByGlob("content/demos/*.md")
);
```
Then use `permalink` in each demo's front matter: `permalink: /demos/{{ page.fileSlug }}/`

## Step 7: Create src/css/main.css

Create a minimal `src/css/main.css` with CSS custom properties matching the design tokens. Start with:
```css
:root {
  --font-sans: system-ui, -apple-system, sans-serif;
  --color-text: #1a1a1a;
  --color-bg: #ffffff;
  --spacing-base: 1rem;
}
*, *::before, *::after { box-sizing: border-box; }
body { font-family: var(--font-sans); color: var(--color-text); background: var(--color-bg); margin: 0; }
```

## Step 8: Verify the build

```bash
npm run build 2>&1 | tail -20
```

Expected: Eleventy outputs pages to `_site/` with no errors. If errors appear:
- `Cannot find module 'js-yaml'` → `npm install` (already in devDependencies)
- `template not found` → check layout name matches filename exactly
- `data file not found` → check path in `src/_data/*.js` relative to project root (not `src/`)
- Nunjucks variable undefined → check the data loader exports the expected shape

## Step 9: Run dev server

```bash
npm run serve
```

Open `http://localhost:8080/mypage/` to verify.

## Completion checklist

- [ ] `src/_data/` has loaders for site, nav, experience, education, publications, projects, about, contact
- [ ] `src/_layouts/` has base, home, projects, demo, about, contact
- [ ] `src/_includes/` has header, footer, section partials, project-card
- [ ] `src/index.njk`, `src/projects.njk`, `src/about.njk`, `src/contact.njk` exist
- [ ] Demo collection wired in `.eleventy.js`
- [ ] `npm run build` exits with 0 errors
- [ ] Home page renders at `/mypage/`
