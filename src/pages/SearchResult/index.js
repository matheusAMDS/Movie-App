import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import Spinner from "../../components/Spinner"
import ListMovies from "../../components/ListMovies"
import SectionTitle from "../../components/SectionTitle"

import { api } from "../../services/api"
import { API_KEY } from "../../config/api_key"

export default function SearchResult() {
  const { q } = useParams()
  const [ movies, setMovies ] = useState([])
  const [ hasMore, setHasMore ] = useState(false)
  const [ page, setPage ] = useState(1)
  const [ loading, setLoading ] = useState(true)

  async function loadSearch() {
    const resp = await api.get("/search/movie/", { params: {
      api_key: API_KEY,
      query: q,
      page
    }})

    setMovies(movies.concat(resp.data.results))
    setHasMore(page < resp.data.total_pages)
    setPage(page + 1)
  }

  useEffect(() => {
    async function load() {
      await loadSearch()
      setLoading(false)
    }
    load()
  }, [])

  return (
    <main>
      {loading ? <Spinner /> : (
        <>
        <SectionTitle name={`Search results `} />
        <ListMovies movies={movies} loadMovies={loadSearch} hasMore={hasMore} />
        </>
      )}
    </main>
  )
}
