import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Main from "./pages/Main"
import Contact from "./pages/Contact"
import Search from "./pages/Search"
import "./App.scss"

function App() {
  const wordsArray = [
    "sunrise",
    "desert",
    "book",
    "water",
    "horse",
    "summer",
    "food",
    "wine",
    "laugh",
    "animal",
    "winter",
    "coffee",
    "dictionary",
    "house",
    "love",
    "plants",
    "candle",
    "cat",
    "pizza",
    "dog",
    "italy",
    "birthday",
    "sunset",
    "friend",
    "music",
    "guitar",
    "decoration",
    "fashion",
    "vacation",
    "night",
    "day",
    "reading",
    "moon",
    "astrology",
    "sun",
    "feeling",
    "picture",
    "mathematics",
    "coding",
    "activity",
    "adventure",
    "experience",
    "event",
    "piano",
    "venture",
    "travel",
    "journey",
    "voyage",
    "hike",
    "sand",
    "yoga",
    "beach",
    "seaside",
    "seashore",
    "sea",
    "marine",
    "ocean",
    "seawater",
    "saltwater",
    "jellyfish",
  ]

  const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="search" element={<Search default={randomWord} />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
