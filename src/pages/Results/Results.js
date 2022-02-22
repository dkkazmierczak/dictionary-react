import Meaning from "./Meaning"
import Title from "./Title"
import "./Results.scss"

const Results = props => {
  const results = props.results

  if (results) {
    return (
      <section>
        <div className="results">
          <Title results={results} />
          {results.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />{" "}
              </div>
            )
          })}
        </div>
      </section>
    )
  } else return null
}

export default Results
