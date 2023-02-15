import React from 'react';
import { plansData } from '../../data/plandata';
// import whiteTick from '../../assets/whiteTick.png';

import './plans.css';

const Plans = () => {
  return (
    <div className="plans-contianer" id="plans">
      <h1>PLANS</h1>
      <div className="header-title">
        <h2>Ready to Join Us?</h2>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <p>{plan.name}</p>
            <span data-aos="zoom-in-up" data-aos-duration="1500">
              {plan.price}
            </span>

            <div className="feautres">
              {plan.features.map((feauture, i) => (
                <div className="feauture">
                  <img
                    className="imga"
                    src={plan.tick}
                    alt=""
                    style={{ width: '20px', padding: '4px' }}
                  />
                  <span key={i}>{feauture}</span>
                </div>
              ))}
            </div>

            <div>
              <span>see more benifits -{'>'} </span>
            </div>

            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
