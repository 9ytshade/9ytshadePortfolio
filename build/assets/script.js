// Navigation button references
const buttons = {
    home: document.querySelector('.home--butt'),
    about: document.querySelector('.about--butt'),
    services: document.querySelector('.services--butt'),
    portfolio: document.querySelector('.portfolio--butt'),
    contact: document.querySelector('.contact--butt')
};

// Section references
const sections = {
    home: document.querySelector('#home'),
    about: document.querySelector('#about'),
    services: document.querySelector('#services'),
    portfolio: document.querySelector('#portfolio'),
    contact: document.querySelector('#contact')
};

// Portfolio category references
const categories = {
    amazonKdp: document.querySelector('.amazon--kdp--button'),
    cryptoTrading: document.querySelector('.crypto--trading--button'),
    writing: document.querySelector('.writing--button')
};

// Helper function to set active button and show section
const setActiveSection = (activeBtn, sectionId) => {
    Object.values(buttons).forEach(btn => {
        if (btn) btn.classList.remove('active');
    });
    if (activeBtn) activeBtn.classList.add('active');
    
    // Hide all sections and show the active one
    Object.values(sections).forEach(section => {
        if (section) section.classList.add('hidden');
    });
    if (sections[sectionId]) sections[sectionId].classList.remove('hidden');
};

// Helper function to show category
const showCategory = (activeCategory) => {
    Object.values(categories).forEach(cat => {
        if (cat) cat.classList.add('hidden');
    });
    if (activeCategory) activeCategory.classList.remove('hidden');
};

// Navigation functions
const activeHome = () => setActiveSection(buttons.home, 'home');
const activeAbout = () => setActiveSection(buttons.about, 'about');
const activeServices = () => setActiveSection(buttons.services, 'services');
const activePortfolio = () => setActiveSection(buttons.portfolio, 'portfolio');
const activeContact = () => setActiveSection(buttons.contact, 'contact');

// Portfolio category functions with active state
const activeAmazonKdp = () => {
    setPortfolioActive(categories.amazonKdp, 'amazon');
    showCategory(categories.amazonKdp);
};
const activeCryptoTrading = () => {
    setPortfolioActive(categories.cryptoTrading, 'crypto');
    showCategory(categories.cryptoTrading);
};
const activeWriting = () => {
    setPortfolioActive(categories.writing, 'writing');
    showCategory(categories.writing);
};

// Helper function to set active portfolio button
const setPortfolioActive = (activeBtn, category) => {
    Object.values(categories).forEach(btn => {
        if (btn) btn.classList.remove('active');
    });
    if (activeBtn) activeBtn.classList.add('active');
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set home as active on load
    activeHome();
    
    // Set Amazon KDP as default active portfolio category
    if (categories.amazonKdp) {
        categories.amazonKdp.classList.add('active');
    }
    
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navSection = document.querySelector('.navigation--section');
    if (hamburger && navSection) {
        hamburger.addEventListener('click', () => {
            navSection.classList.toggle('active');
        });
    }
});