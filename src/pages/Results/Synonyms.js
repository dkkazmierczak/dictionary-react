import "./Synonyms.scss"

const Synonyms = props => {
  if (props.synonyms.length) {
    return (
      <section>
        <ul>
          {props.synonyms.map((synonym, index) => {
            if (index <= 5) {
              return (
                <li key={index}>
                  <span className="synonym">{synonym}</span>
                </li>
              )
            }
            return null
          })}{" "}
        </ul>
      </section>
    )
  } else {
    return null
  }
}

export default Synonyms
