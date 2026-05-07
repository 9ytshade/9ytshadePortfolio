import React, { useState, useEffect } from 'react';

interface PortfolioProps {
  initialCategory?: 'webapps' | 'strategy' | 'moderation';
}

const Portfolio: React.FC<PortfolioProps> = ({ initialCategory }) => {
  const [activeCategory, setActiveCategory] = useState<'webapps' | 'strategy' | 'moderation'>(initialCategory || 'webapps');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const portfolioData = {
    webapps: [
      {
        title: 'GenLayer AI Chatbot',
        desc: 'An AI-powered chatbot interface for the GenLayer ecosystem, enabling natural language interactions with Intelligent Contracts.',
        img: './assets/images/portfolio/webapps/bot.png',
        tags: ['React', 'GenLayer', 'AI'],
        link: 'https://genlayer-bot.vercel.app'
      },
      {
        title: 'GenLayer SentimentBot',
        desc: 'An Intelligent Contract-driven sentiment analysis tool that monitors and responds to community sentiment on-chain.',
        img: './assets/images/portfolio/webapps/sentiment.png',
        tags: ['GenLayer', 'NLP', 'Web3'],
        link: 'https://genlayer-sentiment-bot.vercel.app'
      },
      {
        title: 'Trust Checker',
        desc: 'A decentralized verification tool built on Intuition, designed to assess and validate trust metrics within the Web3 space.',
        img: './assets/images/portfolio/webapps/trust.png',
        tags: ['React', 'Intuition', 'Web3'],
        link: 'https://trust-checker-by-9ytshade.vercel.app/'
      }
    ],
    strategy: [
      {
        title: 'Intuition: The Future of Identity',
        desc: 'Exploring how Intuition is building the brain of Web3, bringing identity, reputation, and memory on-chain using $TRUST.',
        img: './assets/images/portfolio/strategy/tweet1.png',
        tags: ['Web3', 'Identity', 'Intuition'],
        link: 'https://x.com/9ytshade/status/1952789817986523146',
        linkText: 'View Official X'
      },
      {
        title: 'Eliminating Centralized Risks with $UNIT',
        desc: 'A detailed breakdown of why stablecoins need to be built on Bitcoin Layer 1 to ensure decentralization and sovereignty.',
        img: './assets/images/portfolio/strategy/tweet2.png',
        tags: ['Bitcoin', 'Stablecoins', '$UNIT'],
        link: 'https://x.com/9ytshade/status/1966409598618767866',
        linkText: 'View Official X'
      },
      {
        title: 'Building Intelligent Contracts on GenLayer',
        desc: 'Episode 13: Exploring native Python support and LLM integration for the ultimate developer experience.',
        img: './assets/images/portfolio/strategy/tweet3.png',
        tags: ['GenLayer', 'AI', 'Python'],
        link: 'https://x.com/9ytshade/status/2052375408067191135',
        linkText: 'View Official X'
      },
      {
        title: 'Bridging to Citrea Mainnet',
        desc: 'A step-by-step guide to bridging and swapping on Citrea mainnet using JuiceSwap and Zentra Finance.',
        img: './assets/images/portfolio/strategy/tweet4.png',
        tags: ['Citrea', 'L2', 'DeFi'],
        link: 'https://x.com/9ytshade/status/2049492851134808564',
        linkText: 'View Official X'
      },
      {
        title: 'Native Liquidation Mechanisms on Bitcoin',
        desc: 'Understanding the first native liquidation mechanism built on Bitcoin L1 for the $UNIT stablecoin system.',
        img: './assets/images/portfolio/strategy/tweet5.png',
        tags: ['Bitcoin', 'DeFi', 'Liquidation'],
        link: 'https://x.com/9ytshade/status/1969010434054451473',
        linkText: 'View Official X'
      }
    ],
    moderation: [
      {
        title: 'Nexura: The Engagement Engine',
        desc: 'Nexura is the engagement engine for the Intuition ecosystem, designed to turn passive users into active contributors and connect builders with their community through meaningful participation.',
        img: './assets/images/portfolio/moderation/nexura-logo.png',
        tags: ['Intuition', 'Community', 'Engagement'],
        link: 'https://x.com/NexuraXYZ',
        linkText: 'View Official X'
      }
    ]
  };

  return (
    <>
      <section className="section" id="portfolio">
        <div className="container">
          <div className="row padding-15">
            <div className="section-title">
              <h2 className="intro">Portfolio</h2>
            </div>
          </div>

          <div className="row padding-15">
            <div className="portfolio--category--buttons">
              <div className="portfolio--subheading">
                <a
                  href="#webapps"
                  className={`buttons ${activeCategory === 'webapps' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); setActiveCategory('webapps'); }}
                >
                  <i className="fa-solid fa-code"></i> WebApps Development
                </a>
                <a
                  href="#strategy"
                  className={`buttons ${activeCategory === 'strategy' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); setActiveCategory('strategy'); }}
                >
                  <i className="fa-solid fa-pen-nib"></i> Content Strategy
                </a>
                <a
                  href="#moderation"
                  className={`buttons ${activeCategory === 'moderation' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); setActiveCategory('moderation'); }}
                >
                  <i className="fa-solid fa-users-gear"></i> Community Moderation
                </a>
              </div>
            </div>
          </div>

          <div className="row portfolio--cards--container padding-15">
            <div className="portfolio--category">
              <h4>
                {activeCategory === 'webapps' ? 'WebApps Development' :
                  activeCategory === 'strategy' ? 'Content Strategy' :
                    'Community Moderation'}
              </h4>
            </div>

            <div className="row">
              {portfolioData[activeCategory].map((project, index) => (
                <div className="portfolio--cards" key={`${activeCategory}-${index}`}>
                  <div className="portfolio--cards--items">
                    <div
                      className="portfolio--cards--img"
                      style={{ backgroundImage: `url(${project.img})` }}
                      onClick={() => setSelectedImg(project.img)}
                    />
                    <div className="portfolio--card--content padding-15">
                      <h5>{project.title}</h5>
                      <p>{project.desc}</p>
                      <div className="portfolio--tags">
                        {project.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio--link"
                        >
                          {(project as any).linkText || 'View Live Site'} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={() => setSelectedImg(null)}>&times;</span>
            <img src={selectedImg} alt="Portfolio Preview" />
            <h3>Project Preview</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
