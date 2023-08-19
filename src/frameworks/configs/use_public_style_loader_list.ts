
export const use_public_style_loader_list = [{
  loader: require.resolve("style-loader")
}, {
  loader: require.resolve("css-loader"),
  options: {
    modules: {
      exportOnlyLocals: false,
      mode: (resourcePath) => {
        if (/\.(module)/.test(resourcePath)) {
          return "local";
        }
        if (/(node_modules)/.test(resourcePath)) {
          return "global";
        };
        return "global";
      }
    },
    sourceMap: true
  }
}, {
  loader: require.resolve("postcss-loader"),
  options: {
    postcssOptions: {
      config: true
    },
    sourceMap: true
  }
}];