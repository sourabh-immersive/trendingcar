const path = require('path');

module.exports = {
    // output: 'export',
    sassOptions: {
      includePaths: [path.join(__dirname, '/styles')],
    },
    compiler: {
      styledComponents: {
        ssr: true,
      },
    },
    // images: { 
    //   unoptimized: true,
    //   formats: ['image/webp'],
    // }
  };