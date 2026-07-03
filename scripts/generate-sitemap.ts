// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync, readdirSync } from "fs";
import { resolve } from "path";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/projects", changefreq: "weekly", priority: "0.9" },
  { path: "/blogs", changefreq: "weekly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "yearly", priority: "0.6" },
  { path: "/source", changefreq: "monthly", priority: "0.5" },
  { path: "/colleagues", changefreq: "monthly", priority: "0.5" },
  { path: "/creativity", changefreq: "monthly", priority: "0.5" },
  { path: "/growth", changefreq: "monthly", priority: "0.5" },
  { path: "/wellness", changefreq: "monthly", priority: "0.5" },
  { path: "/travel", changefreq: "monthly", priority: "0.5" },
  { path: "/style-guide", changefreq: "yearly", priority: "0.3" },
  { path: "/membership", changefreq: "monthly", priority: "0.6" },
  { path: "/auth", changefreq: "yearly", priority: "0.2" },
  { path: "/reset-password", changefreq: "yearly", priority: "0.2" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
];
// Omitted from sitemap (non-indexable): /membership/return.

function idsFrom(dir: string): string[] {
  try {
    return readdirSync(resolve(dir))
      .filter((f) => f.endsWith(".ts") && f !== "index.ts")
      .map((f) => f.replace(/\.ts$/, ""));
  } catch {
    return [];
  }
}

const projectEntries: SitemapEntry[] = idsFrom("src/data/projects").map((id) => ({
  path: `/projects/${id}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const blogEntries: SitemapEntry[] = idsFrom("src/data/blogs").map((id) => ({
  path: `/blogs/${id}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const articleEntries: SitemapEntry[] = [...projectEntries, ...blogEntries].map((entry) => ({
  path: entry.path.replace(/^\/(projects|blogs)\//, "/article/"),
  changefreq: "monthly",
  priority: "0.6",
}));

const entries = [...staticEntries, ...projectEntries, ...blogEntries, ...articleEntries];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
