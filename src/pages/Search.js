/* eslint-disable */
import { useState, useEffect } from "react"
import axios from "axios"
import Results from "./Results/Results"
import Photos from "./Results/Photos"
import Loading from "../Loading"
import "./Search.scss"

const Search = props => {
  const [change, setChange] = useState(props.default)
  const [results, setResults] = useState("")
  const [photos, setPhotos] = useState("")
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    setLoading(true)
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${change}`
    const { data } = await axios.get(apiUrl)

    setResults({
      word: data[0].word,
      meanings: data[0].meanings,
      phonetics: data[0].phonetics.length ? data[0].phonetics : null,
    })

    const pexelsApiKey =
      "563492ad6f917000010000014b1eb97b57ee4008a8c12bb85028b02f"
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${change}&color=gray&per_page=10`
    const picturesData = await axios.get(pexelsApiUrl, {
      headers: { Authorization: `Bearer ${pexelsApiKey}` },
    })

    setPhotos(picturesData.data.photos)
    setLoading(false)
  }

  const searchWord = async e => {
    e.preventDefault()
    getData()
  }

  const handleChange = event => {
    setChange(event.target.value)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="search">
      <header>
        <h1>Search</h1>
        <h2>What word do you wanna look up?</h2>
      </header>
      <section className="form-section">
        <form onSubmit={searchWord}>
          <input
            type="search"
            placeholder="search..."
            className="form-input"
            onChange={handleChange}
            value={change}
          />
        </form>
        <div className="hint">i.e. sunrise, wine, book, horse </div>
      </section>
      <div className="results-wrapper">
        {loading ? (
          <Loading />
        ) : (
          results &&
          photos && (
            <div className="row">
              <div className="col-md-6 p-0">
                <Photos photos={photos} />
              </div>
              <div className="col-md-6 p-0">
                <Results results={results} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Search
