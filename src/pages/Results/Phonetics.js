import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons"
const Phonetics = props => {
  if (props.phonetics[0].audio) {
    return (
      <div className="Phonetics">
        <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faVolumeLow} className="icon" />
        </a>
        {props.phonetics[0].text}
      </div>
    )
  } else return null
}

export default Phonetics
