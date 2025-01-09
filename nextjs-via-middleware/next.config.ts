const nextConfig = {
  transpilePackages: ["@sailfish/recorder"],
  webpack: (config, { isServer }) => {
    return config;
  },
};

export default nextConfig;
