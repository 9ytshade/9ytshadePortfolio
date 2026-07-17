import React, { useEffect, useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

type SectionId = 'home' | 'about' | 'services' | 'portfolio' | 'contact';
type PortfolioCategory = 'webapps' | 'strategy' | 'moderation';

const App: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
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
      '.hero-terminal',
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

  useEffect(() => {
    const cursor = cursorRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (!cursor || reduceMotion || !canHover) {
      return;
    }

    const interactiveSelector = [
      'a',
      'button',
      'input',
      'textarea',
      'select',
      '.services--box',
      '.portfolio--cards',
      '.portfolio--cards--img',
      '.contact--links',
      '.hero-terminal'
    ].join(',');

    const state = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      opacity: 0,
      targetOpacity: 0,
      scale: 1,
      targetScale: 1
    };

    let animationFrame = 0;

    const animate = () => {
      state.x += (state.targetX - state.x) * 0.18;
      state.y += (state.targetY - state.y) * 0.18;
      state.opacity += (state.targetOpacity - state.opacity) * 0.18;
      state.scale += (state.targetScale - state.scale) * 0.16;

      cursor.style.opacity = state.opacity.toFixed(3);
      cursor.style.transform = `translate3d(${(state.x - 5).toFixed(2)}px, ${(state.y - 5).toFixed(2)}px, 0) scale(${state.scale.toFixed(3)})`;
      animationFrame = window.requestAnimationFrame(animate);
    };

    const moveCursor = (event: PointerEvent) => {
      state.targetX = event.clientX;
      state.targetY = event.clientY;
      state.targetOpacity = 1;
    };

    const hideCursor = () => {
      state.targetOpacity = 0;
    };

    const setCursorWeight = (event: PointerEvent) => {
      state.targetScale = event.target instanceof Element && event.target.closest(interactiveSelector) ? 2.4 : 1;
    };

    animationFrame = window.requestAnimationFrame(animate);
    window.addEventListener('pointermove', moveCursor, { passive: true });
    window.addEventListener('pointerover', setCursorWeight);
    window.addEventListener('pointerout', setCursorWeight);
    document.documentElement.addEventListener('mouseleave', hideCursor);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', moveCursor);
      window.removeEventListener('pointerover', setCursorWeight);
      window.removeEventListener('pointerout', setCursorWeight);
      document.documentElement.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

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
      <div className="site-cursor-glow" ref={cursorRef} aria-hidden="true"></div>
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
