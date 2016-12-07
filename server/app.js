import Koa from 'koa'
import path from 'path'
import bodyparser from 'koa-bodyparser'
import koaStatic from 'koa-static'
import convert from 'koa-convert'
import log4js from 'koa-log4'
import log4jsConf from './config/log4'
import route from './routes'

const app = new Koa()

app.use(bodyparser())

log4js.configure(log4jsConf, {
  cwd: path.join(__dirname, '..')
})

app.use(log4js.koaLogger(log4js.getLogger('http'), {level: 'auto'}))

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const devMiddleware = require('koa-webpack-dev-middleware')
  const hotMiddleware = require('koa-webpack-hot-middleware')
  const webpackConfig = require('../build/webpack.dev.conf.js')

  const clientCompiler = webpack(webpackConfig)
  app.use(convert(devMiddleware(clientCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    }
  })))

  app.use(convert(hotMiddleware(clientCompiler)))
} else {
  app.use(koaStatic(path.join(__dirname, '..', 'static')))
}

app.use(route.routes())

export default app
