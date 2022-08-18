import MovieCard from "./MovieCard"
const MovieArray = ({Movies}) => {
    const mappedArray = Movies.map(movie => {
        return <MovieCard movie={movie}/>
    })
    console.log(mappedArray)
  return (
    <div className="container">
    {mappedArray}
    </div>
  )
}

export default MovieArray