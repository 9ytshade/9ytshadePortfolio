import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement | null) => void;
        createTweet: (tweetId: string, targetEl: HTMLElement, options?: Record<string, unknown>) => Promise<HTMLElement>;
      };
    };
  }
}

type PortfolioCategory = 'webapps' | 'strategy' | 'moderation';

interface PortfolioProps {
  initialCategory?: PortfolioCategory;
}

type ProjectLink = {
  label: string;
  url: string;
  icon?: string;
};

type Project = {
  title: string;
  role: string;
  challenge: string;
  outcome: string;
  img: string;
  tags: string[];
  link?: string;
  linkText?: string;
  links?: ProjectLink[];
  tweetId?: string;
};

const categoryLabels: Record<PortfolioCategory, string> = {
  webapps: 'Web Apps',
  strategy: 'Content Strategy',
  moderation: 'Community Ops'
};

const portfolioData: Record<PortfolioCategory, Project[]> = {
  webapps: [
    {
      title: 'ChainSettle',
      role: 'Autonomous two-stage milestone escrow and AI dispute court',
      challenge: 'Traditional freelance escrows stall in disputes or rely on biased human intermediaries that charge high arbitration fees.',
      outcome: 'Built an intelligent contract agreement protocol on GenLayer featuring milestone-based funding, autonomous consensus releases, and sovereign AI small-claims court.',
      img: './assets/images/portfolio/webapps/chainsettle.png',
      tags: ['Next.js', 'GenLayer', 'Intelligent Contracts', 'Escrow', 'AI Court'],
      links: [
        { label: 'Live App', url: 'https://chainsettle.vercel.app/', icon: 'fa-solid fa-arrow-up-right-from-square' },
        { label: 'GitHub', url: 'https://github.com/9ytshade/chainsettle', icon: 'fa-brands fa-github' },
        { label: 'Article', url: 'https://medium.com/@9ytshade/chainsettle-how-i-built-an-autonomous-two-stage-ai-escrow-and-small-claims-court-on-genlayer-3b87ab1eeeed?sharedUserId=9ytshade', icon: 'fa-brands fa-medium' }
      ]
    },
    {
      title: 'AgentSettle',
      role: 'Autonomous SLA & dispute arbitration protocol for AI agents',
      challenge: 'Autonomous AI agents need machine-verifiable task agreements with trustless collateral without human intervention.',
      outcome: 'Created a GenLayer agentic commerce protocol that complements x402 payments and ERC-8004 identity with natural language SLAs, double-sided staking, and consensus resolution.',
      img: './assets/images/portfolio/webapps/agentsettle.png',
      tags: ['React', 'GenLayer', 'AI Agents', 'x402', 'Arbitration'],
      links: [
        { label: 'Live App', url: 'https://agentsettle-olive.vercel.app/', icon: 'fa-solid fa-arrow-up-right-from-square' },
        { label: 'GitHub', url: 'https://github.com/9ytshade/agentsettle', icon: 'fa-brands fa-github' }
      ]
    },
    {
      title: 'CritiqProof',
      role: 'Skin-in-the-game consumer critique & staked oracle protocol',
      challenge: 'Fake review farms and unverified complaints corrupt commerce and destroy trust in digital marketplace feedback.',
      outcome: 'Developed an anti-Sybil consumer review protocol requiring reviewers to lock an economic stake with public proof, verified by GenLayer consensus validators.',
      img: './assets/images/portfolio/webapps/critiqproof.png',
      tags: ['Next.js', 'GenLayer', 'Anti-Sybil', 'Oracle', 'Staking'],
      links: [
        { label: 'Live App', url: 'https://critiqproof.vercel.app/', icon: 'fa-solid fa-arrow-up-right-from-square' },
        { label: 'GitHub', url: 'https://github.com/9ytshade/critiqproof', icon: 'fa-brands fa-github' }
      ]
    },
    {
      title: 'ProofPay',
      role: 'Intelligent Contract-powered public work escrow',
      challenge: 'Eliminate freelance payment disputes and proof verification bottlenecks through deterministic on-chain consensus.',
      outcome: 'Built a decentralized public bounty desk on GenLayer with validator assessment, live proof submission, and automated escrow release.',
      img: './assets/images/portfolio/webapps/proofpay.png',
      tags: ['React', 'GenLayer', 'Intelligent Contracts', 'Escrow', 'Web3'],
      links: [
        { label: 'Live App', url: 'https://9ytshade.vercel.app/', icon: 'fa-solid fa-arrow-up-right-from-square' },
        { label: 'GitHub', url: 'https://github.com/9ytshade/proofpay', icon: 'fa-brands fa-github' },
        { label: 'Article', url: 'https://9ytshade.medium.com/proofpay-how-we-built-an-intelligent-contract-powered-escrow-system-that-eliminates-freelance-f7f81bf54c17?sharedUserId=9ytshade', icon: 'fa-brands fa-medium' }
      ]
    },
    {
      title: 'Trust Checker',
      role: 'Decentralized trust verification utility',
      challenge: 'Help users evaluate trust signals in an environment where identity and reputation are difficult to inspect.',
      outcome: 'Delivered a verification-oriented interface built around Intuition and Web3 trust metrics.',
      img: './assets/images/portfolio/webapps/trust.png',
      tags: ['React', 'Intuition', 'Web3'],
      link: 'https://trust-checker-by-9ytshade.vercel.app/'
    }
  ],
  strategy: [
    {
      title: 'Why Deterministic Finality Matters for Financial Settlement',
      role: 'Technical investigation on BFT consensus & banking reorg risks',
      challenge: 'Probabilistic Nakamoto and Gasper consensus expose financial institutions to reorg risks that violate CPMI-IOSCO settlement mandates.',
      outcome: 'Deconstructed sub-second BFT consensus, Reth execution, and private mempools in Rayls Axyl, backed by live RPC latency audits and evidence boundary matrices.',
      img: './assets/images/portfolio/strategy/rayls-finality.png',
      tags: ['Rayls', 'BFT Consensus', 'Financial Settlement', 'Axyl', 'Research'],
      link: 'https://x.com/9ytshade/status/2110065482254458970',
      linkText: 'View on X',
      tweetId: '2110065482254458970'
    },
    {
      title: 'Deconstructing the Cryptography of Rayls Enygma & Selective Disclosure',
      role: 'Code-level audit of zk-SNARKs and homomorphic state commitments',
      challenge: 'Deconstruct the marketing myth that "only a proof leaves" and explain how regulated banking privacy operates across network boundaries.',
      outcome: 'Audited the 3-part payload (Encrypted Ciphertext + zk-SNARK + Audit Envelope) under Lei Complementar 105/2001 and BACEN Drex mandates with active pairing precompile 0x08 verification.',
      img: './assets/images/portfolio/strategy/rayls-enygma.png',
      tags: ['Rayls', 'Zero-Knowledge', 'Enygma', 'zk-SNARKs', 'Compliance'],
      link: 'https://x.com/9ytshade/status/2109222556918075865',
      linkText: 'View on X',
      tweetId: '2109222556918075865'
    },
    {
      title: 'Rayls: The 50% Burn Loop Investigation',
      role: 'Deep-dive on-chain architectural research',
      challenge: 'Examine how private banking privacy transactions on Axyl L1 trigger verifiable batch fee burns of public $RLS on Ethereum.',
      outcome: 'Published a code-level investigation and verification on Binance Square auditing Proof of Usage, Axyl L1, and verifiable batch deflation.',
      img: './assets/images/portfolio/strategy/rayls.png',
      tags: ['Rayls', 'Ethereum', 'DeFi', 'On-Chain Audit', 'Binance Square'],
      link: 'https://app.binance.com/uni-qr/cart/373705578108451?r=GMMEMGNT&l=en-AF&uco=WXE4amQSLSQtZi6lKxBb6w&uc=app_square_share_link&us=copylink',
      linkText: 'View on Binance Square'
    },
    {
      title: 'Intuition: The Future of Identity',
      role: 'Technical narrative and ecosystem positioning',
      challenge: 'Explain on-chain identity, reputation, and memory without losing non-technical readers.',
      outcome: 'Published a clear breakdown of Intuition and the $TRUST thesis for Web3 identity.',
      img: './assets/images/portfolio/strategy/tweet1.png',
      tags: ['Web3', 'Identity', 'Intuition'],
      link: 'https://x.com/9ytshade/status/1952789817986523146',
      linkText: 'View on X',
      tweetId: '1952789817986523146'
    },
    {
      title: 'Eliminating Centralized Risks with $UNIT',
      role: 'Stablecoin analysis and decentralization framing',
      challenge: 'Make the case for Bitcoin Layer 1 stablecoin infrastructure in practical, memorable language.',
      outcome: 'Created an argument-led breakdown of decentralization, sovereignty, and stablecoin risk.',
      img: './assets/images/portfolio/strategy/tweet2.png',
      tags: ['Bitcoin', 'Stablecoins', '$UNIT'],
      link: 'https://x.com/9ytshade/status/1966409598618767866',
      linkText: 'View on X',
      tweetId: '1966409598618767866'
    },
    {
      title: 'Building Intelligent Contracts on GenLayer',
      role: 'Developer education and product explanation',
      challenge: 'Introduce Python-native Intelligent Contracts and LLM integration in a way developers can quickly parse.',
      outcome: 'Wrote a technical explainer around GenLayer developer experience and contract behavior.',
      img: './assets/images/portfolio/strategy/tweet3.png',
      tags: ['GenLayer', 'AI', 'Python'],
      link: 'https://x.com/9ytshade/status/2052375408067191135',
      linkText: 'View on X',
      tweetId: '2052375408067191135'
    },
    {
      title: 'Bridging to Citrea Mainnet',
      role: 'Step-by-step ecosystem onboarding',
      challenge: 'Reduce friction for users bridging and swapping across Citrea, JuiceSwap, and Zentra Finance.',
      outcome: 'Published a practical walkthrough designed for users moving from interest to action.',
      img: './assets/images/portfolio/strategy/tweet4.png',
      tags: ['Citrea', 'L2', 'DeFi'],
      link: 'https://x.com/9ytshade/status/2049492851134808564',
      linkText: 'View on X',
      tweetId: '2049492851134808564'
    },
    {
      title: 'Native Liquidation Mechanisms on Bitcoin',
      role: 'Technical concept translation',
      challenge: 'Explain Bitcoin-native liquidation mechanics without burying readers in protocol complexity.',
      outcome: 'Produced a focused explainer on $UNIT, DeFi risk, and Bitcoin L1 infrastructure.',
      img: './assets/images/portfolio/strategy/tweet5.png',
      tags: ['Bitcoin', 'DeFi', 'Liquidation'],
      link: 'https://x.com/9ytshade/status/1969010434054451473',
      linkText: 'View on X',
      tweetId: '1969010434054451473'
    }
  ],
  moderation: [
    {
      title: 'Nexura: The Engagement Engine',
      role: 'Community moderation and ecosystem support',
      challenge: 'Support an engagement layer for Intuition by keeping participation useful, safe, and easy to understand.',
      outcome: 'Contributed moderation and community operations for Nexura as it connects builders and contributors.',
      img: './assets/images/portfolio/moderation/nexura-logo.png',
      tags: ['Intuition', 'Community', 'Engagement'],
      link: 'https://x.com/NexuraXYZ',
      linkText: 'View Nexura'
    }
  ]
};

