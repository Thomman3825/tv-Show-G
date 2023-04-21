import React from 'react'
import { BACKDROP_BASE_URL_SMALL } from '../URLs'
import s from './style.module.css'

const TVShowListItem = ({tvshow,onClick}) => {
    // console.log(tvshow)
    // const onClickItem = ()=>{
    //     onClick(tvshow)
    // }
  return (
    <div className={s.container} onClick={()=>{
        onClick(tvshow)
    }}>
        <img className={s.image} src={`${BACKDROP_BASE_URL_SMALL}${tvshow.backdrop_path} `} alt={tvshow.name}></img>
        
        <div className={s.title}>{tvshow.name}</div>

    </div>
  )
}

export default TVShowListItem