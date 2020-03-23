import React from "react"
import CountUp from "react-countup"
import "./Stats.css"

export const IndiaStats = ({ latest, pastDataArr }) => {
  const {
    active,
    confirmed,
    deaths,
    lastupdatedtime,
    recovered,
    state
  } = latest

  // let pastDataArrLen = pastDataArr.length
  // console.log(pastDataArr[pastDataArrLen - 2].dailyconfirmed)
  // console.log(pastDataArr[pastDataArrLen - 1].dailyconfirmed)

  function getPreviousData(arr) {
    let data = []
    if (arr) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].dailyconfirmed && arr[i].date) {
          data.push(arr[i])
        }
      }
      return data
    }
  }
  const allPreviousData = getPreviousData(pastDataArr)
  const {
    dailyconfirmed,
    dailydeceased,
    dailyrecovered,
    date,
    totalconfirmed,
    totaldeceased,
    totalrecovered
  } = allPreviousData[0]

  if (state === "Total") {
    return (
      <>
        <h2 className="country-india">INDIA</h2>
        <div id="india">
          <ul className="stats-list">
            <li className="day">Today</li>
            <li className="numbers">
              <CountUp
                end={parseInt(confirmed)}
                useEasing={false}
                duration={1}
              />
            </li>
            <li className="confirmed-cases-india">Confirmed</li>
            <hr className="horizontal-rule" />

            <li className="numbers">
              <CountUp end={parseInt(active)} useEasing={false} duration={1} />
            </li>
            <li className="active-cases-india">Active</li>
            <hr className="horizontal-rule" />

            <li className="numbers">
              <CountUp
                end={parseInt(recovered)}
                useEasing={false}
                duration={1}
              />
            </li>
            <li className="recovered-cases-india">Recovered </li>
            <hr className="horizontal-rule" />
            <li className="numbers">
              <CountUp end={parseInt(deaths)} useEasing={false} duration={1} />
            </li>
            <li className="deaths-india">Deaths</li>
          </ul>

          <ul className="stats-list">
            <li className="day">Yesterday</li>

            <li className="numbers">
              <CountUp
                end={parseInt(totalconfirmed)}
                useEasing={false}
                duration={1}
              />
            </li>
            <li className="confirmed-cases-india">Confirmed</li>
            <hr className="horizontal-rule" />

            <li className="numbers">
              <CountUp
                end={parseInt(totalconfirmed - totaldeceased - totalrecovered)}
                useEasing={false}
                duration={1}
              />
            </li>
            <li className="active-cases-india">Active</li>
            <hr className="horizontal-rule" />

            <li className="numbers">
              <CountUp
                end={parseInt(totalrecovered)}
                useEasing={false}
                duration={1}
              />
            </li>
            <li className="recovered-cases-india">Recovered</li>
            <hr className="horizontal-rule" />

            <li className="numbers">
              <CountUp
                end={parseInt(totaldeceased)}
                useEasing={false}
                duration={1}
              />
            </li>
            <li className="deaths-india">Deaths</li>
          </ul>
        </div>
        <p className="last-updated">Last Updated: {lastupdatedtime}</p>
      </>
    )
  }
}
