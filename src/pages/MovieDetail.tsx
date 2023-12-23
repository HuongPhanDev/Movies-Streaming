import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilm } from '../api/Api';
import '../styles/MovieDetail.css';
import Banner from '../components/Banner';
import BannerTwo from '../components/BannerTwo';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movieDetails, setMovieDetails] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFilm(`https://api.themoviedb.org/3/movie/${id}?api_key=e625e669aa1fa4c29e259bda1eae49a7`);
        setMovieDetails(response);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!movieDetails) {
    return <div className="loading">Loading...</div>;
  }

  const {
    title,
    overview,
    release_date,
    original_language,
    popularity,
    poster_path,
    vote_average,
    vote_count,
  } = movieDetails;

  return (
    <div>
        <BannerTwo children={<div className="movieDetailContainer">
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="movieImage" />

            <div className="movieDetails">
                <h1 className="movieTitle">{title}</h1>
                <p>Release Date: {release_date}</p>
                <p>Language: {original_language}</p>
                <p>Overview: {overview}</p>
                <p>Popularity: {popularity}</p>
                <p>Vote Average: {vote_average}</p>
                <p>Vote Count: {vote_count}</p>
            </div>
        </div>} />
        
    </div>
    
  );
};

export default MovieDetail;
