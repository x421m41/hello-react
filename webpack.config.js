var path = require('path');
var webpack = require('webpack');

const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './public/javascripts/app.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /\.(?:js|jsx)$/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'public/javascripts'),
      use: ['react-hot-loader', 'babel-loader']
    }]
  }
};

module.exports = config;
