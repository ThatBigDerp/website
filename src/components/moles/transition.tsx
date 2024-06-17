import type { FC } from 'hono/jsx'

export const Loader: FC = (props) => {
    return (
        <>
<div id="loader">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
</div>
        </>
    )
  }