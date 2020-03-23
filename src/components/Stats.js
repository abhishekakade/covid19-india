import React from "react"
import CountUp from "react-countup"
import "./Stats.css"

export const Stats = ({ obj }) => {
  const { active, confirmed, deaths, lastupdatedtime, recovered, state } = obj

  if (state === "Total") {
    return (
      <div id="india">
        <ul className="stats-list">
          <li className="country-india">
            {/* <span className="india-numbers"> */}
            India
            {/* </span> */}
          </li>
          <li className="confirmed-cases-india">
            Confirmed: {/* <span className="india-numbers"> */}
            <CountUp end={parseInt(confirmed)} useEasing={false} />
            {/* </span> */}
          </li>
          <li className="active-cases-india">
            Active: {/* <span className="india-numbers"> */}
            <CountUp end={parseInt(active)} useEasing={false} />
            {/* </span> */}
          </li>
          <li className="recovered-cases-india">
            Recovered: {/* <span className="india-numbers"> */}
            <CountUp end={parseInt(recovered)} useEasing={false} />
            {/* </span> */}
          </li>
          <li className="deaths-india">
            Deaths: {/* <span className="india-numbers"> */}
            <CountUp end={parseInt(deaths)} useEasing={false} />
            {/* </span> */}
          </li>
          <li className="last-updated">Last Updated: {lastupdatedtime}</li>
        </ul>
      </div>
    )
  } else if (parseInt(confirmed) > 0) {
    return (
      <ul className="states-stats-list">
        <li className="state-name">{state === "Total" ? "India" : state}</li>
        <li className="confirmed-cases">Confirmed: {confirmed}</li>
        <li className="active-cases">Active: {active}</li>
        <li className="recovered-cases">Recovered: {recovered}</li>
        <li className="deaths">Deaths: {deaths}</li>
      </ul>
    )
  } else return null
}
