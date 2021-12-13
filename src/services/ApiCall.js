// fetch data from Coin Gecko's API
const ApiCall = () => {
  const getData = async (startDate, endDate) => {
    // For now like this, later possible to add more coins
    const coinId = "bitcoin"

    // Converting dates to Unix as API requires
    const startDateAsUnix = new Date(startDate).getTime() / 1000
    const endDateAsUnix = new Date(endDate).getTime() / 1000 + 3600
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart/range?vs_currency=eur&from=${startDateAsUnix}&to=${endDateAsUnix}`
    )
    const data = await response.json().then((data) => data)
    return data
  }
  return { getData }
}

export default ApiCall
