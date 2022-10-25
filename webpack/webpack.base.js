const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../src/index.ts"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      favicon: path.resolve(__dirname, "../public/logo.svg"),
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        // test: /\.(js|ts)$/,
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(process.cwd(), 'tsconfig.json'),
          appendTsSuffixTo: [/\.vue$/],  // vue内部使用ts
          ignoreDiagnostics: [7006]  // 针对vue-loader的bug
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
};
