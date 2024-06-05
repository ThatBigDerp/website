import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { memo } from 'hono/jsx'
import type { FC } from 'hono/jsx'

import {Layout} from './components/moles/base'
import {NavbarComponent} from './components/navbar'
import {Loader} from './components/moles/transition'
import { sleep } from 'bun'

const app = new Hono()

const Content: FC = (props) => {
  return (
    <Layout>
        <NavbarComponent></NavbarComponent>
        <div class="flex flex-wrap ml-9 my-5">
            <div id="content" class="w-full max-w-full sm:w-1/4 mx-auto text-center">

            </div>
        </div>
        <Loader />
    </Layout>
  )
}


app.get('/home', (c) => {
  return c.html(
    <>
    <h1>HOME</h1>
    </>)
})

app.get('/games', (c) => {
  return c.html(
    <>
    <h1>GAMES</h1>
    </>)
})

app.get('/contact', (c) => {
  return c.html(
    <>
    <h1>CONTACT</h1>
    </>)
})

app.get('/support', (c) => {
  return c.html(
    <h1>SUPPORT</h1>
    )
})

app.get('/news', (c) => {
  return c.html(
    <>
    <h1>NEWS</h1>
    </>)
})

app.get('/', (c) => {
  return c.html(
    <>
    <Content />
    </>)
})


app.get(
  '/static/*',
  serveStatic({
    root: './',
    rewriteRequestPath: (path) => path.replace(/^\/static/, '/static'),
    onNotFound: (path, c) => {
      console.log(`${path} is not found, you access ${c.req.path}`)
    }
  },
)
)


export default app
