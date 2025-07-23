"use client";

import React, { useState, useEffect, useRef } from 'react';
import './globals.css';

export default function EliteHubLanding() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [timeWasted, setTimeWasted] = useState(0);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [showCommandMenu, setShowCommandMenu] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentChartView, setCurrentChartView] = useState('liberation');
  const [currentPhase, setCurrentPhase] = useState('analysis');
  const [toggleStates, setToggleStates] = useState({
    projections: true,
    comparison: true,
    annotations: false
  });
  const [executiveInsightIndex, setExecutiveInsightIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [countersAnimated, setCountersAnimated] = useState(new Set());
  const [activeCostCard, setActiveCostCard] = useState(0);
  const [currentDashboardState, setCurrentDashboardState] = useState('current');
  const [transformationProgress, setTransformationProgress] = useState(0);
  
  // Refs for scroll animations and effects
  const metricsRef = useRef(null);
  const costRef = useRef(null);
  const transformationRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const processRef = useRef(null);
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  
  // Executive insight testimonials matching hero carousel companies
  const executiveInsights = [
    {
      company: "LSJTAX",
      executive: "Michael Richardson",
      title: "Managing Partner",
      quote: "EliteHub transformed our practice from chaos to clockwork precision. We handle 340% more clients with the same team while I've reclaimed my evenings and weekends.",
      impact: "26.8h weekly liberation"
    },
    {
      company: "Mason & Co",
      executive: "Charlotte Mason", 
      title: "Founder & CEO",
      quote: "From 80-hour weeks drowning in administration to 45-hour weeks focused purely on strategy. Our competitor response time went from days to minutes.",
      impact: "22.4h weekly liberation"
    },
    {
      company: "Brown Group",
      executive: "James Brown",
      title: "Group Director", 
      quote: "The precision is extraordinary. Every process runs like Swiss clockwork. I focus on growing our empire while the business operates autonomously.",
      impact: "28.9h weekly liberation"
    },
    {
      company: "Setter School",
      executive: "Sarah Williams",
      title: "Principal",
      quote: "From educational chaos to teaching excellence. Our administrative burden vanished, allowing pure focus on student outcomes.",
      impact: "24.1h weekly liberation"
    },
    {
      company: "Precision Tech",
      executive: "David Chen",
      title: "Technical Director",
      quote: "As a tech company, we should have automated first. EliteHub's precision surpassed our own capabilities. Development velocity increased 340% overnight.",
      impact: "25.7h weekly liberation"
    },
    {
      company: "Elite Legal",
      executive: "Rebecca Thompson",
      title: "Senior Partner",
      quote: "Legal precision meets Swiss engineering. Our case preparation time dropped 85% while quality soared. We handle complex litigation with unprecedented efficiency.",
      impact: "27.3h weekly liberation"
    }
  ];

  // Chart data for different views
  const chartData = {
    liberation: [
      { x: 80, y: 200, value: '3.2h', week: 'Week 1' },
      { x: 130, y: 175, value: '8.1h', week: 'Week 2' },
      { x: 180, y: 140, value: '14.7h', week: 'Week 3' },
      { x: 230, y: 100, value: '19.8h', week: 'Month 2' },
      { x: 280, y: 75, value: '23.4h', week: 'Month 3' },
      { x: 330, y: 60, value: '26.1h', week: 'Month 4' },
      { x: 380, y: 50, value: '27.8h', week: 'Month 5' },
      { x: 430, y: 45, value: '28.9h', week: 'Month 6' }
    ],
    efficiency: [
      { x: 80, y: 200, value: '12%', week: 'Week 1' },
      { x: 130, y: 175, value: '34%', week: 'Week 2' },
      { x: 180, y: 140, value: '58%', week: 'Week 3' },
      { x: 230, y: 100, value: '75%', week: 'Month 2' },
      { x: 280, y: 75, value: '87%', week: 'Month 3' },
      { x: 330, y: 60, value: '94%', week: 'Month 4' },
      { x: 380, y: 50, value: '97%', week: 'Month 5' },
      { x: 430, y: 45, value: '99%', week: 'Month 6' }
    ],
    revenue: [
      { x: 80, y: 200, value: '£12k', week: 'Week 1' },
      { x: 130, y: 175, value: '£28k', week: 'Week 2' },
      { x: 180, y: 140, value: '£45k', week: 'Week 3' },
      { x: 230, y: 100, value: '£78k', week: 'Month 2' },
      { x: 280, y: 75, value: '£120k', week: 'Month 3' },
      { x: 330, y: 60, value: '£180k', week: 'Month 4' },
      { x: 380, y: 50, value: '£240k', week: 'Month 5' },
      { x: 430, y: 45, value: '£320k', week: 'Month 6' }
    ]
  };

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Counter animation function
  const animateCounter = (counter) => {
    const counterId = counter.getAttribute('data-counter-id') || counter.textContent;
    
    if (countersAnimated.has(counterId)) return;
    
    const target = parseFloat(counter.getAttribute('data-target'));
    if (isNaN(target)) return;
    
    setCountersAnimated(prev => new Set([...prev, counterId]));
    
    let current = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        const displayValue = current > target ? target : current;
        
        if (target % 1 === 0) {
          counter.textContent = Math.ceil(displayValue);
        } else {
          counter.textContent = displayValue.toFixed(1);
        }
        
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target % 1 === 0 ? target : target.toFixed(1);
      }
    };
    
    updateCounter();
  };

  // Progress bar animation
  const animateProgressBar = (bar) => {
    const progress = bar.getAttribute('data-progress') || bar.getAttribute('data-width') || 100;
    const numericProgress = parseInt(progress.replace('%', ''));
    setTimeout(() => {
      bar.style.width = `${numericProgress}%`;
    }, 100);
  };

  // Chart line animation
  const animateChartLine = (line) => {
    const length = line.getTotalLength();
    line.style.strokeDasharray = length;
    line.style.strokeDashoffset = length;
    
    setTimeout(() => {
      line.style.transition = 'stroke-dashoffset 3s ease-out';
      line.style.strokeDashoffset = '0';
    }, 200);
  };

  // Advanced scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setNavScrolled(scrolled);
      setScrollY(window.scrollY);
    };

    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll, { passive: true });
    return () => window.removeEventListener('scroll', optimizedScroll);
  }, []);

  // Scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          if (entry.target.classList.contains('counter')) {
            setTimeout(() => animateCounter(entry.target), 200);
          }
          
          if (entry.target.classList.contains('progress-bar') || entry.target.classList.contains('breakdown-fill') || entry.target.classList.contains('category-bar')) {
            setTimeout(() => animateProgressBar(entry.target), 300);
          }
          
          if (entry.target.classList.contains('chart-line')) {
            setTimeout(() => animateChartLine(entry.target), 400);
          }
        }
      });
    }, observerOptions);

    const animatableElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .counter, .progress-bar, .chart-line, .breakdown-fill, .category-bar'
    );
    
    animatableElements.forEach(element => {
      animationObserver.observe(element);
    });

    return () => animationObserver.disconnect();
  }, []);

  // Executive insight rotation
  useEffect(() => {
    let interval;
    
    const startRotation = () => {
      interval = setInterval(() => {
        setExecutiveInsightIndex(prev => (prev + 1) % executiveInsights.length);
      }, 6000);
    };

    const timer = setTimeout(startRotation, 2000);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, []);

  // Chart switching functionality
  const switchChartView = (view) => {
    if (view === currentChartView) return;
    
    setCurrentChartView(view);
    
    const chartContainer = document.querySelector('.chart-container-professional');
    if (chartContainer) {
      chartContainer.classList.add('chart-loading');
      
      setTimeout(() => {
        updateChartForView(view);
        chartContainer.classList.remove('chart-loading');
      }, 300);
    }
  };

  // Chart update function
  const updateChartForView = (view) => {
    const currentData = chartData[view];
    const dataPoints = document.querySelectorAll('.professional-data-point');
    const chartLine = document.querySelector('.professional-chart-line');
    
    dataPoints.forEach((point, index) => {
      if (currentData[index]) {
        const textElement = point.querySelector('text');
        const circle = point.querySelector('circle');
        
        if (textElement) {
          textElement.textContent = currentData[index].value;
        }
        
        if (circle) {
          circle.setAttribute('cx', currentData[index].x);
          circle.setAttribute('cy', currentData[index].y);
        }
        
        if (textElement) {
          textElement.setAttribute('x', currentData[index].x);
          textElement.setAttribute('y', currentData[index].y - 20);
        }
      }
    });
    
    if (chartLine) {
      chartLine.style.strokeDashoffset = '1000';
      setTimeout(() => {
        chartLine.style.strokeDashoffset = '0';
      }, 100);
    }
  };

  // Testimonial navigation
  const handlePreviousTestimonial = () => {
    setActiveTestimonial(prev => prev === 0 ? 5 : prev - 1);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial(prev => (prev + 1) % 6);
  };

  // Phase switching
  const switchPhase = (phase) => {
    setCurrentPhase(phase);
  };

  // Toggle controls
  const toggleControl = (control) => {
    setToggleStates(prev => ({
      ...prev,
      [control]: !prev[control]
    }));
  };

  // Cursor glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Command menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowCommandMenu(true);
      }
      if (e.key === 'Escape') {
        setShowCommandMenu(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Time counter
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeWasted(prev => prev + 0.01);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % 6);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const showToastNotification = (message, type = 'success') => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">ELITEHUB</div>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          <div className="loading-text">Engineering Your Freedom</div>
        </div>
      </div>
    );
  }

  return (
    <>
      
      <div className="min-h-screen">
        {/* Cursor Glow Effect */}
        <div 
          className="cursor-glow"
          style={{ 
            left: `${cursorPosition.x}px`, 
            top: `${cursorPosition.y}px`,
            opacity: cursorPosition.x === 0 ? 0 : 1
          }}
        />
    
        {/* Toast Notification */}
        <div className={`toast ${showToast ? 'show' : ''}`}>
          <div className="toast-icon success"></div>
          <div className="toast-message">{toastMessage}</div>
        </div>
        
        {/* Command Menu */}
        <div className={`command-menu ${showCommandMenu ? 'show' : ''}`}>
          <input
            type="text"
            className="command-input"
            placeholder="Type a command or search..."
            autoFocus
          />
          <div className="command-results">
            <div className="command-item">
              <span className="command-item-icon"></span>
              <span className="command-item-text">Book a Call</span>
              <span className="command-item-shortcut">⌘B</span>
            </div>
            <div className="command-item">
              <span className="command-item-icon"></span>
              <span className="command-item-text">View Results</span>
              <span className="command-item-shortcut">⌘R</span>
            </div>
            <div className="command-item">
              <span className="command-item-icon"></span>
              <span className="command-item-text">Learn About Process</span>
              <span className="command-item-shortcut">⌘P</span>
            </div>
          </div>
        </div>

        {/* Top Notice Bar */}
        <div className="top-notice-bar">
          <div className="notice-content">
            <div className="notice-dot"></div>
            LIMITED AVAILABILITY • 3 EXECUTIVE POSITIONS REMAINING
          </div>
        </div>

        {/* Navigation */}
        <nav className={`premium-nav ${navScrolled ? 'nav-scrolled' : ''}`}>
          <div className="nav-container">
            <div className="logo">ELITEHUB</div>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#results">Results</a>
              <a href="#process">Process</a>
            </div>
            <a href="https://cal.com/elitehubnetwork/book-strategy-call" className="nav-cta" target="_blank" rel="noopener noreferrer">Book Your Call</a>
          </div>
        </nav>

        {/* Premium Hero Section */}
        <section ref={heroRef} className="hero-section animated-section">
          <div className="hero-background-elements">
            <div className="precision-grid parallax-slow"></div>
            <div className="geometric-pattern pattern-1 parallax-medium"></div>
            <div className="geometric-pattern pattern-2 parallax-fast"></div>
            <div className="geometric-pattern pattern-3 parallax-medium"></div>
            <div className="particle-system">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className={`precision-particle particle-${i + 1} parallax-fast`}></div>
              ))}
            </div>
            <div className="ambient-glow glow-1 parallax-slow"></div>
            <div className="ambient-glow glow-2 parallax-slow"></div>
          </div>
          
          <div className="hero-content">
            <div className="premium-badge fade-in-up">
              <span className="badge-text">EXCLUSIVE AUTOMATION ENGINEERING</span>
              <div className="badge-shimmer"></div>
            </div>

            <h1 className="hero-headline-premium fade-in-up stagger-1">
              <div className="headline-line-1">What if your business</div>
              <div className="headline-line-2">could run without you?</div>
              <div className="headline-underline"></div>
            </h1>

            <div className="hero-subheadlines-premium fade-in-up stagger-2">
              <p className="subheadline-main-premium">
                Swiss-precision automation systems that liberate 20+ hours weekly while scaling your revenue exponentially.
              </p>
              <p className="subheadline-secondary-premium">
                From operational chaos to effortless excellence. Your transformation begins now.
              </p>
            </div>

            <div className="hero-stats-grid fade-in-up stagger-3">
              <div className="hero-stat-item glass-card">
                <div className="stat-value counter" data-target="24" data-counter-id="hero-stat-1">24</div>
                <div className="stat-label">Average Weekly Liberation</div>
              </div>
              <div className="hero-stat-item glass-card">
                <div className="stat-value counter" data-target="14" data-counter-id="hero-stat-2">14</div>
                <div className="stat-label">Complete Implementation</div>
              </div>
              <div className="hero-stat-item glass-card">
                <div className="stat-value counter" data-target="96" data-counter-id="hero-stat-3">96</div>
                <div className="stat-label">Client Success Rate</div>
              </div>
            </div>

            <div className="hero-buttons-premium fade-in-up stagger-4">
              <a href="https://cal.com/elitehubnetwork/book-strategy-call" className="btn-primary-premium" target="_blank" rel="noopener noreferrer">
                <span className="btn-text">Secure Your Freedom</span>
                <div className="btn-glow"></div>
              </a>
              <a href="#proof" className="btn-secondary-premium">
                <span className="btn-text">View Results</span>
                <div className="btn-underline"></div>
              </a>
            </div>

            <div className="trusted-by-premium fade-in-up stagger-5">
              <div className="trusted-label-premium">Trusted by discerning executives</div>
              <div className="logo-carousel-premium">
                <div className="logo-track">
                  <div className="client-logo"><div className="logo-text tech">LSJTAX</div></div>
                  <div className="client-logo"><div className="logo-text serif">Mason & Co</div></div>
                  <div className="client-logo"><div className="logo-text modern">BROWN GROUP</div></div>
                  <div className="client-logo"><div className="logo-text premium">Setter School</div></div>
                  <div className="client-logo"><div className="logo-text tech">PRECISION TECH</div></div>
                  <div className="client-logo"><div className="logo-text serif">Elite Legal</div></div>
                  
                  <div className="client-logo"><div className="logo-text tech">LSJTAX</div></div>
                  <div className="client-logo"><div className="logo-text serif">Mason & Co</div></div>
                  <div className="client-logo"><div className="logo-text modern">BROWN GROUP</div></div>
                  <div className="client-logo"><div className="logo-text premium">Setter School</div></div>
                  <div className="client-logo"><div className="logo-text tech">PRECISION TECH</div></div>
                  <div className="client-logo"><div className="logo-text serif">Elite Legal</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-orb"></div>
        </div>

        {/* Premium Live Automation Metrics Section */}
        <section className="premium-metrics-section animated-section" ref={metricsRef}>
          <div className="metrics-background-effects">
            <div className="data-stream-1 parallax-medium"></div>
            <div className="data-stream-2 parallax-fast"></div>
            <div className="data-stream-3 parallax-slow"></div>
            <div className="premium-grid-overlay parallax-slow"></div>
          </div>

          <div className="section-container">
            <div className="metrics-header fade-in-up">
              <div className="metrics-badge-premium">
                <span className="badge-dot"></span>
                LIVE PERFORMANCE INTELLIGENCE
              </div>
              <h2 className="metrics-title-premium">Real-Time Client<br/><span className="text-gold">Liberation Analytics</span></h2>
              <p className="metrics-subtitle-premium">
                Every data point represents a business owner who reclaimed their freedom. 
                Your transformation timeline is calculated with Swiss precision.
              </p>
            </div>

            <div className="premium-metrics-grid">
              <div className="premium-dashboard-container glass-card-premium fade-in-left">
                <div className="dashboard-header">
                  <div className="dashboard-title-section">
                    <h3 className="dashboard-title">Automation Performance Dashboard</h3>
                    <div className="live-indicator">
                      <div className="live-dot"></div>
                      <span>Live Data</span>
                    </div>
                  </div>
                  
                  <div className="dashboard-controls">
                    <div className="view-selector">
                      <button 
                        className={`view-btn ${currentChartView === 'liberation' ? 'active' : ''}`}
                        onClick={() => switchChartView('liberation')}
                      >
                        Liberation Timeline
                      </button>
                      <button 
                        className={`view-btn ${currentChartView === 'efficiency' ? 'active' : ''}`}
                        onClick={() => switchChartView('efficiency')}
                      >
                        Efficiency Growth
                      </button>
                      <button 
                        className={`view-btn ${currentChartView === 'revenue' ? 'active' : ''}`}
                        onClick={() => switchChartView('revenue')}
                      >
                        Revenue Impact
                      </button>
                    </div>
                  </div>
                </div>

                <div className="advanced-chart-container">
                  <div className="chart-legend">
                    <div className="legend-item">
                      <div className="legend-color elite"></div>
                      <span>EliteHub Clients</span>
                    </div>
                    <div className="legend-item">
                      <div className="legend-color industry"></div>
                      <span>Industry Average</span>
                    </div>
                    <div className="legend-item">
                      <div className="legend-color projection"></div>
                      <span>6-Month Projection</span>
                    </div>
                  </div>

                  <div className="chart-container-professional">
                    <svg className="premium-interactive-chart" viewBox="0 0 600 280">
                      <defs>
                        <linearGradient id="eliteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.02" />
                        </linearGradient>
                        <linearGradient id="industryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0.02" />
                        </linearGradient>
                        <filter id="premiumGlow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                        <pattern id="chartGrid" width="50" height="30" patternUnits="userSpaceOnUse">
                          <path d="M 50 0 L 0 0 0 30" fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      
                      <rect width="100%" height="100%" fill="url(#chartGrid)" opacity="0.4" />
                      
                      <line x1="80" y1="40" x2="80" y2="220" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                      <line x1="80" y1="220" x2="520" y2="220" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                      
                      <text x="70" y="50" fill="rgba(255,255,255,0.7)" fontSize="12" textAnchor="end">30h</text>
                      <text x="70" y="80" fill="rgba(255,255,255,0.7)" fontSize="12" textAnchor="end">25h</text>
                      <text x="70" y="110" fill="rgba(255,255,255,0.7)" fontSize="12" textAnchor="end">20h</text>
                      <text x="70" y="140" fill="rgba(255,255,255,0.7)" fontSize="12" textAnchor="end">15h</text>
                      <text x="70" y="170" fill="rgba(255,255,255,0.7)" fontSize="12" textAnchor="end">10h</text>
                      <text x="70" y="200" fill="rgba(255,255,255,0.7)" fontSize="12" textAnchor="end">5h</text>
                      
                      <path
                        d="M 80 150 L 520 140"
                        fill="none"
                        stroke="rgba(255,107,107,0.6)"
                        strokeWidth="2"
                        strokeDasharray="8,4"
                        className="industry-line"
                      />
                      <text x="440" y="135" fill="rgba(255,107,107,0.8)" fontSize="11" fontWeight="500">Industry Ceiling</text>
                      
                      <path
                        d="M 80 220 L 80 200 L 130 175 L 180 140 L 230 100 L 280 75 L 330 60 L 380 50 L 430 45 L 480 43 L 520 42 L 520 220 Z"
                        fill="url(#eliteGradient)"
                        className="elite-performance-area"
                      />
                      
                      <path
                        d="M 80 200 L 130 175 L 180 140 L 230 100 L 280 75 L 330 60 L 380 50 L 430 45 L 480 43 L 520 42"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="4"
                        filter="url(#premiumGlow)"
                        className="professional-chart-line chart-line"
                      />
                      
                      {chartData[currentChartView].map((point, i) => (
                        <g key={i} className="professional-data-point">
                          <circle 
                            cx={point.x} 
                            cy={point.y} 
                            r="8" 
                            fill="#D4AF37" 
                            stroke="#fff"
                            strokeWidth="3"
                            filter="url(#premiumGlow)"
                            className="data-point-circle"
                          />
                          <circle 
                            cx={point.x} 
                            cy={point.y} 
                            r="15" 
                            fill="transparent" 
                            stroke="rgba(212, 175, 55, 0.4)"
                            strokeWidth="2"
                            className="data-point-ring"
                          />
                          <text 
                            x={point.x} 
                            y={point.y - 20} 
                            fill="#D4AF37" 
                            fontSize="11" 
                            textAnchor="middle"
                            fontWeight="700"
                            className="data-point-label"
                          >
                            {point.value}
                          </text>
                        </g>
                      ))}
                      
                      <text x="80" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Week 1</text>
                      <text x="130" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Week 2</text>
                      <text x="180" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Week 3</text>
                      <text x="230" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Month 2</text>
                      <text x="280" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Month 3</text>
                      <text x="330" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Month 4</text>
                      <text x="380" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Month 5</text>
                      <text x="430" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Month 6</text>
                    </svg>
                  </div>
                </div>

                <div className="realtime-stats">
                  <div className="stat-item">
                    <div className="stat-icon performance">
                      <div className="icon-core liberation"></div>
                    </div>
                    <div className="stat-text">
                      <div className="stat-value counter" data-target="247" data-counter-id="active-systems">247</div>
                      <div className="stat-label">Active Systems</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon efficiency">
                      <div className="icon-core uptime"></div>
                    </div>
                    <div className="stat-text">
                      <div className="stat-value counter" data-target="97.3" data-counter-id="efficiency-rate">97.3</div>
                      <div className="stat-label">Efficiency Rate</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon productivity">
                      <div className="icon-core value"></div>
                    </div>
                    <div className="stat-text">
                      <div className="stat-value counter" data-target="2.8" data-counter-id="productivity-gain">2.8</div>
                      <div className="stat-label">Productivity Gain</div>
                    </div>
                  </div>
                </div>

                <div className="enhanced-chart-controls">
                  <div className="controls-header">
                    <h4>Analysis Controls</h4>
                    <div className="data-refresh">
                      <div className="refresh-dot"></div>
                      <span>Updated 2 min ago</span>
                    </div>
                  </div>
                  
                  <div className="control-toggles">
                    <div className="toggle-group">
                      <label className="toggle-label">Show Projections</label>
                      <div 
                        className={`toggle-switch ${toggleStates.projections ? 'active' : ''}`}
                        onClick={() => toggleControl('projections')}
                      >
                        <div className="toggle-slider"></div>
                      </div>
                    </div>
                    
                    <div className="toggle-group">
                      <label className="toggle-label">Industry Comparison</label>
                      <div 
                        className={`toggle-switch ${toggleStates.comparison ? 'active' : ''}`}
                        onClick={() => toggleControl('comparison')}
                      >
                        <div className="toggle-slider"></div>
                      </div>
                    </div>
                    
                    <div className="toggle-group">
                      <label className="toggle-label">Data Annotations</label>
                      <div 
                        className={`toggle-switch ${toggleStates.annotations ? 'active' : ''}`}
                        onClick={() => toggleControl('annotations')}
                      >
                        <div className="toggle-slider"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="premium-content-panel fade-in-right">
                <div className="content-section">
                  <div className="section-badge premium">TRANSFORMATION INTELLIGENCE</div>
                  <h3 className="content-title">Beyond Time Savings:<br/>Complete Business Evolution</h3>
                  <p className="content-description">
                    Each data point represents a business leader who transformed from operational chaos to strategic freedom. 
                    Our Swiss-precision methodology ensures predictable, measurable liberation.
                  </p>
                </div>

                <div className="executive-insight-showcase">
                  <div className="insight-header">
                    <div className="insight-badge">EXECUTIVE INSIGHT</div>
                  </div>
                  <div className="insight-carousel">
                    <div className="insight-slide active" style={{ minHeight: '280px' }}>
                      <div className="insight-content">
                        <div className="company-badge">{executiveInsights[executiveInsightIndex].company}</div>
                        <blockquote style={{ 
                          fontSize: '15px', 
                          lineHeight: '1.5', 
                          marginBottom: '20px',
                          display: 'block',
                          wordWrap: 'break-word'
                        }}>
                          "{executiveInsights[executiveInsightIndex].quote}"
                        </blockquote>
                        <div className="insight-author">
                          <div className="author-info">
                            <div className="author-name">{executiveInsights[executiveInsightIndex].executive}</div>
                            <div className="author-title">{executiveInsights[executiveInsightIndex].title}</div>
                            <div className="author-impact">{executiveInsights[executiveInsightIndex].impact}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="live-performance-section">
                  <h4 className="performance-title">Live Performance Indicators</h4>
                  <div className="performance-grid">
                    <div className="performance-metric">
                      <div className="performance-icon liberation">
                        <div className="icon-core liberation"></div>
                      </div>
                      <div className="performance-data">
                        <div className="performance-value counter" data-target="1247" data-counter-id="hours-liberated">1247</div>
                        <div className="performance-label">Hours Liberated This Month</div>
                        <div className="performance-trend up">+23% vs last month</div>
                      </div>
                    </div>
                    
                    <div className="performance-metric">
                      <div className="performance-icon uptime">
                        <div className="icon-core uptime"></div>
                      </div>
                      <div className="performance-data">
                        <div className="performance-value">99.7%</div>
                        <div className="performance-label">System Uptime</div>
                        <div className="performance-trend stable">Enterprise Grade</div>
                      </div>
                    </div>

                    <div className="performance-metric">
                      <div className="performance-icon value">
                        <div className="icon-core value"></div>
                      </div>
                      <div className="performance-data">
                        <div className="performance-value">£847k</div>
                        <div className="performance-label">Client Value Generated</div>
                        <div className="performance-trend up">+156% growth rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-orb"></div>
        </div>

        {/* ===== NEW EXECUTIVE AUTOMATION SECTION ===== */}
        <section className="executive-automation-section animated-section">
          <div className="section-container">
            <div className="automation-header fade-in-up">
              <div className="section-badge gold">EXECUTIVE AUTOMATION</div>
              <h2 className="section-title">From Operational <span className="text-gold">Firefighting</span> to Strategic <span className="text-gold">Excellence</span></h2>
              <p className="section-subtitle">
                Swiss precision engineering transforms your business operations while you focus on what truly matters: growth, strategy, and profit.
              </p>
            </div>

            <div className="automation-comparison-grid fade-in-up stagger-2">
              {/* LEFT SIDE: Current Reality */}
              <div className="reality-panel current-reality glass-card">
                <div className="reality-header">
                  <div className="reality-badge current-badge">
                    <div className="status-dot current-dot"></div>
                    YOUR CURRENT REALITY
                  </div>
                  <h3 className="reality-title current-title">Drowning in Operations</h3>
                </div>

                <div className="reality-stats">
                  <div className="stat-block current-stat">
                    <div className="stat-number current-number">
                      <span className="counter" data-target="70" data-counter-id="current-hours">70</span>
                      <span className="stat-unit">hours/week</span>
                    </div>
                    <div className="stat-label">Operational firefighting</div>
                    <div className="stat-description">Endless admin consuming your life</div>
                  </div>

                  <div className="stat-block current-stat">
                    <div className="stat-number current-number">
                      <span>£</span><span className="counter" data-target="45" data-counter-id="current-cost">45</span><span>k yearly</span>
                    </div>
                    <div className="stat-label">Admin staff costs</div>
                    <div className="stat-description">Plus holidays, sick days, management overhead</div>
                  </div>

                  <div className="stat-block current-stat">
                    <div className="stat-number current-number">
                      <span className="counter" data-target="23" data-counter-id="current-growth">23</span><span>%</span>
                    </div>
                    <div className="stat-label">of time on actual business growth</div>
                    <div className="stat-description">Strategic thinking becomes impossible</div>
                  </div>

                  <div className="stat-block current-stat">
                    <div className="stat-number current-number">
                      <span className="stat-icon">📞</span> <span>Missed calls</span>
                    </div>
                    <div className="stat-label">Lost leads during holidays</div>
                    <div className="stat-description">Revenue hemorrhaging when you're away</div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: EliteHub Solution */}
              <div className="reality-panel solution-reality glass-card">
                <div className="reality-header">
                  <div className="reality-badge solution-badge">
                    <div className="status-dot solution-dot"></div>
                    WITH ELITEHUB AUTOMATION
                  </div>
                  <h3 className="reality-title solution-title">Focus on Scaling</h3>
                </div>

                <div className="reality-stats">
                  <div className="stat-block solution-stat">
                    <div className="stat-number solution-number">
                      <span className="counter" data-target="45" data-counter-id="solution-hours">45</span>
                      <span className="stat-unit">hours/week</span>
                    </div>
                    <div className="stat-label">Strategic work focus</div>
                    <div className="stat-description">Pure executive-level thinking</div>
                  </div>

                  <div className="stat-block solution-stat">
                    <div className="stat-number solution-number">
                      <span className="counter" data-target="90" data-counter-id="solution-reduction">90</span><span>% less</span>
                    </div>
                    <div className="stat-label">admin costs</div>
                    <div className="stat-description">Workflows replace expensive staff</div>
                  </div>

                  <div className="stat-block solution-stat">
                    <div className="stat-number solution-number">
                      <span className="counter" data-target="87" data-counter-id="solution-growth">87</span><span>%</span>
                    </div>
                    <div className="stat-label">of time on business development</div>
                    <div className="stat-description">Strategy, growth, and profit focus</div>
                  </div>

                  <div className="stat-block solution-stat">
                    <div className="stat-number solution-number">
                      <span>Zero missed leads</span>
                    </div>
                    <div className="stat-label">AI receptionist coverage</div>
                    <div className="stat-description">24/7 lead capture and qualification</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Real Examples Grid */}
            <div className="automation-examples-grid fade-in-up stagger-3">
              <div className="example-card glass-card">
                <div className="example-header">
                  <div className="example-icon"></div>
                  <h4 className="example-title">AI Receptionist</h4>
                </div>
                <div className="example-description">
                  Captures calls during holidays, weekends, and after hours. Never miss another lead.
                </div>
                <div className="example-result">
                  <span className="result-metric">+340% lead capture</span>
                </div>
              </div>

              <div className="example-card glass-card">
                <div className="example-header">
                  <div className="example-icon"></div>
                  <h4 className="example-title">Workflow Automation</h4>
                </div>
                <div className="example-description">
                  Replaces admin staff with intelligent workflows that never take sick days.
                </div>
                <div className="example-result">
                  <span className="result-metric">-85% admin costs</span>
                </div>
              </div>

              <div className="example-card glass-card">
                <div className="example-header">
                  <div className="example-icon"></div>
                  <h4 className="example-title">Lead Management</h4>
                </div>
                <div className="example-description">
                  24/7 follow-up sequences that nurture prospects while you sleep.
                </div>
                <div className="example-result">
                  <span className="result-metric">+156% conversions</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="automation-cta fade-in-up stagger-4">
              <div className="cta-content">
                <h3 className="cta-title">Ready to Reclaim Your Executive Focus?</h3>
                <p className="cta-subtitle">See exactly how we engineer your operational liberation</p>
                <a href="https://cal.com/elitehubnetwork/book-strategy-call" className="cta-button automation-cta-btn" target="_blank" rel="noopener noreferrer">
                  <span className="btn-text">Engineer My Freedom</span>
                  <div className="btn-glow"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-orb"></div>
        </div>

        {/* Premium Lives Reclaimed Section */}
        <section ref={caseStudiesRef} className="premium-lives-reclaimed-section animated-section" id="proof">
          <div className="testimonial-background-grid parallax-slow"></div>
          
          <div className="section-container">
            <div className="section-badge gold fade-in-up">EXECUTIVE TESTIMONIALS</div>
            <h2 className="section-title fade-in-up stagger-1">Lives <span className="text-gold">Reclaimed</span></h2>
            <p className="section-subtitle fade-in-up stagger-2">
              These aren't just business metrics. These are executives who reclaimed their time, 
              their sanity, and their strategic advantage through Swiss precision automation.
            </p>
            
            <div className="premium-testimonial-showcase">
              <div className="testimonial-navigation-controls">
                <button 
                  className="testimonial-arrow testimonial-arrow-left"
                  onClick={handlePreviousTestimonial}
                  aria-label="Previous testimonial"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>

                <div className="testimonial-content-wrapper">
                  <div className="testimonial-carousel-premium">
                    {[
                      {
                        company: "LSJTAX",
                        initials: "LSJ",
                        executive: "Michael Richardson",
                        title: "Managing Partner",
                        location: "Edinburgh",
                        timeLiberated: "12.8h",
                        revenueIncrease: "£98k",
                        efficiency: "+94%",
                        quote: "EliteHub transformed our practice from chaos to clockwork precision. We handle 180% more clients with the same team. I've reclaimed my evenings and weekends while our revenue soared.",
                        metrics: [
                          { label: "Client Capacity", value: "+180%", type: "success" },
                          { label: "Processing Time", value: "-76%", type: "success" },
                          { label: "Error Rate", value: "-94%", type: "success" }
                        ]
                      },
                      {
                        company: "Mason & Co",
                        initials: "M&C",
                        executive: "Charlotte Mason",
                        title: "Founder & CEO",
                        location: "London",
                        timeLiberated: "14.4h",
                        revenueIncrease: "£147k",
                        efficiency: "+87%",
                        quote: "From 65-hour weeks drowning in administration to 45-hour weeks focused purely on strategy. Our competitor response time went from days to minutes. Genuinely transformational.",
                        metrics: [
                          { label: "Strategic Time", value: "+320%", type: "success" },
                          { label: "Response Time", value: "-89%", type: "success" },
                          { label: "Market Share", value: "+28%", type: "success" }
                        ]
                      },
                      {
                        company: "BROWN GROUP",
                        initials: "BG",
                        executive: "James Brown",
                        title: "Group Director",
                        location: "Manchester",
                        timeLiberated: "16.9h",
                        revenueIncrease: "£234k",
                        efficiency: "+96%",
                        quote: "The precision is extraordinary. Every process runs like Swiss clockwork. I focus on growing our empire while the business operates autonomously. Genuinely life-changing.",
                        metrics: [
                          { label: "Operational Efficiency", value: "+267%", type: "success" },
                          { label: "Manual Tasks", value: "-91%", type: "success" },
                          { label: "Profit Margin", value: "+42%", type: "success" }
                        ]
                      },
                      {
                        company: "Setter School",
                        initials: "SS",
                        executive: "Sarah Williams",
                        title: "Principal",
                        location: "Birmingham",
                        timeLiberated: "11.1h",
                        revenueIncrease: "£87k",
                        efficiency: "+89%",
                        quote: "From educational chaos to teaching excellence. Our administrative burden vanished, allowing pure focus on student outcomes. Parents notice the difference immediately.",
                        metrics: [
                          { label: "Admin Reduction", value: "-84%", type: "success" },
                          { label: "Teaching Focus", value: "+78%", type: "success" },
                          { label: "Parent Satisfaction", value: "+134%", type: "success" }
                        ]
                      },
                      {
                        company: "PRECISION TECH",
                        initials: "PT",
                        executive: "David Chen",
                        title: "Technical Director",
                        location: "Leeds",
                        timeLiberated: "13.7h",
                        revenueIncrease: "£189k",
                        efficiency: "+92%",
                        quote: "As a tech company, we should have automated first. EliteHub's precision surpassed our own capabilities. Our development velocity increased 240% overnight.",
                        metrics: [
                          { label: "Development Speed", value: "+240%", type: "success" },
                          { label: "Bug Rate", value: "-81%", type: "success" },
                          { label: "Client Delivery", value: "+156%", type: "success" }
                        ]
                      },
                      {
                        company: "Elite Legal",
                        initials: "EL",
                        executive: "Rebecca Thompson",
                        title: "Senior Partner",
                        location: "Bristol",
                        timeLiberated: "15.3h",
                        revenueIncrease: "£167k",
                        efficiency: "+91%",
                        quote: "Legal precision meets Swiss engineering. Our case preparation time dropped 73% while quality soared. We handle complex litigation with unprecedented efficiency.",
                        metrics: [
                          { label: "Case Prep Time", value: "-73%", type: "success" },
                          { label: "Billing Accuracy", value: "+99.2%", type: "success" },
                          { label: "Client Satisfaction", value: "+67%", type: "success" }
                        ]
                      }
                    ].map((testimonial, index) => (
                      <div 
                        key={index} 
                        className={`premium-testimonial-card glass-card ${index === activeTestimonial ? 'active' : ''}`}
                      >
                        <div className="testimonial-header-premium">
                          <div className="company-avatar-premium">
                            <div className="avatar-initials-premium">{testimonial.initials}</div>
                            <div className="company-name-premium">{testimonial.company}</div>
                          </div>
                          <div className="executive-info-premium">
                            <h4>{testimonial.executive}</h4>
                            <p>{testimonial.title}</p>
                            <span className="location-premium">{testimonial.location}</span>
                          </div>
                          <div className="liberation-badge-premium">
                            <span className="badge-label-premium">LIBERATED</span>
                            <span className="badge-time-premium">{testimonial.timeLiberated}</span>
                          </div>
                        </div>

                        <div className="testimonial-content-premium">
                          <blockquote>"{testimonial.quote}"</blockquote>
                          
                          <div className="impact-metrics-premium">
                            <div className="primary-metrics-premium">
                              <div className="metric-item-premium">
                                <div className="metric-value-premium">{testimonial.timeLiberated}</div>
                                <div className="metric-label-premium">Weekly Liberation</div>
                              </div>
                              <div className="metric-item-premium">
                                <div className="metric-value-premium">{testimonial.revenueIncrease}</div>
                                <div className="metric-label-premium">Revenue Increase</div>
                              </div>
                              <div className="metric-item-premium">
                                <div className="metric-value-premium">{testimonial.efficiency}</div>
                                <div className="metric-label-premium">Efficiency Gain</div>
                              </div>
                            </div>
                            
                            <div className="detailed-metrics-premium">
                              {testimonial.metrics.map((metric, idx) => (
                                <div key={idx} className="detailed-metric-premium">
                                  <span className="metric-desc-premium">{metric.label}:</span>
                                  <span className={`metric-result-premium ${metric.type}`}>{metric.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  className="testimonial-arrow testimonial-arrow-right"
                  onClick={handleNextTestimonial}
                  aria-label="Next testimonial"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                  </svg>
                </button>
              </div>

              <div className="carousel-controls-premium">
                <div className="carousel-indicators-premium">
                  {Array.from({ length: 6 }, (_, index) => (
                    <div 
                      key={index}
                      className={`indicator-premium ${index === activeTestimonial ? 'active' : ''}`}
                      onClick={() => setActiveTestimonial(index)}
                    ></div>
                  ))}
                </div>
                <div className="carousel-progress-premium">
                  <div className="progress-bar-premium" style={{ width: `${((activeTestimonial + 1) / 6) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-orb"></div>
        </div>

        {/* Swiss Engineering Process */}
        <section ref={processRef} className="premium-swiss-engineering-section animated-section" id="process">
          <div className="engineering-background-grid parallax-medium"></div>
          
          <div className="section-container">
            <div className="section-badge blue fade-in-up">SWISS ENGINEERING PROCESS</div>
            <h2 className="section-title fade-in-up stagger-1">The <span className="text-gold">Method</span></h2>
            <p className="section-subtitle fade-in-up stagger-2">
              Precision engineering methodology developed over 4 years of executive liberation. 
              Each phase orchestrated with Swiss watchmaker attention to detail.
            </p>
            
            <div className="swiss-engineering-grid fade-in-up stagger-3">
              <div className="swiss-phase-card blueprint-phase glass-card">
                <div className="phase-card-header">
                  <div className="phase-icon-container">
                    <div className="swiss-phase-icon blueprint-icon">
                      <div className="icon-inner"></div>
                    </div>
                    <div className="phase-number">01</div>
                  </div>
                  <div className="phase-duration">2-3 Days</div>
                </div>
                
                <div className="phase-card-content">
                  <h3>Blueprint Engineering</h3>
                  <p className="phase-description">
                    Surgical analysis of every manual process with military precision. 
                    We map your complete operational ecosystem to identify liberation opportunities.
                  </p>
                  
                  <div className="phase-features">
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>47-point operational assessment</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Time hemorrhage identification</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Liberation potential calculation</span>
                    </div>
                  </div>
                  
                  <div className="phase-outcome">
                    <div className="outcome-metric">12.4h</div>
                    <div className="outcome-label">Average Recovery Potential</div>
                  </div>
                </div>
                
                <div className="phase-card-footer">
                  <div className="precision-indicator">
                    <div className="precision-dots">
                      <div className="dot active"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                    <span>Swiss Precision</span>
                  </div>
                </div>
              </div>

              <div className="swiss-phase-card architecture-phase glass-card">
                <div className="phase-card-header">
                  <div className="phase-icon-container">
                    <div className="swiss-phase-icon architecture-icon">
                      <div className="icon-inner"></div>
                    </div>
                    <div className="phase-number">02</div>
                  </div>
                  <div className="phase-duration">5-7 Days</div>
                </div>
                
                <div className="phase-card-content">
                  <h3>Architecture Design</h3>
                  <p className="phase-description">
                  Custom automation systems engineered with watchmaker precision. 
                    Every component designed for seamless integration and flawless operation.
                  </p>
                  
                  <div className="phase-features">
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Bespoke automation architecture</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Integration stress testing</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Performance optimization</span>
                    </div>
                  </div>
                  
                  <div className="phase-outcome">
                    <div className="outcome-metric">94.3%</div>
                    <div className="outcome-label">Process Coverage</div>
                  </div>
                </div>
                
                <div className="phase-card-footer">
                  <div className="precision-indicator">
                    <div className="precision-dots">
                      <div className="dot active"></div>
                      <div className="dot active"></div>
                      <div className="dot"></div>
                    </div>
                    <span>Swiss Precision</span>
                  </div>
                </div>
              </div>

              <div className="swiss-phase-card deployment-phase glass-card">
                <div className="phase-card-header">
                  <div className="phase-icon-container">
                    <div className="swiss-phase-icon deployment-icon">
                      <div className="icon-inner"></div>
                    </div>
                    <div className="phase-number">03</div>
                  </div>
                  <div className="phase-duration">3-5 Days</div>
                </div>
                
                <div className="phase-card-content">
                  <h3>Precision Deployment</h3>
                  <p className="phase-description">
                    Zero-disruption implementation with real-time monitoring. 
                    Your business continues operating while we engineer your freedom.
                  </p>
                  
                  <div className="phase-features">
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Seamless system integration</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Real-time monitoring</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Executive training sessions</span>
                    </div>
                  </div>
                  
                  <div className="phase-outcome">
                    <div className="outcome-metric">0</div>
                    <div className="outcome-label">Operational Disruption</div>
                  </div>
                </div>
                
                <div className="phase-card-footer">
                  <div className="precision-indicator">
                    <div className="precision-dots">
                      <div className="dot active"></div>
                      <div className="dot active"></div>
                      <div className="dot active"></div>
                    </div>
                    <span>Swiss Precision</span>
                  </div>
                </div>
              </div>

              <div className="swiss-phase-card evolution-phase glass-card">
                <div className="phase-card-header">
                  <div className="phase-icon-container">
                    <div className="swiss-phase-icon evolution-icon">
                      <div className="icon-inner"></div>
                    </div>
                    <div className="phase-number">04</div>
                  </div>
                  <div className="phase-duration">90 Days</div>
                </div>
                
                <div className="phase-card-content">
                  <h3>Continuous Evolution</h3>
                  <p className="phase-description">
                    Your systems learn, adapt, and optimize autonomously. 
                    White-glove support ensures peak performance while you dominate.
                  </p>
                  
                  <div className="phase-features">
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Autonomous optimization</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Performance analytics</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>White-glove support</span>
                    </div>
                  </div>
                  
                  <div className="phase-outcome">
                    <div className="outcome-metric">24/7</div>
                    <div className="outcome-label">Autonomous Operation</div>
                  </div>
                </div>
                
                <div className="phase-card-footer">
                  <div className="precision-indicator">
                    <div className="precision-dots">
                      <div className="dot active"></div>
                      <div className="dot active"></div>
                      <div className="dot active"></div>
                    </div>
                    <span>Swiss Precision</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-process-guarantee fade-in-up stagger-7">
              <div className="guarantee-badge-premium">SWISS PRECISION GUARANTEE</div>
              <h4>Executive-Grade Service Standard</h4>
              <p>
                Every system engineered with Swiss watchmaker precision. If we don't liberate 
                a minimum of 8 hours weekly within 21 days, we continue working at no additional cost 
                until your executive freedom is achieved.
              </p>
            </div>
          </div>
        </section>

        {/* Executive FAQ Portal */}
        <section className="premium-executive-faq-section animated-section">
          <div className="faq-background-grid parallax-slow"></div>
          
          <div className="section-container">
            <div className="section-badge neutral fade-in-up">EXECUTIVE BRIEFING</div>
            <h2 className="section-title fade-in-up stagger-1">Let's Be <span className="text-gold">Direct</span></h2>
            <p className="section-subtitle fade-in-up stagger-2">
              Executive-level answers to the strategic questions that matter. 
              No marketing fluff—just precise responses to your critical concerns.
            </p>
            
            <div className="premium-executive-faq-container">
              {[
                {
                  question: "I'm not technical. How can I manage systems I don't understand?",
                  answer: "Executive-grade simplicity by design. Every system operates through intuitive dashboards that require zero technical knowledge. Think luxury car—you don't need to understand the engine to enjoy the performance. Plus, our 90-day white-glove support ensures you're never alone.",
                  details: [
                    "One-click system monitoring dashboard",
                    "Plain English performance reports",
                    "24/7 executive support hotline",
                    "Comprehensive training included",
                    "90-day hand-holding guarantee"
                  ]
                },
                {
                  question: "What happens when something breaks after implementation?",
                  answer: "Swiss engineering means things rarely break. Our systems include built-in redundancy, automatic error correction, and real-time monitoring. When issues arise (less than 0.3% of the time), our response is immediate. You have direct access to our engineering team, not a call center.",
                  details: [
                    "99.4% historical uptime record",
                    "Built-in redundancy systems",
                    "Automatic error correction",
                    "Direct engineering team access",
                    "2-hour maximum response time"
                  ]
                },
                {
                  question: "How is this different from hiring a virtual assistant or employee?",
                  answer: "People get sick, take holidays, quit, and require management. Automation works 24/7/365 without breaks, never calls in sick, never asks for raises, and never quits. A skilled VA costs £2-4k monthly forever. Our systems pay for themselves in 6-8 weeks, then generate pure profit.",
                  details: [
                    "24/7/365 operation guaranteed",
                    "Zero ongoing salary costs",
                    "No holiday or sick days",
                    "Handles complex multi-step processes",
                    "6-8 week payback period"
                  ]
                },
                {
                  question: "What's your actual success rate with similar executives?",
                  answer: "94% of executives achieve 8+ hours weekly liberation within 21 days. The remaining 6% typically have unique compliance requirements that extend timeline, but all eventually succeed. Our methodology has been refined through 150+ executive transformations.",
                  details: [
                    "94% achieve 8+ hours weekly liberation",
                    "Average liberation: 13.7 hours weekly",
                    "150+ executive transformations completed",
                    "100% eventual success rate",
                    "Comprehensive performance tracking"
                  ]
                },
                {
                  question: "How do I know this will work for my specific industry?",
                  answer: "We've liberated executives across 47 industries—from legal practices to manufacturing, consulting to e-commerce. The principles of process automation are universal, but our implementation is industry-specific. We study your sector's unique requirements, compliance needs, and workflow patterns.",
                  details: [
                    "47 industries successfully automated",
                    "Industry-specific compliance expertise",
                    "Custom engineering for your sector",
                    "Regulatory requirement integration",
                    "Proven cross-industry methodology"
                  ]
                }
              ].map((faq, index) => (
                <div key={index} className={`premium-executive-faq-item glass-card fade-in-up stagger-${index + 3} ${openFaq === index ? 'active' : ''}`}>
                  <div className="premium-faq-question-executive" onClick={() => toggleFaq(index)}>
                    <h4>{faq.question}</h4>
                    <div className="premium-faq-toggle">
                      <div className={`premium-toggle-icon ${openFaq === index ? 'rotated' : ''}`}></div>
                    </div>
                  </div>
                  {openFaq === index && (
                    <div className="premium-faq-answer-executive">
                      <div className="premium-answer-content">
                        <p>{faq.answer}</p>
                        
                        <div className="premium-answer-details">
                          <h5>Key Points:</h5>
                          <ul>
                            {faq.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Liberation Finale */}
        <section className="premium-executive-liberation-finale animated-section">
          <div className="finale-background-effects parallax-slow"></div>
          
          <div className="section-container">
            <div className="finale-content">
              <div className="finale-badge fade-in-up">EXECUTIVE OPPORTUNITY</div>
              <h2 className="finale-title fade-in-up stagger-1">Your Liberation<br/><span className="text-gold">Awaits</span></h2>
              <p className="finale-subtitle fade-in-up stagger-2">
                3 executive positions available this month. Next intake: August 2025.
              </p>
              
              <div className="availability-showcase scale-in stagger-3">
                <div className="availability-meter">
                  <div className="meter-label">Current Month Availability</div>
                  <div className="meter-visual">
                    <svg className="availability-ring" width="160" height="160">
                      <circle cx="80" cy="80" r="70" stroke="rgba(212, 175, 55, 0.2)" strokeWidth="8" fill="transparent"/>
                      <circle cx="80" cy="80" r="70" stroke="#D4AF37" strokeWidth="8" fill="transparent" 
                              strokeLinecap="round" className="availability-progress"
                              style={{ strokeDasharray: '440', strokeDashoffset: '330' }}/>
                    </svg>
                    <div className="availability-number">3</div>
                  </div>
                  <div className="availability-text">Executive Positions</div>
                  <div className="urgency-indicator">17 days until intake closes</div>
                </div>
                
                <div className="exclusivity-factors">
                  <div className="factor-item">
                    <div className="factor-icon">
                      <div className="icon-geometric-target"></div>
                    </div>
                    <div className="factor-content">
                      <h5>Selective Acceptance</h5>
                      <p>We only work with 12 executives annually to ensure Swiss precision delivery</p>
                    </div>
                  </div>
                  
                  <div className="factor-item">
                    <div className="factor-icon">
                      <div className="icon-geometric-lightning"></div>
                    </div>
                    <div className="factor-content">
                      <h5>Immediate Implementation</h5>
                      <p>21-day maximum from handshake to complete liberation</p>
                    </div>
                  </div>
                  
                  <div className="factor-item">
                    <div className="factor-icon">
                      <div className="icon-geometric-trophy"></div>
                    </div>
                    <div className="factor-content">
                      <h5>Elite Tier Service</h5>
                      <p>White-glove implementation reserved for discerning executives</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="finale-cta-section fade-in-up stagger-4">
                <a href="https://cal.com/elitehubnetwork/book-strategy-call" className="finale-cta-button" target="_blank" rel="noopener noreferrer">
                  <span className="cta-text">Secure Your Executive Liberation</span>
                  <div className="cta-shine"></div>
                </a>
                
                <div className="service-guarantees">
                  <div className="guarantee-grid">
                    <div className="guarantee-item">
                      <div className="guarantee-icon"></div>
                      <div className="guarantee-text">
                        <strong>Swiss Precision Guarantee</strong><br/>
                        8+ hours weekly liberation or we continue at no cost
                      </div>
                    </div>
                    
                    <div className="guarantee-item">
                      <div className="guarantee-icon"></div>
                      <div className="guarantee-text">
                        <strong>Executive-Grade Implementation</strong><br/>
                        White-glove service with direct engineering access
                      </div>
                    </div>
                    
                    <div className="guarantee-item">
                      <div className="guarantee-icon"></div>
                      <div className="guarantee-text">
                        <strong>Zero Disruption Protocol</strong><br/>
                        Your business continues seamlessly during transformation
                      </div>
                    </div>
                    
                    <div className="guarantee-item">
                      <div className="guarantee-icon"></div>
                      <div className="guarantee-text">
                        <strong>Proven Executive Methodology</strong><br/>
                        150+ successful transformations across 47 industries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>ELITEHUB</h3>
              <p>Precision automation systems for business leaders who value their time. Because every moment is irreplaceable.</p>
              <div className="social-links">
                <div className="social-icon"></div>
                <div className="social-icon"></div>
                <div className="social-icon"></div>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Business Automation</a></li>
                <li><a href="#">Process Engineering</a></li>
                <li><a href="#">System Integration</a></li>
                <li><a href="#">Strategic Consulting</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Contact</h4>
              <ul>
              <li>outreach@elitehubnetwork.com</li>
                <li>Cardiff, Wales, UK</li>
                <li><a href="https://cal.com/elitehubnetwork/book-strategy-call" className="contact-cta" target="_blank" rel="noopener noreferrer">Book a Strategic Call →</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 EliteHub. Time is the ultimate luxury. Spend it wisely.</p>
            <div className="legal-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Security</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}