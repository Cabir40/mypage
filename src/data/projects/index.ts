import type { Project } from "../types";
import { loadCollection } from "../loader";

const tsModules = import.meta.glob(["./*.ts", "!./index.ts"], {
  eager: true,
  import: "default",
});
const jsonModules = import.meta.glob("./*.json", { eager: true });
const yamlModules = import.meta.glob("./*.{yml,yaml}", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export const projects: Project[] = loadCollection<Project>(
  tsModules,
  jsonModules,
  yamlModules,
).map((a) => ({ ...a, section: "projects" }));
