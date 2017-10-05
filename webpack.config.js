var nodeExternals = require('webpack-node-externals');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index',
  output: {
    filename: './dist/index.js',
    libraryExport: "default",
    library: 'peritext-contextualizer-table',
    libraryTarget: 'commonjs2'
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc. 
  externals: [nodeExternals()],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules\//,
      include: __dirname
    }]
  }
}