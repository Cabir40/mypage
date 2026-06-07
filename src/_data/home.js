const { loadYamlDir, loadMarkdownFile } = require("../_lib/contentLoader");

module.exports = function () {
  return {
    about: loadMarkdownFile("about/about.md"),
    experience: loadYamlDir("home/experience"),
    education: loadYamlDir("home/education"),
    publications: loadYamlDir("home/publications"),
  };
};
