import WebpackBar from "webpackbar";

import { program_loader } from "@/frameworks/configs/program_loader";

export const basicServerConfig = {
  cache: {
    type: "filesystem",
    memoryCacheUnaffected: true,
    allowCollectingMemory: true,
  },
  target: "node",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {}
  },
  externalsPresets: { node: true },
  optimization: {
    nodeEnv: false
  },
  module: {
    rules: [].concat(program_loader)
  },
  plugins: [
    new WebpackBar({ name: "已Nodejs模式进行编译" })
  ]
};