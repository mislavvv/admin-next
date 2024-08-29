const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { execArgv } = require("process");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "adminNext",
          remotes: {},
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./dashboard": "./pages/dashboard.tsx",
          },
          // Explained shared section
          // https://webpack.js.org/plugins/module-federation-plugin/#eager
          // Here this is not needed, admin will work normally without shared react.
          shared: {
            react: {
              // Notice shared are NOT eager here.
              requiredVersion: false,
              singleton: true,
              eager: true,
            },
          },
        })
      );
    }
    return config;
  },
  // your original next.config.js export
  reactStrictMode: true,
};
