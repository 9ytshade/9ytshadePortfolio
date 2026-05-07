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
            <h3 className="title">Web3 Developer, Frontend Engineer & Content Strategist</h3>
            <p className="details">
              I am a results-driven Web3 Developer, Frontend Engineer, and Content Strategist with a 
              background in Digital Electronics and Physics. I specialize in building decentralized 
              applications (dApps), leading technical operations, and managing high-growth communities 
              within the Web3 ecosystem. My mission is to bridge the gap between complex blockchain 
              technology and intuitive, user-centric experiences.
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
