import React, { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/imgs/logo.png';
import Btn from './Btn';
import Nav from './Nav';
import { LoginContext } from '../App';
import '../styles/Header.css'

const Header: React.FC = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)!;

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

  const handleLogout = () => {
    sessionStorage.removeItem('user_info');
    setIsLoggedIn(false);
    navigation('/login');
  };

  return (
    <div id="sticky-header" className='header-container'>
      <img src={logo} alt="movies dream logo" className="header-logo" />
      <Nav getLinkStyle={getLinkStyle} />
      <div className='header-right'>
        {!isLoggedIn ? (
          <Btn title="SIGN IN" url='/login' />
        ) : (
          <div>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ color: 'white', margin: '0 10px' }}>
              {JSON.parse(sessionStorage.getItem('user_info') || '{}').username}
            </span>
            <button onClick={handleLogout} className='logoutBtn'>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
