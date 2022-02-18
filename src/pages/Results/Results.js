import Meaning from "./Meaning"
import Phonetics from "../Results/Phonetics"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons"
import "./Results.scss"

const Results = props => {
  let results = props.results

  if (results) {
    return (
      <section>
        <div className="Result">
          <header className="word">
            <span className="icon">
              <a
                href={results.phonetics[0].audio}
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faVolumeLow}
                  className="icon sound-icon"
                />
              </a>
            </span>
            <span className="word-name">{results.word}</span>
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
