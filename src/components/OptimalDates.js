import UnixToDate from "../services/UnixToDate"
const OptimalDates = ({ data }) => {
  if (data) {
    let max_diff = 0
    let min_max
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) {
        if (data[j][1] - data[i][1] > max_diff) {
          max_diff = data[j][1] - data[i][1]
          min_max = {
            buyDate: data[i][0],
            sellDate: data[j][0],
          }
        }
      }
    }
    if (!max_diff) {
      return (
        <h1 className="text-danger">
          Do not buy! Price will only decrease during date range
        </h1>
      )
    }
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
