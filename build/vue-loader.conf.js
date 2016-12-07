module.exports = {
  postcss: [
    require('autoprefixer')
  ],
  loaders: {
    js: 'babel-loader!eslint-loader',
    sass: 'style-loader!css-loader!sass-loader'
  }
}

