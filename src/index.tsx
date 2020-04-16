import React from "react"
import ReactDOM from "react-dom"
import "normalize.css"
import "style.css"
import "./index.css"
import * as serviceWorker from "./serviceWorker"

import { App } from "./components/App"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.register()
