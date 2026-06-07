const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

const CONTENT_ROOT = path.join(__dirname, "..", "..", "content");

module.exports = function () {
  const raw = fs.readFileSync(path.join(CONTENT_ROOT, "index.yaml"), "utf8");
  return yaml.load(raw);
};
