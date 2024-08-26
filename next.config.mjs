import NextFederationPlugin from "@module-federation/nextjs-mf";

const getFederationConfig = (isServer) => ({
  name: "admin-next",
  remotes: {},
  filename: "static/chunks/remoteEntry.js",
  // exposes: {
  //   "./dashboard": "./pages/dashboard",
  // },
  shared: {
    next: {
      requiredVersion: "14.2.4",
      singleton: true,
    },
  },
  extraOptions: {
    debug: false, // `false` by default
    exposePages: true, // `false` by default
    enableImageLoaderFix: false, // `false` by default
    enableUrlLoaderFix: false, // `false` by default
    skipSharingNextInternals: false, // `false` by default
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["shared"],
  webpack(config, options) {
    const { isServer } = options;

    const mfConf = getFederationConfig(isServer);

    config.plugins.push(new NextFederationPlugin(mfConf));

    return config;
  },
};

export default nextConfig;
