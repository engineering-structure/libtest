//@ts-nocheck
import { merge } from "webpack-merge";

import { generateTempOutputFile } from "@/utils/generateTempOutputFile";
import { basicClientConfig } from "./webpack.client.basic";

export async function createClientDevelopmentWebpackConfig(realFilePath: string): Promise<any> {
  const { directoryPath, fileName, fullPath } = await generateTempOutputFile();
  const webpackConfig = merge(basicClientConfig, {
    mode: "development",
    entry: realFilePath,
    output: {
      clean: true,
      path: directoryPath,
      filename: fileName,
    }
  });
  return { webpackConfig, outputPathInfo: { directoryPath, fileName, fullPath } };
};