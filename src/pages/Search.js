import { useState } from "react"
import axios from "axios"
import Results from "./Results/Results"
import "./Search.scss"

const Search = () => {
  const [change, setChange] = useState("")
  const [results, setResults] = useState("")

  const searchWord = async e => {
    e.preventDefault()
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${change}`
    const { data } = await axios.get(apiUrl)
    console.log(data)

    setResults({
      word: data[0].word,
      meanings: data[0].meanings,
    })
  }

  const handleChange = event => {
    setChange(event.target.value)
  }

  return (
    <div className="Search">
      <h1>Search</h1>
      <h2>What word are you looking for?</h2>
      <form onSubmit={searchWord} className="search-form">
        <input
          type="search"
          placeholder=" search..."
          autoFocus={true}
          className="search-input"
          onChange={handleChange}
          value={change}
        />
        <button type="submit" className="submit-button">
          search
        </button>
      </form>
      <Results results={results} />
    </div>
  )
}

export default Search
