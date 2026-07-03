import type { SourceItem } from "../types";
import { loadCollection } from "../loader";
import { source as legacySource } from "./items";

const tsModules = import.meta.glob(["./*.ts", "!./index.ts", "!./items.ts"], {
  eager: true,
  import: "default",
});
const jsonModules = import.meta.glob("./*.json", { eager: true });
const yamlModules = import.meta.glob("./*.{yml,yaml}", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const perItem = loadCollection<SourceItem>(tsModules, jsonModules, yamlModules);

export const source: SourceItem[] =
  perItem.length > 0 ? perItem : legacySource;
