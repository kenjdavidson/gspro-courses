const htmlmin = require("html-minifier");

module.exports = function (content, outputPath) {
  if (outputPath.endsWith(".html")) {
    try {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseInlineTagWhitespace: true,
        collapseBooleanAttributes: true,
      });
  
      return minified;
    } catch (err) {
      console.log(err);
    }

  }

  return content;
};
