import React from 'react';
import './about.css';
import ABOUT from '../../assets/about.png';

const About = () => {
  return (
    <section id="about">
      <h1 className="about__title">About us</h1>
      <div className="container">
        <article className="about__article">
          <div className="about__image">
            <img
              src={ABOUT}
              alt=""
              data-aos="fade-right"
              data-aos-duration="1500"
            />
          </div>
          <div className="about__content">
            <h2 className="about__article-title">Body+ GYM services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              recusandae pariatur harum praesentium quis debitis aliquid illum
              incidunt? Voluptas expedita dolore officia fugit enim amet commodi
              repudiandae pariatur unde inventore.
            </p>
            <a
              href="/"
              className="btn btn-primary"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Learn More
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
