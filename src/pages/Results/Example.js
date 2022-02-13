const Example = props => {
  if (props.example) {
    return (
      <>
        <div className="title">Example:</div>{" "}
        <div className="text">{props.example}</div>
      </>
    )
  } else return null
}

export default Example
