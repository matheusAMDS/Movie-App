import React from 'react'
import { Link } from "react-router-dom"
import InfiniteScroll from "react-infinite-scroll-component"

import Spinner from "../Spinner"

import { imageData } from "../../services/api"
import "./styles.css"

export default function ListMovies({ movies, loadMovies, hasMore }) {
  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={loadMovies}
      loader={<Spinner />}
      hasMore={hasMore}
      className="movie-list"
    >
      {movies.map(movie => (
        <div className="movie-item" key={movie.id} >
          <Link to={`/movie/${movie.id}`} >
            <img src={imageData.poster(movie.poster_path)} alt={movie.title} />
          </Link>
        </div>
      ))}
    </InfiniteScroll>
  );
}
