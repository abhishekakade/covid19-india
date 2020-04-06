import React from "react"
import CountUp from "react-countup"
import { ArrowUp, ArrowDown } from "styled-icons/foundation"
import "./Stats.css"

export const IndiaStats = ({ latest, pastDataArr }) => {
  let { active, confirmed, deaths, lastupdatedtime, recovered, state } = latest

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
  let {
    // dailyconfirmed,
    // dailydeceased,
    // dailyrecovered,
    // date,
    totalconfirmed,
    totaldeceased,
    totalrecovered,
  } = allPreviousData[0]

  // Difference Variables

  let confirmedDifference = parseInt(confirmed) - parseInt(totalconfirmed)
  let activeDifference =
    parseInt(active) - parseInt(totalconfirmed - totaldeceased - totalrecovered)
  let recoveredDifference = parseInt(recovered - totalrecovered)
  let deathsDifference = parseInt(deaths - totaldeceased)

  // confirmedDifference = 0
  // activeDifference = 0
  // recoveredDifference = 0

  // To handle deaths, confirmed better as they cannot decrease

  if (deathsDifference < 0) {
    deathsDifference = 0

    if (deaths < totaldeceased) {
      totaldeceased = deaths
    } else if (deaths > totaldeceased) {
      deaths = totaldeceased
    }
  }

  if (confirmedDifference < 0) {
    confirmedDifference = 0

    if (confirmed < totalconfirmed) {
      totalconfirmed = confirmed
    } else if (confirmed > totalconfirmed) {
      confirmed = totalconfirmed
    }
  }

  function differenceNumber(value, isMoreBad) {
    if (value === 0) {
      return <span className="good">(0)</span>
    } else if (isMoreBad === true) {
      if (value > 0) {
        return (
          <span className="bad">
            ( <CountUp end={value} useEasing={false} duration={1} />
            <ArrowUp className="arrow" /> )
          </span>
        )
      } else if (value < 0) {
        return (
          <span className="good">
            ( <CountUp end={value} useEasing={false} duration={1} />
            <ArrowDown className="arrow" /> )
          </span>
        )
      }
    } else if (isMoreBad === false) {
      if (value > 0) {
        return (
          <span className="good">
            ( <CountUp end={value} useEasing={false} duration={1} />
            <ArrowUp className="arrow" /> )
          </span>
        )
      } else if (value < 0) {
        return (
          <span className="bad">
            ( <CountUp end={value} useEasing={false} duration={1} />
            <ArrowDown className="arrow" /> )
          </span>
        )
      }
    } else return null
  }

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
              />{" "}
              {differenceNumber(confirmedDifference, true)}
            </li>
            <li className="confirmed-cases-india">Confirmed</li>
            <hr className="horizontal-rule" />

            <li className="numbers">
              <CountUp end={parseInt(active)} useEasing={false} duration={1} />{" "}
              {differenceNumber(activeDifference, true)}
            </li>
            <li className="active-cases-india">Active</li>
            <hr className="horizontal-rule" />

            <li className="numbers">
              <CountUp
                end={parseInt(recovered)}
                useEasing={false}
                duration={1}
              />{" "}
              {differenceNumber(recoveredDifference, false)}
            </li>
            <li className="recovered-cases-india">Recovered </li>
            <hr className="horizontal-rule" />
            <li className="numbers">
              <CountUp end={parseInt(deaths)} useEasing={false} duration={1} />{" "}
              {differenceNumber(deathsDifference, true)}
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
