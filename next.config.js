module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
      // config.resolve.fallback = { fs: false };
    }

    return config;
  },
};
