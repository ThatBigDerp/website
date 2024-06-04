import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { memo } from 'hono/jsx'
import type { FC } from 'hono/jsx'

import {Layout} from './components/moles/base'
import {NavbarComponent} from './components/navbar'


const app = new Hono()

const Content: FC = (props) => {
  return (
    <Layout>
        <NavbarComponent></NavbarComponent>
        <div id="content" class="flex flex-wrap ml-9 my-5">
            <div class="w-full max-w-full sm:w-1/4 mx-auto text-center">
                <p class="text-lg text-slate-500 py-1">
                    Tailwind CSS Component from <a href="https://www.loopple.com/theme/riva-dashboard-tailwind?ref=tailwindcomponents" class="text-slate-700 hover:text-slate-900" target="_blank">Riva Dashboard Library</a> by <a href="https://www.loopple.com" class="text-slate-700 hover:text-slate-900" target="_blank">Loopple Builder</a>.
                </p>
            </div>
        </div>
    </Layout>
  )
}


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
