import React from 'react';
import BannerTwo from '../components/BannerTwo';
import '../styles/Contact.css'
import Btn from '../components/Btn';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {


  return (
    <>
      <BannerTwo children={<h1>Contact Us</h1>} />
      <div className="contactContainer">
        <div className="group-form">
          <div className="title">Contact Form</div>
          <div className="contact-form">
            <div className="row">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
              />
            </div>
            <input
              name="subject"
              placeholder="Subject *"

            />
            <textarea
              name="message"
              placeholder="Type Your Message..."

            />
            <Btn title={'Send Message'} url={''} />
          </div>
        </div>
        <div className="group-message">
          <div className="title">Information</div>
          <div className='container'>
          <div className="contact-info-wrap">
            <p>
              <span> Find solutions : </span> to common problems, or get help
              from a support agent industry's standard .
            </p>
          </div>
          <div className="contact-info-list">
            <ul>
              <li>
                <div className="icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <p>
                  <span> Address : </span> W38 Park Road New York
                </p>
              </li>
              <li>
                <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
                </div>
                <p>
                  <span> Phone : </span> (09) 123 854 365
                </p>
              </li>
              <li>
                <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <p>
                  <span> Email : </span> support@movflx.com
                </p>
              </li>
            </ul>
          </div>
          </div>
         
        </div>
      </div>
      <Footer />
    </>

  );
};

export default Contact;
