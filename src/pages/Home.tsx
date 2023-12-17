import React from 'react'
import '../styles/MovieCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTvAlt, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import '../styles/MovieList.css'
import '../styles/Home.css'
import MovieList from '../components/MovieList'
import Banner from '../components/Banner'
import Btn from '../components/Btn';
export default function Home() {

  interface SevicesItemProps {
    icon: any;
    title: string;
    content: string
  }
  const upcomingMovies = [
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster01.jpg",
      name: "Women's Day",
      year: "2021",
      quality: "HD",
      duration: 120,
      rating: 3.5,
    },
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster05.jpg",
      name: "The Cooking",
      year: "2021",
      quality: "HD",
      duration: 120,
      rating: 3.5,
    },
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster04.jpg",
      name: "The Easy Reach",
      year: "2021",
      quality: "8K",
      duration: 120,
      rating: 3.5,
    },
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster03.jpg",
      name: "The Dog  Woof",
      year: "2021",
      quality: "8K",
      duration: 120,
      rating: 3.5,
    },
  ];

  const topRatedMovie = [
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster02.jpg",
      name: "The Perfect Match",
      year: "2021",
      quality: "8K",
      duration: 120,
      rating: 3.5,
    },
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster01.jpg",
      name: "Women's Day",
      year: "2021",
      quality: "HD",
      duration: 120,
      rating: 3.5,
    },
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster04.jpg",
      name: "The Easy Reach",
      year: "2021",
      quality: "8K",
      duration: 120,
      rating: 3.5,
    },
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster03.jpg",
      name: "The Dog  Woof",
      year: "2021",
      quality: "8K",
      duration: 120,
      rating: 3.5,
    },
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster05.jpg",
      name: "The Cooking",
      year: "2021",
      quality: "HD",
      duration: 120,
      rating: 3.5,
    },
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster06.jpg",
      name: "The Hikaru",
      year: "2021",
      quality: "HD",
      duration: 120,
      rating: 3.5,
    },
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster07.jpg",
      name: "Life Quotes",
      year: "2021",
      quality: "HD",
      duration: 120,
      rating: 3.5,
    },
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster08.jpg",
      name: "The Beachball",
      year: "2021",
      quality: "HD",
      duration: 120,
      rating: 3.5,
    },

  ];

  const bestTVSeries = [
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster01.jpg",
      name: "Women's Day",
      year: "2021",
      quality: "HD",
      duration: 120,
      rating: 3.5,
    },
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster05.jpg",
      name: "The Cooking",
      year: "2021",
      quality: "HD",
      duration: 120,
      rating: 3.5,
    },
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster04.jpg",
      name: "The Easy Reach",
      year: "2021",
      quality: "8K",
      duration: 120,
      rating: 3.5,
    },
    {
      poster: "https://themebeyond.com/html/movflx/img/poster/ucm_poster03.jpg",
      name: "The Dog  Woof",
      year: "2021",
      quality: "8K",
      duration: 120,
      rating: 3.5,
    },
  ];

  const ServiceItem: React.FC<SevicesItemProps> = ({ icon, title, content }) => {
  return (
    <div className="serviceItem">
        <div className="itemIcon"><FontAwesomeIcon icon={icon} /></div>
        <div className="itemContent">
          <div className="itemTitle">{title}</div>
          <div className="itemDescription">{content}</div>
        </div>
    </div>
);
};

  return (
    
    <div>
    <Banner />
    <section className='upcomingMovieSection'>
      <MovieList movies={upcomingMovies} smallTitle='ONLINE STREAMING' bigTitle='Upcoming Movies' />
    </section>
    <section className='ourServiceSection'>
      <img className="image" src="https://themebeyond.com/html/movflx/img/images/services_img.jpg" alt="" />
      <button className="button" type="button">
        DOWNLOAD
      </button>
      <div className="ourServiceContainer">
        <div className="header">
          <div className="title">OUR SERVICES</div>
          <h2 className="subtitle">Download Your Shows Watch Offline.</h2>
          <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolore dicta excepturi nisi quod numquam quis autem fugiat ipsum tenetur, atque neque dolorum corporis, animi sunt? Commodi corrupti reprehenderit doloremque?</p>
        </div>
        <ServiceItem icon={faTvAlt} title={"Enjoy on Your TV."} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."} />
        <ServiceItem icon={faVideoCamera} title={"Watch Everywhere."} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."} />
        </div>
    </section>

    <section className='topRatedSection'>
      <MovieList movies={topRatedMovie} smallTitle='ONLINE STREAMING' bigTitle='Top Rated Movies' />
    </section>


    <section className='introSection'>
      <div className="header">
        <div className="title">ONLINE STREAMING</div>
        <h2 className="subtitle">Live Movie & TV Shows For Friends & Family</h2>
        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolore dicta excepturi nisi quod numquam quis autem fugiat ipsum tenetur, atque neque dolorum corporis, animi sunt? Commodi corrupti reprehenderit doloremque?</p>
        
      <div className='vidOptions'>
        <div className='resolution'>HD 4K</div>
        <div className='cusInfo'>
          <div className='cusCount'>20K+</div>
          <div className='cusStatus'>Active Customer</div>
        </div>
      </div>

        <Btn url='' title='WATCH NOW'/>
      </div>
      <img className="image" src="https://themebeyond.com/html/movflx/img/images/live_img.png " alt="" />
    </section>

    <section className='bestTVSeries'>
      <MovieList movies={bestTVSeries} smallTitle='BEST TV SERIES' bigTitle='World Best TV Series' />
    </section>

    <section className='getStartSection'>
      <div className='left'>
        <div>TRIAL START FIRST 30 DAYS.</div>
        <div>Enter your email to create or restart your membership.</div>
      </div>
      <div className='right'>
        <input type="text" placeholder='Enter your email'/>
        <input type="button" value="GET STARTED" />
      </div>
    </section>
  </div>
  )
}
