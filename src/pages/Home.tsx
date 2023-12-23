import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTvAlt, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import '../styles/MovieList.css';
import '../styles/Home.css';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Btn from '../components/Btn';
import { fetchFilm } from '../api/Api';

interface MovieData {
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

interface SevicesItemProps {
  icon: any;
  title: string;
  content: string;
}

const ServiceItem: React.FC<SevicesItemProps> = ({ icon, title, content }) => (
  <div className='serviceItem'>
    <div className='itemIcon'>
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className='itemContent'>
      <div className='itemTitle'>{title}</div>
      <div className='itemDescription'>{content}</div>
    </div>
  </div>
);

const Home: React.FC = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<MovieData>({ results: [] });
  const [topRatedMovie, setTopRatedMovie] = useState<MovieData>({ results: [] });
  const [bestTVSeries, setBestTVSeries] = useState<MovieData>({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upcomingMoviesData = await fetchFilm(
          'https://api.themoviedb.org/3/movie/upcoming?api_key=e625e669aa1fa4c29e259bda1eae49a7'
        );
        const topRatedMovieData = await fetchFilm(
          'https://api.themoviedb.org/3/movie/top_rated?api_key=e625e669aa1fa4c29e259bda1eae49a7'
        );
        const bestTVSeriesData = await fetchFilm(
          'https://api.themoviedb.org/3/tv/popular?api_key=e625e669aa1fa4c29e259bda1eae49a7'
        );

        setUpcomingMovies({ results: upcomingMoviesData.results });
        setTopRatedMovie({ results: topRatedMovieData.results });
        setBestTVSeries({ results: bestTVSeriesData.results });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Banner />
      <section className='upcomingMovieSection'>
        <MovieList movies={upcomingMovies} smallTitle='ONLINE STREAMING' bigTitle='Upcoming Movies' />
      </section>
      <section className='ourServiceSection'>
        <img
          className='image'
          src='https://themebeyond.com/html/movflx/img/images/services_img.jpg'
          alt=''
        />
        <button className='button' type='button'>
          DOWNLOAD
        </button>
        <div className='ourServiceContainer'>
          <div className='header'>
            <div className='title'>OUR SERVICES</div>
            <h2 className='subtitle'>Download Your Shows Watch Offline.</h2>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolore dicta
              excepturi nisi quod numquam quis autem fugiat ipsum tenetur, atque neque dolorum
              corporis, animi sunt? Commodi corrupti reprehenderit doloremque?
            </p>
          </div>
          <ServiceItem
            icon={faTvAlt}
            title={'Enjoy on Your TV.'}
            content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
          />
          <ServiceItem
            icon={faVideoCamera}
            title={'Watch Everywhere.'}
            content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
          />
        </div>
      </section>

      <section className='topRatedSection'>
        <MovieList movies={topRatedMovie} smallTitle='ONLINE STREAMING' bigTitle='Top Rated Movies' />
      </section>

      <section className='introSection'>
        <div className='header'>
          <div className='title'>ONLINE STREAMING</div>
          <h2 className='subtitle'>Live Movie & TV Shows For Friends & Family</h2>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolore dicta
            excepturi nisi quod numquam quis autem fugiat ipsum tenetur, atque neque dolorum
            corporis, animi sunt? Commodi corrupti reprehenderit doloremque?
          </p>

          <div className='vidOptions'>
            <div className='resolution'>HD 4K</div>
            <div className='cusInfo'>
              <div className='cusCount'>20K+</div>
              <div className='cusStatus'>Active Customer</div>
            </div>
          </div>

          <Btn url='' title='WATCH NOW' />
        </div>
        <img
          className='image'
          src='https://themebeyond.com/html/movflx/img/images/live_img.png '
          alt=''
        />
      </section>

      <section className='bestTVSeries'>
        <MovieList movies={bestTVSeries} smallTitle='BEST TV SERIES' bigTitle='World Best TV Series' />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
