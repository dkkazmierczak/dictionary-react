import "./Meaning.scss"

const Meaning = props => {
  return (
    <div className="meaning">
      <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
      <div className="content">
        {props.meaning.definitions.map((definition, index) => (
          <div key={index} className="definition-container">
            <div className="definition">{definition.definition}</div>

            {!!definition.example && (
              <div className="example">"{definition.example}"</div>
            )}

            {!!definition.synonyms && (
              <ul className="synonyms-list">
                {definition.synonyms.slice(0, 5).map((synonym, index) => (
                  <li key={index} className="synonym">
                    {synonym}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Meaning
