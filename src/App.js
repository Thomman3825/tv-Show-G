import logo from './logo.svg';
import './App.css';
import s from './style.module.css'
import { tvShowAPI } from './APIs/tvShowAPI';
import { useEffect, useState } from 'react';
import { BACKDROP_BASE_URL } from './URLs';

function App() {
  const [tvShows, setTvShows]=useState('')

  async function getPopularShows(){
    const popShow = await tvShowAPI.fetchShowAPI()
    setTvShows(popShow[0])
    // console.log(popShow[0].backdrop_path)
    
  }
  console.log(tvShows.backdrop_path)

  useEffect(()=>{
    getPopularShows()
    // console.log(tvShows)
  },[])

  return (
    <div className={s.container}
    style={{background: tvShows ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(${BACKDROP_BASE_URL}${tvShows.backdrop_path}) no-repeat center/cover`:'black'}}>
      <div className={s.header}>
      <div className='row'>
              <div className='col-4'>
                <div>Logo</div>
                <div>Subtitle</div>
              </div>
              <div className='col-md-12 col-lg-4'>
                <input type='text' placeholder="seach" style={{width:"100%"}}></input>
              </div>
          </div>
      </div>
      <div className={s.show_details}> Show Details</div>
      <div className={s.recommendations}>Recommendations</div>
    </div>
  );
}

export default App;
