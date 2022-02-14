import "./Example.scss"

const Example = props => {
  if (props.example) {
    return (
      <section>
        <div className="example">"{props.example}."</div>
      </section>
    )
  } else {
    return null
  }
}

export default Example
