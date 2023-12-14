import React from 'react';
import '../styles/MovieCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faThumbsUp } from '@fortawesome/free-regular-svg-icons';

const MovieCard = () => (
  <div className='movieCard'>
    <img src="./logo192.png" alt="" className='poster' />
    <div>
      <div className='movieName'>Name</div>
      <div className='movieYear'>2021</div>
    </div>

    <div>
      <div className='movieQual'>HD</div>
      <div>
        <div className='movieTime'>
          <FontAwesomeIcon icon={faClock} style={{ color: "#e4d804" }} /> 120 minutes
        </div>
        <div className='movieRated'>
          <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#e4d804" }} /> 3.5
        </div>
      </div>
    </div>
  </div>
);

export default MovieCard;
