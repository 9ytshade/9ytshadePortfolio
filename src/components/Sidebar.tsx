import React, { useState } from 'react';

type SidebarProps = {
  activeSection: string;
  onNavigate: (section: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNav = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    onNavigate(section);
    setIsMobileOpen(false); // Close mobile menu after navigating
  };

  return (
    <aside className="navigation">
      {!isMobileOpen && (
        <div className="logo">
          <a href="#home" onClick={(e) => handleNav(e, 'home')}>
            <span>9yt</span>shade
          </a>
        </div>
      )}
      <div className="hamburger" style={{ marginLeft: isMobileOpen ? 'auto' : '0' }} onClick={() => setIsMobileOpen(!isMobileOpen)}>
        <i className={isMobileOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>
      <nav className={`navigation--section ${isMobileOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a
              href="#home"
              className={`home--butt ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => handleNav(e, 'home')}
            >
              <i className="fa-solid fa-house-chimney"></i> Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`about--butt ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleNav(e, 'about')}
            >
              <i className="fa-duotone fa-solid fa-user"></i> About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`services--butt ${activeSection === 'services' ? 'active' : ''}`}
              onClick={(e) => handleNav(e, 'services')}
            >
              <i className="fa-solid fa-list-ul"></i> Services
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={`portfolio--butt ${activeSection === 'portfolio' ? 'active' : ''}`}
              onClick={(e) => handleNav(e, 'portfolio')}
            >
              <i className="fa-solid fa-briefcase"></i> Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`contact--butt ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleNav(e, 'contact')}
            >
              <i className="fa-solid fa-phone-volume"></i> Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="socials">
        <a href="https://www.facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://www.linkedIn.com" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://www.whatsapp.com" title="WhatsApp" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
