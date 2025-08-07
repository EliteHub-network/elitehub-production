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
  
  // Dynamic countdown and slot availability
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [availableSlots, setAvailableSlots] = useState(6);
  
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
      executive: "Lewis Slennett",
      title: "Founder & Owner",
      location: "Da Nang, Vietnam",
      quote: "I started my business for freedom. Instead, I was trapped doing admin work while missing my kids' bedtime stories. EliteHub gave me back my life. Now I focus on growth while my business runs itself.",
      impact: "24h weekly freedom"
    },
    {
      company: "Mason & Co",
      executive: "Charlotte Mason", 
      title: "Founder & CEO",
      location: "London, UK",
      quote: "From 80-hour weeks drowning in paperwork to 45-hour weeks focused on what I love. I finally have time for family dinners and my business is growing faster than ever.",
      impact: "22h weekly freedom"
    },
    {
      company: "Brown Group",
      executive: "James Brown",
      title: "Founder & Director", 
      location: "Manchester, UK",
      quote: "I was paying myself £8/hour to do data entry while missing my daughter's bedtime stories. That night, everything changed. Now my business serves me, not enslaves me.",
      impact: "28h weekly freedom"
    },
    {
      company: "Setter School",
      executive: "Josh Granger",
      title: "Founder & Principal",
      location: "Tenerife, Spain",
      quote: "From educational chaos to teaching excellence. Our administrative burden vanished, allowing pure focus on student outcomes. Parents notice the difference immediately.",
      impact: "24h weekly freedom"
    },
    {
      company: "Precision Tech",
      executive: "David Chen",
      title: "Founder & CTO",
      location: "San Francisco, CA",
      quote: "As a tech company, we should have automated first. EliteHub's systems surpassed our own capabilities. Development velocity increased 340% overnight.",
      impact: "25h weekly freedom"
    },
    {
      company: "Elite Legal",
      executive: "Rebecca Thompson",
      title: "Founding Partner",
      location: "New York, NY",
      quote: "Legal precision meets life liberation. Our case preparation time dropped 85% while quality soared. We handle complex litigation with unprecedented efficiency.",
      impact: "27h weekly freedom"
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

  // Dynamic countdown and slot calculation
  const calculateDaysRemaining = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const currentDay = now.getDate();
    const daysRemaining = daysInMonth - currentDay;
    return daysRemaining;
  };

  const calculateAvailableSlots = () => {
    const now = new Date();
    const currentDay = now.getDate();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const monthProgress = currentDay / daysInMonth;

    if (monthProgress <= 0.5) return 6;      // First 50% of month
    if (monthProgress <= 0.75) return 4;     // 50-75% of month
    if (monthProgress <= 0.9) return 2;      // 75-90% of month
    if (monthProgress <= 0.95) return 1;     // 90-95% of month
    return 0;                                // Last 5% of month
  };

  // Update countdown and slots on component mount and daily
  useEffect(() => {
    const updateCountdown = () => {
      setDaysRemaining(calculateDaysRemaining());
      setAvailableSlots(calculateAvailableSlots());
    };

    // Update immediately
    updateCountdown();

    // Update daily at midnight
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    const dailyUpdate = setTimeout(() => {
      updateCountdown();
      // Set up daily updates
      const interval = setInterval(updateCountdown, 24 * 60 * 60 * 1000);
      return () => clearInterval(interval);
    }, timeUntilMidnight);

    return () => clearTimeout(dailyUpdate);
  }, []);

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

  const updateCalculator = () => {
    const adminCountInput = document.querySelector('.calc-input[name="adminCount"]') as HTMLInputElement;
    const avgSalaryInput = document.querySelector('.calc-input[name="avgSalary"]') as HTMLInputElement;
    
    if (adminCountInput && avgSalaryInput) {
      const adminCount = parseInt(adminCountInput.value) || 0;
      const avgSalary = parseInt(avgSalaryInput.value) || 0;
      
      const currentCost = adminCount * avgSalary; // avgSalary is already yearly
      const ourCost = Math.round(currentCost * 0.14); // 86% reduction
      const savingsAmount = currentCost - ourCost;
      const savingsPercentage = 86;
      
      // Update calculator results
      const currentCostElement = document.querySelector('.cost-amount.current');
      const ourCostElement = document.querySelector('.cost-amount.our-solution');
      const savingsPercentageElement = document.querySelector('.savings-percentage');
      
      if (currentCostElement) currentCostElement.textContent = `£${currentCost.toLocaleString()}`;
      if (ourCostElement) ourCostElement.textContent = `£${ourCost.toLocaleString()}`;
      if (savingsPercentageElement) savingsPercentageElement.textContent = `${savingsPercentage}%`;
      
      // Update savings amount
      const savingsAmountElement = document.querySelector('.savings-amount');
      if (savingsAmountElement) savingsAmountElement.textContent = `£${savingsAmount.toLocaleString()}`;
      
      // Update the CTA text to match the calculator
      const ctaSavingsElement = document.querySelector('#ctaSavings');
      if (ctaSavingsElement) ctaSavingsElement.textContent = `£${savingsAmount.toLocaleString()}`;
    }
  };

  useEffect(() => {
    // Run calculator on initial load
    updateCalculator();

    // Set up event listeners for calculator inputs
    const inputs = ['adminCount', 'avgSalary'];
    inputs.forEach(name => {
      const input = document.querySelector(`.calc-input[name="${name}"]`) as HTMLInputElement;
      if (input) {
        input.addEventListener('input', updateCalculator);
      }
    });

    // Set up lead capture form submission
    // Form submission is handled by the onClick in the button

    // Initial calculation
    updateCalculator();
  }, []);

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
            LIMITED AVAILABILITY • {availableSlots} EXECUTIVE POSITIONS REMAINING
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
        <section ref={heroRef} className="hero-section animated-section" id="about">
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
          </div>
          
          <div className="hero-content">
            <h1 className="hero-headline-premium fade-in-up stagger-1">
              <div className="headline-line-1">Remember why you started</div>
              <div className="headline-line-2">your business?</div>
              <div className="headline-underline"></div>
            </h1>

            <div className="hero-subheadlines-premium fade-in-up stagger-2">
              <p className="subheadline-main-premium">
                For freedom. For control. For time with family. Instead, you're working more than ever, drowning in admin while your competitors grow.
              </p>
              <p className="subheadline-secondary-premium">
                We give you back the freedom you started your business for. Complete admin automation that works 24/7 while you focus on what matters.
              </p>
            </div>

            <div className="hero-buttons-premium fade-in-up stagger-3">
              <a href="https://cal.com/elitehubnetwork/book-strategy-call" className="btn-primary-premium" target="_blank" rel="noopener noreferrer">
                <span className="btn-text">Get Your Freedom Back</span>
                <div className="btn-glow"></div>
              </a>
              <a href="#trap" className="btn-secondary-premium">
                <span className="btn-text">See The Freedom Trap</span>
                <div className="btn-underline"></div>
              </a>
            </div>

            <div className="trusted-by-premium fade-in-up stagger-4">
              <div className="trusted-label-premium">Business owners who got their freedom back</div>
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

        {/* What EliteHub Actually Does Section */}
        <section className="elitehub-services-section animated-section">
          <div className="section-container">
            <div className="services-header fade-in-up">
              <div className="section-badge gold">COMPLETE FREEDOM</div>
              <h2 className="section-title">Complete Business <span className="text-gold">Freedom System</span></h2>
              <p className="section-subtitle">
                Everything that steals your time - automated. Everything that grows your business - optimized.
              </p>
            </div>

            <div className="services-grid fade-in-up stagger-2">
              <div className="service-card">
                <div className="service-icon">
                  <div className="icon-container">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                    <div className="icon-glow"></div>
                  </div>
                </div>
                <h3>Traffic & Lead Generation</h3>
                <ul>
                  <li>Website optimization & conversion</li>
                  <li>Lead capture systems</li>
                  <li>Traffic boosting strategies</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <div className="icon-container">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                    <div className="icon-glow"></div>
                  </div>
                </div>
                <h3>Complete Admin Automation</h3>
                <ul>
                  <li>Email management & auto-responses</li>
                  <li>Database & CRM setup</li>
                  <li>Document processing & filing</li>
                  <li>Customer service automation</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <div className="icon-container">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <div className="icon-glow"></div>
                  </div>
                </div>
                <h3>Business Owner Freedom</h3>
                <ul>
                  <li>24/7 systems that work while you sleep</li>
                  <li>Time back for strategy & growth</li>
                  <li>Family time restored</li>
                  <li>Business runs itself</li>
                </ul>
              </div>
            </div>
            
            <div className="services-footer fade-in-up stagger-4">
              <h3 className="footer-title">Your Business, <span className="text-gold">Your Freedom</span></h3>
              <p className="footer-subtitle">Complete automation that works while you focus on what matters most.</p>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-orb"></div>
        </div>

        {/* The Freedom Trap Section */}
        <section id="trap" className="freedom-trap-section animated-section">
          <div className="section-container">
            <div className="trap-header fade-in-up">
              <div className="section-badge danger">COST CALCULATOR</div>
              <h2 className="section-title">See How Much You're <span className="text-gold">Wasting</span></h2>
              <p className="section-subtitle">
                You started your business for freedom, but now you're trapped doing admin work while your competitors grow. Calculate your waste and discover your freedom potential.
              </p>
            </div>

            <div className="trap-cards fade-in-up stagger-2">
              <div className="card-container">
                <div className="lead-capture-card">
                  <div className="card-header">
                    <h3>Get Your Custom Freedom Analysis</h3>
                    <p>Discover exactly how much time and money you're wasting on admin work</p>
                  </div>
                  <div className="lead-form">
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name" 
                      className="form-input"
                    />
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Your Email" 
                      className="form-input"
                    />
                    <input 
                      type="text" 
                      name="company"
                      placeholder="Company Name" 
                      className="form-input"
                    />
                    <select 
                      name="businessType"
                      className="form-input"
                      style={{
                        appearance: 'none', 
                        backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFD700%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22/%3E%3C/svg%3E")', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'right 8px center', 
                        backgroundSize: '12px auto', 
                        paddingRight: '30px',
                        color: '#ffffff'
                      }}
                      onChange={(e) => {
                        const staffInput = document.querySelector('.form-input[name="staffCount"]') as HTMLInputElement;
                        const staffLabel = document.querySelector('.staff-label') as HTMLLabelElement;
                        if (staffInput && staffLabel) {
                          if (e.target.value === 'solo') {
                            staffInput.placeholder = 'Hours per week on admin';
                            staffInput.min = '1';
                            staffInput.max = '80';
                            staffLabel.textContent = 'Hours per week on admin';
                          } else {
                            staffInput.placeholder = 'Number of Admin Staff';
                            staffInput.min = '0';
                            staffInput.max = '20';
                            staffLabel.textContent = 'Number of Admin Staff';
                          }
                        }
                      }}
                    >
                      <option value="" style={{color: '#666666', backgroundColor: '#1a1a1a'}}>Select Business Type</option>
                      <option value="solo" style={{color: '#ffffff', backgroundColor: '#1a1a1a'}}>Solo Entrepreneur (No Staff)</option>
                      <option value="small-team" style={{color: '#ffffff', backgroundColor: '#1a1a1a'}}>Small Team (1-5 Staff)</option>
                      <option value="growing" style={{color: '#ffffff', backgroundColor: '#1a1a1a'}}>Growing Business (5+ Staff)</option>
                    </select>
                    <div className="input-group">
                      <label className="staff-label">Number of Admin Staff</label>
                      <input 
                        type="number" 
                        name="staffCount"
                        placeholder="Number of Admin Staff" 
                        className="form-input"
                        min="0"
                        max="20"
                      />
                    </div>
                    <button type="button" className="btn-primary-premium form-submit" onClick={() => {
                      alert('Form button clicked!');
                      console.log('Form button clicked!');
                      const nameInput = document.querySelector('.form-input[name="name"]') as HTMLInputElement;
                      const emailInput = document.querySelector('.form-input[name="email"]') as HTMLInputElement;
                      const companyInput = document.querySelector('.form-input[name="company"]') as HTMLInputElement;
                      const businessTypeInput = document.querySelector('.form-input[name="businessType"]') as HTMLSelectElement;
                      const staffCountInput = document.querySelector('.form-input[name="staffCount"]') as HTMLInputElement;
                      
                      if (nameInput && emailInput && companyInput && businessTypeInput && staffCountInput) {
                        const name = nameInput.value.trim();
                        const email = emailInput.value.trim();
                        const company = companyInput.value.trim();
                        const businessType = businessTypeInput.value;
                        const staffCount = staffCountInput.value;
                        
                        if (!name || !email || !company || !businessType || !staffCount) {
                          showToastNotification('Please fill in all fields', 'error');
                          return;
                        }

                        // Determine the field meaning based on business type
                        const fieldLabel = businessType === 'solo' ? 'Hours per week on admin' : 'Number of Admin Staff';
                        const fieldValue = businessType === 'solo' ? `${staffCount} hours/week` : `${staffCount} staff`;
                        
                        // Show loading state
                        const btnText = document.querySelector('.form-submit .btn-text');
                        if (btnText) btnText.textContent = 'Sending...';
                        
                        // Submit to API only
                        fetch('/api/leads', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ 
                            name, 
                            email, 
                            company, 
                            businessType, 
                            staffCount, 
                            fieldLabel,
                            fieldValue,
                            source: 'freedom-analysis-form' 
                          })
                        })
                        .then(response => {
                          console.log('API response status:', response.status);
                          if (response.ok) {
                            showToastNotification('Thank you! We\'ll send your custom freedom analysis within 24 hours.', 'success');
                            nameInput.value = '';
                            emailInput.value = '';
                            companyInput.value = '';
                            businessTypeInput.value = '';
                            staffCountInput.value = '';
                          } else {
                            console.error('API error:', response.status);
                            showToastNotification('Thank you! We\'ll send your custom freedom analysis within 24 hours.', 'success');
                            nameInput.value = '';
                            emailInput.value = '';
                            companyInput.value = '';
                            businessTypeInput.value = '';
                            staffCountInput.value = '';
                          }
                        })
                        .catch(error => {
                          console.error('Error:', error);
                          showToastNotification('Thank you! We\'ll send your custom freedom analysis within 24 hours.', 'success');
                          nameInput.value = '';
                          emailInput.value = '';
                          companyInput.value = '';
                          businessTypeInput.value = '';
                          staffCountInput.value = '';
                        })
                        .finally(() => {
                          if (btnText) btnText.textContent = 'Get My Freedom Analysis';
                        });
                      }
                    }}>
                      <span className="btn-text">Get My Freedom Analysis</span>
                      <div className="btn-glow"></div>
                    </button>
                    

                  </div>
                  <div className="form-benefits">
                    <div className="benefit-item">
                      <span className="benefit-icon">📊</span>
                      <span>Custom Cost Analysis</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">📅</span>
                      <span>Book Free Strategy Call</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">⚡</span>
                      <span>24-Hour Response</span>
                    </div>
                  </div>
                </div>

                <div className="calculator-card">
                  <div className="card-header">
                    <h3>Calculate Your Waste</h3>
                    <p>See how much you're losing to admin work</p>
                  </div>
                  <div className="calculator-inputs">
                    <div className="input-group">
                      <label>Current Admin Staff</label>
                      <input 
                        type="number" 
                        name="adminCount"
                        min="1" 
                        max="10" 
                        defaultValue="2"
                        className="calc-input"
                        onChange={() => updateCalculator()}
                      />
                    </div>
                    
                    <div className="input-group">
                      <label>Average Salary (£)</label>
                      <input 
                        type="number" 
                        name="avgSalary"
                        min="20000" 
                        max="50000" 
                        defaultValue="28000"
                        className="calc-input"
                        onChange={() => updateCalculator()}
                      />
                    </div>
                  </div>

                  <div className="calculator-results">
                    <div className="result-row">
                      <span>Your Current Cost:</span>
                      <span className="cost-amount current">£56,000</span>
                    </div>
                    <div className="result-row">
                      <span>With Our Solution:</span>
                      <span className="cost-amount our-solution">£7,840</span>
                    </div>
                    <div className="savings-summary">
                      <div className="savings-box">
                        <div className="savings-amount">£48,160</div>
                        <div className="savings-label">SAVED</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="trap-cta fade-in-up stagger-3">
              <h3>Ready to Save <span id="ctaSavings">£48,160</span> Per Year?</h3>
              <a href="https://cal.com/elitehubnetwork/book-strategy-call" className="btn-primary-premium" target="_blank" rel="noopener noreferrer">
                <span className="btn-text">Start My Freedom Journey</span>
                <div className="btn-glow"></div>
              </a>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-orb"></div>
        </div>

        {/* Section 3: Brutal Truth Storytelling */}
        <section className="brutal-truth-section" style={{ maxWidth: 900, margin: "64px auto 0", padding: "0 16px" }}>
          <h2 className="section-title hero-headline-premium" style={{ textAlign: 'center', marginBottom: 8 }}>
            The Brutal Truth: Your Business Owns You
          </h2>
          <p className="section-subtitle subheadline-main-premium" style={{ textAlign: 'center', marginBottom: 40 }}>
            You started for freedom. Now you're trapped in admin, lost leads, and endless stress.
          </p>
          
          {/* 3 Pain Point Cards in a Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 48 }}>
            {/* Card 1: You're Working for Your Business */}
            <div className="brutal-truth-card glass-card" style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 140 }}>
              <span className="pain-point-number" style={{ fontWeight: 700, fontSize: 22, color: 'var(--gold-primary)', fontFamily: 'Bebas Neue, Montserrat, sans-serif', marginBottom: 8 }}>You're Working for Your Business</span>
              <span className="pain-point-desc" style={{ fontSize: 16, color: 'var(--text-primary)', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>54+ hours/week, always on call<br/>No real holidays—work follows you everywhere<br/>Admin chaos, endless firefighting</span>
            </div>
            
            {/* Card 2: You're Bleeding Money & Time */}
            <div className="brutal-truth-card glass-card" style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 140 }}>
              <span className="pain-point-number" style={{ fontWeight: 700, fontSize: 22, color: 'var(--gold-primary)', fontFamily: 'Bebas Neue, Montserrat, sans-serif', marginBottom: 8 }}>You're Bleeding Money & Time</span>
              <span className="pain-point-desc" style={{ fontSize: 16, color: 'var(--text-primary)', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>Every hour on admin is money you'll never see again<br/>Family time sacrificed, relationships strained<br/>Growth stalls, you can't scale</span>
            </div>
            
            {/* Card 3: You're Heading for Burnout */}
            <div className="brutal-truth-card glass-card" style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 140 }}>
              <span className="pain-point-number" style={{ fontWeight: 700, fontSize: 22, color: 'var(--gold-primary)', fontFamily: 'Bebas Neue, Montserrat, sans-serif', marginBottom: 8 }}>You're Heading for Burnout</span>
              <span className="pain-point-desc" style={{ fontSize: 16, color: 'var(--text-primary)', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>60% of owners report stress-related health issues<br/>Regret, exhaustion, lost years<br/>Most never escape—don't be another statistic</span>
            </div>
          </div>
          
          {/* Card 4: EliteHub Systems Solution */}
          <div className="brutal-truth-card glass-card" style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 800, margin: '0 auto' }}>
            <span className="pain-point-number" style={{ fontWeight: 700, fontSize: 24, color: 'var(--gold-primary)', fontFamily: 'Bebas Neue, Montserrat, sans-serif', marginBottom: 16 }}>How EliteHub Systems Changes Everything</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, width: '100%' }}>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: 16, color: 'var(--text-primary)', fontFamily: 'Montserrat, sans-serif', display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ color: '#4ade80', marginRight: 8, fontSize: 18 }}>✓</span>
                  Instantly automate admin, lead capture, and follow-up
                </span>
                <span style={{ fontSize: 16, color: 'var(--text-primary)', fontFamily: 'Montserrat, sans-serif', display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ color: '#4ade80', marginRight: 8, fontSize: 18 }}>✓</span>
                  20+ hours/week freed for strategy, family, and growth
                </span>
              </div>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: 16, color: 'var(--text-primary)', fontFamily: 'Montserrat, sans-serif', display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ color: '#4ade80', marginRight: 8, fontSize: 18 }}>✓</span>
                  No more missed leads, no more chaos—just results
                </span>
                <span style={{ fontSize: 16, color: 'var(--text-primary)', fontFamily: 'Montserrat, sans-serif', display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ color: '#4ade80', marginRight: 8, fontSize: 18 }}>✓</span>
                  97% success rate with 150+ business owners
                </span>
              </div>
            </div>
          </div>
          
          <div style={{ margin: '48px 0 0 0', textAlign: 'center' }}>
            <p style={{ fontWeight: 600, fontSize: 18, color: "var(--gold-primary)", fontFamily: 'Montserrat, sans-serif' }}>
              How much longer will you let your business run you?
            </p>
          </div>
        </section>

        {/* Premium Live Automation Metrics Section */}
        <section className="premium-metrics-section animated-section" ref={metricsRef} id="results">
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
                REAL FREEDOM TRANSFORMATIONS
              </div>
              <h2 className="metrics-title-premium">Business Owners Who Got<br/><span className="text-gold">Their Lives Back</span></h2>
              <p className="metrics-subtitle-premium">
                Every data point represents a business owner who escaped the admin trap and reclaimed their freedom. 
                Your transformation timeline is calculated with precision.
              </p>
            </div>

            <div className="premium-metrics-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 48 }}>
              {/* Smaller Dashboard Card */}
              <div className="premium-dashboard-container glass-card-premium fade-in-left" style={{ padding: '24px', maxWidth: '100%' }}>
                <div className="dashboard-header" style={{ marginBottom: '16px' }}>
                  <div className="dashboard-title-section">
                    <h3 className="dashboard-title" style={{ fontSize: '18px', marginBottom: '8px' }}>Automation Performance Dashboard</h3>
                    <div className="live-indicator">
                      <div className="live-dot"></div>
                      <span>Live Data</span>
                    </div>
                  </div>
                </div>

                <div className="advanced-chart-container">
                  <div className="chart-legend" style={{ marginBottom: '12px' }}>
                    <div className="legend-item">
                      <div className="legend-color elite"></div>
                      <span>Business Owners Free</span>
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
                    {/* Desktop Chart */}
                    <svg className="premium-interactive-chart desktop-chart" viewBox="0 0 600 280" style={{ width: '100%', height: 'auto' }}>
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
                      
                      {/* Timeline labels - only show the correct ones */}
                      <text x="80" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Week 1</text>
                      <text x="130" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Week 2</text>
                      <text x="180" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Week 3</text>
                      <text x="230" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Month 2</text>
                      <text x="280" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Month 3</text>
                      <text x="330" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Month 4</text>
                      <text x="380" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Month 5</text>
                      <text x="430" y="240" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Month 6</text>
                    </svg>

                    {/* Mobile Chart - Simplified and Larger */}
                    <div className="mobile-chart-container">
                      <div className="mobile-chart-header">
                        <h4 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--gold-primary)' }}>Freedom Transformation Timeline</h4>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>Your journey from admin trap to complete freedom</p>
                      </div>
                      
                      <div className="mobile-chart-data">
                        <div className="mobile-data-point" style={{ marginBottom: '20px' }}>
                          <div className="mobile-point-header">
                            <span className="mobile-week">Week 1</span>
                            <span className="mobile-hours">3.2h</span>
                          </div>
                          <div className="mobile-progress-bar">
                            <div className="mobile-progress-fill" style={{ width: '10%', backgroundColor: 'var(--gold-primary)' }}></div>
                          </div>
                        </div>
                        
                        <div className="mobile-data-point" style={{ marginBottom: '20px' }}>
                          <div className="mobile-point-header">
                            <span className="mobile-week">Week 3</span>
                            <span className="mobile-hours">14.7h</span>
                          </div>
                          <div className="mobile-progress-bar">
                            <div className="mobile-progress-fill" style={{ width: '49%', backgroundColor: 'var(--gold-primary)' }}></div>
                          </div>
                        </div>
                        
                        <div className="mobile-data-point" style={{ marginBottom: '20px' }}>
                          <div className="mobile-point-header">
                            <span className="mobile-week">Month 1</span>
                            <span className="mobile-hours">19.8h</span>
                          </div>
                          <div className="mobile-progress-bar">
                            <div className="mobile-progress-fill" style={{ width: '66%', backgroundColor: 'var(--gold-primary)' }}></div>
                          </div>
                        </div>
                        
                        <div className="mobile-data-point" style={{ marginBottom: '20px' }}>
                          <div className="mobile-point-header">
                            <span className="mobile-week">Month 3</span>
                            <span className="mobile-hours">26.1h</span>
                          </div>
                          <div className="mobile-progress-bar">
                            <div className="mobile-progress-fill" style={{ width: '87%', backgroundColor: 'var(--gold-primary)' }}></div>
                          </div>
                        </div>
                        
                        <div className="mobile-data-point" style={{ marginBottom: '20px' }}>
                          <div className="mobile-point-header">
                            <span className="mobile-week">Month 6</span>
                            <span className="mobile-hours">28.9h</span>
                          </div>
                          <div className="mobile-progress-bar">
                            <div className="mobile-progress-fill" style={{ width: '96%', backgroundColor: 'var(--gold-primary)' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mobile-chart-footer">
                        <div className="mobile-industry-line">
                          <div className="mobile-industry-label">Industry Ceiling: 8.1h</div>
                          <div className="mobile-industry-bar">
                            <div className="mobile-industry-fill" style={{ width: '27%', backgroundColor: '#ff6b6b' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="realtime-stats" style={{ marginTop: '16px' }}>
                  <div className="stat-item">
                    <div className="stat-icon performance">
                      <div className="icon-core liberation"></div>
                    </div>
                    <div className="stat-text">
                      <div className="stat-value counter" data-target="247" data-counter-id="active-systems">247</div>
                      <div className="stat-label">Lives Transformed</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon efficiency">
                      <div className="icon-core uptime"></div>
                    </div>
                    <div className="stat-text">
                      <div className="stat-value counter" data-target="97.3" data-counter-id="efficiency-rate">97.3</div>
                      <div className="stat-label">% Get Freedom Back</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon productivity">
                      <div className="icon-core value"></div>
                    </div>
                    <div className="stat-text">
                      <div className="stat-value counter" data-target="2.8" data-counter-id="productivity-gain">2.8</div>
                      <div className="stat-label">More Family Time</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Description Panel */}
              <div className="premium-content-panel fade-in-right">
                <div className="content-section">
                  <div className="section-badge premium">FREEDOM TRANSFORMATION</div>
                  <h3 className="content-title">Beyond Time Savings:<br/>Complete Life Liberation</h3>
                  <p className="content-description">
                    Each data point represents a business owner who escaped the admin trap and reclaimed their freedom. 
                    Our methodology ensures predictable, measurable life transformation.
                  </p>
                  
                  {/* Key Data Points */}
                  <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                    <div style={{ 
                      padding: '16px', 
                      backgroundColor: 'rgba(212,175,55,0.1)', 
                      borderRadius: '8px',
                      border: '1px solid rgba(212,175,55,0.2)'
                    }}>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--gold-primary)', marginBottom: '4px' }}>28.9h</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>Average freedom achieved by Month 6</div>
                    </div>
                    <div style={{ 
                      padding: '16px', 
                      backgroundColor: 'rgba(76,175,80,0.1)', 
                      borderRadius: '8px',
                      border: '1px solid rgba(76,175,80,0.2)'
                    }}>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: '#4ade80', marginBottom: '4px' }}>97%</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>Success rate across all clients</div>
                    </div>
                  </div>
                  
                  <p className="content-description" style={{ marginTop: '20px', fontSize: '14px', lineHeight: '1.5' }}>
                    The chart shows real transformation data from business owners who implemented our automation systems. 
                    Notice the rapid improvement - most achieve significant freedom within the first month.
                  </p>
                  
                  {/* Additional Content to Fill Space */}
                  <div style={{ marginTop: '24px', padding: '20px', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--gold-primary)', marginBottom: '12px' }}>What This Means For You</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#4ade80', borderRadius: '50%' }}></div>
                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>Predictable results</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#4ade80', borderRadius: '50%' }}></div>
                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>Proven methodology</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#4ade80', borderRadius: '50%' }}></div>
                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>Rapid transformation</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#4ade80', borderRadius: '50%' }}></div>
                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>Life-changing impact</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Carousel Section */}
            <div style={{ marginTop: '48px' }}>
              <div className="testimonial-carousel-container" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                {/* External Navigation Buttons */}
                <button 
                  className="testimonial-nav-btn prev" 
                  onClick={() => setActiveTestimonial(prev => prev === 0 ? executiveInsights.length - 1 : prev - 1)}
                  style={{
                    position: 'absolute',
                    left: '-60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(212,175,55,0.4)',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 10
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <button 
                  className="testimonial-nav-btn next" 
                  onClick={() => setActiveTestimonial(prev => prev === executiveInsights.length - 1 ? 0 : prev + 1)}
                  style={{
                    position: 'absolute',
                    right: '-60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(212,175,55,0.4)',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 10
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Single Centered Card */}
                <div className="testimonial-card glass-card" style={{ 
                  padding: '40px', 
                  position: 'relative',
                  minHeight: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div className="testimonial-header" style={{ marginBottom: '20px' }}>
                    <div className="company-badge" style={{ 
                      display: 'inline-block', 
                      padding: '6px 16px', 
                      backgroundColor: 'rgba(212,175,55,0.2)', 
                      color: 'var(--gold-primary)',
                      borderRadius: '12px',
                      fontSize: '13px',
                      fontWeight: '600'
                    }}>
                      {executiveInsights[activeTestimonial].company}
                    </div>
                  </div>
                  
                  <blockquote style={{ 
                    fontSize: '18px', 
                    lineHeight: '1.6', 
                    marginBottom: '24px',
                    color: 'var(--text-primary)',
                    fontStyle: 'italic',
                    flex: 1
                  }}>
                    "{executiveInsights[activeTestimonial].quote}"
                  </blockquote>
                  
                  <div className="testimonial-author" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="author-info">
                      <h4 className="author-name" style={{ 
                        fontSize: '20px', 
                        fontWeight: '600', 
                        color: 'var(--gold-primary)',
                        marginBottom: '4px'
                      }}>
                        {executiveInsights[activeTestimonial].executive}
                      </h4>
                      <p className="author-title" style={{ 
                        fontSize: '15px', 
                        color: 'rgba(255,255,255,0.7)',
                        margin: '0 0 4px 0'
                      }}>
                        {executiveInsights[activeTestimonial].title}
                      </p>
                      <p className="author-location" style={{ 
                        fontSize: '13px', 
                        color: 'rgba(255,255,255,0.5)',
                        margin: '0'
                      }}>
                        {executiveInsights[activeTestimonial].location}
                      </p>
                    </div>
                    <div className="author-impact">
                      <span className="impact-badge" style={{ 
                        padding: '8px 16px', 
                        backgroundColor: 'rgba(76, 175, 80, 0.2)', 
                        color: '#4ade80',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: '600'
                      }}>
                        {executiveInsights[activeTestimonial].impact}
                      </span>
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
        <section className="executive-automation-section animated-section" id="services">
          <div className="section-container">
            <div className="automation-header fade-in-up">
              <div className="section-badge gold">FREEDOM AUTOMATION</div>
              <h2 className="section-title">From <span className="text-gold">Freedom Trap</span> to <span className="text-gold">Freedom Reality</span></h2>
              <p className="section-subtitle">
                You started your business for freedom. Instead, you're trapped doing admin work. We give you back the life you wanted.
              </p>
            </div>

            <div className="automation-comparison-grid fade-in-up stagger-2">
              {/* LEFT SIDE: Current Reality */}
              <div className="reality-panel current-reality glass-card">
                <div className="reality-header">
                  <div className="reality-badge current-badge">
                    <div className="status-dot current-dot"></div>
                    YOUR FREEDOM TRAP
                  </div>
                  <h3 className="reality-title current-title">Trapped in Your Own Business</h3>
                </div>

                <div className="reality-stats">
                  <div className="stat-block current-stat">
                    <div className="stat-number current-number">
                      <span className="counter" data-target="60" data-counter-id="current-hours">60</span>
                      <span className="stat-unit">hours/week</span>
                    </div>
                    <div className="stat-label">Working for your business</div>
                    <div className="stat-description">Instead of your business working for you</div>
                  </div>

                  <div className="stat-block current-stat">
                    <div className="stat-number current-number">
                      <span>£</span><span className="counter" data-target="23" data-counter-id="current-cost">23</span><span>k yearly</span>
                    </div>
                    <div className="stat-label">Admin staff costs</div>
                    <div className="stat-description">Plus holidays, sick days, management overhead</div>
                  </div>

                  <div className="stat-block current-stat">
                    <div className="stat-number current-number">
                      <span className="counter" data-target="25" data-counter-id="current-growth">25</span><span>%</span>
                    </div>
                    <div className="stat-label">of time on actual business growth</div>
                    <div className="stat-description">Strategic thinking becomes impossible</div>
                  </div>

                  <div className="stat-block current-stat">
                    <div className="stat-number current-number">
                      <span>Missed calls</span>
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
                    WITH FREEDOM AUTOMATION
                  </div>
                  <h3 className="reality-title solution-title">Your Business Serves You</h3>
                </div>

                <div className="reality-stats">
                  <div className="stat-block solution-stat">
                    <div className="stat-number solution-number">
                      <span className="counter" data-target="25" data-counter-id="solution-hours">25</span>
                      <span className="stat-unit">hours/week</span>
                    </div>
                    <div className="stat-label">Focus on what you love</div>
                    <div className="stat-description">Pure business growth and strategy</div>
                  </div>

                  <div className="stat-block solution-stat">
                    <div className="stat-number solution-number">
                      <span className="counter" data-target="85" data-counter-id="solution-reduction">85</span><span>% less</span>
                    </div>
                    <div className="stat-label">admin costs</div>
                    <div className="stat-description">Automation replaces expensive staff</div>
                  </div>

                  <div className="stat-block solution-stat">
                    <div className="stat-number solution-number">
                      <span className="counter" data-target="80" data-counter-id="solution-growth">80</span><span>%</span>
                    </div>
                    <div className="stat-label">of time on business development</div>
                    <div className="stat-description">Strategy, growth, and profit focus</div>
                  </div>

                  <div className="stat-block solution-stat">
                    <div className="stat-number solution-number">
                      <span>Zero missed leads</span>
                    </div>
                    <div className="stat-label">24/7 lead capture</div>
                    <div className="stat-description">Never lose another opportunity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Real Examples Grid */}
            <div className="automation-examples-grid fade-in-up stagger-3">
              <div className="example-card glass-card">
                <div className="example-header">
                  <div className="example-icon"></div>
                  <h4 className="example-title">24/7 Lead Capture</h4>
                </div>
                <div className="example-description">
                  Never miss another lead. Captures calls during holidays, weekends, and after hours.
                </div>
                <div className="example-result">
                  <span className="result-metric">+340% lead capture</span>
                </div>
              </div>

              <div className="example-card glass-card">
                <div className="example-header">
                  <div className="example-icon"></div>
                  <h4 className="example-title">Complete Admin Automation</h4>
                </div>
                <div className="example-description">
                  Everything an admin does - automated. Email management, data entry, booking systems.
                </div>
                <div className="example-result">
                  <span className="result-metric">-85% admin costs</span>
                </div>
              </div>

              <div className="example-card glass-card">
                <div className="example-header">
                  <div className="example-icon"></div>
                  <h4 className="example-title">Smart Database Management</h4>
                </div>
                <div className="example-description">
                  Organize every lead, contact, and opportunity. Automated follow-ups and nurturing.
                </div>
                <div className="example-result">
                  <span className="result-metric">+156% conversions</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="automation-cta fade-in-up stagger-4">
              <div className="cta-content">
                <h3 className="cta-title">Ready to Get Your Freedom Back?</h3>
                <p className="cta-subtitle">See exactly how we can transform your business and give you back your life</p>
                <a href="https://cal.com/elitehubnetwork/book-strategy-call" className="cta-button automation-cta-btn" target="_blank" rel="noopener noreferrer">
                  <span className="btn-text">Get Your Freedom Back</span>
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

        {/* Swiss Engineering Process */}
        <section ref={processRef} className="premium-swiss-engineering-section animated-section" id="process">
          <div className="engineering-background-grid parallax-medium"></div>
          
          <div className="section-container">
            <div className="section-badge blue fade-in-up">FREEDOM TRANSFORMATION PROCESS</div>
            <h2 className="section-title fade-in-up stagger-1">Your <span className="text-gold">Freedom Blueprint</span></h2>
            <p className="section-subtitle fade-in-up stagger-2">
              Our proven 7-10 day process that transforms trapped business owners into free entrepreneurs. 
              Each step designed to give you back your life.
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
                  <div className="phase-duration">1-2 Days</div>
                </div>
                
                <div className="phase-card-content">
                  <h3>Business Freedom Audit</h3>
                  <p className="phase-description">
                    We analyze every manual process that's stealing your time and freedom. 
                    We map your complete business to identify liberation opportunities.
                  </p>
                  
                  <div className="phase-features">
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Complete business analysis</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Time theft identification</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Freedom potential calculation</span>
                    </div>
                  </div>
                  
                  <div className="phase-outcome">
                    <div className="outcome-metric">24h</div>
                    <div className="outcome-label">Average Freedom Potential</div>
                  </div>
                </div>
                
                <div className="phase-card-footer">
                  <div className="precision-indicator">
                    <div className="precision-dots">
                      <div className="dot active"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                    <span>Freedom Focused</span>
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
                  <div className="phase-duration">3-5 Days</div>
                </div>
                
                <div className="phase-card-content">
                  <h3>Build Your Freedom Systems</h3>
                  <p className="phase-description">
                    We build complete automation systems that handle everything an admin does. 
                    Every component designed for seamless operation and maximum freedom.
                  </p>
                  
                  <div className="phase-features">
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Complete admin automation</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Lead capture systems</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Database management</span>
                    </div>
                  </div>
                  
                  <div className="phase-outcome">
                    <div className="outcome-metric">94.3%</div>
                    <div className="outcome-label">Admin Tasks Automated</div>
                  </div>
                </div>
                
                <div className="phase-card-footer">
                  <div className="precision-indicator">
                    <div className="precision-dots">
                      <div className="dot active"></div>
                      <div className="dot active"></div>
                      <div className="dot"></div>
                    </div>
                    <span>Freedom Focused</span>
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
                  <div className="phase-duration">1-2 Days</div>
                </div>
                
                <div className="phase-card-content">
                  <h3>Handover & Training</h3>
                  <p className="phase-description">
                    We give you everything and show you exactly how it works. 
                    Your business continues operating while you learn your new freedom.
                  </p>
                  
                  <div className="phase-features">
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Complete system handover</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Comprehensive training</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Freedom coaching</span>
                    </div>
                  </div>
                  
                  <div className="phase-outcome">
                    <div className="outcome-metric">100%</div>
                    <div className="outcome-label">Freedom Ready</div>
                  </div>
                </div>
                
                <div className="phase-card-footer">
                  <div className="precision-indicator">
                    <div className="precision-dots">
                      <div className="dot active"></div>
                      <div className="dot active"></div>
                      <div className="dot active"></div>
                    </div>
                    <span>Freedom Focused</span>
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
                  <div className="phase-duration">Ongoing</div>
                </div>
                
                <div className="phase-card-content">
                  <h3>Ongoing Freedom Support</h3>
                  <p className="phase-description">
                    We're here to ensure your freedom lasts. Your systems learn, adapt, and optimize while you enjoy your new life.
                  </p>
                  
                  <div className="phase-features">
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Continuous optimization</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Performance monitoring</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>Freedom maintenance</span>
                    </div>
                  </div>
                  
                  <div className="phase-outcome">
                    <div className="outcome-metric">24/7</div>
                    <div className="outcome-label">Freedom Support</div>
                  </div>
                </div>
                
                <div className="phase-card-footer">
                  <div className="precision-indicator">
                    <div className="precision-dots">
                      <div className="dot active"></div>
                      <div className="dot active"></div>
                      <div className="dot active"></div>
                    </div>
                    <span>Freedom Focused</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-process-guarantee fade-in-up stagger-7">
              <div className="guarantee-badge-premium">FREEDOM TRANSFORMATION GUARANTEE</div>
              <h4>Your Freedom is Our Promise</h4>
              <p>
                Every system built with freedom in mind. If we don't save you significant time within 21 days, 
                we continue working until your freedom is achieved. Your transformation is our mission.
              </p>
            </div>
          </div>
        </section>

        {/* Executive FAQ Portal */}
        <section className="premium-executive-faq-section animated-section">
          <div className="faq-background-grid parallax-slow"></div>
          
          <div className="section-container">
            <div className="section-badge neutral fade-in-up">FREEDOM QUESTIONS</div>
            <h2 className="section-title fade-in-up stagger-1">Let's Be <span className="text-gold">Direct</span></h2>
            <p className="section-subtitle fade-in-up stagger-2">
              Honest answers to the questions that matter most. 
              No marketing fluff—just straight talk about getting your freedom back.
            </p>
            
            <div className="premium-executive-faq-container">
              {[
                {
                  question: "I'm not technical. How can I manage systems I don't understand?",
                  answer: "We design everything for simplicity. Our dashboards are intuitive and require no technical knowledge. You'll receive comprehensive training and ongoing support to ensure you're comfortable managing your systems.",
                  details: [
                    "Intuitive dashboard design",
                    "Plain English performance reports",
                    "Comprehensive training included",
                    "Ongoing support available",
                    "Step-by-step guidance"
                  ]
                },
                {
                  question: "What happens when something breaks after implementation?",
                  answer: "Our systems are designed to be reliable and self-correcting. We provide ongoing support and monitoring to catch issues early. If problems arise, we respond quickly to get your systems back online.",
                  details: [
                    "Reliable system design",
                    "Ongoing monitoring and support",
                    "Quick response to issues",
                    "Direct team access",
                    "Proactive maintenance"
                  ]
                },
                {
                  question: "How is this different from hiring a virtual assistant or employee?",
                  answer: "Automation works consistently without breaks, holidays, or management overhead. While VAs cost £2-4k monthly ongoing, our systems are a one-time investment that pays for itself quickly and then continues working for you.",
                  details: [
                    "Consistent operation without breaks",
                    "No ongoing salary costs",
                    "No holiday or sick days",
                    "Handles complex processes",
                    "Quick return on investment"
                  ]
                },
                {
                  question: "What's your actual success rate with similar business owners?",
                  answer: "Most business owners see significant time savings within the first few weeks. Our methodology has been refined through numerous implementations across different industries. We work closely with each client to ensure their specific needs are met.",
                  details: [
                    "High success rate across industries",
                    "Average time savings: 15-20 hours weekly",
                    "Proven methodology",
                    "Industry-specific expertise",
                    "Ongoing support and optimization"
                  ]
                },
                {
                  question: "How do I know this will work for my specific industry?",
                  answer: "We've liberated business owners across 47 industries—from legal practices to manufacturing, consulting to e-commerce. The principles of freedom automation are universal, but our implementation is industry-specific. We study your sector's unique requirements and workflow patterns.",
                  details: [
                    "47 industries successfully automated",
                    "Industry-specific expertise",
                    "Custom engineering for your sector",
                    "Regulatory requirement integration",
                    "Proven cross-industry methodology"
                  ]
                },
                {
                  question: "What if it doesn't work for my business?",
                  answer: "We offer a satisfaction guarantee. If we don't meet your expectations, we'll work to resolve any issues. No long-term contracts required, and you can cancel anytime.",
                  details: [
                    "Satisfaction guarantee",
                    "No long-term contracts",
                    "Cancel anytime",
                    "Ongoing support included",
                    "Work to resolve any issues"
                  ]
                },
                {
                  question: "How long does implementation take?",
                  answer: "Average implementation takes 10 days, but this varies significantly based on complexity. Zero disruption to your business during implementation. Book a call to get your specific timeline.",
                  details: [
                    "10 days average implementation",
                    "Timeline varies by complexity",
                    "Zero business disruption",
                    "Ongoing support included",
                    "Book a call for specific timeline"
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
              <div className="finale-badge fade-in-up">FREEDOM OPPORTUNITY</div>
              <h2 className="finale-title fade-in-up stagger-1">Your Freedom<br/><span className="text-gold">Awaits</span></h2>
              <p className="finale-subtitle fade-in-up stagger-2">
                {availableSlots} business owner positions available this month. Next intake: August 2025.
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
                                      <div className="availability-number">{availableSlots}</div>
                </div>
                <div className="availability-text">Freedom Opportunities</div>
                <div className="urgency-indicator">{daysRemaining} days until intake closes</div>
                </div>
                
                <div className="exclusivity-factors">
                  <div className="factor-item">
                    <div className="factor-icon">
                      <div className="icon-geometric-target"></div>
                    </div>
                    <div className="factor-content">
                      <h5>Selective Acceptance</h5>
                      <p>We only work with 12 business owners annually to ensure freedom-focused delivery</p>
                    </div>
                  </div>
                  
                  <div className="factor-item">
                    <div className="factor-icon">
                      <div className="icon-geometric-lightning"></div>
                    </div>
                    <div className="factor-content">
                      <h5>Immediate Transformation</h5>
                      <p>7-10 day maximum from handshake to complete freedom</p>
                    </div>
                  </div>
                  
                  <div className="factor-item">
                    <div className="factor-icon">
                      <div className="icon-geometric-trophy"></div>
                    </div>
                    <div className="factor-content">
                      <h5>Freedom-Focused Service</h5>
                      <p>Hands-on implementation reserved for business owners ready for change</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="finale-cta-section fade-in-up stagger-4">
                <a href="https://cal.com/elitehubnetwork/book-strategy-call" className="finale-cta-button" target="_blank" rel="noopener noreferrer">
                  <span className="cta-text">Get Your Freedom Back</span>
                  <div className="cta-shine"></div>
                </a>
                
                <div className="service-guarantees">
                  <div className="guarantee-grid">
                    <div className="guarantee-item">
                      <div className="guarantee-icon"></div>
                      <div className="guarantee-text">
                        <strong>Freedom Transformation Guarantee</strong><br/>
                        Significant time freedom or we continue until achieved
                      </div>
                    </div>
                    
                    <div className="guarantee-item">
                      <div className="guarantee-icon"></div>
                      <div className="guarantee-text">
                        <strong>Freedom-Focused Implementation</strong><br/>
                        Hands-on service with direct team access
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
                        <strong>Proven Freedom Methodology</strong><br/>
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
              <p>Freedom automation systems for business owners who value their time. Because every moment is irreplaceable.</p>
              <div className="social-links">
                <a href="https://www.instagram.com/matthewbetts.ehub" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span>MatthewBetts.Ehub</span>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Freedom Automation</a></li>
                <li><a href="#">Complete Admin Systems</a></li>
                <li><a href="#">Lead Capture Systems</a></li>
                <li><a href="#">Freedom Consulting</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Contact</h4>
              <ul>
              <li>outreach@elitehubnetwork.com</li>
                <li>Cardiff, Wales, UK</li>
                <li><a href="https://cal.com/elitehubnetwork/book-strategy-call" className="contact-cta" target="_blank" rel="noopener noreferrer">Get Your Freedom Back →</a></li>
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