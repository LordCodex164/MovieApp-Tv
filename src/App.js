import { useEffect, useState } from "react"
import MovieArray from "./MovieArray"
import "./App.css"
import SearchIcon from "./SearchIcon.svg"

const App = () => {
  const [Movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  //http://www.omdbapi.com/?i=tt3896198&apikey=d90c8f26
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d90c8f26"
   const fetchUrl = async (Title) => {
    const response = await fetch(`${API_URL}&s=${Title}`)
    const data = await response.json()
    console.log(data.Search)
    setMovies([...data.Search])
    console.log(Movies)
   }
   const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
   }
   const  searchButton = () => (
    fetchUrl(searchTerm)
   )
   useEffect(() => {
      fetchUrl("batman")
   },[])
   return (
    <div className="app">
     <h1>MovieApp Tv</h1>
      <div className="search">
         <input type={"text"} 
         onChange={handleSearchTerm}
         placeholder="Type and search your movies"
          value={searchTerm}
         />
         <img src={SearchIcon} 
         onClick={searchButton}
         alt={"img"} />
      </div>
        <div className="container">
           <MovieArray Movies={Movies}/>
        </div>
        
    </div>
   )
}

export default App