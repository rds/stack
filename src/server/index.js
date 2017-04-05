import Koa from 'koa'
import serve from 'koa-static'
import mount from 'koa-mount'
import convert from 'koa-convert'
import graphql from 'koa-graphql'
import schema from './schema'

import { APP_NAME, STATIC_PATH, WEB_PORT } from '../shared/config'
// import { isProd } from '../shared/util'
import renderApp from './render-app'

const app = new Koa()

app.use(mount('/graphql', convert(graphql({
  schema,
  graphiql: true })))
);

app.use(compress())

app.use(mount('/assets', serve('public')))
app.use(mount('/js', serve('dist')))

app.use((ctx) => {
  ctx.body = renderApp(APP_NAME)
})

app.listen(WEB_PORT)
