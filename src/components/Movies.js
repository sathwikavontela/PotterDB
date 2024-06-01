import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Header from './Header'

const Movies = () => {
  const [ListofMovies, setListofMovies] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch('https://api.potterdb.com/v1/movies')
    const json = await data.json()
    setListofMovies(json?.data)
  }
  return (
    <div className="container2">
      <Header />
      <h1 className="BookPageHeading">Movies</h1>
      <div className="MoviesContainer">
        {ListofMovies.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </div>
  )
}

export default Movies
