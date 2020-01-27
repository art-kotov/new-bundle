// Core
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Instruments
const { build } = require("./paths");


module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: 'main.js',
    path: build
  },
  mode: "development",
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app'
    }),
  ],
};
