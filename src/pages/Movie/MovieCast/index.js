import React, { useState } from 'react'

import { imageData } from "../../../services/api"
import "./styles.css"

export default function MovieCast({ cast }) {
  const [ showMore, setShowMore ] = useState(false)
  const firstOnes = cast.slice(0, 6)
  const toUse = showMore ? cast : firstOnes

  return (
    <section className="movie-cast">
      <>
      <div className="cast">
        {toUse.map(actor => (
          <div className="actor" key={actor.id}>
            <img src={imageData.profile(actor.profile_path)} alt="" />
            <span className="actor-name">{actor.name}</span>
            <span className="character-name">"{actor.character}"</span>
          </div>
        ))}
      </div>
      {!showMore 
        ? <button
            disabled={firstOnes.length === cast.length}
            className="more-actors" 
            onClick={() => setShowMore(true)}
          >
            Show more
          </button>
        : <button
            className="more-actors" 
            onClick={() => setShowMore(false)}
          >
            Show less
          </button>
      }
      </>
    </section>
  )
}
