
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import { useLocation } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';
import Btn from './Btn';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigation = useNavigate();

  const getLinkStyle = (path: string) => ({
    color: location.pathname === path ? '#e4d804' : 'white',
  });

  useEffect(() => {
    const header = document.querySelector(".header-container") as HTMLElement;
    const toggleClass = "is-sticky";

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      if (currentScroll > 150) {
        header.classList.add(toggleClass);
      } else {
        header.classList.remove(toggleClass);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    
  const Logout = () => {
    sessionStorage.removeItem('isLoggedIn');
    navigation('/login');
  }
 
  
  return (
    <div id="sticky-header" className='header-container'>
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
          <li >
            <NavLink to={"/contact"} className="header-nav-item" style={getLinkStyle('/contact')}>CONTACT</NavLink>
          </li>
        </ul>
      </nav>
      <div className='header-right'>
          <Btn title="SIGN IN" url='/login'/>
      </div>
    </div>
  );
}
