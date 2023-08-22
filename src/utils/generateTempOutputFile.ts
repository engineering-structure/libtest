import fs from "fs";
import path from "path";
import { promisify } from "util";
import pathExists from "path-exists";

export async function generateTempOutputFile() {
  try {
    const tempDirectoryPath = path.resolve(process.cwd(), "./.libtest/");
    const tempOutputFilePath = path.resolve(tempDirectoryPath, "./bundle.js");
    if (!await pathExists(tempDirectoryPath)) {
      await promisify(fs.mkdir)(tempDirectoryPath, { recursive: true });
    };
    return { directoryPath: tempDirectoryPath, fileName: "bundle.js", fullPath: tempOutputFilePath };
  } catch (error) {
    throw new Error("创建临时文件时发生错误");
  };
};