// Convert Unix to human readable date
// Parameter: Date as a Unix
const UnixToDate = (unix) => {
    const date = new Date(unix).getDate()
    const month = new Date(unix).getMonth()
    const year = new Date(unix).getFullYear()

    // Date.getMonth() returns month between 0-11, so add 1 to make it correct month
    return `${date}.${month + 1}.${year}`
}
export default UnixToDate