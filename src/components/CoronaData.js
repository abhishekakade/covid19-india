import React, { useState, useEffect } from "react"
import { Stats } from "./Stats"

export const CoronaData = () => {
  const [statewiseData, setStatewiseData] = useState()
  const [indiaData, setIndiaData] = useState()
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

  console.log("Coronadata mounted")
  // console.log(statewiseData)
  // console.log(indiaData)

  function renderCoronaStats() {
    let statewiseInfo
    let indiaInfo
    if (statewiseData) {
      let statewiseArr = Object.values(statewiseData)
      let indiaStats = statewiseArr[0]
      // console.log(statewiseArr)

      statewiseInfo = statewiseArr.map((item, index) => {
        if (index > 0) {
          return <Stats key={index} obj={item} />
        }
      })

      indiaInfo = <Stats key="India" obj={indiaStats} />
    }
    return [indiaInfo, statewiseInfo]
  }

  return (
    <div>
      {/* <ul> */}
      {statewiseData ? renderCoronaStats() : <h3>loading...</h3>}
      {/* </ul> */}
    </div>
  )
}
