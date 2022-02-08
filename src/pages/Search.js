import { useState } from "react"
import "./Search.scss"

const Search = () => {
  const [search, setSearch] = useState("")
  const [change, setChange] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    setSearch(change)
  }

  const handleChange = event => {
    setChange(event.target.value)
  }

  return (
    <div className="Search">
      <h1>Search</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder=" search..."
          autoFocus={true}
          className="search-input"
          onChange={handleChange}
        />
        <input type="submit" value="search" />
      </form>
      <h2>{search}</h2>
    </div>
  )
}

export default Search
