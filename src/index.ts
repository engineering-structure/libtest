#!/usr/bin/env -S ts-node
import { program } from "commander";

import { createConfigFile } from "@/actions/createConfigFile";
import { clientRuntimeDebuger } from "@/actions/clientRuntimeDebuger";
import { nodeRuntimeDebuger } from "@/actions/nodeRuntimeDebuger";

program
  .command("init")
  .description("Create Config File In Current Path")
  .action(createConfigFile);

program
  .command("node")
  .argument("source", "需要测试的文件")
  .option("-n, --node-options <string>", "Nodejs Command-line Options @see https://nodejs.org/dist/latest-v16.x/docs/api/cli.html", String, null)
  .description("Runtime Debug With Nodejs Mode (Webpack Target Is Node)")
  .action(nodeRuntimeDebuger);

program
  .command("client")
  .argument("source", "需要测试的文件")
  .option("-p, --port <number> ", "debug server listen port", Number, 3000)
  .description("Runtime Debug With Client Mode (Webpack Target Is Default Mode)")
  .action(clientRuntimeDebuger);

program.parse();