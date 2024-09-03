const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "adminNext",
          remotes: {},
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./dashboardInjector": "./lib/dashboardInjector.tsx",
          },
        })
      );
    }
    return config;
  },
  // your original next.config.js export
  reactStrictMode: true,
};
