import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "admin-next",
          remotes: {},
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./dashboard": "./pages/dashboard.tsx",
          },
          shared: {
            react: {
              requiredVersion: false,
              singleton: true,
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

export default nextConfig;
