import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

type SectionId = 'home' | 'about' | 'services' | 'portfolio' | 'contact';
type PortfolioCategory = 'webapps' | 'strategy' | 'moderation';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [portfolioCategory, setPortfolioCategory] = useState<PortfolioCategory>('webapps');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'));
    let ticking = false;

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.38;
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      const current = nearBottom
        ? sections.at(-1)
        : [...sections].reverse().find((section) => section.getBoundingClientRect().top <= marker);

      if (current?.id) {
        setActiveSection((previous) => (
          previous === current.id ? previous : current.id as SectionId
        ));
      }

      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveSection);
      }
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    requestUpdate();

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  useEffect(() => {
    const revealSelectors = [
      '.hero .eyebrow',
      '.hero .signature',
      '.hero .details',
      '.hero-actions',
      '.hero-metrics',
      '.hero-portrait',
      '.section-kicker',
      '.section-title',
      '.about-story',
      '.profile-card',
      '.skill-column',
      '.timeline-panel',
      '.services--box',
      '.portfolio-toolbar',
      '.portfolio--cards--container',
      '.contact-copy > *',
      '.contact--links',
      '.contact--form'
    ];

    let disconnectObserver: (() => void) | undefined;

    const timer = window.setTimeout(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors.join(',')));

      elements.forEach((element, index) => {
        element.classList.add('reveal-item');
        element.style.setProperty('--reveal-delay', `${Math.min((index % 6) * 45, 225)}ms`);
      });

      if (reduceMotion) {
        elements.forEach((element) => element.classList.add('is-visible'));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            } else {
              entry.target.classList.remove('is-visible');
            }
          });
        },
        { rootMargin: '-6% 0px -10% 0px', threshold: 0.12 }
      );

      elements.forEach((element) => observer.observe(element));
      disconnectObserver = () => observer.disconnect();
    }, 0);

    return () => {
      window.clearTimeout(timer);
      disconnectObserver?.();
    };
  }, [portfolioCategory]);

  const navigateToSection = (section: string) => {
    const nextSection = section as SectionId;
    setActiveSection(nextSection);
    document.getElementById(nextSection)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navigateToPortfolio = (category: PortfolioCategory) => {
    setPortfolioCategory(category);
    navigateToSection('portfolio');
  };

  return (
    <main className="site-shell">
      <Sidebar activeSection={activeSection} onNavigate={navigateToSection} />
      <Hero onNavigate={navigateToSection} />
      <About onNavigate={navigateToSection} />
      <Services
        onNavigate={navigateToSection}
        onPortfolioNavigate={navigateToPortfolio}
      />
      <Portfolio key={portfolioCategory} initialCategory={portfolioCategory} />
      <Contact />
    </main>
  );
};

export default App;
