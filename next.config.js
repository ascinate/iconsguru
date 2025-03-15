/**@type {import('next').NextConfig}  */ 
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/icons",
        destination: "https://iconsguru.com/admin/api/icons",
      },
    ];
  },
};

module.exports = nextConfig;
