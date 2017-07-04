const path = require('path');

const desktopConfig = {
  entries: [
    {
      script: './desktop/index/index.js',
    },
    {
      script: './desktop/login/index.js',
    },
  ],
  manifest: './desktop/manifest.js',
  commons: [
    './desktop/common/base/index.js',
    './desktop/common/core/index.js',
  ],
  context: path.resolve('./src'),
  output: path.resolve('./output'),
  publicPath: '/',
};

const mobileConfig = {
  entries: [
    {
      script: './mobile/index/index.js',
      template: './mobile/index/template.ftl',
    },
  ],
  manifest: './mobile/manifest.js',
  commons: [
    './mobile/common/base/index.js',
    './mobile/common/core/index.js',
  ],
  context: path.resolve('./src'),
  output: path.resolve('./output'),
  publicPath: '/',
  configurationFactory(configuration) {
    return configuration;
  },
};

module.exports = [desktopConfig, mobileConfig];
