import React from 'react'
import s from './style.module.css'
import StarRating from './StarRating'

export const ShowDetails = ({tvshow}) => {
  const rating = tvshow.vote_average/2
  return (
    <div>
      <div className={s.showName}>{tvshow.name} </div>
      <div className={s.ratingContainer}>
        <div>
          <StarRating rating={rating}></StarRating>
        </div>
        <div className={s.rating}>{rating}/5 </div>
      </div>
      <div className={s.overview}>{tvshow.overview}</div>
      
    </div>
  )
}
