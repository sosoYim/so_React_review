const { merge } = require('webpack-merge');

const devConfig = require('./config.dev');

const serverConfig = merge(devConfig, {
  devtool: 'source-map',
  devServer: {
    port: 3000,
    static: ['dist', 'src'],
  },
});

module.exports = serverConfig;
