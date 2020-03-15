import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import Spinner from "../../components/Spinner"
import SectionTitle from "../../components/SectionTitle"
import MovieInfo from "./MovieInfo"
import MovieReviews from "./MovieReviews"
import MovieCast from "./MovieCast"

import { api } from "../../services/api"
import { API_KEY } from "../../config/api_key"

export default function Movie() {
  const { movie_id } = useParams()
  const [ loading, setLoading ] = useState(true)
  const [ movie, setMovie ] = useState({
    title: "",
    poster_path: "",
    overview: "",
    genres: [],
    vote_count: 0,
    vote_average: 0,
    release_date: "",
    runtime: 0,
    credits: {
      cast: []
    },
    reviews: {
      results: []
    }
  })
  const { credits, reviews, ...info } = movie

  useEffect(() => {
    async function loadMovie() {
      const resp = await api.get(`/movie/${movie_id}`, {
        params: { 
          api_key: API_KEY,
          append_to_response: "credits,reviews"
        }
      })

      setMovie(resp.data)
      setLoading(false)
    }

    loadMovie()
  }, [])

  return (
    <main>
      { loading ? <Spinner /> : (
        <>
        <MovieInfo movie={info} />
        <SectionTitle name="Cast" />
        <MovieCast cast={credits.cast} />
        <SectionTitle name="Reviews" />
        <MovieReviews reviews={reviews} />
        </>
      )}        
    </main>
  )
}
