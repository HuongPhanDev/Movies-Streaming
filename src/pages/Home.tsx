import React from 'react'
import '../styles/Home.css'
import Banner from '../components/Banner'
import MovieCard from '../components/MovieCard'
export default function Home() {
  return (
    <div >
      <Banner/>
      <section className='upcomingMovie-section'>
        <div className='upcomingMovie'>
          <p>ONLINE STREAMING</p>
          <h2>Upcoming Movies</h2>
          <div className='movieList'>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
        </div>
      </section>
    </div>
  )
}
