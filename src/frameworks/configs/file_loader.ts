
export const file_loader = [{
  test: /\.(ico|png|jpg|jpeg|gif|mp3|mp4|avi|svg|ttf|eot|otf|fon|ttc|woff|woff2)$/,
  use: [{
    loader: require.resolve("file-loader"),
    options: {
      outputPath: "files",
      publicPath: "/files/",
      name: `[name][fullhash].[ext]`
    }
  }]
}];