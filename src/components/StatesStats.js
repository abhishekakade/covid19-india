import React from "react"
import CountUp from "react-countup"
import "./Stats.css"

export const StatesStats = ({ obj }) => {
  const { active, confirmed, deaths, lastupdatedtime, recovered, state } = obj

  if (state === "Total") {
    return (
      <div id="india">
        <ul className="stats-list">
          <li className="country-india">India</li>
          <li className="confirmed-cases-india">
            Confirmed:
            <CountUp end={parseInt(confirmed)} useEasing={false} duration={1} />
          </li>
          <li className="active-cases-india">
            Active:
            <CountUp end={parseInt(active)} useEasing={false} duration={1} />
          </li>
          <li className="recovered-cases-india">
            Recovered:
            <CountUp end={parseInt(recovered)} useEasing={false} duration={1} />
          </li>
          <li className="deaths-india">
            Deaths:
            <CountUp end={parseInt(deaths)} useEasing={false} duration={1} />
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
