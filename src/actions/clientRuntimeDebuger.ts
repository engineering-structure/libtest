import webpack from "webpack";
import express from "express";
import history from "connect-history-api-fallback";

import { createClientDevelopmentWebpackConfig } from "@/frameworks/client/webpack.client.development";
import { getRealFilePath } from "@/utils/getRealFilePath";

/** 生成客户端调试的过程 **/
export async function clientRuntimeDebuger(source, { port }) {
  const realFilePath = getRealFilePath(source);
  const { webpackConfig, outputPathInfo } = await createClientDevelopmentWebpackConfig(realFilePath);

  const app = express();

  app.use(express.static(outputPathInfo.directoryPath));
  app.use(history());

  const server = app.listen(port, async () => {
    const address: any = server.address();
    const webpackDevelopmentCompiler = webpack(webpackConfig);
    webpackDevelopmentCompiler.watch({}, (error, stats) => {
      if (error) {
        console.log(error);
      } else {
        console.log(stats.toString({ colors: true }));
        console.log(address);
      };
    });
  });
};