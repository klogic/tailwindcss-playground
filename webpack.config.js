const path = require("path");
const { WebpackPluginServe: Serve } = require("webpack-plugin-serve");
const options = {
  static: path.resolve(__dirname, "dist"),
};

module.exports = {
  entry: ["./src/index.js", "webpack-plugin-serve/client"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new Serve(options)],
  watch: true,
};
