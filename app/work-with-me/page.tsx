"use client"

import React from 'react';

// Self-contained UI Components
const Button = ({ children, className = "", size = "default", variant = "default", onClick, disabled = false }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const sizeClasses = {
    default: "h-10 py-2 px-4 text-sm",
    sm: "h-9 px-3 text-sm",
    lg: "h-12 px-8 text-base font-semibold"
  };
  
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg",
    outline: "border-2 border-gray-600 bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:ring-gray-500",
    ghost: "hover:bg-gray-100 focus:ring-gray-500 text-gray-700"
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Badge = ({ children, className = "", variant = "default" }) => {
  const variantClasses = {
    default: "bg-blue-100 text-blue-900 border border-blue-200",
    success: "bg-green-500/20 text-green-300 border border-green-500/30",
    secondary: "bg-gray-100 text-gray-900 border border-gray-200"
  };
  
  return (
    <span className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-gray-800/50 border border-gray-700 backdrop-blur-sm rounded-xl shadow-xl ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

// Icons
const RocketIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const CodeIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="16,18 22,12 16,6"/>
    <polyline points="8,6 2,12 8,18"/>
  </svg>
);

const CheckIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const ClockIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const ShieldIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const StarIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
  </svg>
);

const CalendarIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const UsersIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
  </svg>
);

export default function WorkWithMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Navigation */}
      <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <CodeIcon className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">EliteHub</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#results" className="text-gray-300 hover:text-white transition-colors">Results</a>
              <Button                 onClick={() => window.open('https://cal.com/elitehubnetwork/book-strategy-call', '_blank')}>
                Book Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div className="mb-8">
            <span className="text-gray-400 uppercase tracking-wider text-sm font-medium">
              Business Automation Specialists
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            You Started a Business{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              to Be Free.
            </span>{' '}
            Now You're More Trapped Than Ever.
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            Your biggest competitor isn't another company - it's your own inefficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => window.open('https://cal.com/elitehubnetwork/book-strategy-call', '_blank')}
              className="text-lg px-12 py-4"
            >
              <CalendarIcon className="h-6 w-6 mr-3" />
              Book Free Strategy Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.location.href = '#problem'}
              className="text-lg px-12 py-4"
            >
              See If This Is You
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>No Long Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Proven Results</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Save 20+ Hours/Week</span>
            </div>
          </div>
        </div>

        {/* Problem Section */}
        <div className="mb-20" id="problem">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Does This Sound Like You?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              You're stuck doing £10/hour admin work when you should be doing £100/hour strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-white font-bold text-xl mb-6">The Daily Grind</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Spending hours manually responding to emails instead of closing deals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Missing follow-ups with hot prospects because you're buried in spreadsheets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Working weekends to catch up on admin tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Your website looks amateur and barely gets any inquiries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Losing customers because your booking/quote process is a mess</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-white font-bold text-xl mb-6">What You Really Want</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5" />
                    <span>Automated systems that capture and nurture leads while you sleep</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5" />
                    <span>Professional website that actually converts visitors into customers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5" />
                    <span>Time to focus on strategy, not data entry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5" />
                    <span>Never miss a follow-up or lose a prospect again</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5" />
                    <span>Work ON your business, not IN it</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-20" id="how-it-works">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              How We Transform Your Business
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Simple 4-step process to eliminate admin work and automate your growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-500/30">
                  <span className="text-xl font-bold text-blue-400">1</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Business Audit</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Free 30-minute call to identify what's eating your time and costing you money.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500/30">
                  <span className="text-xl font-bold text-green-400">2</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Custom Plan</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Detailed proposal showing exactly what we'll build and how much time/money you'll save.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500/30">
                  <span className="text-xl font-bold text-purple-400">3</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">We Build It</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Professional website + automated systems that work together seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-cyan-500/30">
                  <span className="text-xl font-bold text-cyan-400">4</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">You Profit</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  More leads, more sales, more time. Work ON your business while systems handle the rest.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20" id="services">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the transformation level that fits your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RocketIcon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">Quick Automation Fix</h3>
                  <p className="text-gray-400 mb-4">Fix your biggest time-waster fast</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span>2 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Identify your #1 manual process killing productivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Build custom automation solution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Train your team to use it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">See immediate results</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://cal.com/elitehubnetwork/book-strategy-call', '_blank')}
                >
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Book Strategy Call
                </Button>
              </CardContent>
            </Card>

            <Card className="relative bg-gray-800/30 border-gray-600 backdrop-blur-sm">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <CardContent className="p-8 pt-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CodeIcon className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">Website + Core Automations</h3>
                  <p className="text-gray-400 mb-4">Complete online presence transformation</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span>4-6 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Professional website that converts visitors to customers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Automated lead capture and follow-up system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Booking, email, and quote automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Never miss another opportunity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Training and support included</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = '/contact'}
                >
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Book Strategy Call
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UsersIcon className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">Complete Business Transformation</h3>
                  <p className="text-gray-400 mb-4">Turn your business into a profit machine</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span>8-12 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Everything in Website + Automations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Advanced sales funnels and landing pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Complete workflow automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">6 months support and optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Work ON your business, not IN it</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://cal.com/elitehubnetwork/book-strategy-call', '_blank')}
                >
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Book Strategy Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-20" id="results">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Real Results from Real Business Owners
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See how we've helped SMBs eliminate admin work and focus on growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">25+ Hours</div>
                <p className="text-gray-300 text-sm">Saved Per Week</p>
                <p className="text-gray-500 text-xs">on average per client</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40% More</div>
                <p className="text-gray-300 text-sm">Leads Converted</p>
                <p className="text-gray-500 text-xs">with automated follow-up</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">£8,000+</div>
                <p className="text-gray-300 text-sm">Monthly Value</p>
                <p className="text-gray-500 text-xs">of time recovered</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                variant="outline"
                onClick={() => window.open('https://cal.com/elitehubnetwork/book-strategy-call', '_blank')}
              >
                Book Strategy Call
              </Button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gray-800 border border-gray-700 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stop Working Weekends. Start Working Smart.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Book a free 30-minute call to discover exactly how much time and money your current 
            processes are costing you – and what we can do about it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-12 py-4"
              onClick={() => window.open('https://cal.com/elitehubnetwork/book-strategy-call', '_blank')}
            >
              <CalendarIcon className="h-6 w-6 mr-3" />
              Book Free Strategy Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-12 py-4"
              onClick={() => window.location.href = 'mailto:elitehubnetwork@outlook.com'}
            >
              Email Us Directly
            </Button>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>✨ Free Strategy Call • No Obligation • Real Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}