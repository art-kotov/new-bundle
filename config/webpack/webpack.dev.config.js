// Core
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
// Instruments
const { build, source } = require("./paths");

module.exports = {
    entry: `./src/index.jsx`,
    output: {
        filename: "main.js",
        path: build
    },
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        modules: [source, "node_modules"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            template: require("html-webpack-template"),
            appMountId: "app"
        }),
        new Dotenv()
    ]
};
