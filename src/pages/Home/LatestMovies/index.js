import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { imageData } from "../../../services/api"
import "./styles.css"

export default function LatestMovies({ fiveLatest }) {
  const [ index, setIndex ] = useState(0)
  let release = fiveLatest[index]

  return (
    <section className="just-released">
      <button 
        disabled={index === 0} 
        className="prev" 
        onClick={() => setIndex(index - 1)}
      >
        &lt;
      </button>
      
      <Link to={`/movie/${release.id}`}>
        <div className="release" style={{ backgroundImage: `url(${imageData.backdrop(release.backdrop_path)})`}}>
          <div className="info">
            <h1>{release.title}</h1>
            <p>{release.overview}</p>
          </div>
        </div>
      </Link>
      
      <button 
        disabled={index === 4}
        className="next"
        onClick={() => setIndex(index + 1)}
      >
        &gt;
      </button>
    </section>
  )
}