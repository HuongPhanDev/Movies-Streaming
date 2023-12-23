import React from 'react'
import logo from '../assets/imgs/logo.png';
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faTwitter,
    faPinterest,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';
import Nav from './Nav';

export default function Footer() {
    const location = useLocation();

    const getLinkStyle = (path: string) => ({
        color: location.pathname === path ? '#e4d804' : 'white',
    });

    return (
        <>
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
        <div className='footerContainer'>
            
            <div>
                <img src={logo} alt="movies dream logo" className="footer-logo" />
                <Nav getLinkStyle={getLinkStyle} />
                <form action="">
                    <input type="text" placeholder='Find Favorite Movie' />
                    <button type='button'>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>

            <div>
                <ul>
                    <li>FAQ</li>
                    <li>HELP CENTER</li>
                    <li>TERMS OF USE</li>
                    <li>PRIVACY</li>
                </ul>
                <ul>
                    <li><FontAwesomeIcon icon={faFacebook} />
                    </li>
                    <li><FontAwesomeIcon icon={faTwitter} />
                    </li>
                    <li><FontAwesomeIcon icon={faPinterest} />
                    </li>
                    <li><FontAwesomeIcon icon={faLinkedin} />
                    </li>
                </ul>
            </div>
        </div>
        </>
        
        
    )
}
