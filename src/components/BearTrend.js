import React from "react"

// Calculates the longest bear trend between provided date range
const BearTrend = ({ data }) => {
  const calculateBearTrend = () => {
    let bearTrend = 0
    let previous = 0
    let lengthOfTrends = []

    // Comparing days price to yesterdays price
    for (let i = 0; i < data.length; i++) {
      // If the price has decreased, add +1 to current trend
      if (data[i][1] < previous) {
        bearTrend = bearTrend + 1
      }
      // If the price increases, end current trend and add it to array containing trend streaks
      if (data[i][1] > previous) {
        lengthOfTrends.push(bearTrend)
        bearTrend = 0
      }
      // Adding the last trend to the array of trend streaks
      previous = data[i][1]
    }
    // Find the longest trend streak from the array of trend streaks
    lengthOfTrends.push(bearTrend)
    return Math.max(...lengthOfTrends)
  }

  // Only return results when data is provided.
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
