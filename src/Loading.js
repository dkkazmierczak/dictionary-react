import { Oval } from "react-loading-icons"
import "./Loading.scss"

const Loading = () => {
  return (
    <div className="Loading">
      <div className="loading-icon">
        <Oval />
      </div>
      <div className="text">Loading...</div>
    </div>
  )
}

export default Loading
