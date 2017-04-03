const webpack = require('webpack');

const babelLoader = {
  loader: 'babel-loader',
  query: {
    plugins: ['../../path-reporter-plugin.js']
  }
};

webpack({
  entry: './module.js',
  module: {
    loaders: [babelLoader]
  }
}, (error, stats) => {});
