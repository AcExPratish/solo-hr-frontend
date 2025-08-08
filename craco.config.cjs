const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    configure: webpackConfig => {
      webpackConfig.ignoreWarnings = [{ module: /typescript/ }];
      return webpackConfig;
    }
  }
};
