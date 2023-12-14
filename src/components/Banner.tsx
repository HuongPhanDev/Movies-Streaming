import React from 'react'
import '../styles/Banner.css'
import Btn from './Btn'

export default function Banner() {
  return (
    <div className='bannerContainer'>
        <h1>Movie Dream</h1>
        <p>Unlimited <span> Movie</span>, TVs Shows, & More.</p>
        <Btn title='WATCH NOW' url='/demo' />
    </div>
  )
}
