const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const yaml = require("js-yaml");
const MarkdownIt = require("markdown-it");

const md = new MarkdownIt({ html: true, typographer: true });

const CONTENT_ROOT = path.join(__dirname, "..", "..", "content");

function contentPath(...segments) {
  return path.join(CONTENT_ROOT, ...segments);
}

// Strips a leading "01-", "02-" sort prefix to derive a clean slug/id.
function stripOrderPrefix(filename) {
  return filename.replace(/^\d+-/, "");
}

// Load a single .yaml content file (no markdown body).
function loadYamlFile(relativePath) {
  const fullPath = contentPath(relativePath);
  const raw = fs.readFileSync(fullPath, "utf8");
  return yaml.load(raw);
}

// Load all .yaml files in a content subdirectory, sorted by filename.
// Adds a `slug` derived from the filename (order prefix stripped).
function loadYamlDir(relativeDir) {
  const dirPath = contentPath(relativeDir);
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter((filename) => filename.endsWith(".yaml") || filename.endsWith(".yml"))
    .sort()
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dirPath, filename), "utf8");
      const data = yaml.load(raw);
      const slug = stripOrderPrefix(filename.replace(/\.ya?ml$/, ""));
      return { slug, ...data };
    });
}

// Load a single .md file with YAML front matter.
function loadMarkdownFile(relativePath) {
  const fullPath = contentPath(relativePath);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { ...data, content: md.render(content) };
}

// Load all .md files in a content subdirectory, sorted by filename.
function loadMarkdownDir(relativeDir) {
  const dirPath = contentPath(relativeDir);
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter((filename) => filename.endsWith(".md"))
    .sort()
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dirPath, filename), "utf8");
      const { data, content } = matter(raw);
      const slug = stripOrderPrefix(filename.replace(/\.md$/, ""));
      return { slug, ...data, content: md.render(content) };
    });
}

// Load demos: .md files in demos/ root + index.md files in demos/subdirs.
function loadDemos(relativeDir) {
  const dirPath = contentPath(relativeDir);
  if (!fs.existsSync(dirPath)) return [];
  const results = [];

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(".md")) {
      const raw = fs.readFileSync(path.join(dirPath, entry.name), "utf8");
      const { data, content } = matter(raw);
      const slug = stripOrderPrefix(entry.name.replace(/\.md$/, ""));
      results.push({ slug, ...data, content: md.render(content) });
    } else if (entry.isDirectory()) {
      const indexPath = path.join(dirPath, entry.name, "index.md");
      if (fs.existsSync(indexPath)) {
        const raw = fs.readFileSync(indexPath, "utf8");
        const { data, content } = matter(raw);
        results.push({ slug: entry.name, ...data, content: md.render(content) });
      }
    }
  }

  return results.sort((a, b) => a.slug.localeCompare(b.slug));
}

module.exports = {
  loadYamlFile,
  loadYamlDir,
  loadMarkdownFile,
  loadMarkdownDir,
  loadDemos,
  stripOrderPrefix,
};
