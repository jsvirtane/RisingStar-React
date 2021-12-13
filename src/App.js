import { useState, useEffect } from "react"
import DateInput from "./components/DateInput"
import ApiCall from "./services/ApiCall"
import BearTrend from "./components/BearTrend"
import FilterService from "./services/FilterService"
import TopVolume from "./components/TopVolume"
import OptimalDates from "./components/OptimalDates"
import Banner from "./components/Banner"
import ErrorMessage from "./components/ErrorMessage"
import useToggle from "./hooks/useToggle"

const App = () => {
  const [apiData, setApiData] = useState([])
  const [priceData, setPriceData] = useState([])
  const [volumeData, setVolumeData] = useState([])

  useEffect(() => setPriceData(FilterService(apiData.prices)), [apiData])
  useEffect(() => setVolumeData(FilterService(apiData.total_volumes)), [apiData])

  const Collapse = useToggle()
  const Datafetcher = ApiCall()

  const submitDates = (e, startDate, endDate) => {
    e.preventDefault()
    if (startDate >= endDate) {
      if (Collapse.isOpen !== true) {
        Collapse.toggle()
      }
    }
    if (startDate < endDate) {
      if (Collapse.isOpen === true) {
        Collapse.toggle()
      }
      Datafetcher.getData(startDate, endDate).then((data) => setApiData(data))
    }
  }

  return (
    <div className="bg-light vh-100">
      <Banner />
      <div className="container">
        <DateInput submitDates={submitDates} />
        <ErrorMessage isOpen={Collapse.isOpen} />
        <div className="row mt-2">
          <div className="col-md-4">
            <BearTrend data={priceData} />
          </div>
          <div className="col-md-4">
            <TopVolume data={volumeData} />
          </div>
          <div className="col-md-4">
            <OptimalDates data={priceData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
