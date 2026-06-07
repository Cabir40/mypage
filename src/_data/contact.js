const { loadYamlFile } = require("../_lib/contentLoader");

module.exports = function () {
  return loadYamlFile("contact/contact.yaml");
};
