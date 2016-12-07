const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const base = require('./webpack.base.conf')
const vueLoaderConf = require('./vue-loader.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

vueLoaderConf.loaders.sass = ExtractTextPlugin.extract({
  loader: 'css-loader!sass-loader',
  fallback: 'vue-style-loader'
})

module.exports = merge.smart(base, {
  module: {
    loaders: [
      {
        test: /\.s[a|c]ss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: 'css-loader!sass-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        vue: vueLoaderConf,
        sassLoader: {
          includePaths: [path.resolve(__dirname, '..', 'client', 'sass')]
        },
        context: __dirname
      },
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '../templates/index.html'
    })
  ]
})
