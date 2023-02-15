import React from 'react';
import './benifits.css';
import LUNGES from '../../assets/lunges.png';
import EXTENDED from '../../assets/extended.png';
import YOGA from '../../assets/yoga-pose.png';

const Benifits = () => {
  return (
    <section id="exercise">
      <div className="benifits__title">
        <h1>
          Benifits of <span>Excercise</span>{' '}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          recusandae pariatur harum recusandae pariatur harum
        </p>
      </div>
      <div
        className="container benifits__container "
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="inner-benifit">
          <div className="benifits__main">
            <div>
              <img src={LUNGES} alt="lunges" />
            </div>
            <div className="benifits__tagline">
              <h4>Healthy Life</h4>
              <p style={{ width: '15rem', marginBottom: '1%' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="benifits__main">
            <div>
              <img src={EXTENDED} alt="lunges" />
            </div>
            <div className="benifits__tagline">
              <h4>Increased Flexibility</h4>
              <p style={{ width: '15rem', marginBottom: '1%' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="benifits__main">
            <div>
              <img src={YOGA} alt="lunges" />
            </div>
            <div className="benifits__tagline">
              <h4>Reducing Blood Pressure</h4>
              <p style={{ width: '15rem', marginBottom: '1%' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Benifits;
