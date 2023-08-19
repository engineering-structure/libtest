import path from "path";

export function getRealFilePath(source) {
  const realFilePath = path.resolve(process.cwd(), source);
  return realFilePath;
};