const Portfolio: React.FC<PortfolioProps> = ({ initialCategory }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>(initialCategory || 'webapps');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const tweetContainerRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!selectedProject?.tweetId) return;

    let isSubscribed = true;
    const renderTweet = () => {
      if (!isSubscribed || !tweetContainerRef.current) return;
      if (window.twttr?.widgets?.createTweet) {
        tweetContainerRef.current.innerHTML = '';
        window.twttr.widgets.createTweet(selectedProject.tweetId!, tweetContainerRef.current, {
          theme: 'dark',
          conversation: 'none',
          align: 'center'
        }).catch(() => {
          // Fallback if network blocked
        });
      } else {
        setTimeout(renderTweet, 150);
      }
    };

    renderTweet();

    return () => {
      isSubscribed = false;
    };
  }, [selectedProject]);

  const projects = portfolioData[activeCategory];

  return (
    <>
      <section className="section portfolio-section" id="portfolio">
        <div className="container">
          <div className="section-kicker">Evidence</div>
          <div className="section-title portfolio-heading">
            <h2 className="intro">Selected work with a visible thesis.</h2>
            <p>
              These projects show the same pattern from different angles: make technical systems easier to
              use, easier to explain, and easier to trust.
            </p>
          </div>

          <div className="portfolio-toolbar" role="tablist" aria-label="Portfolio categories">
            {(Object.keys(categoryLabels) as PortfolioCategory[]).map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={activeCategory === category ? 'active' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>

          <div className="portfolio--cards--container">
            <div className="portfolio--category">
              <span>{projects.length.toString().padStart(2, '0')}</span>
              <h3>{categoryLabels[activeCategory]}</h3>
            </div>

            <div className="portfolio-grid">
              {projects.map((project, index) => (
                <article className="portfolio--cards" key={`${activeCategory}-${project.title}`} style={{ '--i': index } as React.CSSProperties}>
                  <button
                    type="button"
                    className="portfolio--cards--img"
                    style={{ backgroundImage: `url(${project.img})` }}
                    aria-label={`Preview ${project.title}`}
                    onClick={() => setSelectedProject(project)}
                  />
                  <div className="portfolio--card--content">
                    <span>{project.role}</span>
                    <h3>{project.title}</h3>
                    <p>{project.challenge}</p>
                    <strong>{project.outcome}</strong>
                    <div className="portfolio--tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    {project.links && project.links.length > 0 ? (
                      <div className="portfolio--links-group">
                        {project.links.map((actionLink) => (
                          <a
                            key={actionLink.label}
                            href={actionLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolio--link portfolio--link-pill"
                          >
                            {actionLink.label} <i className={actionLink.icon || 'fa-solid fa-arrow-up-right-from-square'}></i>
                          </a>
                        ))}
                      </div>
                    ) : project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio--link"
                      >
                        {project.linkText || 'View Live Site'} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={`${selectedProject.title} preview`} onClick={() => setSelectedProject(null)}>
          <div className={`modal-content project-modal ${selectedProject.tweetId ? 'has-tweet-embed' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="Close preview" onClick={() => setSelectedProject(null)}>&times;</button>
            <div className="modal-preview-media">
              <img src={selectedProject.img} alt={`${selectedProject.title} preview`} />
              {selectedProject.tweetId && (
                <div className="embedded-tweet-wrapper" ref={tweetContainerRef}>
                  <blockquote className="twitter-tweet" data-theme="dark" data-conversation="none">
                    <a href={selectedProject.link}>Loading interactive X article...</a>
                  </blockquote>
                </div>
              )}
            </div>
            <div>
              <span>{selectedProject.role}</span>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.outcome}</p>
              <div style={{ marginTop: '16px' }}>
                {selectedProject.links && selectedProject.links.length > 0 ? (
                  <div className="portfolio--links-group">
                    {selectedProject.links.map((actionLink) => (
                      <a
                        key={actionLink.label}
                        href={actionLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio--link portfolio--link-pill"
                      >
                        {actionLink.label} <i className={actionLink.icon || 'fa-solid fa-arrow-up-right-from-square'}></i>
                      </a>
                    ))}
                  </div>
                ) : selectedProject.link ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio--link"
                  >
                    {selectedProject.linkText || 'View Live Site'} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
