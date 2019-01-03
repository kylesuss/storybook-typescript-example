const path = require("path");

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: "ts-loader"
      },
      {
        loader: "react-docgen-typescript-loader"
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
