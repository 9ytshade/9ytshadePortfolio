import React, { useState } from 'react';

type AboutProps = {
  onNavigate: (section: string) => void;
};

type TimelineItem = {
  date: string;
  title: string;
  desc: string;
  certImage?: string;
};

const education: TimelineItem[] = [
  {
    date: '2015 - 2020',
    title: 'B.Sc Physics',
    desc: 'Built the analytical base I now use for systems thinking, technical writing, and debugging complex product behavior.',
    certImage: './assets/images/certifications/physics.png'
  },
  {
    date: '2021 - 2023',
    title: 'Frontend Web Development',
    desc: 'Trained in modern interface development, with emphasis on React, reusable components, responsive layouts, and product usability.',
    certImage: './assets/images/certifications/frontend.png'
  },
  {
    date: '2023',
    title: 'Jobberman Soft Skills Training',
    desc: 'Strengthened communication, leadership, and workplace coordination skills used across training and community operations.',
    certImage: './assets/images/certifications/softskills.png'
  },
  {
    date: '2024 - 2025',
    title: 'Digital Content & Copywriting',
    desc: 'Focused on translating technical ideas into narratives people can understand, trust, and act on.',
    certImage: './assets/images/certifications/digital_content.png'
  },
  {
    date: '2025 - Present',
    title: 'Blockchain & Web3 Development',
    desc: 'Ongoing practice across decentralized applications, ecosystem tooling, and blockchain-focused technical education.',
    certImage: './assets/images/certifications/blockchain.png'
  }
];

const experience: TimelineItem[] = [
  {
    date: '2026 - Present',
    title: 'Admin / Moderator - Nexura',
    desc: 'Moderating the Nexura community, supporting healthy participation, and helping users connect with the Intuition ecosystem.'
  },
  {
    date: '2023 - 2024',
    title: 'Admin / Administrative Head - DGMDA',
    desc: 'Improved accountability systems, digital records, team communication, and stakeholder feedback loops for a learning environment.'
  },
  {
    date: '2022 - 2023',
    title: 'Training Assistant - Al-Gaddafi Computer Institute',
    desc: 'Guided students through Microsoft Office and foundational web development while supervising practical project work.'
  }
];

const skillGroups = [
  ['React.js', 'TypeScript', 'Frontend Architecture', 'Responsive UI'],
  ['Web3 Apps', 'GenLayer', 'Intuition', 'Technical Research'],
  ['Community Moderation', 'Content Strategy', 'Technical Writing', 'Training']
];

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <>
      <section className="section about-section" id="about">
        <div className="container">
          <div className="section-kicker">Trust Layer</div>
          <div className="section-title">
            <h2 className="intro">A technical mind with operator instincts.</h2>
            <p>
              My work sits where products, people, and technical narratives meet. I can build the interface,
              explain the system behind it, and help the community use it with confidence.
            </p>
          </div>

          <div className="about-grid">
            <article className="about-story">
              <span className="panel-label">Origin</span>
              <p>
                Physics trained me to respect evidence. Digital Electronics taught me to think in systems.
                Web3 gave that foundation a place to become useful: interfaces that feel understandable,
                communities that feel guided, and technical content that does not flatten the subject.
              </p>
              <p>
                I am strongest on projects that need more than execution: early ecosystem products,
                developer-facing tools, technical onboarding, content explainers, and community operations
                where ambiguity has to become a clear next step.
              </p>
              <div className="about-actions">
                <a className="buttons primary" href="./assets/INTELLIGENT CV (SE).pdf" download>
                  Download CV <i className="fa-solid fa-file-arrow-down"></i>
                </a>
                <a href="#contact" className="buttons secondary" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                  Check Availability
                </a>
              </div>
            </article>

            <aside className="profile-card" aria-label="Profile details">
              <div>
                <span>X / Twitter</span>
                <a href="https://x.com/9ytshade" target="_blank" rel="noopener noreferrer">@9ytshade</a>
              </div>
              <div>
                <span>Email</span>
                <a href="mailto:flynnbright@gmail.com">flynnbright@gmail.com</a>
              </div>
              <div>
                <span>Discipline</span>
                <strong>Web3, frontend, content, community</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>Uyo, Nigeria</strong>
              </div>
              <div>
                <span>Status</span>
                <strong>Available for selected work</strong>
              </div>
            </aside>
          </div>

          <div className="skill-matrix" aria-label="Capabilities">
            {skillGroups.map((group, groupIndex) => (
              <div className="skill-column" key={`skill-group-${groupIndex}`}>
                {group.map((skill) => (
                  <span key={skill} className="skill--pill">{skill}</span>
                ))}
              </div>
            ))}
          </div>

          <div className="timeline-grid">
            <Timeline title="Education" items={education} onViewCert={setSelectedCert} />
            <Timeline title="Experience" items={experience} />
          </div>
        </div>
      </section>

      {selectedCert && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Certification preview" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="Close preview" onClick={() => setSelectedCert(null)}>&times;</button>
            <img src={selectedCert} alt="Certification preview" />
          </div>
        </div>
      )}
    </>
  );
};

type TimelineProps = {
  title: string;
  items: TimelineItem[];
  onViewCert?: (image: string) => void;
};

const Timeline: React.FC<TimelineProps> = ({ title, items, onViewCert }) => (
  <section className="timeline-panel" aria-labelledby={`${title.toLowerCase()}-timeline`}>
    <h3 id={`${title.toLowerCase()}-timeline`}>{title}</h3>
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline--content" key={`${title}-${item.date}-${item.title}`}>
          <div className="timeline--date"><i className="fa fa-calendar"></i> {item.date}</div>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
          {item.certImage && onViewCert && (
            <button className="view-cert-btn" type="button" onClick={() => onViewCert(item.certImage!)}>
              <i className="fa-solid fa-certificate"></i> View Proof
            </button>
          )}
        </article>
      ))}
    </div>
  </section>
);

export default About;
