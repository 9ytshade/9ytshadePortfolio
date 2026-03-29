import React from 'react';

type AboutProps = {
  onNavigate: (section: string) => void;
};

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus veritatis
                  esse. Fugit recusandae ea commodi ex autem similique ipsa a exercitationem porro,
                  corporis sit laudantium facere rerum rem temporibus.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem veniam
                  error quibusdam quo, nihil id rem maxime sit fugiat, sapiente blanditiis voluptates
                  similique? Magni nostrum distinctio atque voluptatibus laudantium labore.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi ipsa ab, vel
                  consequatur minus excepturi? Saepe atque soluta obcaecati odio at? Officiis eaque
                  magni assumenda! Adipisci deserunt quasi necessitatibus.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="user--details padding-15">
                <div className="row">
                  <div className="user--info">
                    <p>Birthday : <span>21st July, 1997</span></p>
                  </div>
                  <div className="user--info">
                    <p>Age : <span>28</span></p>
                  </div>
                  <div className="user--info">
                    <p>Website : <span>9ytshade.com</span></p>
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
                    <a href="./assets/INTELLIGENT CV (SE).pdf" download="9ytshade_CV.pdf" className="buttons btn">Download CV</a>
                    <a href="#contact" className="buttons" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Hire Me</a>
                  </div>
                </div>
              </div>
              <div className="user--skills padding-15">
                <div className="row">
                  <div className="skill--details">
                    <h5>Leadership</h5>
                    <div className="progress">
                      <div className="progress--bar" id="lead"></div>
                      <div className="progress--rate">75%</div>
                    </div>
                  </div>
                  <div className="skill--details">
                    <h5>Creativity</h5>
                    <div className="progress">
                      <div className="progress--bar" id="creat"></div>
                      <div className="progress--rate">92%</div>
                    </div>
                  </div>
                  <div className="skill--details">
                    <h5>Writing</h5>
                    <div className="progress">
                      <div className="progress--bar" id="writ"></div>
                      <div className="progress--rate">84%</div>
                    </div>
                  </div>
                  <div className="skill--details">
                    <h5>Oratory</h5>
                    <div className="progress">
                      <div className="progress--bar" id="orat"></div>
                      <div className="progress--rate">79%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="user--education padding-15">
                <h3>Education</h3>
                <div className="row">
                  <div className="timeline">
                    <div className="timeline--details">
                      {[1, 2, 3, 4].map((i) => (
                        <div className="timeline--content padding-15" key={`edu-${i}`}>
                          <div className="timeline--circle"></div>
                          <div className="timeline--date"><i className="fa fa-calendar"></i> 2013 - 2015</div>
                          <h4>B.Sc Political Science</h4>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                            incidunt eveniet quisquam doloremque maiores? Officia porro quod
                            consequuntur aliquid tenetur veritatis assumenda est, omnis
                            similique?
                          </p>
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
                      {['Lorem Pesa', 'Sempe Fi', 'Santix Maxi', 'Uno Numereno'].map((company, i) => (
                        <div className="timeline--content padding-15" key={`exp-${i}`}>
                          <div className="timeline--circle"></div>
                          <div className="timeline--date"><i className="fa fa-calendar"></i> 2013 - 2015</div>
                          <h4>{company}</h4>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                            incidunt eveniet quisquam doloremque maiores? Officia porro quod
                            consequuntur aliquid tenetur veritatis assumenda est, omnis
                            similique?
                          </p>
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
  );
};

export default About;
