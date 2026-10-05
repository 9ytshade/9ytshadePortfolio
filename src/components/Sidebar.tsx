import React, { useEffect, useRef, useState } from 'react';

type NavItem = {
  id: string;
  label: string;
  icon: string;
};

type SidebarProps = {
  activeSection: string;
  onNavigate: (section: string) => void;
};

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'fa-solid fa-house-chimney' },
  { id: 'about', label: 'About', icon: 'fa-solid fa-user' },
  { id: 'services', label: 'Services', icon: 'fa-solid fa-compass-drafting' },
  { id: 'portfolio', label: 'Work', icon: 'fa-solid fa-briefcase' },
  { id: 'contact', label: 'Contact', icon: 'fa-solid fa-paper-plane' }
];

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigationRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isMobileOpen) {
      return;
    }

    const handleOutsidePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (!navigationRef.current?.contains(target)) {
        setIsMobileOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleOutsidePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileOpen]);

  const handleNav = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    onNavigate(section);
    setIsMobileOpen(false); // Close mobile menu after navigating
  };

  return (
    <aside ref={navigationRef} className={`navigation ${isMobileOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
      {!isMobileOpen && (
        <div className="logo">
          <a href="#home" onClick={(e) => handleNav(e, 'home')}>
            <span>9yt</span>shade
          </a>
        </div>
      )}
      <button
        className="hamburger"
        type="button"
        aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMobileOpen}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <i className={isMobileOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </button>
      <nav className={`navigation--section ${isMobileOpen ? 'active' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                aria-current={activeSection === item.id ? 'page' : undefined}
                onClick={(e) => handleNav(e, item.id)}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="socials">
        <a href="https://x.com/9ytshade" title="Twitter" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://github.com/9ytshade" title="GitHub" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://9ytshade.medium.com/" title="Medium" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-medium"></i>
        </a>
        <a href="https://www.linkedin.com/in/ukpeflynn/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
