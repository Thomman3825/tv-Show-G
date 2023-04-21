import React from 'react'
import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs"

const StarRating = ({rating}) => {
    const starList=[]
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating - fullStars >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1:0)

    for (let i =0; i<fullStars;i++){
        starList.push(<BsStarFill key={'fullstar' +i}></BsStarFill>)
    }
    if(hasHalfStar){
      starList.push(<BsStarHalf key={'halfStar'}></BsStarHalf>)
    }
    for (let i =0; i<emptyStars;i++){
      starList.push(<BsStar key={'emptystar' +i}></BsStar>)
  }
  return (
    <div>{starList}</div>
  )
}

export default StarRating