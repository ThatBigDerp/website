import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { memo } from 'hono/jsx'
import type { FC } from 'hono/jsx'

import {Layout} from './components/moles/base'
import {NavbarComponent} from './components/navbar'
import {Loader} from './components/moles/transition'

const app = new Hono()

const Content: FC = (props) => {
  return (
<Layout>
    <NavbarComponent></NavbarComponent>

    <div class="flex">
        <div id="content" class="w-full h-screen max-h-screen max-w-full text-center">
          <Home />
        </div>
        <svg id="wave" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="absolute w-full h-full bg-white" style="z-index: -50;">
          <path d="M 0,700 L 0,405 C 67.51969808541973,422.0551362297497 135.03939617083947,439.1102724594993 191,420 C 246.96060382916053,400.8897275405007 291.3621134020618,345.61404639175254 341,315 C 390.6378865979382,284.38595360824746 445.5121502209131,278.4335419734904 515,262 C 584.4878497790869,245.5664580265096 668.5892857142857,218.65178571428572 727,186 C 785.4107142857143,153.34821428571428 818.1307069219442,114.95931516936672 870,99 C 921.8692930780558,83.04068483063328 992.887886597938,89.51095360824743 1064,59 C 1135.112113402062,28.48904639175257 1206.3177466863035,-39.003129602356424 1269,-75 C 1331.6822533136965,-110.99687039764358 1385.8411266568482,-115.4984351988218 1440,-120 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ff6900" fill-opacity="0.6" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,700 L 0,545 C 47.671759941089846,559.6066826215022 95.34351988217969,574.2133652430044 154,564 C 212.6564801178203,553.7866347569956 282.29768041237105,518.7532216494845 355,486 C 427.70231958762895,453.24677835051546 503.4657584683358,422.77374815905745 566,394 C 628.5342415316642,365.22625184094255 677.8392857142857,338.1517857142857 729,304 C 780.1607142857143,269.8482142857143 833.1770986745213,228.6191089837997 889,215 C 944.8229013254787,201.3808910162003 1003.4523195876288,215.37177835051546 1060,199 C 1116.5476804123712,182.62822164948454 1171.0136229749633,135.89377761413843 1234,101 C 1296.9863770250367,66.10622238586157 1368.4931885125184,43.053111192930785 1440,20 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ff6900" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,700 L 0,685 C 79.06516936671576,702.5499815905744 158.13033873343153,720.0999631811488 211,703 C 263.86966126656847,685.9000368188512 290.5438144329897,634.1501288659794 343,596 C 395.4561855670103,557.8498711340206 473.6944035346097,533.2995213549337 536,526 C 598.3055964653903,518.7004786450663 644.6785714285714,528.6517857142858 701,490 C 757.3214285714286,451.3482142857143 823.5913107511046,364.0933357879234 894,341 C 964.4086892488954,317.9066642120766 1038.9561855670104,358.97487113402065 1093,358 C 1147.0438144329896,357.02512886597935 1180.583946980854,314.00717967599405 1235,274 C 1289.416053019146,233.99282032400592 1364.7080265095728,196.99641016200297 1440,160 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ff6900" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2"></path><path d="M 0,700 L 0,825 C 44.80025773195875,821.4757916053019 89.6005154639175,817.9515832106038 160,793 C 230.3994845360825,768.0484167893962 326.3981958762887,721.6694587628866 382,717 C 437.6018041237113,712.3305412371134 452.8067010309278,749.3705817378498 508,722 C 563.1932989690722,694.6294182621502 658.375,602.8482142857142 731,576 C 803.625,549.1517857142858 853.6932989690722,587.2365611192931 914,568 C 974.3067010309278,548.7634388807069 1044.8518041237114,472.2055412371134 1105,423 C 1165.1481958762886,373.7944587628866 1214.8994845360826,351.9412739322533 1269,336 C 1323.1005154639174,320.0587260677467 1381.5502577319587,310.0293630338733 1440,300 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ff6900" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3"></path>
          </svg>
    </div>



    <Loader />
</Layout>
  )
}



const Home: FC = (props) => {
  return (
<>

  <div class="flex h-screen">
    <div class="block lg:w-1/2">
        <div class="h-full object-cover" id="han">
            <div class="h-full"></div>
        </div>
    </div>
    <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">

        <div class="text-white text-right">
            <h2 class="font-semibold text-8xl" style="font-family: ManualCondensed;">HAN SOLO</h2>
            <p class="mt-2 text-xl md:text-base text-left" style="font-family: 'Roboto', sans-serif;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
            <div class="flex justify-center lg:justify-start mt-6">
                <a class="px-10 py-6 bg-[#00144e] text-gray-200 text-xl font-semibold hover:bg-[#0f1424]" href="#">BUY NOW --- $99</a>
            </div>
        </div>
    </div>
  </div>
    
</>
  )
}



const Contact: FC = (props) => {
  return (
<>
<div class="flex items-center justify-center min-h-screen shadow-sm">
  <div class="container mx-auto">
    <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
      <div class="text-center">
        <h1 class="my-3 text-3xl font-semibod text-gray-700">Свържете се с нас.</h1>
        <p class="text-gray-400">Не носим отговорност ако сте настъпили лего.</p>
      </div>
      <div class="m-7">
        <form>
          <div class="mb-6">
            <label for="name" class="block mb-2 text-sm text-gray-600"
              >Име</label
            >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Име Фамилия"
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm text-gray-600"
              >Имейл</label
            >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@email.com"
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
          <div class="mb-6">
            <label for="message" class="block mb-2 text-sm text-gray-600"
              >Съобщение</label
            >
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Вашето съобщение"
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            ></textarea>
          </div>
          <div class="mb-6 px-28 justify-center items-center">

            {/* BUTTON */}
            <div id="brick-wrap">
    <div class="brick" id="red">
      <p>Изпрати</p>
      <div class="bits">
        <div class="bit">
        </div>
        <div class="bit"></div>
        <div class="bit"></div>
        <div class="bit"></div>
      </div>
    </div>
            </div>
            <div id="brick-wrap-2">
    <div class="brick-2" id="green">
      <div class="bits-2">
        <div class="bit-2">
        </div>
        <div class="bit-2"></div>
        <div class="bit-2"></div>
        <div class="bit-2"></div>
      </div>
    </div>
            </div>

            {/* END BUTTON */}
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

</>
  )
}


app.get('/home', (c) => {
  return c.html(
    <>
      <Home />
    </>)
})

app.get('/games', (c) => {
  return c.html(
    <>
    <h1>Представете си че тук има нещо</h1>
    </>)
})

app.get('/contact', (c) => {
  return c.html(
    <>
    <Contact />
    </>)
})

app.get('/support', (c) => {
  return c.html(
    <>

    <h1>Не е наш проблем, че сте настъпили лего.</h1>

    </>
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
