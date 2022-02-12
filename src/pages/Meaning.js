import "./Meaning.scss"

const Meaning = props => {
  console.log(props.meaning)
  return (
    <>
      <h4>{props.meaning.partOfSpeech}</h4>
      <h6>
        {props.meaning.definitions.map((result, index) => {
          return (
            <div key={index} className="definition">
              {result.definition}
              <br />
              {result.example}
            </div>
          )
        })}
      </h6>
    </>
  )
}

export default Meaning
