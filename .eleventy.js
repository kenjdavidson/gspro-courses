const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const jsonFilters = require('./src/filters/json');
const ordinalFilter = require('./src/filters/ordinal');
const htmlMinify = require('./src/transforms/html-minify');

module.exports = function(eleventyConfig) {
  // Production
  if (process.env.NODE_ENV === 'production') {
    eleventyConfig.addTransform("htmlmin", htmlMinify);
  }

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
