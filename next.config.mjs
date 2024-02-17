/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/route',
          destination: '/api/route',
        },
      ];
    },
  };
  
export default nextConfig;
