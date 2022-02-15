import "./Photos.scss"

const Photos = props => {
  if (props.photos) {
    return (
      <div className="Photos row">
        <div className="col-6 p-0">
          {props.photos.map((photo, index) => {
            if (index === 0) {
              return (
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer"
                  key={index}>
                  <img
                    src={photo.src.landscape}
                    className="photo"
                    alt={photo.alt}
                  />
                </a>
              )
            } else if (index > 0 && index <= 3) {
              return (
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer"
                  key={index}>
                  <img
                    src={photo.src.portrait}
                    className="photo"
                    alt={photo.alt}
                  />
                </a>
              )
            }
            return null
          })}
        </div>
        <div className="col-6 p-0">
          {props.photos.map((photo, index) => {
            if (index > 3 && index <= 6) {
              return (
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer"
                  key={index}>
                  <img
                    src={photo.src.portrait}
                    className="photo"
                    alt={photo.alt}
                  />
                </a>
              )
            } else if (index === 7) {
              return (
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer"
                  key={index}>
                  <img
                    src={photo.src.landscape}
                    className="photo"
                    alt={photo.alt}
                  />
                </a>
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
