import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"

import "./styles.css"

export default function NavBar() {
  const history = useHistory()
  const [ search, setSearch ] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    history.push(`/search/${search}`)
    window.location.reload(true)
  }

  return (
    <nav>
      <Link to="/">
        <li id="app-logo">
          Movie App
        </li>
      </Link>
      
      <form id="app-search" onSubmit={handleSubmit}>
        <input 
          type="text"
          className="app-search-bar"
          placeholder="Ex: Avengers"
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  )
}
