const webpack = require('webpack')

const config = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    devServer: { 
      inline: true,
      publicPath: '/public/js',
    },
};

module.exports = config;
