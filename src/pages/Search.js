import "./Search.scss"

const Search = () => {
  return (
    <div className="Search">
      <h1>Search</h1>
      <form className="search-form">
        <input
          type="search"
          placeholder=" search..."
          autoFocus={true}
          className="search-input"
        />
        <input type="submit" value="search" />
      </form>
    </div>
  )
}

export default Search
