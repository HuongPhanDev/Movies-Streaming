import React from 'react'
import '../styles/MovieWatch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faClock } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

export default function MovieWatch() {
  return (
    <div className='movieWatchContainer'>
      <div className="videoContainer">
      <iframe className="video" src="https://www.youtube.com/embed/your-video-id" allowFullScreen></iframe>
      </div>
      
      
    <div className="episodeList">
    <div className='smallTitle'>ONLINE STREAMING</div>
      <div className='bigTitle'>Watch Full Episode</div>
      <ul>
        <li><a href="#"><FontAwesomeIcon icon={faPlay} style={{color: '#e4d804', marginRight: '20px'}} />Episode 1</a><FontAwesomeIcon icon={faClock} style={{color: '#e4d804', marginRight: '20px'}} /></li>
        <li><a href="#"><FontAwesomeIcon icon={faPlay} style={{color: '#e4d804',marginRight: '20px'}} />Episode 2</a><FontAwesomeIcon icon={faClock} style={{color: '#e4d804', marginRight: '20px'}} /></li>
        <li><a href="#"><FontAwesomeIcon icon={faPlay} style={{color: '#e4d804',marginRight: '20px'}} />Episode 3</a><FontAwesomeIcon icon={faClock} style={{color: '#e4d804', marginRight: '20px'}} /></li>
        <li><a href="#"><FontAwesomeIcon icon={faPlay} style={{color: '#e4d804', marginRight: '20px'}} />Episode 1</a><FontAwesomeIcon icon={faClock} style={{color: '#e4d804', marginRight: '20px'}} /></li>
        <li><a href="#"><FontAwesomeIcon icon={faPlay} style={{color: '#e4d804',marginRight: '20px'}} />Episode 2</a><FontAwesomeIcon icon={faClock} style={{color: '#e4d804', marginRight: '20px'}} /></li>
        <li><a href="#"><FontAwesomeIcon icon={faPlay} style={{color: '#e4d804',marginRight: '20px'}} />Episode 3</a><FontAwesomeIcon icon={faClock} style={{color: '#e4d804', marginRight: '20px'}} /></li>
      </ul>
      <img src="https://themebeyond.com/html/movflx/img/images/episode_img.jpg" alt=""  />
    </div>

    <Footer/>
    </div>
  )
}
