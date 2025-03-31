import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,

  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    if (isServer) {
      console.log("VERCEL BUILD: Setting devtool = 'source-map'");

      config.devtool = "source-map";
    }
    return config;
  },
};

export default nextConfig;
