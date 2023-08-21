import webpack from "webpack";
import crossSpawn from "cross-spawn";

import { createNodeDevelopmentWebpackConfig } from "@/frameworks/nodejs/webpack.node.development";
import { getRealFilePath } from "@/utils/getRealFilePath";

/** Nodejs模式的调试过程 **/
export async function nodeRuntimeDebuger(source, { nodeOptions }) {
  const spawnStack = [];
  const realFilePath = getRealFilePath(source);
  const { webpackConfig, outputPathInfo } = await createNodeDevelopmentWebpackConfig(realFilePath);
  const webpackDevelopmentCompiler = webpack(webpackConfig);
  webpackDevelopmentCompiler.watch({}, async (error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
      spawnStack.forEach((currentStack) => currentStack.kill());
      const spawn = crossSpawn("node", [nodeOptions, outputPathInfo.fullPath].filter(Boolean), { stdio: "inherit" });
      spawnStack.push(spawn);
    };
  });
};