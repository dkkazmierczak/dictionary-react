const Phonetics = props => {
  if (props.phonetics.length) {
    return <div className="Phonetics">/'{props.phonetics[0].text}'/</div>
  } else return null
}

export default Phonetics
