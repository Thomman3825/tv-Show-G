import logo from './logo.svg';
import './App.css';
import s from './style.module.css'
import { tvShowAPI } from './APIs/tvShowAPI';
import { useEffect, useState } from 'react';
import { BACKDROP_BASE_URL } from './URLs';
import { ShowDetails } from './tvShowDetails/ShowDetails';
import Logo from './Logo/Logo';
import logoImg from './Assets/Images/OSGLogo.png'
import TVShowListItem from './TVShowListItem/TVShowListItem';


function App() {
  const [tvShows, setTvShows]=useState('')
  const [recList, setRecList]=useState([])

  async function getPopularShows(){
    const popShow = await tvShowAPI.fetchShowAPI()
    setTvShows(popShow[1])
    // console.log(popShow[0].backdrop_path)
    
  }
  async function getRecommendation(tvShowID){
    const reclistRes= await tvShowAPI.fetchRecommendations(tvShowID)
    if (reclistRes.length > 0){
      console.log(reclistRes)
      setRecList(reclistRes.slice(0,10))
    }
   
    
  }
  console.log(tvShows.backdrop_path)

  useEffect(()=>{
    getPopularShows()
     //console.log(tvShows)
  },[])

  useEffect(()=>{
    if(tvShows){
      getRecommendation(tvShows.id)
    }
    },[tvShows])
  console.log(recList)
  return (
    <div className={s.container}
    style={{background: tvShows ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(${BACKDROP_BASE_URL}${tvShows.backdrop_path}) no-repeat center/cover`:'black'}}>
      <div className={s.header}>
      <div className='row'>
              <div className='col-4'>
                <Logo logoImg={logoImg} title={'One-Stop-G'} desc={'Your best TV Shw guide'} ></Logo>
              </div>
              <div className='col-sm-12 col-md-4 col-lg-4'>
                <input type='text' placeholder="seach" style={{width:"100%"}}></input>
              </div>
          </div>
      </div>
      <div className={s.show_details}>
        {tvShows && <ShowDetails tvshow={tvShows}></ShowDetails>}
      </div>
      <div className={s.recommendations}>
        <div>
        {tvShows && <TVShowListItem tvshow={tvShows} onClick={(tvshow)=>{
        console.log(tvshow)
      }}></TVShowListItem>}

        {tvShows && <TVShowListItem tvshow={tvShows} onClick={(tvshow)=>{
        console.log(tvshow)
      }}></TVShowListItem>}
        </div>
        
       </div>
    </div>
  );
}

export default App;
