import yaml from "js-yaml";
import type { Project, SourceItem } from "./types";

/**
 * Generic loader that accepts modules collected via `import.meta.glob`.
 *
 * Supported formats per folder:
 *  - `.ts` — default export of the typed item
 *  - `.json` — parsed automatically by Vite
 *  - `.yml` / `.yaml` — loaded as raw text and parsed with js-yaml
 *
 * Items are sorted by `id` so order is deterministic regardless of file format.
 */
export function loadCollection<T extends { id: string }>(
  tsModules: Record<string, unknown>,
  jsonModules: Record<string, unknown>,
  yamlModules: Record<string, string>,
): T[] {
  const items: T[] = [];

  const pushModule = (mod: unknown, path: string) => {
    const value =
      mod && typeof mod === "object" && "default" in (mod as Record<string, unknown>)
        ? (mod as { default: unknown }).default
        : mod;
    if (!value || typeof value !== "object") {
      console.warn(`[data] Skipping ${path}: not an object`);
      return;
    }
    items.push(value as T);
  };

  for (const [path, mod] of Object.entries(tsModules)) pushModule(mod, path);
  for (const [path, mod] of Object.entries(jsonModules)) pushModule(mod, path);

  for (const [path, raw] of Object.entries(yamlModules)) {
    try {
      const parsed = yaml.load(raw);
      pushModule(parsed, path);
    } catch (err) {
      console.error(`[data] Failed to parse YAML ${path}:`, err);
    }
  }

  return items.sort((a, b) => a.id.localeCompare(b.id));
}

export type { Project, SourceItem };
