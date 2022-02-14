const Example = props => {
  if (props.example) {
    return (
      <section>
        <div className="title">example:</div>{" "}
        <div className="text">{props.example}</div>
      </section>
    )
  } else {
    return null
  }
}

export default Example
