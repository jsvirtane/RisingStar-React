// Data points are needed only for once a day, so additional data points are filtered.

const FilterService = (data) => {
  if (data) {
    const filteredData = [data[0]]
    for (let i = 1; i < data.length; i++) {
      if (
        // If data point have different day than earlier, it will be added to filtteredData-array
        new Date(data[i][0]).getUTCDate() !==
        new Date(data[i - 1][0]).getUTCDate()
      ) {
        filteredData.push(data[i])
      }
    }
    return filteredData
  }
}

export default FilterService
