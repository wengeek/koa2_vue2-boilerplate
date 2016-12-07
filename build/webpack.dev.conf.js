const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const base = require('./webpack.base.conf')

module.exports = merge(base, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        vue: require('../build/vue-loader.conf'),
        sassLoader: {
          includePaths: [path.resolve(__dirname, '..', 'client', 'sass')]
        },
        context: __dirname
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
})

