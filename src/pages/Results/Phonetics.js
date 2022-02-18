import "./Phonetics.scss"

const Phonetics = props => {
  if (props.phonetics[0].audio) {
    return (
      <div className="Phonetics">
        <span className="text"> {props.phonetics[0].text}</span>
      </div>
    )
  } else {
    return null
  }
}

export default Phonetics
