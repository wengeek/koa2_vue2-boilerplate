import Router from 'koa-router'
import * as Index from '../controllers'
import send from 'koa-sendfile'
import path from 'path'
import fs from 'fs'

const router = Router()

router.get('/api', Index.index)

if (process.env.NODE_ENV === 'development') {
  // webpack templates
  const {entry, output} = require('../../build/webpack.dev.conf')
  const template = fs.readFileSync(path.join(__dirname, '..', '..', 'templates', 'index.html')).toString('utf-8')

  let scripts = []

  for (let key in entry) {
    scripts.push(`<script src="${output.publicPath}${key}.js"></script>`)
  }

  const content = template.replace(/<body>([\s\S]*?)<\/body>/gm, '$1' + scripts.join(''))

  router.get('*', async (ctx) => {
    ctx.set('Content-Type', 'text/html; charset=UTF8;')
    ctx.body = content
  })
} else {
  router.get('*', async (ctx) => {
    await send(ctx, path.join(__dirname, '..', '..', 'static', 'index.html'))
  })
}

export default router

