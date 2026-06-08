---
description: "Sync AGENTS.md and README.md with actual workspace state — file tree, content schema, and architectural notes."
name: "Update Docs"
argument-hint: "What changed? (e.g. 'added new project', 'changed content schema', 'updated architecture')"
agent: "agent"
tools: [codebase, search]
---

Update [AGENTS.md](../../AGENTS.md) and [README.md](../../README.md) to reflect the current state of this repository.

## What to update

### 1. Scan the real file tree

Run a directory scan of `content/` and compare it to the tree in [AGENTS.md](../../AGENTS.md) under the "Current State (v1 — YAML-driven)" section. Add any files that are present on disk but missing from the tree. Remove any files listed in the tree that no longer exist.

### 2. Update AGENTS.md

- **File tree** — mirror the actual `content/` directory structure exactly, with inline schema annotations (`← role, org, location, dates, bullets[]`)
- **Content schema table** — verify all field definitions match the canonical example files; update any fields that have changed
- **Canonical examples** — keep links pointing to real files; remove links to files that no longer exist
- **Architectural Vision (v2)** — preserve as-is unless the user's argument mentions an architectural change
- **Templates section** — update the `⚠️` warning if `src/` now exists

### 3. Update README.md

- **Repository Structure** section — sync the `content/` tree to match disk
- Preserve all architectural reasoning and prose; only update structural facts

## Rules

- Do NOT change prose, opinions, or architectural reasoning — only update factual structural content
- Do NOT rewrite sections that aren't out of date
- If `$input` is provided, focus updates on the area described: `$input`
- After updating, report what changed in a 3-line summary: files added, files removed, schema fields changed
