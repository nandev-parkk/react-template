const common = require("./webpack.common");
const path = require("path");
const { merge } = require("webpack-merge");
const { cleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[chunkhash].js",
    publicPath: path.resolve(__dirname, "dist"),
  },
  plugins: [new cleanWebpackPlugin()],
});
