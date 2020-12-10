const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/dom-to-image.js'),
  output: {
    filename: 'dom-to-image.js',
    libraryTarget: 'umd',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env']],
          },
        },
      },
    ],
  },
};
