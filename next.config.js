/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: async () => {
      return [
        {
          source: '/:dashboard*', // Define the path pattern this header applies to
          headers: [
            { key: 'x-forwarded-host', value: 'https://sdxv6x-3000.csb.app' },
          ],
        },
      ]
    },
  };
  
  module.exports = nextConfig;
  