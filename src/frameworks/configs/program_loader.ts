import path from "path";

export const program_loader = [{
  test: /\.(ts|tsx)$/,
  exclude: /(node_modules)/,
  use: [{
    loader: "ts-loader",
    options: {
      configFile: path.resolve(process.cwd(), "./tsconfig.json")
    }
  }]
}, {
  test: /\.(js|jsx)$/,
  exclude: /(node_modules)/,
  use: [{
    loader: "babel-loader",
    options: {
      cacheDirectory: true,
      cacheCompression: false,
      configFile: path.join(process.cwd(), "./.babelrc.js")
    }
  }]
}];