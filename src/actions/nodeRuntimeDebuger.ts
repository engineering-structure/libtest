import webpack from "webpack";

import { createNodeDevelopmentWebpackConfig } from "@/frameworks/nodejs/webpack.node.development";
import { getRealFilePath } from "@/utils/getRealFilePath";

/** Nodejs模式的调试过程 **/
export async function nodeRuntimeDebuger(source) {
  const realFilePath = getRealFilePath(source);
  const { webpackConfig, outputPathInfo } = await createNodeDevelopmentWebpackConfig(realFilePath);
  const webpackDevelopmentCompiler = webpack(webpackConfig);
  webpackDevelopmentCompiler.watch({}, (error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });
};