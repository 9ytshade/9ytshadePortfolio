import React from 'react';

type HeroProps = {
  onNavigate: (section: string) => void;
};

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row padding-15">
          <div className="user-info padding-15">
            <h2 className="name">Hello, my name is <span>9ytshade</span></h2>
            <p className="details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facilis harum
              nam optio sed necessitatibus omnis, voluptates fugiat obcaecati perspiciatis deleniti
              blanditiis et natus possimus est voluptatibus quaerat expedita tenetur.
            </p>
            <a href="#contact" className="buttons" id="hire-m" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
              Hire Me <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="user-img">
            <img src="./assets/images/Hero--Img--1.png" alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
