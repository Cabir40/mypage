module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy({ "content/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });

  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

  return {
    pathPrefix: "/mypage/",
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
