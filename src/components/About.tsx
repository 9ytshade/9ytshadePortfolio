import React from 'react';

type AboutProps = {
  onNavigate: (section: string) => void;
};

type TimelineItem = {
  date: string;
  title: string;
  desc: string;
};

const experience: TimelineItem[] = [
  {
    date: '2026 - Present',
    title: 'Admin / Moderator - Nexura',
    desc: 'Moderating the Nexura community, supporting healthy participation, and helping users connect with the Intuition ecosystem.'
  }
];

const skillGroups = [
  ['React.js', 'TypeScript', 'Frontend Architecture', 'Responsive UI'],
  ['Web3 Apps', 'GenLayer', 'Intuition', 'Technical Research'],
  ['Community Moderation', 'Content Strategy', 'Technical Writing', 'Training']
];

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
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
              I work across Web3, AI, technical content, and community operations. My focus is turning complex
              systems into useful product experiences, clear explanations, and guided communities that people
              can trust.
            </p>
            <p>
              I am strongest on projects that need more than execution: early ecosystem products,
              developer-facing tools, technical onboarding, content explainers, and community operations
              where ambiguity has to become a clear next step.
            </p>
            <div className="about-actions">
              <a href="#contact" className="buttons primary" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                Check Availability <i className="fa-solid fa-arrow-right"></i>
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

        <div className="timeline-grid single-timeline">
          <Timeline title="Experience" items={experience} />
        </div>
      </div>
    </section>
  );
};

type TimelineProps = {
  title: string;
  items: TimelineItem[];
};

const Timeline: React.FC<TimelineProps> = ({ title, items }) => (
  <section className="timeline-panel" aria-labelledby={`${title.toLowerCase()}-timeline`}>
    <h3 id={`${title.toLowerCase()}-timeline`}>{title}</h3>
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline--content" key={`${title}-${item.date}-${item.title}`}>
          <div className="timeline--date"><i className="fa fa-calendar"></i> {item.date}</div>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </article>
      ))}
    </div>
  </section>
);

export default About;
