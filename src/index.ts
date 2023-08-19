#!/usr/bin/env -S ts-node
import { program } from "commander";

import { createConfigFile } from "@/actions/createConfigFile";
import { clientRuntimeDebuger } from "@/actions/clientRuntimeDebuger";
import { serverRuntimeDebuger } from "@/actions/serverRuntimeDebuger";


program
  .command("init")
  .description("Create Config File In Current Path")
  .action(createConfigFile);

program
  .command("server")
  .description("Runtime Debug With Server Mode")
  .action(serverRuntimeDebuger);

program
  .command("client")
  .argument("source", "需要测试的文件")
  .description("Runtime Debug With Client Mode")
  .action(clientRuntimeDebuger);

program.parse();