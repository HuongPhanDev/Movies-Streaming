import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavProps {
  getLinkStyle: (path: string) => React.CSSProperties;
}

const Nav: React.FC<NavProps> = ({ getLinkStyle }) => (
  <nav>
    <ul className="nav">
      <li>
        <NavLink to={"/"} className={"nav-item"} style={getLinkStyle('/')}>HOME</NavLink>
      </li>
      <li>
        <NavLink to={"/movie"} className="nav-item" style={getLinkStyle('/movie')}>MOVIE</NavLink>
      </li>
      <li>
        <NavLink to={"/tvshow"} className="nav-item" style={getLinkStyle('/tvshow')}>TV SHOW</NavLink>
      </li>
      <li>
        <NavLink to={"/pricing"} className="nav-item" style={getLinkStyle('/pricing')}>PRICING</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"} className="nav-item" style={getLinkStyle('/blog')}>BLOG</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"} className="nav-item" style={getLinkStyle('/contact')}>CONTACT</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
