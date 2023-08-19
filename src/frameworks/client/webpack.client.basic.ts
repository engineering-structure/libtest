import path from "path";
import WebpackBar from "webpackbar";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackAssetsManifest from "webpack-assets-manifest";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

import { file_loader } from "@/frameworks/configs/file_loader";
import { program_loader } from "@/frameworks/configs/program_loader";
import { use_public_style_loader_list } from "@/frameworks/configs/use_public_style_loader_list";

export const basicClientConfig = {
  cache: {
    type: "filesystem",
    memoryCacheUnaffected: true,
    allowCollectingMemory: true,
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {}
  },
  module: {
    rules: [{
      test: /\.(css)$/,
      use: use_public_style_loader_list
    }, {
      test: /\.(scss|sass)$/,
      use: use_public_style_loader_list.concat([{
        loader: path.resolve("sass-loader"),
        //@ts-ignore
        options: {}
      }])
    }, {
      test: /\.less$/,
      use: use_public_style_loader_list.concat([{
        loader: path.resolve("less-loader"),
        options: {
          //@ts-ignore
          lessOptions: {
            javascriptEnabled: true,
          },
          implementation: require("less"),
          sourceMap: true
        }
      }])
      //@ts-ignore
    }].concat(program_loader).concat(file_loader)
  },
  plugins: [
    new WebpackBar({ name: "以客户端模式进行编译", }),
    new NodePolyfillPlugin(),
    new WebpackAssetsManifest(),
    new HtmlWebpackPlugin({
      publicPath: "/",
      template: path.resolve(__dirname, "../../../statics/index.html")
    })
  ]
};