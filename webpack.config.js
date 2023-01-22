// Generated using webpack-cli https://github.com/webpack/webpack-cli
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const glob = require('glob');

const buildTime = Math.floor(Date.now() / 1000);
const isProduction = process.env.NODE_ENV == "production";
const productionPlugins = [];

if (isProduction) {
  const siteDirectory = path.resolve(__dirname, "./_site");
  const pages = glob.sync("**/*.html", { cwd: siteDirectory });

  console.log(pages);
  const htmlWebpackPlugins = pages.map(page => new HtmlWebpackPlugin({
      template: `${siteDirectory}/${page}`,
      filename: `${siteDirectory}/${page}`,
      inject: false
    }));    
  productionPlugins.push(...htmlWebpackPlugins);
  productionPlugins.push(  new HtmlReplaceWebpackPlugin([{
    pattern: 'bundle.js',
    replacement: `bundle.${buildTime}.js`
  },{
    pattern: 'styles.css',
    replacement: `styles.${buildTime}.css`
  }]));  
}

const config = {
  entry: ["./src/stimulus.ts", "./css/styles.css"],
  output: {
    filename: isProduction ? `bundle.${buildTime}.js` : `bundle.js`,
    path: path.resolve(__dirname, "./_site"),
  },
  plugins: [
    ...productionPlugins,
    new MiniCssExtractPlugin({
      filename: isProduction ? `styles.${buildTime}.css` : `styles.css`,
  }),],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },{
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  }
};

module.exports = () => {
  config.mode = isProduction ? "production" : "development";
  //config.devtools = isProduction ? "none" : "eval-source-map";
  return config;
};