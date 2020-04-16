import * as React from "react"
import { Content } from "../theme/Content"

export const Home = () => {
  return (
    <Content>
      <h1>CEKTA</h1>
      <p>Группа людей занимающихся разработкой програмного обеспечения</p>
      <h1>Общение</h1>
      <ul>
        <li>
          <a target="_blank" href="https://t.me/dev_ru">
            Telegram chat
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/c/EvgeniyKuvshinov">
            YouTube
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/cekta/cekta/issues/new">
            Ваши предложения
          </a>
        </li>
      </ul>
    </Content>
  )
}
