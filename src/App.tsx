import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [portfolioCategory, setPortfolioCategory] = useState<'webapps' | 'strategy' | 'moderation'>('webapps');

  const navigateToPortfolio = (category: 'webapps' | 'strategy' | 'moderation') => {
    setPortfolioCategory(category);
    setActiveSection('portfolio');
  };

  return (
    <main>
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />
      
      {activeSection === 'home' && <Hero onNavigate={setActiveSection} />}
      {activeSection === 'about' && <About onNavigate={setActiveSection} />}
      {activeSection === 'services' && (
        <Services 
          onNavigate={setActiveSection} 
          onPortfolioNavigate={navigateToPortfolio} 
        />
      )}
      {activeSection === 'portfolio' && (
        <Portfolio initialCategory={portfolioCategory} />
      )}
      {activeSection === 'contact' && <Contact />}
    </main>
  );
};

export default App;
