#!/usr/bin/env node

import app from '../app'
import http from 'http'
import config from '../config'
import log4js from 'koa-log4'

const appLog = log4js.getLogger('app')

const normalizePort = (val) => {
  const port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }

  if (port > 0) {
    return port
  }

  return false
}

const server = http.createServer(app.callback())
const port = normalizePort(config.port || 3000)

server.listen(port)
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  switch (error.code) {
    case 'EACCES':
      appLog.error(`${port} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      appLog.error(`${port} is already in use`)
      process.exit(1)
      break
    default:
      throw error
  }
})

server.on('listening', () => {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  appLog.info(`Listening on ${bind}`)
})

