const { loadYamlDir } = require("../_lib/contentLoader");

module.exports = function () {
  return loadYamlDir("projects");
};
