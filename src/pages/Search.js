import { useState } from "react"
import axios from "axios"
import Results from "./Results/Results"
import Photos from "./Results/Photos"
import "./Search.scss"

const Search = () => {
  const [change, setChange] = useState("")
  const [results, setResults] = useState("")
  const [photos, setPhotos] = useState("")

  const searchWord = async e => {
    e.preventDefault()
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${change}`
    const { data } = await axios.get(apiUrl)
    console.log(data)

    setResults({
      word: data[0].word,
      meanings: data[0].meanings,
      phonetics: data[0].phonetics,
    })

    const pexelsApiKey =
      "563492ad6f917000010000014b1eb97b57ee4008a8c12bb85028b02f"
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${change}`
    const picturesData = await axios.get(pexelsApiUrl, {
      headers: { Authorization: `Bearer ${pexelsApiKey}` },
    })

    setPhotos(picturesData.data.photos)
  }

  const handleChange = event => {
    setChange(event.target.value)
  }

  return (
    <div className="Search">
      <header>
        <h1>Search</h1>
        <h2>What word do you wanna look up?</h2>
      </header>
      <section>
        <form onSubmit={searchWord} className="search-form">
          <input
            type="search"
            placeholder=" search..."
            className="search-input"
            onChange={handleChange}
            value={change}
          />
        </form>

        <div className="hint">i.e. sunrise, summer, wine, water</div>
      </section>
      <div className="row">
        <div className="col-md-6">
          <Results results={results} />
        </div>
        <div className="col-md-6">
          <Photos photos={photos} />
        </div>
      </div>
    </div>
  )
}

export default Search
