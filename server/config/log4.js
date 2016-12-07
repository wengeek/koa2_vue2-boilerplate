import path from 'path'
import fs from 'fs'

const appenders = [
  {
    type: 'console'
  },
  {
    type: 'dateFile',
    filename: 'logs/access/access.log',
    pattern: '-yyyy-MM-dd.log',
    category: 'http'
  },
  {
    type: 'dateFile',
    filename: 'logs/app/app.log',
    pattern: '-yyyy.log',
    category: 'app'
  },
  {
    type: 'logLevelFilter',
    level: 'ERROR',
    appender: {
      type: 'dateFile',
      filename: 'logs/error/error.log',
      pattern: '-yyyy-MM.log'
    }
  }
]

function isDir (dir) {
  try {
    fs.statSync(dir)
    return true
  } catch (e) {}

  return false
}

function mkdir (dir) {
  try {
    fs.mkdirSync(dir)
  } catch (e) {
    console.log(`Cannot create the log dir: ${dir}`)
  }
}

const logRoot = path.join(__dirname, '..', '..')
const logDir = path.join(logRoot, 'logs')

if (!isDir(logDir)) {
  mkdir(logDir)
}

appenders.forEach((item) => {
  let dir = ''
  if (item.filename) {
    dir = path.dirname(path.join(logRoot, item.filename))
  } else if (item.appender && item.appender.filename) {
    dir = path.dirname(path.join(logRoot, item.appender.filename))
  }

  if (dir !== '' && !isDir(dir)) {
    mkdir(dir)
  }
})

export default {
  appenders
}
