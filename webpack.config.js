const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //entry
  entry: "./src/app.js",
  //output
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  //loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  //plugins
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
  ],
  //modo
  mode: "production",
  //mode: "development"
};
