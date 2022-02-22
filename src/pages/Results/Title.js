/* eslint-disable */
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons"

const Title = props => {
  const results = props.results
  const [audio, setAudio] = useState("")

  useEffect(() => {
    if (results.phonetics) setAudio(new Audio(results.phonetics[0].audio))
  }, [])

  const playAudio = () => audio.play()
  return (
    <div className="wrapper">
      <button
        className="sound-icon"
        disabled={!results.phonetics || !results.phonetics[0].audio}
        onClick={playAudio}>
        <FontAwesomeIcon icon={faVolumeLow} />
      </button>
      <div className="text-wrapper">
        <div className="word">{results.word}</div>
        <div className="phonetics">
          {results.phonetics && results.phonetics[0].text}
        </div>
      </div>
    </div>
  )
}
export default Title
