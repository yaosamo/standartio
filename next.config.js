/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   loader: "cloudinary",
  //   path: `https://res.cloudinary.com/yaosamo`,
  // },
};

module.exports = nextConfig;

module.exports = {
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
