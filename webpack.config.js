const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const jqueryPath = path.resolve(__dirname, "node_modules/jquery/dist/jquery.js");

module.exports = (_, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "assets/js/[name].[contenthash:8].js",
      assetModuleFilename: "assets/media/[name][ext]",
      clean: true
    },
    devtool: isProduction ? "source-map" : "eval-source-map",
    devServer: {
      static: {
        directory: path.resolve(__dirname, "dist")
      },
      host: "0.0.0.0",
      port: 8080,
      hot: true,
      open: false,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
          type: "asset/resource"
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: "asset/resource"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        minify: isProduction
      }),
      new MiniCssExtractPlugin({
        filename: "assets/css/[name].[contenthash:8].css"
      })
    ],
    resolve: {
      alias: {
        jquery$: jqueryPath
      },
      mainFields: ["browser", "main", "module"],
      extensions: [".js"]
    }
  };
};
