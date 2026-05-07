import React from 'react';

interface ServicesProps {
  onNavigate: (section: string) => void;
  onPortfolioNavigate: (category: 'webapps' | 'strategy' | 'moderation') => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate, onPortfolioNavigate }) => {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="row padding-15">
          <div className="section-title">
            <h2 className="intro">Services</h2>
          </div>
        </div>
        <div className="row padding-15">
          <div className="services--box padding-15">
            <div className="services--box--contents">
              <div className="services--icons">
                <i className="fa-solid fa-code"></i>
              </div>
              <h4>Frontend Development</h4>
              <p>
                Building responsive, high-performance web applications using React,
                TypeScript, and modern CSS frameworks to deliver exceptional user experiences.
              </p>
              <button
                onClick={() => onPortfolioNavigate('webapps')}
                className="buttons"
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="services--box padding-15">
            <div className="services--box--contents">
              <div className="services--icons">
                <i className="fa-solid fa-chalkboard-user"></i>
              </div>
              <h4>Technical Training</h4>
              <p>
                Empowering individuals and teams with hands-on training in web
                development, digital literacy, and professional soft skills.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="buttons"
              >
                Book a Session
              </button>
            </div>
          </div>
          <div className="services--box padding-15">
            <div className="services--box--contents">
              <div className="services--icons">
                <i className="fa-brands fa-ethereum"></i>
              </div>
              <h4>Web3 & Blockchain</h4>
              <p>
                Building dApps, Navigating the decentralized landscape with insights into blockchain
                protocols, dApps, and technical crypto market analysis.
              </p>
              <button
                onClick={() => onPortfolioNavigate('webapps')}
                className="buttons"
              >
                View Web3 Apps
              </button>
            </div>
          </div>
          <div className="services--box padding-15">
            <div className="services--box--contents">
              <div className="services--icons">
                <i className="fa-solid fa-users-gear"></i>
              </div>
              <h4>Community Management</h4>
              <p>
                Leading and moderating digital communities to ensure safety,
                high engagement, and sustainable ecosystem growth.
              </p>
              <button
                onClick={() => onPortfolioNavigate('moderation')}
                className="buttons"
              >
                View moderation
              </button>
            </div>
          </div>
          <div className="services--box padding-15">
            <div className="services--box--contents">
              <div className="services--icons">
                <i className="fa-solid fa-pen-nib"></i>
              </div>
              <h4>Content Strategy</h4>
              <p>
                Crafting technical documentation and persuasive copy that translates
                complex concepts into engaging and accessible content.
              </p>
              <button
                onClick={() => onPortfolioNavigate('strategy')}
                className="buttons"
              >
                View strategy
              </button>
            </div>
          </div>
          <div className="services--box padding-15">
            <div className="services--box--contents">
              <div className="services--icons">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <h4>Analytical Consulting</h4>
              <p>
                Leveraging a background in Physics and Digital Electronics for
                data-driven problem solving and technical strategy.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="buttons"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
