import React from 'react';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Array<{
    poster: string;
    name: string;
    year: string;
    quality: string;
    duration: number;
    rating: number;
  }>;
  smallTitle: string;
  bigTitle: string;
}

const MovieList: React.FC<MovieListProps> = ({ movies, smallTitle, bigTitle}) => {
  return (
    <section className='movieSection'>
        <div className='smallTitle'>{smallTitle}</div>
        <div className='bigTitle'>{bigTitle}</div>
        <div className="movieList">
        {movies.map((movie, index) => (
        <MovieCard
          key={index}
          poster={movie.poster}
          name={movie.name}
          year={movie.year}
          quality={movie.quality}
          duration={movie.duration}
          rating={movie.rating}
        />
      ))}
        </div>
    </section>
    
  );
};

export default MovieList;
