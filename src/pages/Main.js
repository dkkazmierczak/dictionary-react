/* eslint-disable */
import { useEffect, useState } from "react"
import axios from "axios"
import Results from "./Results/Results"
import Photos from "./Results/Photos"
import Loading from "../Loading"
import "./Main.scss"

const Main = props => {
  const word = props.default
  const [results, setResults] = useState(null)
  const [photos, setPhotos] = useState("")
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    setLoading(true)
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const { data } = await axios.get(apiUrl)

    setResults({
      word: data[0].word,
      meanings: data[0].meanings,
      phonetics: data[0].phonetics,
    })

    const pexelsApiKey =
      "563492ad6f917000010000014b1eb97b57ee4008a8c12bb85028b02f"
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&color=gray&per_page=10`
    const picturesData = await axios.get(pexelsApiUrl, {
      headers: { Authorization: `Bearer ${pexelsApiKey}` },
    })

    setPhotos(picturesData.data.photos)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="Main">
      <header>
        <h1>Dictionary</h1>
        <h2>An interesting word for today:</h2>
      </header>
      {!loading && results && photos ? (
        <div className="row">
          <div className="col-md-6">
            <Photos photos={photos} />
          </div>
          <div className="col-md-6">
            <Results results={results} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default Main
