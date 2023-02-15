import React from 'react';
import './subscribe.css';

const Subscribe = () => {
  return (
    <section id="subscribe">
      <div className="container subscribe__container">
        <div className="subscribe__text">
          <h2>Subscribe to get Updated</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            quis vel dolorem, impedit optio non, obcaecati earum velit sapiente
            nemo incidunt magni doloribus rerum fugit, maxime aspernatur ipsum
            alias temporibus.
          </p>
        </div>

        <a href="/" className="btn subscribe__btn">
          Get Updates
        </a>
      </div>
    </section>
  );
};

export default Subscribe;
