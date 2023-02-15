import React from 'react';
import './clients.css';
import CLIENT1 from '../../assets/client1.png';
import CLIENT2 from '../../assets/client2.png';
import CLIENT3 from '../../assets/client3.png';
import CLIENT4 from '../../assets/client4.png';
import CLIENT5 from '../../assets/client5.png';
import CLIENT6 from '../../assets/client6.png';
import CLIENT7 from '../../assets/client7.png';
import CLIENT8 from '../../assets/client8.png';

const Clients = () => {
  return (
    <section id="clients">
      <h1>clients</h1>
      <p className="lead">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati odit
        officiis pariatur quae quod? Molestiae, ut voluptatibus ea obcaecati
        quas similique labore sequi, facilis molestias voluptate commodi fuga
        facere animi!
      </p>
      <div className="container clients__container">
        <div>
          <img src={CLIENT1} alt="" />
        </div>
        <div>
          <img src={CLIENT2} alt="" />
        </div>
        <div>
          <img src={CLIENT3} alt="" />
        </div>
        <div>
          <img src={CLIENT4} alt="" />
        </div>
        <div>
          <img src={CLIENT5} alt="" />
        </div>
        <div>
          <img src={CLIENT6} alt="" />
        </div>
        <div>
          <img src={CLIENT7} alt="" />
        </div>
        <div>
          <img src={CLIENT8} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
