import firstImage from "../images/1.jpg"

const RandomWordResults = props => {
  console.log(props.results)
  return (
    <>
      <div className="image-gallery">
        <div className="wrapper">
          <div className="image-container">
            <img src={firstImage} alt="Profile" className="image" />
            <div className="word">{props.results.word}</div>
            <div className="pronunciation">
              /'{props.results.pronunciation}'/
            </div>
            <div className="definition">{props.results.definition}</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default RandomWordResults
