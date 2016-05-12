const webpack = require('webpack');
module.exports = {
    entry: './src/jsx/main.jsx',
    output: {
      filename: './src/js/bundle.js'
    },
    devtool: 'inline-source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ],
    module: {
      loaders: [
    { test: /\.jsx$/, loader: 'jsx-loader' }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
};
