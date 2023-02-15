import React from 'react';
import './download.css';
import APPLE from '../../assets/Apple-logo.png';
import GOOGLEPLAY from '../../assets/google playstore.png';
import FITNESS from '../../assets/fitnesslunges.png';

const Download = () => {
  return (
    <section id="downloadApp">
      <div className="container downloadApp__container">
        <div className="downloadApp__content">
          <h1>
            Download <br />
            App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse totam
            itaque laudantium, eum nulla ipsa sint, iste nisi in placeat
            assumenda est aspernatur! Voluptas quisquam deleniti magnam nam
            delectus veniam.
          </p>

          <div className="cta">
            <a
              className="btn btn-primary"
              href="www.apple.com"
              target="_blank"
              data-aos="flip-left"
              data-aos-duration="2000"
            >
              <div className="logo">
                <img src={APPLE} alt="" />
              </div>
              <span>
                <small>Download on the </small>
                <h4>App store</h4>
              </span>
            </a>
            <a
              className="btn btn-primary"
              href="www.apple.com"
              target="_blank"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="logo">
                <img src={GOOGLEPLAY} alt="" />
              </div>
              <span>
                <small>Get it on </small>
                <h4>Google play</h4>
              </span>
            </a>
          </div>
        </div>
        <div className="downloadApp__image">
          <img src={FITNESS} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Download;
