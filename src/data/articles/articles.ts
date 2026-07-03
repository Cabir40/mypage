import type { Project } from "../types";
import { projects as projectItems } from "../projects";
import { blogs as blogItems } from "../blogs";

export type { Project, SourceItem } from "../types";
export { projects as projectItems } from "../projects";
export { blogs as blogItems } from "../blogs";
export { source } from "../source";

export const projects: Project[] = [...projectItems, ...blogItems];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getRelatedProjects(currentId: string, limit: number = 3): Project[] {
  const current = getProjectById(currentId);
  if (!current) return projects.slice(0, limit);

  const related = projects.filter(
    (p) => p.id !== currentId && p.category === current.category,
  );

  if (related.length < limit) {
    const others = projects.filter(
      (p) => p.id !== currentId && p.category !== current.category,
    );
    return [...related, ...others].slice(0, limit);
  }

  return related.slice(0, limit);
}
