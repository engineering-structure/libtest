import webpack from "webpack";

import { createClientDevelopmentWebpackConfig } from "@/frameworks/client/webpack.client.development";
import { getRealFilePath } from "@/utils/getRealFilePath";

/** 生成客户端调试的过程 **/
export async function clientRuntimeDebuger(source) {
  const realFilePath = getRealFilePath(source);
  const { webpackConfig, outputPathInfo } = await createClientDevelopmentWebpackConfig(realFilePath);
  const webpackDevelopmentCompiler = webpack(webpackConfig);
  webpackDevelopmentCompiler.watch({}, (error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });
};