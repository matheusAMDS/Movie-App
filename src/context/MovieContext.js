import React, { useState, useEffect, createContext } from "react"

import api from "../services/api"

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  const [ movies, setMovies ] = useState([])

  useEffect(() => {
    async function loadLatest() {
      const resp = await api.get("/movie/now_playing", {
        params: {
          "api_key": "ad75940a2f4a06ba50d7b7e2a113e9d5"
        }
      })
      const data = resp.data.results
      const sorted = 
        data
          .sort((m1, m2) => new Date(m1.release_date) - new Date(m2.release_date))
          .reverse()
      
      setMovies(sorted)
      console.log(sorted)
    }

    loadLatest()
  }, [])

  return (
    <MovieContext.Provider value={movies}>
      {children}
    </MovieContext.Provider>
  )
}