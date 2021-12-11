import React from "react"
import useField from "../hooks/useField"


const DateInput = ( {submitDates}) => {
  const startDate = useField("date")
  const endDate = useField("date")


  return (
    <>
      <form className="mt-2" >
        <div className="row">
          <div className="col-5">
            <label for="startDate">From:</label>
            <input
              type="date"
              id="startDate"
              className="form-control"
              value={startDate.value}
              onChange={startDate.onChange}
            ></input>
          </div>
          <div className="col-5">
            <label for="endDate">To:</label>
            <input
              type="date"
              id="endDate"
              className="form-control"
              value={endDate.value}
              onChange={endDate.onChange}
            ></input>
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary mt-4" onClick={e => submitDates(e, startDate.value, endDate.value)}>
              Confirm dates
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
export default DateInput
