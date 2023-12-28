import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/BlogPoster.css'
function BlogRightSide() {
  return (
    <div className='blogRightSide'>
        <div className='searchBox'>
            <h2>Search Objects</h2>
            <form action="/">
                <input type="text" placeholder='Search...' />
                <button>
                <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>

        <div className='categoryBox'>
          <h2>Categories</h2>
          <ul>
            <li className='categoryItem'>
              <span>Movies</span>
              <span>12</span>
            </li>
            <li className='categoryItem'>
              <span>Action Movies</span>
              <span>10</span>
            </li>
            <li className='categoryItem'>
              <span>Streaming</span>
              <span>9</span>
            </li>
            <li className='categoryItem'>
              <span>Download</span>
              <span>12</span>
            </li>
          </ul>
          
        </div>
    </div>
  )
}

export default BlogRightSide