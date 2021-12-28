const devConfig = {
  target: ['web'],
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /(node_modules|dist)/,
        // use: 'babel-loader',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};

module.exports = devConfig;
