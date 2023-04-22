import React from 'react'
import TVShowListItem from '../TVShowListItem/TVShowListItem'
import s from './style.module.css'


const TVShowList = ({recList,onClickItem}) => {
  return (
    <div className={s.container}>
        <div className={s.title}>
            You might want to watch these:
        </div>
        <div className={s.list}>
        {
            recList.map((tvShows)=>{
                return <TVShowListItem key={tvShows.id} tvshow={tvShows} onClick={onClickItem}></TVShowListItem>
            })
        }
        </div>
    </div>
  )
}

export default TVShowList
{/* <TVShowListItem key={tvShows.id} tvshow={tvShows} onClick={(tvshow)=>{
                console.log(tvshow)
              }}></TVShowListItem> */}
              