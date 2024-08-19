const postcssPresetEnv = require("postcss-preset-env");

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [postcssPresetEnv()],
  publicPath: '/gh-pages/'

};

module.exports = config;
