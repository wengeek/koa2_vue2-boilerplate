const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  devtool: '#source-map',
  entry: {
    app: ['webpack-hot-middleware/client', '../client/app'],
    vendor: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: path.resolve(__dirname, '../static'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}

