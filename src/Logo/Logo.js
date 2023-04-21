import React from 'react'
import s from './style.module.css'

const Logo = ({logoImg,title,desc}) => {
  return (
    <div>
        <div className={s.imgContainer}>
            <img src={logoImg} className={s.image}></img>
            <div className={s.titleC}>{title}</div>              
        </div>
        <div className={s.desc}>{desc}</div>
    </div>
  )
}

export default Logo