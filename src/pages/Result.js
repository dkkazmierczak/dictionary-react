import Meaning from "./Meaning"
import "./Result.scss"

const Result = props => {
  let results = props.results

  if (results) {
    return (
      <div className="Result">
        <div className="word">{results.word}</div>

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

export default Result
