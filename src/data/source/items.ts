import type { SourceItem } from "../types";

/**
 * Legacy default source items used when no per-item files exist yet.
 * Add `.ts`, `.json`, or `.yml` files to this folder to override this list.
 */
export const source: SourceItem[] = [
  {
    id: "books",
    label: "Books",
    icon: "BookOpen",
    description: "Reading recommendations and full-length works.",
    comingSoon: true,
  },
  {
    id: "papers",
    label: "Papers & Text",
    icon: "FileText",
    description: "Essays, papers, and plain-text notes worth saving.",
    comingSoon: true,
  },
  {
    id: "pdfs",
    label: "PDFs",
    icon: "File",
    description: "Downloadable documents and reference material.",
    comingSoon: true,
  },
  {
    id: "images",
    label: "Images",
    icon: "Image",
    description: "Diagrams, screenshots, and visual references.",
    comingSoon: true,
  },
  {
    id: "audio",
    label: "Audio",
    icon: "FileAudio",
    description: "Talks, interviews, and recorded notes.",
    comingSoon: true,
  },
  {
    id: "videos",
    label: "Videos",
    icon: "Video",
    description: "Lectures, demos, and walkthroughs.",
    comingSoon: true,
  },
];
