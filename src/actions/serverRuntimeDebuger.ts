import webpack from "webpack";

import { createServerDevelopmentWebpackConfig } from "@/frameworks/server/webpack.server.development";
import { getRealFilePath } from "@/utils/getRealFilePath";

/** 生成服务端调试的过程 **/
export async function serverRuntimeDebuger(source) {
  const realFilePath = getRealFilePath(source);
  const { webpackConfig, outputPathInfo } = await createServerDevelopmentWebpackConfig(realFilePath);
  const webpackDevelopmentCompiler = webpack(webpackConfig);
  webpackDevelopmentCompiler.watch({}, (error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });
};