import { useState } from "react"
import axios from "axios"
import "./Search.scss"

const Search = () => {
  const [change, setChange] = useState("")
  const [wordData, setWordData] = useState("")

  const searchWord = async e => {
    e.preventDefault()
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${change}`
    const { data } = await axios.get(apiUrl)
    console.log(data)

    setWordData({
      name: data[0].word,
    })
  }

  const handleChange = event => {
    setChange(event.target.value)
  }

  return (
    <div className="Search">
      <h1>Search</h1>
      <form onSubmit={searchWord}>
        <input
          type="search"
          placeholder=" search..."
          autoFocus={true}
          className="search-input"
          onChange={handleChange}
          value={change}
        />
        <button type="submit">search</button>
      </form>
      <h2>{wordData.name}</h2>
    </div>
  )
}

export default Search
