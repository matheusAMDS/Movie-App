import React from 'react'

import { imageData } from "../../../services/api"

import "./styles.css"

function KeyName({name}) {
  return (
    <strong>{name}: </strong>
  )
}

export default function MovieInfo({ movie }) {
  return (
    <div className="movie-info">
      <img src={imageData.poster(movie.poster_path)} alt=""/>
      <div className="info">
        <h2 className="movie-title">{movie.title}</h2>
        <p>
          <KeyName name="Genres" />
          {movie.genres.map(genre => genre.name).join(",")}
        </p>
        <p>
          <KeyName name="Ratings" />
          {movie.vote_average} ({movie.vote_count})
        </p>
        <p>
          <KeyName name="Released" />
          {movie.release_date}
        </p>
        <p>
          <KeyName name="Runtime" />
          {movie.runtime} min
        </p>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}
