import Koa from 'koa'
import serve from 'koa-static'

import { APP_NAME, STATIC_PATH, WEB_PORT } from '../shared/config'
// import { isProd } from '../shared/util'
import renderApp from './render-app'

const app = new Koa()

app.use(serve(STATIC_PATH))

app.use((ctx) => {
  ctx.body = renderApp(APP_NAME)
})

app.listen(WEB_PORT)
