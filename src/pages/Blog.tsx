import React from 'react';
import BlogPoster from '../components/BlogPoster';
import BannerTwo from '../components/BannerTwo';
import '../styles/BlogPoster.css'
import Footer from '../components/Footer';
import BlogRightSide from '../components/BlogRightSide';
export default function Blog() {
  return (
    <div>
      <BannerTwo children={<h1>New Update</h1>} />
      <div className='blog-poster'>
        <div>
        <BlogPoster
        url=''
        thumbnailSrc="https://themebeyond.com/html/movflx/img/blog/blog_thumb03.jpg"
        date="10 Mar 2021"
        title="Your Free Movie Streaming Purposes"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend ."
        author="admin"
        likes={63}
        comments={12}
      />

      <BlogPoster
        url=''
        thumbnailSrc="https://themebeyond.com/html/movflx/img/blog/blog_thumb02.jpg"
        date="15 Mar 2021"
        title="The Art of Movie Reviews"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend ."
        author="editor"
        likes={42}
        comments={8}
      />

      <BlogPoster
        url =''
        thumbnailSrc="https://themebeyond.com/html/movflx/img/blog/blog_thumb01.jpg"
        date="20 Mar 2021"
        title="Behind the Scenes: Movie Production"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend .."
        author="producer"
        likes={78}
        comments={15}
      />
       
        </div> 
        <BlogRightSide />
      </div>

      <Footer />
    </div>
  );
}
