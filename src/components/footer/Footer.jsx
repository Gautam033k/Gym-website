import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer__container">
        <div className="footer2">
          <h3>Quick Links</h3>
          <ul className="permalinks">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html#about">About</a>
            </li>
            <li>
              <a href="index.html#plans">plans</a>
            </li>
            <li>
              <a href="index.html#testimonials">testimonials</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer3">
          <h3>Opening Hours</h3>
          <ul className="opening__hours">
            <li>
              <a href="/">
                Monday :<span> 5:00am - 9:00pm</span>
              </a>
            </li>
            <li>
              <a href="/">
                Tuesday :<span> 5:00am - 9:00pm</span>
              </a>
            </li>
            <li>
              <a href="/">
                Wednesday :<span> 5:00am - 9:00pm</span>
              </a>
            </li>
            <li>
              <a href="/">
                Thursday :<span> 5:00am - 9:00pm</span>
              </a>
            </li>
            <li>
              <a href="/">
                Friday :<span> 5:00am - 9:00pm</span>
              </a>
            </li>
            <li>
              <a href="/">
                Saturday :<span> 5:00am - 9:00pm</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer4">
          <h3>Contact US</h3>
          <p>
            <FontAwesomeIcon icon="fa-thin fa-phone-plus" /> +91 3345454376
          </p>
          <p>+91 9437467438</p>
          <p>bodyplusgym@gmail.com</p>
          <p>Erumad,India ,643239</p>
          <ul className="footer__socials">
            <li>
              <a href="facebook.com" target="_blank">
                <i className="uil uil-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="facebook.com" target="_blank">
                <i className="uil uil-instagram-alt"></i>
              </a>
            </li>
            <li>
              <a href="facebook.com" target="_blank">
                <i className="uil uil-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="facebook.com" target="_blank">
                <i className="uil uil-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer1">
          <div className="footer__logo">
            <a href="index.html">
              <h3>Body+ GYM</h3>
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            voluptates at nisi voluptatibus,
          </p>
          <div className="footer__subscribe">
            <input type="email" placeholder="Enter Email" required />
            <button type="submit">
              <i className="uil uil-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="copyright">
        <small>Copyright &copy; Body+ GYM Private ltd</small>
      </div>
    </footer>
  );
};

export default Footer;
