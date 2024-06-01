import React from 'react'

const MovieCard = (props) => {
  const { movieData } = props
  const { poster, rating, release_date, running_time, slug } =
    movieData.attributes
  return (
    <div className="MovieCards">
      <div className="imageContainerBook">
        <img alt="MovieLogos" src={poster} className="MovieImage" />
      </div>

      <h1 className="BookTitle">
        {slug.charAt(0).toUpperCase() + slug.slice(1)}
      </h1>
      <p>{rating}</p>
      <p>{release_date}</p>
      <p>{running_time}</p>
    </div>
  )
}

export default MovieCard
