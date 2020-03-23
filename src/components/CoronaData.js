import React, { useState, useEffect } from "react"
import { Stats } from "./Stats"
import "./CoronaData.css"

export const CoronaData = () => {
  const [statewiseData, setStatewiseData] = useState()
  const [indiaData, setIndiaData] = useState()
  const [showStates, setShowStates] = useState(false)
  // const [loading, setLoading] = useState(false)

  const api = "https://api.covid19india.org/data.json"
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(api)
        // setLoading(true)

        const data = await response
          .json()
          .then(({ statewise }) => [...statewise])
        setStatewiseData(data)
        setIndiaData(data[0])
      } catch (err) {
        // setLoading(null)
        console.log("Error fetching: ", err)
      }
    }

    fetchData()
  }, [])

  // console.log("Coronadata mounted")
  // console.log(statewiseData)
  // console.log(indiaData)

  const renderIndiaData = array => {
    return <Stats key="India" obj={array} />
  }

  function renderIndianStatesData() {
    let statewiseInfo
    if (statewiseData) {
      let statewiseArr = Object.values(statewiseData)

      statewiseInfo = statewiseArr.map((item, index) => {
        if (index > 0) {
          return <Stats key={index} obj={item} />
        }
      })
    }
    return statewiseInfo
  }

  return (
    <div>
      {indiaData ? renderIndiaData(indiaData) : <h3>loading...</h3>}
      <button
        id="states-toggle-button"
        onClick={() => {
          showStates ? setShowStates(false) : setShowStates(true)
        }}
      >
        {showStates ? "Hide State wise Info" : "Show State wise Info"}
      </button>
      {statewiseData && showStates ? (
        <>
          <p className="show-states-note">
            (Note: states without any reported/confirmed COVID-19 cases not
            displayed)
          </p>
          <div id="states-container">{renderIndianStatesData()}</div>
        </>
      ) : null}
    </div>
  )
}
