import Meaning from "./Meaning"
import Phonetics from "../Results/Phonetics"
import "./Result.scss"

const Results = props => {
  let results = props.results

  if (results) {
    return (
      <div className="Result">
        <div className="name">
          <div className="word">{results.word}</div>
          <Phonetics phonetics={results.phonetics} />
        </div>
        {results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />{" "}
            </div>
          )
        })}
      </div>
    )
  } else return null
}

export default Results
