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
            <script src="https://unpkg.com/htmx.org@1.9.12" integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="/static/style.css" />
            {/* <link rel="stylesheet" href="../../tailwindcss.css" /> */}
        </head>
        <body class="bg-gray-100">
            {props.children}
        </body>
      </html>
    )
  }