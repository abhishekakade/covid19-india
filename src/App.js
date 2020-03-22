import React from "react"
import "./App.css"
import Header from "./components/Header"
import { CoronaData } from "./components/CoronaData"
import { Footer } from "./components/Footer"

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
