
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import { useLocation } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';

export default function Header() {
  const location = useLocation();

  const getLinkStyle = (path: string) => ({
    color: location.pathname === path ? '#e4d804' : 'white',
  });

  
  return (
    <div className="header-container">
      <img src={logo} alt="movies dream logo" className="header-logo" />
      <nav>
        <ul className="header-nav">
          <li >
            <NavLink to={"/"} className={"header-nav-item"} style={getLinkStyle('/')}>HOME</NavLink>
          </li>
          <li >
            <NavLink to={"/movie"} className="header-nav-item" style={getLinkStyle('/movie')}>MOVIE</NavLink>
          </li>
          <li >
            <NavLink to={"/tvshow"} className="header-nav-item" style={getLinkStyle('/tvshow')}>TV SHOW</NavLink>
          </li>
          <li >
            <NavLink to={"/pricing"} className="header-nav-item" style={getLinkStyle('/pricing')}>PRICING</NavLink>
          </li>
          <li >
            <NavLink to={"/blog"} className="header-nav-item" style={getLinkStyle('/blog')}>BLOG</NavLink>
          </li>
        </ul>
      </nav>
      <div className='header-right'>
          <button type="button" className="header-signin-button">
            <NavLink to={"/login"}>SIGN IN</NavLink>
          </button>
      </div>
    </div>
  );
}
