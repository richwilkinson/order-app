const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
if (process.env.NODE.ENV === "production") {
    mode = "production";
}

module.exports = {
  mode: mode,

  module: {
    rules: [
        {
            test: /\.s?css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};