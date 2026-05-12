const nextConfig = {
  compiler: {
    removeConsole: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "144.24.219.37",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;