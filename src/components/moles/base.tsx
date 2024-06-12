import type { FC } from 'hono/jsx'
import { memo } from 'hono/jsx'

export const Layout: FC = (props) => {
    return (
      <html>
        <head>
            <meta name="htmx-config" content='{"includeIndicatorStyles": false}' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="IE=7" />
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
            <script src="https://unpkg.com/htmx.org@1.9.12" integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2" crossorigin="anonymous"></script>
            <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
            <link rel="stylesheet" href="/static/style.css" />
            {/* <link rel="stylesheet" href="../../tailwindcss.css" /> */}
        </head>
        <body>
            {props.children}
        </body>
      </html>
    )
  }