import Synonyms from "./Synonyms"
import Example from "./Example"
import "./Meaning.scss"

const Meaning = props => {
  return (
    <div className="Meaning">
      <div className="part-of-speech">{props.meaning.partOfSpeech}</div>
      <div className="definitions">
        {props.meaning.definitions.map((definition, index) => {
          return (
            <div key={index} className="definition">
              <div className="text">{definition.definition}</div>
              <div className="example">
                <Example example={definition.example} />
              </div>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Meaning
