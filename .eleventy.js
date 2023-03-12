const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const jsonFilters = require('./src/filters/json');
const ordinalFilter = require('./src/filters/ordinal');
const htmlMinify = require('./src/transforms/html-minify');
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Production
  if (process.env.NODE_ENV === 'production') {
    eleventyConfig.addTransform("htmlmin", htmlMinify);
  }

  // Collections
  eleventyConfig.addCollection("betaCourses", function(collectionApi) {
    return collectionApi.getFilteredByTags("courses", "beta")
  });
  eleventyConfig.addCollection("releaseCourses", function(collectionApi) {
    return collectionApi.getFilteredByTags("courses", "release")
  });

  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Passthroughs
  eleventyConfig.addPassthroughCopy("content/**/*.css");
  eleventyConfig.addPassthroughCopy("content/CNAME");
  eleventyConfig.addPassthroughCopy("**/*.(jpg|png|gif)");

  // Filters
  eleventyConfig.addFilter("toJson", jsonFilters.toJson);
  eleventyConfig.addFilter("fromJson", jsonFilters.fromJson);
  eleventyConfig.addFilter("ordinal", ordinalFilter);
  const md = new markdownIt({
    html: true
  });

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "content",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
