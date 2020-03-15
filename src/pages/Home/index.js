import React, { useState, useEffect } from 'react'

import Spinner from "../../components/Spinner"
import ListMovies from "../../components/ListMovies"
import LatestMovies from "./LatestMovies"

import { api } from "../../services/api"
import { API_KEY } from "../../config/api_key"

export default function Home() {
  const [ fiveLatest, setFiveLatest ] = useState([])
  const [ latest, setLatest ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ page, setPage ] = useState(1)
  const [ hasMore, setHasMore ] = useState(false)

  async function loadLatest(firstCall = false) {
    const resp = await api.get("/movie/now_playing", {
      params: {
        api_key: API_KEY,
        page
      }
    })
    const data = resp.data.results
    const sorted = 
      data
        .sort((m1, m2) => new Date(m1.release_date) - new Date(m2.release_date))
        .reverse()

    if (firstCall) {
      setFiveLatest(sorted.slice(0, 5))
      setLatest(sorted.slice(5,))
    } else {
      setLatest(latest.concat(sorted))
    }

    setHasMore(page < resp.data.total_pages)
    setPage(page + 1)
  }

  useEffect(() => {
    async function load() {
      await loadLatest(true)
      setLoading(false)
    }
    load()
  }, [])

  return (
    <main>
      {loading ? <Spinner /> : (
        <>
        <LatestMovies fiveLatest={fiveLatest} />
        <ListMovies
          movies={latest}
          loadMovies={loadLatest}
          hasMore={hasMore}
        />
        </>
        )
      }
    </main>
  )
}