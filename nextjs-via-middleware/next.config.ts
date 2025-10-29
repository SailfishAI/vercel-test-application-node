import { execSync } from "child_process";
import type { NextConfig } from "next";
import type { Configuration } from "webpack";

// Get git SHA at build time
// On Vercel, use VERCEL_GIT_COMMIT_SHA; locally, run git command
const getGitSha = () => {
  try {
    return (
      process.env.VERCEL_GIT_COMMIT_SHA ||
      execSync("git rev-parse HEAD").toString().trim()
    );
  } catch (error) {
    console.warn("Could not determine git SHA:", error);
    return "unknown";
  }
};

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,

  env: {
    GIT_SHA: getGitSha(),
  },

  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    if (isServer) {
      console.log("VERCEL BUILD: Setting devtool = 'source-map'");

      config.devtool = "source-map";
    }
    return config;
  },
};

export default nextConfig;
