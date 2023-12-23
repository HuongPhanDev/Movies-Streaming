import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

interface MovieListProps {
  movies: {
    results: Array<{
      adult: boolean;
      backdrop_path: string;
      genre_ids: number[];
      id: number;
      original_name?: string;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title?: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }>;
  };
  smallTitle: string;
  bigTitle: string;
}

const MovieList: React.FC<MovieListProps> = ({ movies, smallTitle, bigTitle }) => (
  <section className='movieSection'>
    <div className='smallTitle'>{smallTitle}</div>
    <div className='bigTitle'>{bigTitle}</div>
    <div className='movieList'>
      {movies.results.map((movie, index) => (
        <MovieCard
          key={index}
          {...movie}
          title={movie.title || movie.original_name || 'Unknown'}
        />
      ))}
    </div>
  </section>
);

export default MovieList;
