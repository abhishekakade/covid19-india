import React, { useState, useEffect } from "react"
import { StatesStats } from "./StatesStats"
import { IndiaStats } from "./IndiaStats"
import "./CoronaData.css"

export const CoronaData = () => {
  // const [statewiseData, setStatewiseData] = useState()
  const [indiaCovidData, setIndiaCovidData] = useState()
  const [statewiseData, setStatewiseData] = useState()
  const [indiaData, setIndiaData] = useState()
  const [showStates, setShowStates] = useState(false)
  // const [loading, setLoading] = useState(false)

  const api = "https://api.covid19india.org/data.json"
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(api)
        const data = await response.json()
        setIndiaCovidData(data)
        setStatewiseData(data.statewise)
        setIndiaData(data.statewise[0])
        //   .then(({ statewise }) => [...statewise])
        // setStatewiseData(data)
        // setIndiaData(data[0])
      } catch (err) {
        // setLoading(null)
        console.log("Error fetching: ", err)
      }
    }

    fetchData()
  }, [])

  // console.log("Coronadata mounted")
  // console.log(statewiseData)
  // console.log(indiaCovidData)

  const renderIndiaData = indiaDataStateObj => {
    if (indiaData) {
      // console.log(indiaData)
      // let yesterday
      let pastDataArr = Object.values(indiaCovidData.cases_time_series)
      // console.log(pastDataArr)
      return (
        <IndiaStats
          key="India"
          latest={indiaDataStateObj}
          pastDataArr={pastDataArr}
        />
      )
    }
  }

  function renderIndianStatesData() {
    // console.log(indiaCovidData.cases_time_series)

    let statewiseInfo
    if (indiaCovidData && statewiseData) {
      statewiseInfo = statewiseData.map((item, index) =>
        index > 0 ? <StatesStats key={index} obj={item} /> : null
      )
    }
    return statewiseInfo
  }

  return (
    <div>
      {indiaData ? (
        renderIndiaData(indiaData)
      ) : (
        <h3 style={{ textAlign: "center" }}>loading...</h3>
      )}
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
            (Note: states/union territories without any reported/confirmed
            COVID-19 cases not displayed)
          </p>
          <div id="states-container">{renderIndianStatesData()}</div>
        </>
      ) : null}
    </div>
  )
}
