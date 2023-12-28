import React from 'react'
import BannerTwo from '../components/BannerTwo'
import Footer from '../components/Footer'
import MovieList from '../components/MovieList'
import '../styles/OurMovies.css'
import { useEffect } from 'react'
import { LoginContext } from '../App'
import { useContext, useState} from 'react';
import { fetchFilm } from '../api/Api'
import FilterPanel from '../components/FilterPanel'

interface TVShowData {
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
}

export default function TVShow() {
  const [allMovies, setAllMovies] = useState<TVShowData>({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upcomingMoviesData = await fetchFilm('https://api.themoviedb.org/3/movie/upcoming?api_key=e625e669aa1fa4c29e259bda1eae49a7');
        const topRatedMovieData = await fetchFilm('https://api.themoviedb.org/3/movie/top_rated?api_key=e625e669aa1fa4c29e259bda1eae49a7');
        const nowPlayMovieData = await fetchFilm('https://api.themoviedb.org/3/movie/now_playing?api_key=e625e669aa1fa4c29e259bda1eae49a7');
        const popularMovieData = await fetchFilm('https://api.themoviedb.org/3/movie/popular?api_key=e625e669aa1fa4c29e259bda1eae49a7');
        const allMoviesData = upcomingMoviesData.results.concat(topRatedMovieData.results, nowPlayMovieData.results,popularMovieData.results);

        setAllMovies({ results: allMoviesData });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const {setIsLoggedIn} = useContext(LoginContext)!;
 

  useEffect ( () => {
    if (!sessionStorage.getItem('user_info')) {
      setIsLoggedIn(false);
    }
 } ,[])
  return (
    <div className='ourMovieContainer'>
      <BannerTwo children={<h1>TV Show</h1>}/>
      <div className='ourMovieContent'>
      <FilterPanel/>
      <MovieList movies={allMovies} bigTitle='New TV Show' smallTitle='ONLINE STREAMING'/>
      </div>
      <Footer />
    </div>
  )
}
