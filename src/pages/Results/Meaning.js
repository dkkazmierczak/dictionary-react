import Synonyms from "./Synonyms"
import Example from "./Example"
import "./Meaning.scss"

const Meaning = props => {
  return (
    <div className="Meaning">
      <header className="part-of-speech">{props.meaning.partOfSpeech}</header>
      <section className="definitions">
        {props.meaning.definitions.map((definition, index) => {
          return (
            <div key={index}>
              <hr />
              <section>
                <div className="text">{definition.definition}</div>
              </section>
              <Example example={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Meaning
