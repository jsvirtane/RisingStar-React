import { useState } from "react"

// Toggle elements with ease
// Initialize: const Example = useToggle()
// Toggle: Example.toggle()
// Get state of toggle: Example.isOpen

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return {
    toggle,
    isOpen,
  }
}
export default useToggle
