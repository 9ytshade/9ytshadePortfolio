import React from 'react';

type PortfolioCategory = 'webapps' | 'strategy' | 'moderation';

interface ServicesProps {
  onNavigate: (section: string) => void;
  onPortfolioNavigate: (category: PortfolioCategory) => void;
}

type Service = {
  icon: string;
  title: string;
  proof: string;
  desc: string;
  action: string;
  category?: PortfolioCategory;
};

const services: Service[] = [
  {
    icon: 'fa-solid fa-code',
    title: 'Frontend Product Builds',
    proof: 'React interfaces, TypeScript structure, responsive systems',
    desc: 'I build usable web apps for technical teams that need sharp interfaces, clear flows, and maintainable component logic.',
    action: 'View Apps',
    category: 'webapps'
  },
  {
    icon: 'fa-brands fa-ethereum',
    title: 'Web3 Tooling',
    proof: 'GenLayer, Intuition, trust and sentiment utilities',
    desc: 'I translate protocol ideas into working product surfaces that help users understand what the system can actually do.',
    action: 'See Web3 Work',
    category: 'webapps'
  },
  {
    icon: 'fa-solid fa-pen-nib',
    title: 'Technical Content Strategy',
    proof: 'Identity, stablecoins, Bitcoin L2s, intelligent contracts',
    desc: 'I write and structure technical narratives that make complex ecosystems easier to evaluate, share, and remember.',
    action: 'Read Examples',
    category: 'strategy'
  },
  {
    icon: 'fa-solid fa-users-gear',
    title: 'Community Operations',
    proof: 'Moderation, engagement, onboarding, trust-building',
    desc: 'I support communities with calm moderation, clear responses, and participation systems that keep ecosystem momentum healthy.',
    action: 'View Community',
    category: 'moderation'
  },
  {
    icon: 'fa-solid fa-chalkboard-user',
    title: 'Technical Training',
    proof: 'Student guidance, practical projects, digital literacy',
    desc: 'I help learners and teams build confidence through hands-on sessions, structured practice, and patient technical explanation.',
    action: 'Book Session'
  },
  {
    icon: 'fa-solid fa-microchip',
    title: 'Analytical Consulting',
    proof: 'Product reasoning, systems thinking, and clear decision paths',
    desc: 'I bring quantitative reasoning to messy technical questions, helping teams break vague problems into testable decisions.',
    action: 'Start Brief'
  }
];

const Services: React.FC<ServicesProps> = ({ onNavigate, onPortfolioNavigate }) => {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-kicker">Craft System</div>
        <div className="section-title">
          <h2 className="intro">Three disciplines, one operating rhythm.</h2>
          <p>
            Build the product, explain the technology, support the people using it. That combination is
            the edge I bring to early Web3 teams and technical communities.
          </p>
        </div>

        <div className="service-lattice">
          {services.map((service, index) => (
            <article className="services--box" key={service.title} style={{ '--i': index } as React.CSSProperties}>
              <div className="services--icons">
                <i className={service.icon}></i>
              </div>
              <div className="service-copy">
                <span>{service.proof}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
              <button
                onClick={() => service.category ? onPortfolioNavigate(service.category) : onNavigate('contact')}
                className="buttons secondary compact"
                type="button"
              >
                {service.action}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
