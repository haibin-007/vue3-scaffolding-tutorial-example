const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const path = require("path");

module.exports = webpackMerge.merge(baseConfig, {
  mode: "development",
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    static: {
      directory: path.join(__dirname, "../dist"),
    },
  },
});
