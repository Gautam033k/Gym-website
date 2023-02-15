import React from 'react';
import './header.css';
// import GYMHEADER from '../../assets/gymheader.png';

const About = () => {
  return (
    <header>
      <div className="container header__contianer">
        <h1
          className="header__title"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Setup your <span>Fitness</span> with us!
        </h1>
        <p className="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa saepe
          incidunt non, commodi magni dolor animi dolores excepturi delectus est
          qui quia asperiores minus sint, tenetur voluptatum autem ad nam.
        </p>
        {/* <div className="header__image">
          <img src="" alt="header-item" />
        </div> */}

        <button className="btn header__btn">JOIN US</button>

        <div className="header__socials">
          <a href="facebook.com" target="_blank">
            <i className="uil uil-facebook-f"></i>
          </a>
          <a href="facebook.com" target="_blank">
            <i className="uil uil-instagram-alt"></i>
          </a>
          <a href="facebook.com" target="_blank">
            <i className="uil uil-linkedin"></i>
          </a>
          <a href="facebook.com" target="_blank">
            <i className="uil uil-twitter"></i>
          </a>
        </div>
      </div>

      <div className="header_decorator-1">
        <img src="./images/header-decorator1.png" alt="" />
      </div>
      <div className="header_decorator-2">
        <img src="./images/header-decorator-2.png" alt="" />
      </div>
    </header>
  );
};

export default About;
