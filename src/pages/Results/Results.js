import Meaning from "./Meaning"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons"
import "./Results.scss"

const Results = props => {
  const results = props.results

  const audio = new Audio(results.phonetics[0].audio)
  const playAudio = () => audio.play()

  if (results) {
    return (
      <section>
        <div className="Result">
          <header className="word">
            <button
              className="sound-icon"
              disabled={!results.phonetics[0].audio}
              onClick={playAudio}>
              <FontAwesomeIcon icon={faVolumeLow} />
            </button>
            <div className="text-wrapper">
              <div className="word-name">{results.word}</div>
              <div className="phonetics">{results.phonetics[0].text}</div>
            </div>
          </header>
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
