import UnixToDate from "../services/UnixToDate"

// Checks the optimal dates to buy and sell (days when the price difference is biggest during given range).
const OptimalDates = ({ data }) => {
  if (data) {
    let max_diff = 0
    let min_max
    // Going through price from every day and comparing it to all days after that.
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) {
        // If the price difference is bigger than any earlier, save the dates and prices.
        if (data[j][1] - data[i][1] > max_diff) {
          max_diff = data[j][1] - data[i][1]
          min_max = {
            buyDate: data[i][0],
            sellDate: data[j][0],
          }
        }
      }
    }
    // If the price declined everyday during date range, there is no good time to buy.
    if (!max_diff) {
      return (
        <div className="card text-center h-100 border-dark">
          <h3 class="card-header">Optimal Dates</h3>
          <p className="text-danger">
            Do not buy! Price will only decrease during date range
          </p>
        </div>
      )
    }
    // Returning the dates and profit made (If bought one Bitcoin). 
    return (
      <div className="card text-center h-100 border-dark">
        <h3 class="card-header">Optimal Dates</h3>
        <p>
          Buy: {UnixToDate(min_max.buyDate)} <br />
          Sell: {UnixToDate(min_max.sellDate)}
          <br />
          <span className="text-success">
            Profit made: {max_diff.toFixed(2)}€
          </span>
        </p>
      </div>
    )
  }
  return null
}
export default OptimalDates
