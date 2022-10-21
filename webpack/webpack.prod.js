const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base");

module.exports = webpackMerge.merge(baseConfig, {
  mode: "production",
});
