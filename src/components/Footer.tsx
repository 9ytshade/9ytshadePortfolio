import React from 'react';

type FooterProps = {
  onNavigate: (section: string) => void;
};

const footerLinks = [
  { id: 'home', label: 'Home', icon: 'fa-solid fa-house-chimney' },
  { id: 'about', label: 'About', icon: 'fa-solid fa-user' },
  { id: 'services', label: 'Services', icon: 'fa-solid fa-compass-drafting' },
  { id: 'portfolio', label: 'Work', icon: 'fa-solid fa-briefcase' },
  { id: 'contact', label: 'Contact', icon: 'fa-solid fa-paper-plane' }
];

const footerSocials = [
  {
    label: 'X / Twitter',
    href: 'https://x.com/9ytshade',
    icon: 'fa-brands fa-x-twitter'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/9ytshade',
    icon: 'fa-brands fa-github'
  },
  {
    label: 'Medium',
    href: 'https://9ytshade.medium.com/',
    icon: 'fa-brands fa-medium'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ukpeflynn/',
    icon: 'fa-brands fa-linkedin-in'
  },
  {
    label: 'Email',
    href: 'mailto:flynnbright@gmail.com',
    icon: 'fa-solid fa-envelope'
  }
];

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    event.preventDefault();
    onNavigate(section);
  };

  return (
    <footer className="site-footer" aria-label="Portfolio footer">
      <div className="container">
        <div className="footer-panel">
          <nav className="footer-nav" aria-label="Footer navigation">
            <span>Navigate</span>
            <div className="footer-icon-row">
              {footerLinks.map((link) => (
                <a
                  href={`#${link.id}`}
                  key={link.id}
                  aria-label={link.label}
                  title={link.label}
                  onClick={(event) => handleNavigate(event, link.id)}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </nav>

          <div className="footer-connect">
            <span>Connect</span>
            <div className="footer-icon-row">
              {footerSocials.map((social) => (
                <a
                  href={social.href}
                  key={social.label}
                  aria-label={social.label}
                  title={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <span>&copy; 2026 9ytshade. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
