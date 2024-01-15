/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ssl.gstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
