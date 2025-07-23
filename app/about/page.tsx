"use client"

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Clock, Target, Zap, Shield, Users, Trophy, ChevronDown } from 'lucide-react';

// Intersection Observer Hook
const useInView = (threshold = 0.2) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold, rootMargin: '-50px' }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  
  return [ref, isInView];
};

// Counter Animation Hook
const useCountUp = (end, duration = 2000, startTrigger = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!startTrigger) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easedProgress = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      setCount(Math.floor(easedProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, startTrigger]);
  
  return count;
};

const EliteHubAbout = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white font-serif antialiased overflow-x-hidden">
      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes slideInPrecision {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes vaultOpen {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes progressGlow {
          0% { opacity: 0; }
          50% { opacity: 0.3; }
          100% { opacity: 0; }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#555555]' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="text-lg sm:text-xl font-light tracking-[0.3em] text-[#c9b037]">
            ELITEHUB
          </div>
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a 
              href="/" 
              className="text-[#e5e5e5] hover:text-white transition-all duration-300 font-light text-sm xl:text-base relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#c9b037] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="/about" 
              className="text-[#c9b037] font-light text-sm xl:text-base relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-px bg-[#c9b037]"></span>
            </a>
            <a 
              href="/what-we-do" 
              className="text-[#e5e5e5] hover:text-white transition-all duration-300 font-light text-sm xl:text-base relative group"
            >
              What We Do
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#c9b037] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="/our-work" 
              className="text-[#e5e5e5] hover:text-white transition-all duration-300 font-light text-sm xl:text-base relative group"
            >
              Our Work
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#c9b037] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="/book" 
              className="bg-[#c9b037] text-black px-6 py-3 font-medium tracking-wide hover:bg-[#d4c157] transition-all duration-300 text-sm xl:text-base relative overflow-hidden group"
            >
              <span className="relative z-10">BOOK A CALL</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          </div>
          
          <button className="lg:hidden text-[#e5e5e5] text-xl">☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Story Section */}
      <StorySection />

      {/* Mission Section */}
      <MissionSection />

      {/* Principles Section */}
      <PrinciplesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="border-t border-[#333333] py-12 sm:py-16">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
            <div className="md:col-span-2">
              <div className="text-2xl sm:text-3xl font-light tracking-[0.3em] text-[#c9b037] mb-4 sm:mb-6">
                ELITEHUB
              </div>
              <p className="text-[#666666] font-light leading-relaxed max-w-md mb-4 sm:mb-6 text-sm sm:text-base">
                Precision automation systems for business owners who value their time. 
                Because every moment matters.
              </p>
            </div>
            
            <div>
              <h4 className="text-[#c0c0c0] font-light mb-4 sm:mb-6 tracking-wider text-sm sm:text-base">Company</h4>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#666666] font-light">
                <div><a href="/" className="hover:text-[#c0c0c0] transition-colors duration-300">Home</a></div>
                <div><a href="/about" className="text-[#c9b037]">About</a></div>
                <div><a href="/what-we-do" className="hover:text-[#c0c0c0] transition-colors duration-300">What We Do</a></div>
                <div><a href="/our-work" className="hover:text-[#c0c0c0] transition-colors duration-300">Our Work</a></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-[#c0c0c0] font-light mb-4 sm:mb-6 tracking-wider text-sm sm:text-base">Contact</h4>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#666666] font-light">
                <div>hello@elitehub.com</div>
                <div>Cardiff, Wales, UK</div>
                <div>
                  <a href="/book" className="text-[#c9b037] hover:text-[#d4c157] transition-colors duration-300">
                    Book a Call →
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#333333] mt-12 sm:mt-16 pt-6 sm:pt-8 text-center">
            <p className="text-[#444444] font-light text-xs sm:text-sm font-mono tracking-wider">
              © 2024 EliteHub. Time is precious. Spend it wisely.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [heroRef, isInView] = useInView(0.3);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden py-32" ref={heroRef}>
      {/* Guilloché Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" className="absolute inset-0">
          <defs>
            <pattern id="heroGuilloche" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(201,176,55,0.3)" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(192,192,192,0.2)" strokeWidth="0.3"/>
              <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(201,176,55,0.2)" strokeWidth="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGuilloche)"/>
        </svg>
      </div>

      <div className="max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div 
          className="inline-flex items-center gap-3 border border-[#555555] px-4 py-2 rounded-sm hover:border-[#c9b037]/30 transition-all duration-500 mb-8"
          style={{ animation: isInView ? 'fadeInUp 0.8s ease-out' : 'none' }}
        >
          <div className="w-2 h-2 bg-[#c9b037] rounded-full shadow-[0_0_4px_rgba(201,176,55,0.3)]"></div>
          <span className="text-[#e5e5e5] text-xs sm:text-sm font-light tracking-[0.2em]">
            ABOUT ELITEHUB
          </span>
        </div>
        
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight mb-8"
          style={{ animation: isInView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none' }}
        >
          <span className="text-white">We Build Systems</span>
          <br />
          <span className="text-[#c9b037] font-normal">That Give Life Back</span>
        </h1>
        
        <p 
          className="text-lg sm:text-xl lg:text-2xl text-[#e5e5e5] font-light leading-relaxed max-w-3xl mx-auto"
          style={{ animation: isInView ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none' }}
        >
          We're not another agency. We're the team that helps business owners escape 
          the prison of manual work and reclaim their most precious resource: time.
        </p>
      </div>
    </section>
  );
};

// Story Section Component
const StorySection = () => {
  const [sectionRef, isInView] = useInView(0.2);

  return (
    <section className="py-20 sm:py-32 lg:py-40 relative" ref={sectionRef}>
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent opacity-60"></div>
      
      <div className="max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div 
            className="space-y-6 sm:space-y-8"
            style={{ animation: isInView ? 'slideInLeft 0.8s ease-out' : 'none' }}
          >
            <div className="text-[#c9b037] text-xs sm:text-sm font-light tracking-[0.3em] mb-6">
              THE ORIGIN STORY
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              <span className="text-white">Born from</span>
              <br />
              <span className="text-[#c9b037] font-normal">Frustration</span>
            </h2>
            
            <div className="space-y-6 text-[#c0c0c0] font-light leading-relaxed text-base sm:text-lg">
              <p>
                It started with a simple question: "Why am I spending 20 hours a week on 
                tasks that could be automated in 20 minutes?"
              </p>
              
              <p>
                After watching countless business owners—brilliant people—drowning in admin work 
                instead of building their empires, we knew something had to change.
              </p>
              
              <p>
                EliteHub was founded on the belief that your time shouldn't be wasted on 
                repetitive tasks. You should be focused on strategy, growth, and the work 
                that only you can do.
              </p>
            </div>
          </div>

          <div 
            className="relative"
            style={{ animation: isInView ? 'slideInRight 0.8s ease-out 0.2s both' : 'none' }}
          >
            <div className="bg-[#111111] border border-[#333333] p-8 relative overflow-hidden hover:border-[#c9b037]/30 transition-all duration-500 rounded-sm"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              {/* Brushed metal texture */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(192,192,192,0.1) 2px, rgba(192,192,192,0.1) 4px)`,
                  mixBlendMode: 'overlay'
                }}
              ></div>
              
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9b037] to-transparent opacity-60"></div>
              
              <div className="relative z-10">
                <div className="text-[#c9b037] text-sm font-light mb-4 tracking-wider">THE WAKE-UP CALL</div>
                <blockquote className="text-lg text-white font-light italic leading-relaxed mb-6">
                  "I realized I was paying myself £8/hour to do data entry while missing 
                  my daughter's bedtime stories. That night, everything changed."
                </blockquote>
                <cite className="text-[#666666] font-light text-sm">— James, Founder</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mission Section Component
const MissionSection = () => {
  const [sectionRef, isInView] = useInView(0.2);

  return (
    <section className="py-20 sm:py-32 lg:py-40 relative" ref={sectionRef}>
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent opacity-60"></div>
      
      <div className="max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div 
          className="text-[#c9b037] text-xs sm:text-sm font-light tracking-[0.3em] mb-6 sm:mb-8"
          style={{ animation: isInView ? 'fadeInUp 0.8s ease-out' : 'none' }}
        >
          OUR MISSION
        </div>
        
        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-8 sm:mb-12"
          style={{ animation: isInView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none' }}
        >
          <span className="text-white">Liberating Business Owners</span>
          <br />
          <span className="text-[#c9b037] font-normal">One System at a Time</span>
        </h2>
        
        <div 
          className="bg-[#0a0a0a] border border-[#333333] p-8 sm:p-12 relative overflow-hidden hover:border-[#c9b037]/30 transition-all duration-500 max-w-4xl mx-auto rounded-sm"
          style={{ 
            animation: isInView ? 'vaultOpen 0.8s ease-out 0.4s both' : 'none',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
          }}
        >
          {/* Brushed steel texture */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(180deg, transparent 0%, rgba(192,192,192,0.05) 50%, transparent 100%)`,
              mixBlendMode: 'overlay'
            }}
          ></div>
          
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9b037] to-transparent opacity-60"></div>
          
          <div className="relative z-10 space-y-6 text-lg sm:text-xl text-[#c0c0c0] font-light leading-relaxed">
            <p>
              We exist to give business owners their lives back. Every manual process we automate 
              is another hour returned to what matters most—strategy, growth, and time with family.
            </p>
            
            <p>
              Our systems don't just save time; they preserve sanity, protect relationships, 
              and unlock potential that was trapped in administrative quicksand.
            </p>
            
            <div className="pt-6 border-t border-[#333333]">
              <p className="text-[#c9b037] italic">
                "Time is the only currency that truly matters. We help you spend it wisely."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Principles Section Component
