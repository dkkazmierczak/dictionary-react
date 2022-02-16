const Phonetics = props => {
  if (props.phonetics) {
    return <div className="Phonetics">/'{props.phonetics[0].text}'/</div>
  } else return null
}

export default Phonetics
