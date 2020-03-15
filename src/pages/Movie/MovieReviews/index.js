import React, { useState } from 'react'

import "./styles.css"

function MovieReview({ review }) {
  const [ display, setDisplay ] = useState(false)
  const content = review.content.split(" ")
  const firstToShow = content.slice(0, 100).join(" ")
  const rest = content.slice(100,).join(" ")

  return (
    <div className="review" key={review.id}>
      <span className="review-author">{review.author}:</span>
      <p>
        {firstToShow}&nbsp;
        
        { display ? (
          <>
          {rest}&nbsp;
          <button className="view" onClick={() => setDisplay(false)}>
            view less
          </button>
          </>
        ) : (
          <button disabled={rest.length <= 1} className="view" onClick={() => setDisplay(true)}>
            view more
          </button>
        )}
      </p>
    </div>
  )
}

export default function MovieReviews({ reviews }) {
  return (
    <div className="movie-reviews">
      {reviews.results.length === 0 || reviews.results.length == null 
        ? <span className="no-reviews">No reviews awailable.</span>
        : reviews.results.map(review => (
            <MovieReview review={review} key={review.id}/>
          ))
      }
    </div>
  )
}
