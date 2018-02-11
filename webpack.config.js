const webpack = require('webpack')

const config = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname,
        publicPath: '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
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
      publicPath: '/dist',
      historyApiFallback: true,
    },
};

module.exports = config;
