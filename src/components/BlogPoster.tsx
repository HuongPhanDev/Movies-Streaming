import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faComment, faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons';
import '../styles/BlogPoster.css';
import { Link } from 'react-router-dom';
import { faAngleDoubleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface BlogPosterProps {
  url: string;
  thumbnailSrc: string;
  date: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  comments: number;
}

const BlogPoster: React.FC<BlogPosterProps> = ({
  url,
  thumbnailSrc,
  date,
  title,
  content,
  author,
  likes,
  comments,
}) => {
  return (
    <div className="blog-poster-container">
      <div className='blog-poster-thumb'>
        <Link to={url}>
          <img src={thumbnailSrc} alt="Blog Thumbnail" />
        </Link>
      </div>

      <div className='blog-poster-content'>
        <span className='date'>
          <FontAwesomeIcon icon={faClock} color="#e4d804" /> {date}
        </span>
        <h2 className='title'>{title}</h2>
        <p>{content}</p>
        <div className='blog-poster-media'>
          <ul>
            <li><FontAwesomeIcon icon={faUser} color="#e4d804" /> by {author}</li>
            <li><FontAwesomeIcon icon={faThumbsUp} color="#e4d804" /> {likes}</li>
            <li><FontAwesomeIcon icon={faComment} color="#e4d804" /> {comments} comments</li>
          </ul>
          <div className='read-more'>
            <Link to={url}>Read more <FontAwesomeIcon icon={faAngleDoubleRight} color='#e4d804'/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPoster;
