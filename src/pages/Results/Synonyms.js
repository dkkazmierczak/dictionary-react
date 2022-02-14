const Synonyms = props => {
  if (props.synonyms.length) {
    return (
      <section>
        <ul>
          <div className="title">synonyms:</div>
          {props.synonyms.map((synonym, index) => {
            if (index <= 5) {
              return (
                <li key={index} className="text">
                  {synonym}
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
