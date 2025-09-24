module.exports = function(eleventyConfig) {
  // Add syntax highlighting
  const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
  eleventyConfig.addPlugin(syntaxHighlight);

  // Copy assets to correct paths
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  
  // Watch targets
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/js/");
  eleventyConfig.addWatchTarget("content/");

  // Add collection for posts from content folder
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/*/get-started/*.md");
  });

  // Add filter for language detection
  eleventyConfig.addFilter("lang", function(url) {
    const match = url.match(/^\/([a-z]{2})\//);
    return match ? match[1] : 'en';
  });

  // Add filter for URL without language prefix
  eleventyConfig.addFilter("urlWithoutLang", function(url) {
    return url.replace(/^\/[a-z]{2}\//, '/');
  });

  // Add i18n filters to make translations easy
  eleventyConfig.addFilter("t", function(key, lang) {
    const i18n = require("./src/_data/i18n.js");
    return i18n.getUI(lang, key);
  });

  eleventyConfig.addFilter("content", function(key, lang) {
    const i18n = require("./src/_data/i18n.js");
    return i18n.getContent(lang, key);
  });

  eleventyConfig.addFilter("langInfo", function(langCode) {
    const i18n = require("./src/_data/i18n.js");
    return i18n.getLangInfo(langCode);
  });

  // Add filter to get all supported languages
  eleventyConfig.addFilter("supportedLangs", function() {
    const i18n = require("./src/_data/i18n.js");
    return i18n.getSupportedLangs().map(code => ({
      code,
      ...i18n.getLangInfo(code)
    }));
  });

  return {
    dir: {
      input: ".", // Root directory to include both src and content
      output: "_site",
      includes: "src/_includes",
      data: "src/_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}; 