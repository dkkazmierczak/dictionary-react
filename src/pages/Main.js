import firstImage from "../images/1.jpg"
import secondImage from "../images/2.jpg"
import thirdImage from "../images/3.jpg"
import "./Main.scss"

const Main = () => {
  return (
    <div className="Main">
      <h1>Dictionary</h1>
      <h2>Check interesting words for today</h2>
      <div className="image-gallery">
        <div className="wrapper">
          <div className="image-container">
            <img src={firstImage} alt="Profile" className="image" />

            <img src={secondImage} alt="Profile" className="image" />

            <img src={thirdImage} alt="Profile" className="image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main