import { useState } from "react"

// Simplifies handling input fields on forms
// Initialize: const Example = useField('text')
// Set input field value: value={Example.value}
// Allow editing input field: onChange={Example.onChange}
// Get type: Example.type

const useField = (type) => {
  const [value, setValue] = useState("")

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
    setValue

  }
}
export default useField
