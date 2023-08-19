//@ts-nocheck
import path from "path";
import { merge } from "webpack-merge";
import nodeExternals from "webpack-node-externals";

import { generateTempOutputFile } from "@/utils/generateTempOutputFile";
import { basicServerConfig } from "./webpack.node.basic";

export async function createNodeDevelopmentWebpackConfig(realFilePath: string): Promise<any> {
  const { directoryPath, fileName, fullPath } = await generateTempOutputFile();
  const webpackConfig = merge(basicServerConfig, {
    mode: "development",
    output: {
      clean: true,
      path: directoryPath,
      filename: fileName,
    },
    entry: realFilePath,
    externals: [nodeExternals({
      modulesFromFile: path.resolve(process.cwd(), "./package.json")
    })],
  });
  return { webpackConfig, outputPathInfo: { directoryPath, fileName, fullPath } };
};