import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

interface MovieCardProps {
  poster: string;
  name: string;
  year: string;
  quality: string;
  duration: number;
  rating: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ poster, name, year, quality, duration, rating }) => {
  return (
    <div className='movieCard'>
      <img src={poster} alt="" className='poster' />
      <div>
        <div className='movieName'>{name}</div>
        <div className='movieYear'>{year}</div>
      </div>

      <div>
        <div className='movieQual'>{quality}</div>
        <div>
          <div className='movieTime'>
            <FontAwesomeIcon icon={faClock} /> {duration} minutes
          </div>
          <div className='movieRated'>
            <FontAwesomeIcon icon={faThumbsUp} /> {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
