const path = require('path');

module.exports = {
    // output: 'export',
    reactStrictMode: false,
    sassOptions: {
      includePaths: [path.join(__dirname, '/styles')],
    },
    compiler: {
      styledComponents: {
        ssr: true,
      },
    },
    images: { 
      unoptimized: true,
      formats: ['image/webp'],
    },
    
    async redirects() {
      return [
        {
          source: '/car-brands',
          destination: '/',
          permanent: true,
        },
        {
            source: '/fuel-stations',
            destination: '/fuel-stations/new-delhi',
            permanent: true,
        }
      ]
    },
    async headers() {
      return [
        {
          source: '/favicon.ico',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
            },
          ],
        },
      ];
    },
  };