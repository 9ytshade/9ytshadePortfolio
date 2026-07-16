import React from 'react';

type HeroProps = {
  onNavigate: (section: string) => void;
};

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="container">
        <div className="hero-layout padding-15">
          <div className="user-info">
            <p className="eyebrow">Web3 frontend engineer / content strategist / community operator</p>
            <h1 className="signature">
              I turn complex blockchain ideas into useful products, trusted communities, and clear technical stories.
            </h1>
            <p className="details">
              I am 9ytshade, a Nigeria-based creator with roots in Physics and Digital Electronics. I build
              React interfaces, explain decentralized systems, and support ecosystem operations where clarity,
              trust, and execution all have to show up at once.
            </p>
            <div className="hero-actions">
              <a href="#portfolio" className="buttons primary" onClick={(e) => { e.preventDefault(); onNavigate('portfolio'); }}>
                View Selected Work <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="#contact" className="buttons secondary" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                Start a Project
              </a>
            </div>
            <dl className="hero-metrics" aria-label="Portfolio summary">
              <div>
                <dt>3</dt>
                <dd>shipped Web3 tools</dd>
              </div>
              <div>
                <dt>5</dt>
                <dd>technical content pieces</dd>
              </div>
              <div>
                <dt>2026</dt>
                <dd>Nexura community role</dd>
              </div>
            </dl>
          </div>
          <div className="hero-portrait">
            <div className="portrait-frame">
              <img src="./assets/images/Hero--Img--1.png" alt="Portrait of 9ytshade" />
            </div>
            <div className="orbit-card orbit-card-top">
              <span>Current Focus</span>
              <strong>AI + Web3 interfaces</strong>
            </div>
            <div className="orbit-card orbit-card-bottom">
              <span>Base</span>
              <strong>Uyo, Nigeria</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
