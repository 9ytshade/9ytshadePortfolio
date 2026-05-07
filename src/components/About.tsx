import React, { useState } from 'react';

type AboutProps = {
  onNavigate: (section: string) => void;
};

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <>
      <section className="section" id="about">
        <div className="container">
          <div className="row padding-15">
            <div className="section-title">
              <h2 className="intro">About Me</h2>
            </div>
          </div>
          <div className="row padding-15">
            <div className="about-content">
              <div className="row padding-15">
                <div className="about--content--text">
                  <p>
                    My journey began in the world of Digital Electronics and  Physics, which cultivated a
                    deep-seated passion for analytical problem-solving and structured logic.
                    This foundation has been pivotal as I transitioned into technology, where
                    I now merge technical development with strategic leadership.
                    <br /><br />
                    From building interactive web applications and training students in foundational web technologies to managing
                    complex community operations, I bring a unique blend of
                    scientific rigor and creative innovation to the Web3 space. I am dedicated
                    to building decentralized solutions that are as robust as they are
                    accessible.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="user--details padding-15">
                  <div className="row">
                    <div className="user--info">
                      <p>X (Twitter) : <span>@9ytshade</span></p>
                    </div>
                    <div className="user--info">
                      <p>Email : <span>flynnbright@gmail.com</span></p>
                    </div>
                    <div className="user--info">
                      <p>Degree : <span>Physics</span></p>
                    </div>
                    <div className="user--info">
                      <p>Phone : <span>+234-814-995-6218</span></p>
                    </div>
                    <div className="user--info">
                      <p>City : <span>Uyo, Nigeria</span></p>
                    </div>
                    <div className="user--info">
                      <p>Freelance : <span>Available</span></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="button">
                      <button className="buttons btn" disabled title="CV will be available soon">Download CV</button>
                      <a href="#contact" className="buttons" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Hire Me</a>
                    </div>
                  </div>
                </div>
                <div className="user--skills padding-15">
                  <h3 className="skills--title">SKILLS & TECH</h3>
                  <div className="skills--pills--container">
                    {[
                      'React.js', 'Community Management', 'Technical Writing', 'Python', 'Linux Administration', 'Networking', 'Software Engineering'
                    ].map(skill => (
                      <span key={skill} className="skill--pill">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="user--education padding-15">
                  <h3>Education</h3>
                  <div className="row">
                    <div className="timeline">
                      <div className="timeline--details">
                        {[
                          {
                            date: '2015 - 2020',
                            title: 'B.Sc Physics',
                            desc: 'I hold a B.Sc in Physics from the University of Uyo, where I developed strong analytical reasoning, problem-solving, and quantitative analysis skills.',
                            certImage: './assets/images/certifications/physics.png'
                          },
                          {
                            date: '2021 - 2023',
                            title: 'Frontend Web Development',
                            desc: 'Completed intensive training in modern web technologies including React, Node.js, and TypeScript, focusing on building scalable and responsive applications.',
                            certImage: './assets/images/certifications/frontend.png'
                          },
                          {
                            date: '2023 - 2023',
                            title: 'Jobberman Accelerated Soft Skills Training',
                            desc: 'Completed intensive training in modern web technologies including React, Node.js, and TypeScript, focusing on building scalable and responsive applications.',
                            certImage: './assets/images/certifications/softskills.png'
                          },
                          {
                            date: '2024 - 2025',
                            title: 'Digital Content & Copywriting',
                            desc: 'Specialized certification in content strategy and persuasive writing, enhancing my ability to communicate complex ideas effectively to diverse audiences.',
                            certImage: './assets/images/certifications/digital_content.png'
                          },
                          {
                            date: '2025 - Present',
                            title: 'Blockchain & Web3 Development',
                            desc: 'Ongoing research and development in blockchain protocols and decentralized applications, focusing on the future of finance and technology.',
                            certImage: './assets/images/certifications/blockchain.png'
                          }
                        ].map((edu, i) => (
                          <div className="timeline--content padding-15" key={`edu-${i}`}>
                            <div className="timeline--circle"></div>
                            <div className="timeline--date"><i className="fa fa-calendar"></i> {edu.date}</div>
                            <h4>{edu.title}</h4>
                            <p>{edu.desc}</p>
                            <button
                              className="view-cert-btn"
                              disabled
                              title="Certification will be available soon"
                            >
                              <i className="fa-solid fa-certificate"></i> View Certification
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user--experience padding-15">
                  <h3>Experience</h3>
                  <div className="row">
                    <div className="timeline">
                      <div className="timeline--details">
                        {[
                          {
                            company: 'Admin/Moderator - Nexura',
                            date: '2026 - Present',
                            desc: 'Moderating and managing the Nexura community, ensuring a safe and engaging environment for users.'
                          },
                          {
                            company: 'Admin/Administrative Head - DGMDA',
                            date: '2023 - 2024',
                            desc: 'Led teaching staff operations by improving accountability systems, implementing digital record-keeping and communication frameworks, and coordinating stakeholder engagement to enhance student performance tracking and feedback processes.'
                          },
                          {
                            company: 'Training Assistant - Al-Gaddafi Computer Institute',
                            date: '2022 - 2023',
                            desc: 'Trained students in Microsoft Office and foundational web development, supervised practical data and web app projects, and coordinated hands-on learning sessions while tracking student progress.'
                          }
                        ].map((exp, i) => (
                          <div className="timeline--content padding-15" key={`exp-${i}`}>
                            <div className="timeline--circle"></div>
                            <div className="timeline--date"><i className="fa fa-calendar"></i> {exp.date}</div>
                            <h4>{exp.company}</h4>
                            <p>{exp.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={() => setSelectedCert(null)}>&times;</span>
            <img src={selectedCert} alt="Certification" />
            <h3>Certification</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
