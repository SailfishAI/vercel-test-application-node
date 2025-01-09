import type { NextConfig } from "next";

// Define the Next.js configuration
const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    return config;
  },
};

// Export the configuration
export default nextConfig;
