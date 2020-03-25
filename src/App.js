import React from "react"
import "./App.css"
import Header from "./components/Header"
import CoronaData from "./components/CoronaData"
import { Footer } from "./components/Footer"
import whyDidYouRender from "@welldone-software/why-did-you-render"

whyDidYouRender(React, {
  onlyLogs: true,
  titleColor: "green",
  diffNameColor: "darkturquoise"
})

CoronaData.whyDidYouRender = true

function App() {
  return (
    <div className="App">
      <h1 id="title">COVID-19 Live Stats</h1>
      <Header />
      <CoronaData />
      <Footer />
    </div>
  )
}

export default App
