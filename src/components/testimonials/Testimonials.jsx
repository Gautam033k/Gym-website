import React from 'react';
import './testimonials.css';
import AVATAR1 from '../../assets/avatar1.jpg';
import AVATAR2 from '../../assets/avatar2.jpg';
import AVATAR3 from '../../assets/avatar3.jpg';
import AVATAR4 from '../../assets/avatar2.jpg';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h1>Testimonials</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum
        perferendis rerum sed consequatur, recusandae, ducimus veritatis dolorum
        expedita amet illo? Laborum autem quae iste dolores beatae eos nihil
        aperiam!
      </p>
      <div className="container testimonials__container">
        <article className="testimonial">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            necessitatibus vero autem, repellat eos, nobis harum reiciendis nisi
            iusto esse corrupti, voluptas eum. Labore doloremque, ipsum
            explicabo nesciunt nemo illo.
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={AVATAR1} alt="" />
            </div>
            <div className="testimonial__work">
              <p>
                <b>Nataliya Kuznetsova</b>
              </p>
              <small>Amazonka Russian muscle amazon</small>
            </div>
          </div>
        </article>
        <article className="testimonial">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            necessitatibus vero autem, repellat eos, nobis harum reiciendis nisi
            iusto esse corrupti, voluptas eum. Labore doloremque, ipsum
            explicabo nesciunt nemo illo.
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={AVATAR2} alt="" />
            </div>
            <div className="testimonial__work">
              <p>
                <b>Ronnie colemann</b>
              </p>
              <small>8X OLYMBIA WINNER</small>
            </div>
          </div>
        </article>
        <article className="testimonial">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            necessitatibus vero autem, repellat eos, nobis harum reiciendis nisi
            iusto esse corrupti, voluptas eum. Labore doloremque, ipsum
            explicabo nesciunt nemo illo.
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={AVATAR4} alt="" />
            </div>
            <div className="testimonial__work">
              <p>
                <b>Larry Wheels</b>
              </p>
              <small>BODY BUILDER </small>
            </div>
          </div>
        </article>
        <article className="testimonial">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            necessitatibus vero autem, repellat eos, nobis harum reiciendis nisi
            iusto esse corrupti, voluptas eum. Labore doloremque, ipsum
            explicabo nesciunt nemo illo.
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={AVATAR3} alt="" />
            </div>
            <div className="testimonial__work">
              <p>
                <b>Chris Bumstead</b>
              </p>
              <small>4X OLYMBIA WINNER</small>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
