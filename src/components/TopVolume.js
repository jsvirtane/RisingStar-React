import React from "react"
import UnixToDate from "../services/UnixToDate"

// Find the highest volume during given data range
const TopVolume = ({ data }) => {
  const findHighestVolume = () => {
    let topVolume = 0
    let date = ''
    // Loop trough all day, check if the volume is higher than any day earlier, save it to the variable if it is.
    for (let i = 0; i < data.length; i++) {
      if (data[i][1] > topVolume) {
        topVolume = data[i][1]
        date = data[i][0]
      }
    }
    return (
      <div className="card text-center h-100 border-dark">
        <h3 className="card-header">Top Volume</h3>
        <p>
          Highest volume were on <b>{UnixToDate(date)}</b>. Volume were{" "}
          <b>{topVolume.toFixed(2)}</b> euros.
        </p>
      </div>
    )
  }
  if (data) {
      return <>{findHighestVolume()}</>
  }
  return null
}
export default TopVolume
