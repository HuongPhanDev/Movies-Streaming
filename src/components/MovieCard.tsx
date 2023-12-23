import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/MovieCard.css';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  backdrop_path: string;
  title: string;
  release_date: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  backdrop_path,
  title,
  release_date,
  original_language,
  overview,
  popularity,
  poster_path,
  vote_average,
  vote_count
}) =>{ 
  const navigate = useNavigate();
  const handleWatchNowClick = () => {
    navigate('/movie-watch')
  };

  const handleDetailsClick = () => {
    navigate(`/movie-detail/${id}`)
  };

  return (
  <div className='movieCard'>
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className='poster' />
      <div className='overlayContent'>
        <div className='starRating'>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <span key={index}>&#9733;</span>
          ))}
        </div>
        <div className='movieActions'>
          <button className='actionButton wactchButton' onClick={handleWatchNowClick}>Watch Now</button>
          <button className='actionButton detailsButton' onClick={handleDetailsClick}>Details</button>
        </div>
      </div>
    </div>

    <div className='movieName'>{title}</div>
    <div className='movieYear'>{release_date}</div>

    <div>
      <div className='movieLan'>{original_language}</div>
      <div>
        <div className='movieTime'>
          <FontAwesomeIcon icon={faHeart} /> {popularity}
        </div>
        <div className='movieRated'>
          <FontAwesomeIcon icon={faStar} /> {vote_count}
        </div>
      </div>
    </div>
  </div>
)};

export default MovieCard;
