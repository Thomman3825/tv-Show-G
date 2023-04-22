import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import s from './style.module.css'

const SearchBar = ({onSubmit}) => {
  return (
    <div className={s.container}>
        <div className={s.searchIcon}>
            <AiOutlineSearch></AiOutlineSearch>
        </div>
        <div >
            <input className={s.searchBar} type = 'text' placeholder='Search TV Show' 
            onKeyUp={(e)=>{
                if (e.key==='Enter' && e.target.value.trim()!==""){
                    onSubmit(e.target.value)
                    // console.log(e.target.value)
                }
                // console.log(e.target.value)
            }}></input>
        </div>
    </div>
  )
}

export default SearchBar