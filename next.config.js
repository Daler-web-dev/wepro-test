/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "main--stirring-twilight-81f674.netlify.app",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
