import "./Synonyms.scss"

const Synonyms = props => {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms">
        <ul>
          <div className="title">Synonyms:</div>
          {props.synonyms.map((synonym, index) => {
            if (index <= 5) {
              return <li key={index}>{synonym}</li>
            }
            return null
          })}{" "}
        </ul>
      </div>
    )
  } else {
    return null
  }
}

export default Synonyms
