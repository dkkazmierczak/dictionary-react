import "./Photos.scss"

const Photos = props => {
  console.log(props.photos)
  if (props.photos) {
    return (
      <div className="Photos row">
        <div className="col-6 p-0">
          {props.photos.map((photo, index) => {
            if (index === 0) {
              return (
                <img key={index} src={photo.src.landscape} className="photo" />
              )
            } else if (index > 0 && index <= 5) {
              return (
                <img key={index} src={photo.src.portrait} className="photo" />
              )
            }
            return null
          })}
        </div>
        <div className="col-6 p-0">
          {props.photos.map((photo, index) => {
            if (index > 5 && index <= 10) {
              return (
                <img key={index} src={photo.src.portrait} className="photo" />
              )
            } else if (index === 11) {
              return (
                <img key={index} src={photo.src.landscape} className="photo" />
              )
            }
            return null
          })}
        </div>
      </div>
    )
  } else return null
}

export default Photos
