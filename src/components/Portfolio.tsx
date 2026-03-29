import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'webapps' | 'tech' | 'content' | 'crypto' | 'writing'>('webapps');

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="row padding-15">
          <div className="section-title">
            <h2 className="intro">Portfolio</h2>
          </div>
        </div>
        <div className="row padding-15">
          <div className="row padding-15 portfolio--category--buttons">
            <div className="portfolio--subheading">
              <a
                href="#webapps"
                className={`buttons ${activeCategory === 'webapps' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveCategory('webapps'); }}
              >
                <i className="fa-solid fa-tag"></i> &nbsp; WebApps Developement
              </a>
              <a
                href="#tech"
                className={`buttons ${activeCategory === 'tech' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveCategory('tech'); }}
              >
                <i className="fa-solid fa-tag"></i> &nbsp; Technical Writeups
              </a>
              <a
                href="#content"
                className={`buttons ${activeCategory === 'content' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveCategory('content'); }}
              >
                <i className="fa-solid fa-tag"></i> &nbsp; Content Creation
              </a>
              <a
                href="#crypto--trading"
                className={`buttons ${activeCategory === 'crypto' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveCategory('crypto'); }}
              >
                <i className="fa-solid fa-tag"></i> &nbsp; Crypto Trading
              </a>
              <a
                href="#writing"
                className={`buttons ${activeCategory === 'writing' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActiveCategory('writing'); }}
              >
                <i className="fa-solid fa-tag"></i> &nbsp; CopyWriting
              </a>
            </div>
          </div>

          {['webapps', 'tech', 'content'].includes(activeCategory) && (
            <div className="row amazon--kdp--button active" id="portfolio--cards--row">
              <div className="row" id="amazon--kdp">
                <div className="portfolio--category">
                  <h4>{activeCategory === 'webapps' ? 'WebApps Developement :' : activeCategory === 'tech' ? 'Technical Writeups :' : 'Content Creation :'}</h4>
                </div>
              </div>
              <div className="row">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div className="portfolio--cards" key={`amazon-${num}`}>
                    <div className="portfolio--cards--items">
                      <div
                        className="portfolio--cards--img"
                        id={`portfolio--cards--img--${num}`}
                        style={{
                          backgroundImage: `url(./assets/images/portfolio--cards--img/Amazon--kdp/p${num}.${num === 3 ? 'jpeg' : num === 4 || num === 6 ? 'jpg' : 'png'})`
                        }}
                      />
                      <div className="portfolio--img--alt">
                        Lorem ipsum dolor sit amet. <br />
                        {num === 4 ? '⭐⭐⭐⭐⭐' : num === 1 || num === 3 ? '⭐⭐⭐⭐' : '⭐⭐⭐'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === 'crypto' && (
            <div className="row crypto--trading--button active" id="portfolio--cards--row">
              <div className="row" id="crypto--trading">
                <div className="portfolio--category">
                  <h4>Crypto Trading :</h4>
                </div>
              </div>
              <div className="row">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div className="portfolio--cards" key={`crypto-${num}`}>
                    <div className="portfolio--cards--items">
                      <div
                        className="portfolio--cards--img"
                        style={{
                          backgroundImage: `url(./assets/images/portfolio--cards--img/Crypto--Trading/p${num}.${num === 4 || num === 1 || num === 2 ? 'jpeg' : 'jpg'})`
                        }}
                      />
                      <div className="portfolio--img--alt">
                        Lorem ipsum dolor sit amet. <br />$50:00
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === 'writing' && (
            <div className="row writing--button active" id="portfolio--cards--row">
              <div className="row" id="writing">
                <div className="portfolio--category">
                  <h4>Writing :</h4>
                </div>
              </div>
              <div className="row">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div className="portfolio--cards" key={`writing-${num}`}>
                    <div className="portfolio--cards--items">
                      <div
                        className="portfolio--cards--img"
                        id={`portfolio--cards--img--${num}`}
                        style={{
                          backgroundImage: `url(./assets/images/portfolio--cards--img/Amazon--kdp/p${num}.${num === 3 ? 'jpeg' : num === 4 || num === 6 ? 'jpg' : 'png'})`
                        }}
                      />
                      <div className="portfolio--img--alt">
                        Lorem ipsum dolor sit amet. <br />
                        {num === 4 ? '⭐⭐⭐⭐⭐' : num === 1 || num === 3 ? '⭐⭐⭐⭐' : '⭐⭐⭐'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