const PrinciplesSection = () => {
  const [sectionRef, isInView] = useInView(0.2);

  const principles = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time is Sacred",
      description: "Every minute spent on manual work is a minute stolen from growth, strategy, and life. We treat your time like the precious resource it is."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Over Perfection",
      description: "We build systems that work reliably, not perfectly. Better to have automation that runs 99% smoothly than manual work that's 100% exhausting."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed of Implementation",
      description: "Every day you wait is another day lost. We move fast because we understand the cost of inaction compounds daily."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero Bullshit Policy",
      description: "No industry jargon, no over-promising, no fake metrics. We tell you exactly what we can do and deliver exactly what we promise."
    }
  ];

  return (
    <section className="py-20 sm:py-32 lg:py-40 relative" ref={sectionRef}>
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent opacity-60"></div>
      
      <div className="max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div 
            className="text-[#c9b037] text-xs sm:text-sm font-light tracking-[0.3em] mb-6 sm:mb-8"
            style={{ animation: isInView ? 'fadeInUp 0.8s ease-out' : 'none' }}
          >
            OUR PRINCIPLES
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 sm:mb-8"
            style={{ animation: isInView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none' }}
          >
            <span className="text-white">How We</span>
            <span className="text-[#c9b037] font-normal"> Operate</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="bg-[#111111] border border-[#333333] p-6 sm:p-8 hover:border-[#c9b037]/30 transition-all duration-500 relative overflow-hidden group rounded-sm"
              style={{ 
                animation: isInView ? `slideInPrecision 0.8s ease-out ${0.4 + index * 0.1}s both` : 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}
            >
              {/* Brushed metal background */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(192,192,192,0.1) 50%, transparent 70%)`,
                  mixBlendMode: 'overlay'
                }}
              ></div>
              
              {/* Precision hover zone */}
              <div className="absolute inset-0 bg-[#c9b037]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center gap-4 mb-4 sm:mb-6 relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-[#c9b037] flex items-center justify-center text-[#c9b037] group-hover:shadow-[0_0_8px_rgba(201,176,55,0.3)] transition-all duration-500">
                  {principle.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-light text-[#c0c0c0] group-hover:text-white transition-colors duration-300">
                  {principle.title}
                </h3>
              </div>
              
              <p className="text-sm sm:text-base text-[#999999] font-light leading-relaxed relative z-10 group-hover:text-[#c0c0c0] transition-colors duration-300">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const [sectionRef, isInView] = useInView(0.2);
  
  const hours = useCountUp(1280, 2000, isInView);
  const clients = useCountUp(47, 2000, isInView);
  const revenue = useCountUp(890000, 2000, isInView);
  const satisfaction = useCountUp(96, 2000, isInView);

  return (
    <section className="py-20 sm:py-32 lg:py-40 relative" ref={sectionRef}>
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent opacity-60"></div>
      
      <div className="max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div 
            className="text-[#c9b037] text-xs sm:text-sm font-light tracking-[0.3em] mb-6 sm:mb-8"
            style={{ animation: isInView ? 'fadeInUp 0.8s ease-out' : 'none' }}
          >
            BY THE NUMBERS
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 sm:mb-8"
            style={{ animation: isInView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none' }}
          >
            <span className="text-white">Real</span>
            <span className="text-[#c9b037] font-normal"> Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div 
            className="bg-[#0a0a0a] border border-[#333333] p-6 sm:p-8 text-center group hover:border-[#c9b037]/30 transition-all duration-500 relative overflow-hidden rounded-sm"
            style={{ 
              animation: isInView ? 'slideInPrecision 0.8s ease-out 0.4s both' : 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}
          >
            <div className="absolute inset-0 bg-[#c9b037]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#c9b037] mb-2 font-mono group-hover:scale-105 transition-transform duration-300">
                {hours.toLocaleString()}
              </div>
              <div className="text-xs sm:text-sm text-[#666666] tracking-wider mb-1">HOURS SAVED</div>
              <div className="text-xs text-[#444444]">This year alone</div>
            </div>
          </div>

          <div 
            className="bg-[#0a0a0a] border border-[#333333] p-6 sm:p-8 text-center group hover:border-[#c9b037]/30 transition-all duration-500 relative overflow-hidden rounded-sm"
            style={{ 
              animation: isInView ? 'slideInPrecision 0.8s ease-out 0.5s both' : 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}
          >
            <div className="absolute inset-0 bg-[#c9b037]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#c9b037] mb-2 font-mono group-hover:scale-105 transition-transform duration-300">
                {clients}
              </div>
              <div className="text-xs sm:text-sm text-[#666666] tracking-wider mb-1">CLIENTS SERVED</div>
              <div className="text-xs text-[#444444]">Since 2022</div>
            </div>
          </div>

          <div 
            className="bg-[#0a0a0a] border border-[#333333] p-6 sm:p-8 text-center group hover:border-[#c9b037]/30 transition-all duration-500 relative overflow-hidden rounded-sm"
            style={{ 
              animation: isInView ? 'slideInPrecision 0.8s ease-out 0.6s both' : 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}
          >
            <div className="absolute inset-0 bg-[#c9b037]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#c9b037] mb-2 font-mono group-hover:scale-105 transition-transform duration-300">
                £{Math.round(revenue / 1000)}k
              </div>
              <div className="text-xs sm:text-sm text-[#666666] tracking-wider mb-1">VALUE GENERATED</div>
              <div className="text-xs text-[#444444]">For our clients</div>
            </div>
          </div>

          <div 
            className="bg-[#0a0a0a] border border-[#333333] p-6 sm:p-8 text-center group hover:border-[#c9b037]/30 transition-all duration-500 relative overflow-hidden rounded-sm"
            style={{ 
              animation: isInView ? 'slideInPrecision 0.8s ease-out 0.7s both' : 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}
          >
            <div className="absolute inset-0 bg-[#c9b037]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#c9b037] mb-2 font-mono group-hover:scale-105 transition-transform duration-300">
                {satisfaction}%
              </div>
              <div className="text-xs sm:text-sm text-[#666666] tracking-wider mb-1">SATISFACTION</div>
              <div className="text-xs text-[#444444]">Would recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Section Component
const TeamSection = () => {
  const [sectionRef, isInView] = useInView(0.2);

  const team = [
    {
      name: "James Mitchell",
      role: "Founder & Lead Automation Engineer",
      description: "Former corporate consultant who escaped the 80-hour work week trap. Now helps other business owners do the same through precision automation systems.",
      expertise: ["Process Engineering", "Systems Integration", "Business Strategy"]
    },
    {
      name: "Sarah Chen",
      role: "Senior Systems Architect",
      description: "Ex-fintech engineer with a passion for elegant solutions. Specializes in complex workflow automation and data pipeline optimization.",
      expertise: ["Workflow Design", "API Integration", "Data Architecture"]
    },
    {
      name: "Marcus Thompson",
      role: "Client Success Director",
      description: "Former operations director who understands the pain of manual processes. Ensures every client achieves maximum time savings from day one.",
      expertise: ["Change Management", "Training Design", "Performance Optimization"]
    }
  ];

  return (
    <section className="py-20 sm:py-32 lg:py-40 relative" ref={sectionRef}>
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent opacity-60"></div>
      
      <div className="max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div 
            className="text-[#c9b037] text-xs sm:text-sm font-light tracking-[0.3em] mb-6 sm:mb-8"
            style={{ animation: isInView ? 'fadeInUp 0.8s ease-out' : 'none' }}
          >
            THE TEAM
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 sm:mb-8"
            style={{ animation: isInView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none' }}
          >
            <span className="text-white">The People Behind</span>
            <br />
            <span className="text-[#c9b037] font-normal">The Systems</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-[#111111] border border-[#333333] p-6 sm:p-8 hover:border-[#c9b037]/30 transition-all duration-500 relative overflow-hidden group rounded-sm"
              style={{ 
                animation: isInView ? `slideInPrecision 0.8s ease-out ${0.4 + index * 0.1}s both` : 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}
            >
              {/* Brushed metal background */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(192,192,192,0.1) 50%, transparent 70%)`,
                  mixBlendMode: 'overlay'
                }}
              ></div>
              
              {/* Precision hover zone */}
              <div className="absolute inset-0 bg-[#c9b037]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#c9b037]/10 border border-[#c9b037]/30 flex items-center justify-center">
                    <span className="text-[#c9b037] font-mono text-sm font-medium">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-white group-hover:text-[#c9b037] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="text-[#c9b037] text-sm font-light">{member.role}</div>
                  </div>
                </div>
                
                <p className="text-sm text-[#999999] font-light leading-relaxed mb-4 group-hover:text-[#c0c0c0] transition-colors duration-300">
                  {member.description}
                </p>
                
                <div>
                  <h4 className="text-[#c0c0c0] text-xs font-light mb-2 tracking-wider">EXPERTISE</h4>
                  <div className="space-y-1">
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="text-xs text-[#666666] flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#c9b037] rounded-full"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  const [sectionRef, isInView] = useInView(0.2);

  return (
    <section className="py-20 sm:py-32 lg:py-40 relative" ref={sectionRef}>
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent opacity-60"></div>
      
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div 
          className="text-[#c9b037] text-xs sm:text-sm font-light tracking-[0.3em] mb-6 sm:mb-8"
          style={{ animation: isInView ? 'fadeInUp 0.8s ease-out' : 'none' }}
        >
          READY TO START?
        </div>
        
        <h2 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-8 sm:mb-12"
          style={{ animation: isInView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none' }}
        >
          <span className="text-white">Your Time</span>
          <br />
          <span className="text-[#c9b037] font-normal">Awaits</span>
        </h2>

        <p 
          className="text-xl sm:text-2xl text-[#c0c0c0] font-light leading-relaxed mb-8 sm:mb-12"
          style={{ animation: isInView ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none' }}
        >
          Every day you wait is another day of lost time. Let's change that.
        </p>

        <div 
          className="bg-[#111111] border border-[#333333] p-6 sm:p-8 mb-8 sm:mb-12 max-w-lg mx-auto relative overflow-hidden hover:border-[#c9b037]/30 transition-all duration-500 rounded-sm"
          style={{ 
            animation: isInView ? 'vaultOpen 0.8s ease-out 0.6s both' : 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9b037] to-transparent opacity-60"></div>
          <div className="text-[#c0c0c0] font-light mb-4 tracking-[0.2em] text-sm">30-MINUTE CONSULTATION</div>
          <div className="text-center">
            <div className="text-[#c9b037] font-light mb-2 text-lg">
              Free Strategy Session
            </div>
            <div className="text-sm text-[#888888] tracking-wider">No payment required</div>
            <div className="text-xs text-[#666666] mt-1">90-day money-back guarantee</div>
          </div>
        </div>

        <a 
          href="/book"
          className="inline-block bg-[#c9b037] text-black px-12 sm:px-16 py-4 sm:py-6 text-lg sm:text-xl font-medium tracking-wide hover:bg-[#d4c157] transition-all duration-300 mb-6 sm:mb-8 relative overflow-hidden group"
          style={{ animation: isInView ? 'fadeInUp 0.8s ease-out 0.8s both' : 'none' }}
        >
          <span className="relative z-10">BOOK YOUR CALL NOW</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </a>

        <div 
          className="text-sm text-[#666666] font-light space-y-2"
          style={{ animation: isInView ? 'fadeInUp 0.8s ease-out 1s both' : 'none' }}
        >
          <div>✓ 12+ hours saved weekly guaranteed</div>
          <div>✓ Custom automation blueprint included</div>
          <div>✓ 90-day support included</div>
        </div>
      </div>
    </section>
  );
};

export default EliteHubAbout;