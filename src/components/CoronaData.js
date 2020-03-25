import React, { useState, useEffect } from "react"

import { StatesStats } from "./StatesStats"
import { IndiaStats } from "./IndiaStats"
import "./CoronaData.css"

const CoronaData = () => {
  const [indiaCovidData, setIndiaCovidData] = useState()
  const [statewiseData, setStatewiseData] = useState()
  const [indiaData, setIndiaData] = useState()
  const [searchTerm, setSearchTerm] = React.useState("")
  const [searchResults, setSearchResults] = React.useState([])
  const [showStates, setShowStates] = useState(false)
  const [display, setDisplay] = useState("none")
  const handleChange = e => {
    console.log(e.target.value)

    setSearchTerm(e.target.value.toLowerCase())
  }

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

  useEffect(() => {
    if (statewiseData) {
      setSearchResults(filterData(searchTerm))
    }
  }, [searchTerm])

  // console.log("Coronadata mounted")

  const renderIndiaData = indiaDataStateObj => {
    if (indiaData) {
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
    let statewiseInfo
    if (indiaCovidData && statewiseData) {
      statewiseInfo = statewiseData.map((item, index) =>
        index > 0 ? <StatesStats key={index} obj={item} /> : null
      )
    }
    return statewiseInfo
  }
  console.log(statewiseData)

  const filterData = term => {
    if (statewiseData) {
      let statesWithoutTotal = statewiseData.filter(
        stateArr => !stateArr.state.toLowerCase().includes("total")
      )
      console.log(statesWithoutTotal)

      let anArr = []
      statesWithoutTotal.filter(arritem => {
        if (arritem.state.toLowerCase().includes(term)) {
          anArr.push(arritem)
        }
      })
      return anArr
    }
  }

  // console.log(statesWithFilter)

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
          showStates ? setDisplay("none") : setDisplay("block")
          showStates ? setShowStates(false) : setShowStates(true)
          setSearchTerm("")
          setSearchResults(filterData(""))
        }}
      >
        {showStates ? "Hide State wise Info" : "Show State wise Info"}
      </button>
      {statewiseData ? (
        <>
          <p className="show-states-note">
            (Note: states/union territories without any reported/confirmed
            COVID-19 cases not displayed)
          </p>
          <input
            id="states-search"
            type="text"
            placeholder="Search state..."
            value={searchTerm}
            onChange={handleChange}
            style={{
              display: display,
              margin: "1rem auto",
              padding: "0.5rem 1rem",
              backgroundColor: "#121212",
              color: "#bbbbdd",
              textAlign: "center",
              outline: "none",
              border: "2px solid #bbbbdd",
              borderRadius: "5px",
              fontSize: "1.1rem"
            }}
          />
          <div id="states-container">
            {showStates &&
              searchResults &&
              searchResults.map((item, index) => (
                <StatesStats key={index} obj={item} />
              ))}
          </div>
        </>
      ) : null}
    </div>
  )
}

CoronaData.whyDidYouRender = true

export default CoronaData
