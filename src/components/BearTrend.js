import React from "react"

const BearTrend = ({ data }) => {
  const calculateBearTrend = () => {
    let bearTrend = 0
    let previous = 0
    let lengthOfTrends = []
    for (let i = 0; i < data.length; i++) {
      if (data[i][1] < previous) {
        bearTrend = bearTrend + 1
      }
      if (data[i][1] > previous) {
        lengthOfTrends.push(bearTrend)
        bearTrend = 0
      }
      previous = data[i][1]
    }
    lengthOfTrends.push(bearTrend)
    return Math.max(...lengthOfTrends)
  }

  if (data) {
    return (
      <>
        <div className="card text-center h-100 border-dark">
          <h3 class="card-header">Bear trend</h3>
          <p>
            Longest bear trend between date range was {calculateBearTrend()} day(s).
          </p>
        </div>
      </>
    )
  }
  return null
}
export default BearTrend
