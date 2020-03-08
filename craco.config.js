const path = require('path');
const resolve = arg => path.resolve(__dirname, arg);

module.exports = function() {
  return {
    babel: {
      plugins: ['babel-plugin-styled-components'],
    },
    webpack: {
      alias: {
        '@': resolve('src'),
        '@view': resolve('src/views'),
        '@atom': resolve('src/views/components/atoms'),
        '@molecule': resolve('src/views/components/molecules'),
        '@organism': resolve('src/views/components/organisms'),
        '@template': resolve('src/views/components/templates'),
        '@style': resolve('src/views/styles'),
        // Models
        '@model': resolve('src/models'),
        // Utils
        '@utile': resolve('src/utils'),
      },
    },
    jest: {
      configure: {
        moduleNameMapper: {
          '^@/(.*)$': '<rootDir>/src/$1',
        },
      },
    },
  };
};
