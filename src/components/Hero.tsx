import React, { useEffect, useRef, useState } from 'react';

type HeroProps = {
  onNavigate: (section: string) => void;
};

type TerminalSequence = {
  command: string;
  output: string[];
};

const terminalSequences: TerminalSequence[] = [
  {
    command: 'initialize',
    output: [
      'Loading portfolio...',
      '✓ AI Solutions',
      '✓ Full Stack Development',
      '✓ Web3 Applications',
      '✓ Community Growth',
      'System Ready.'
    ]
  },
  {
    command: 'stack',
    output: ['React.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'Solidity']
  },
  {
    command: 'whoami',
    output: ['Software Engineer', 'AI Builder', 'Web3 Developer', 'Technical Content Creator', 'Community Strategist']
  },
  {
    command: 'current-focus',
    output: ['→ AI Agents', '→ Intelligent Automation', '→ Web3 Products', '→ Scalable Backend Systems']
  },
  {
    command: 'latest-project',
    output: ['Nexura Community Platform', 'Status:', '✓ Live']
  },
  {
    command: 'achievements',
    output: ['✓ Multiple Production Projects', '✓ AI Workflows Delivered', '✓ Web3 Products Built', '✓ Communities Managed']
  },
  {
    command: 'status',
    output: ['CPU          ██████████', 'Memory       ████████', 'Creativity   ██████████', 'Coffee       ███████']
  }
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const [typedCommand, setTypedCommand] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [isTerminalFading, setIsTerminalFading] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    const timers: number[] = [];

    const wait = (duration: number) => new Promise<void>((resolve) => {
      const timer = window.setTimeout(resolve, duration);
      timers.push(timer);
    });

    const runTerminal = async () => {
      let sequenceIndex = 0;

      while (!isCancelled) {
        const sequence = terminalSequences[sequenceIndex];
        setIsTerminalFading(false);
        setTypedCommand('');
        setTerminalOutput([]);

        for (const character of sequence.command) {
          if (isCancelled) return;
          setTypedCommand((current) => `${current}${character}`);
          await wait(48 + Math.random() * 22);
        }

        await wait(320);

        for (const line of sequence.output) {
          if (isCancelled) return;
          setTerminalOutput((current) => [...current, line]);
          await wait(170);
        }

        await wait(2400);
        setIsTerminalFading(true);
        await wait(320);
        sequenceIndex = (sequenceIndex + 1) % terminalSequences.length;
      }
    };

    runTerminal();

    return () => {
      isCancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (!hero || reduceMotion || !canHover) {
      return;
    }

    const layers = Array.from(hero.querySelectorAll<HTMLElement>('[data-parallax-strength]')).map((element) => ({
      element,
      strength: Number(element.dataset.parallaxStrength || 0),
      currentX: 0,
      currentY: 0,
      targetX: 0,
      targetY: 0
    }));

    let animationFrame = 0;

    const animate = () => {
      layers.forEach((layer) => {
        layer.currentX += (layer.targetX - layer.currentX) * 0.08;
        layer.currentY += (layer.targetY - layer.currentY) * 0.08;
        layer.element.style.setProperty('--px', `${layer.currentX.toFixed(2)}px`);
        layer.element.style.setProperty('--py', `${layer.currentY.toFixed(2)}px`);
      });

      animationFrame = window.requestAnimationFrame(animate);
    };

    const setParallaxTargets = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const normalizedX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const normalizedY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      layers.forEach((layer) => {
        layer.targetX = -normalizedX * layer.strength;
        layer.targetY = -normalizedY * layer.strength;
      });

    };

    const resetParallax = () => {
      layers.forEach((layer) => {
        layer.targetX = 0;
        layer.targetY = 0;
      });
    };

    animationFrame = window.requestAnimationFrame(animate);
    hero.addEventListener('pointermove', setParallaxTargets);
    hero.addEventListener('pointerleave', resetParallax);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      hero.removeEventListener('pointermove', setParallaxTargets);
      hero.removeEventListener('pointerleave', resetParallax);
    };
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="container">
        <div className="hero-layout padding-15">
          <div className="user-info">
            <p className="eyebrow">Web3 frontend engineer / content strategist / community operator</p>
            <h1 className="signature">
              I turn complex blockchain ideas into useful products, trusted communities, and clear technical stories.
            </h1>
            <p className="details">
              I am 9ytshade, a software engineer and technical creator building React interfaces, AI-powered
              workflows, Web3 products, and community systems where clarity, trust, and execution all have to
              show up at once.
            </p>
            <div className="hero-actions">
              <a href="#portfolio" className="buttons primary" onClick={(e) => { e.preventDefault(); onNavigate('portfolio'); }}>
                View Selected Work <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="#contact" className="buttons secondary" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                Start a Project
              </a>
            </div>
            <dl className="hero-metrics" aria-label="Portfolio summary">
              <div>
                <dt>5</dt>
                <dd>shipped Web3 tools</dd>
              </div>
              <div>
                <dt>8</dt>
                <dd>technical content pieces</dd>
              </div>
              <div>
                <dt>2026</dt>
                <dd>Nexura community role</dd>
              </div>
            </dl>
          </div>
          <div className="hero-portrait">
            <div className="floating-accent accent-rect accent-rect-large" data-parallax-strength="18" aria-hidden="true">
              <span></span>
            </div>
            <div className="floating-accent accent-square accent-square-medium" data-parallax-strength="28" aria-hidden="true">
              <span></span>
            </div>
            <div className="floating-accent accent-square accent-square-small" data-parallax-strength="36" aria-hidden="true">
              <span></span>
            </div>
            <div className="floating-accent accent-square accent-square-tiny" data-parallax-strength="44" aria-hidden="true">
              <span></span>
            </div>
            <div className="hero-terminal" data-parallax-strength="5" aria-label="Animated developer terminal">
              <div className="terminal-float">
                <div className="terminal-header">
                  <div className="terminal-dots" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="terminal-title">dev@9ytshade</span>
                </div>
                <div className={`terminal-body ${isTerminalFading ? 'is-fading' : ''}`}>
                  <div className="terminal-command">
                    <span className="terminal-prompt">$</span>
                    <span>{typedCommand}</span>
                    <span className="terminal-cursor">▌</span>
                  </div>
                  <div className="terminal-output">
                    {terminalOutput.map((line, index) => (
                      <span key={`${line}-${index}`} style={{ '--line-delay': `${index * 38}ms` } as React.CSSProperties}>
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="portrait-frame" data-parallax-strength="6">
              <img src="./assets/images/Hero--Img--1.png" alt="Portrait of 9ytshade" />
            </div>
            <div className="orbit-card orbit-card-top" data-parallax-strength="12">
              <span>Current Focus</span>
              <strong>AI + Web3 interfaces</strong>
            </div>
            <div className="orbit-card orbit-card-bottom" data-parallax-strength="9">
              <span>Base</span>
              <strong>Uyo, Nigeria</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
