import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
// import whyDidYouRender from "@welldone-software/why-did-you-render"
// import * as serviceWorker from "./serviceWorker"

// whyDidYouRender(React, {
//   onlyLogs: true,
//   titleColor: "green",
//   diffNameColor: "darkturquoise"
// });

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render")
  // const ReactRedux = require("react-redux")
  whyDidYouRender(React, {
    trackAllPureComponents: true
    // trackExtraHooks: [[ReactRedux, "useSelector"]]
  })
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register()
