const Phonetics = props => {
  if (props.phonetics[0].audio) {
    return (
      <div className="Phonetics">
        <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        {props.phonetics[0].text}
      </div>
    )
  } else return null
}

export default Phonetics
