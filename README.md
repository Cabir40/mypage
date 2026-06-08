# mypageAfter thinking more about your actual usage pattern, I would change the architecture again.

Your primary goal is **not a blog**.

Your primary goal is:

> "I continuously add projects, publications, demos, images, PDFs, videos, code snippets, notebooks, presentations, and notes, then push to GitHub and the website updates automatically."

That is much closer to a **portfolio knowledge base** than a traditional website.

The biggest mistake would be treating everything as individual Markdown pages controlled manually by a huge `index.yml`.

Eventually you'll have:

* 20+ projects
* 50+ publications
* 100+ images
* 50+ PDFs
* 50+ videos
* 20+ presentations
* 100+ code samples
* 50+ demo notebooks


Maintaining a giant navigation file becomes painful.

---

# Recommended Architecture (v2)

## Content-Driven

Instead of:

```text
index.yml
    -> manually lists every file
```

Use:

```text
content/
    home/
        summary_of_about
        summary_of_contact
        summary_of_projects
        summary_of_demos
    projects/
        project-1/
        project-2/
    demos/
        demo-1/
        demo-2/
    about/
        publications/
        experience/
        education/
    contact/
```

The site automatically discovers content.

Navigation is generated dynamically.

---

# Repository Structure

```text
repo/

content/
|   |
├   ├── home/
├   ├── projects/
│   │
│   │   ├── healthcare-rag/
│   │   │   ├── index.md
│   │   │   ├── images/
│   │   │   ├── pdfs/
│   │   │   ├── code/
│   │   │   ├── videos/
│   │   │   └── assets/
│   │
│   │   ├── medical-chatbot/
│   │   │   ├── index.md
│   │   │   └── ...
│   │
├   ├── demos/
│   │
│   │   ├── rag-optimization/
│   │   │   ├── index.md
│   │   │   ├── paper.pdf
│   │   │   └── images/
│   │
│   │   └── ...
│   │
├   ├── about/
│   │
└   └──contact/

├── assets/
│   ├── images/
│   ├── pdfs/
│   ├── icons/
│   └── code/
│
```

This is the structure used by many successful documentation and portfolio systems.

---

# Each Project Is Self-Contained

Instead of:

```text
projects/
    01-project.md
```

Use:

```text
projects/
    healthcare-rag/
```

Inside:

```text
healthcare-rag/

index.md
thumbnail.png
architecture.png
paper.pdf
demo.mp4
notebook.ipynb
```

Everything for that project lives together.

---

# Example Markdown

````md
---
title: Healthcare RAG System
type: project

tags:
  - llm
  - rag
  - healthcare

featured: true

github: https://github.com/...
demo: https://...
---

# Healthcare RAG System

## Overview

Project description.

## Architecture

![Architecture](architecture.png)

## Demo

<Video src="demo.mp4" />

## Paper

<PDF src="paper.pdf" />

## Source Code

```python
print("hello")
````

````

---

# Dynamic Homepage

Homepage should never be manually maintained.

Instead:

```text
Home

Featured Projects
Latest Publications
Experience Timeline
Education
Recent Demos
````

Generated automatically.

---

# Dynamic Project Listing

Builder scans:

```text
content/projects/*
```

Creates:

```text
/Projects
```

Automatically.

When you add:

```text
content/projects/new-ai-agent/
```

It appears automatically.

No navigation update.

No config update.

---

# Dynamic Publications

Builder scans:

```text
content/publications/*
```

Automatically creates:

```text
/publications
```

with:

```text
filter by year
filter by topic
filter by venue
```

generated from metadata.

---

# Asset Strategy

Every content folder owns its assets.

Good:

```text
healthcare-rag/

index.md
demo.mp4
paper.pdf
architecture.png
```

Bad:

```text
assets/
    500 mixed files
```

After 2 years you'll never find anything.

---

# Content Types

I would support:

| Type              | Support |
| ----------------- | ------- |
| Markdown          | ✅       |
| Images            | ✅       |
| PDF               | ✅       |
| MP4               | ✅       |
| YouTube           | ✅       |
| Audio             | ✅       |
| PPTX download     | ✅       |
| Jupyter notebooks | ✅       |
| Code snippets     | ✅       |
| Mermaid diagrams  | ✅       |

---

# Search

Use:

```text
Pagefind
```

Every page indexed.

Searches:

```text
RAG

Healthcare

Transformers

LLM

SMM4H
```

instantly.

---

# Content Creation Workflow

Your daily workflow becomes:

```bash
mkdir content/projects/new-agent
```

Create:

```text
index.md
images/
paper.pdf
demo.mp4
```

Commit:

```bash
git add .
git commit -m "new project"
git push
```

Done.

Website updates.

No config editing.

No menu editing.

No HTML editing.

---

# What Should Be Manual?

Only these pages:

```text
content/pages/about.md

content/pages/contact.md
```

Everything else auto-generated.

---

# Technology Stack

If I were building this for myself today:

```text
Astro
+
Content Collections
+
MDX
+
Pagefind
+
Tailwind
+
GitHub Actions
+
GitHub Pages
```

---

# The Prompt I Would Give Codex/Claude

Build a content-driven portfolio website using Astro.

Core principle:

Every project, publication, experience, education entry, or demo is represented by a folder containing an index.md file and optional local assets.

Example:

content/projects/healthcare-rag/

```
index.md
architecture.png
paper.pdf
demo.mp4
notebook.ipynb
```

The website must automatically discover content folders and generate routes.

No project or publication should ever need to be manually registered.

The website must support:

* Markdown
* MDX
* Images
* PDF embedding
* Video embedding
* Audio embedding
* Code blocks
* Mermaid diagrams
* GitHub links
* External demo links

Generate:

* Homepage
* Projects page
* Publications page
* Experience page
* Education page
* Demos page
* About page
* Contact page

Homepage must automatically display:

* Featured Projects
* Latest Publications
* Experience Timeline

Implement search using Pagefind.

Deploy automatically to GitHub Pages using GitHub Actions.

Adding a new folder under content/projects or content/publications must automatically create a new webpage after git push.

No manual route registration allowed.

No manual navigation maintenance allowed.

Navigation should be generated from content collections.

Optimize for a workflow where content is updated daily through Git commits.

This architecture is much closer to how you'll actually work long-term: drop a new project folder into `content/projects/`, add images/PDFs/videos beside it, push to GitHub, and the site discovers and publishes everything automatically.
