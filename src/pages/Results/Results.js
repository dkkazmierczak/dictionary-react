import Meaning from "./Meaning"
import Phonetics from "../Results/Phonetics"
import "./Result.scss"

const Results = props => {
  let results = props.results

  if (results) {
    return (
      <section>
        <div className="Result">
          <header className="word">
            <div className="word-name">{results.word}</div>
            <Phonetics phonetics={results.phonetics} />
          </header>
          {results.meanings.map((meaning, index) => {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />{" "}
              </section>
            )
          })}
        </div>
      </section>
    )
  } else return null
}

export default Results
