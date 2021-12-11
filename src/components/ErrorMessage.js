const ErrorMessage = ({ isOpen }) => {
  if (isOpen) {
    return (
      <div class="alert alert-danger mt-2" role="alert">
        Check the dates!
      </div>
    )
  }
  return null
}
export default ErrorMessage
