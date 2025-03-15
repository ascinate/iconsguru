/**@type {import('next').NextConfig}  */ 
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/icons",
        destination: "https://iconsguru.com/apis/icons",
      },
    ];
  },
};

module.exports = nextConfig;
