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
    alias: {
      "library": path.resolve(process.cwd(), "./src/"),
      "@": path.resolve(process.cwd(), "./example/"),
      "@@": process.cwd(),
    }
  },
  module: {
    rules: [{
      test: /\.(css)$/,
      use: use_public_style_loader_list
    }, {
      test: /\.(scss|sass)$/,
      use: use_public_style_loader_list.concat([{
        loader: "sass-loader",
        //@ts-ignore
        options: {}
      }])
    }, {
      test: /\.less$/,
      use: use_public_style_loader_list.concat([{
        loader: "less-loader",
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
    new WebpackBar({ name: "编译客户端", }),
    new NodePolyfillPlugin(),
    new WebpackAssetsManifest(),
    new HtmlWebpackPlugin({
      publicPath: "/",
      template: path.resolve(process.cwd(), "./example/applications/index.html")
    })
  ]
};