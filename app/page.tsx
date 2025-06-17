"use client"

import React, { useState } from 'react';

// Self-contained UI Components
const Button = ({ children, className = "", size = "default", variant = "default", onClick, disabled = false }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const sizeClasses = {
    default: "h-10 py-2 px-4 text-sm",
    sm: "h-9 px-3 text-sm",
    lg: "h-12 px-8 text-base font-semibold"
  };
  
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl",
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

const ShopIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
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

const ArrowRightIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
  </svg>
);

const TrendingUpIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
    <polyline points="17,6 23,6 23,12"/>
  </svg>
);

const AutomationIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
  </svg>
);

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation helper
  const navigateTo = (path) => {
    window.location.href = path;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Navigation */}
      <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <ShopIcon className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">EliteHub</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-300 hover:text-white transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-white transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('success-stories')} className="text-gray-300 hover:text-white transition-colors">Success Stories</button>
              <Button onClick={() => navigateTo('/auth')}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <Badge variant="success" className="mb-8 text-sm px-6 py-3">
            ✨ TURN YOUR BUSINESS IDEA INTO REALITY
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Start Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Online Business
            </span>{' '}
            in 30 Days
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            I help small business owners and entrepreneurs build profitable online businesses 
            with automated systems that work 24/7 - even while you sleep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => navigateTo('/auth')}
              className="text-lg px-12 py-4"
            >
              <RocketIcon className="h-6 w-6 mr-3" />
              Start Your Business
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('how-it-works')}
              className="text-lg px-12 py-4"
            >
              See How It Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <ShieldIcon className="h-4 w-4 text-green-400" />
              <span>No Technical Knowledge Required</span>
            </div>
            <div className="flex items-center gap-2">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <span>Proven Results</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-blue-400" />
              <span>30-Day Launch</span>
            </div>
          </div>
        </div>

        {/* What Is EliteHub Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Exactly Do I Do For You?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I help business owners like you turn ideas into money-making online businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:scale-105 transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShopIcon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">Build Your Online Store</h3>
                <p className="text-gray-400 leading-relaxed">
                  Create a professional website where customers can find you, learn about your services, 
                  and buy from you 24/7. No coding required.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:scale-105 transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AutomationIcon className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">Automate Your Business</h3>
                <p className="text-gray-400 leading-relaxed">
                  Set up systems that handle customer emails, bookings, payments, and follow-ups 
                  automatically, so you can focus on what you do best.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:scale-105 transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUpIcon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">Grow Your Revenue</h3>
                <p className="text-gray-400 leading-relaxed">
                  Get ongoing support to help you attract more customers, increase prices, 
                  and grow your business month after month.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Perfect For Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Perfect For Business Owners Who Want To...
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckIcon className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Stop Trading Time for Money</h3>
                  <p className="text-gray-400">Create systems that generate income even when you're not working</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckIcon className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Reach More Customers</h3>
                  <p className="text-gray-400">Get found online by people who need your services</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckIcon className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Reduce Admin Work</h3>
                  <p className="text-gray-400">Automate bookings, payments, and customer communication</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckIcon className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Scale Without Stress</h3>
                  <p className="text-gray-400">Handle more customers without working longer hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckIcon className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Build Something Valuable</h3>
                  <p className="text-gray-400">Create a business asset that works for you, not the other way around</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckIcon className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Future-Proof Your Business</h3>
                  <p className="text-gray-400">Stay competitive with modern tools and systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-20" id="how-it-works">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Here's Exactly How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Simple 3-step process to get your automated business up and running
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-blue-500/30">
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-4">Tell Me About Your Business</h3>
                <p className="text-gray-400 leading-relaxed">
                  We'll have a conversation about what you do, who your customers are, 
                  and what you want to achieve. No technical knowledge needed.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/30">
                  <span className="text-2xl font-bold text-green-400">2</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-4">I Build Everything For You</h3>
                <p className="text-gray-400 leading-relaxed">
                  I create your complete online business system - website, booking system, 
                  payment processing, email automation, and customer management.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-cyan-500/30">
                  <span className="text-2xl font-bold text-cyan-400">3</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-4">You Start Getting Results</h3>
                <p className="text-gray-400 leading-relaxed">
                  Launch your automated business and start attracting customers. 
                  I provide ongoing support to help you grow and succeed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-20" id="success-stories">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Real Results From Real Business Owners
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how other entrepreneurs transformed their businesses with EliteHub
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-green-500/10 border-green-500/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-300 text-lg italic mb-6">
                  "I'm a personal trainer who was struggling to get new clients. EliteHub built me 
                  a website with online booking and automated email follow-ups. Now I'm booked solid 
                  and earning £4,500/month consistently!"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <p className="text-white font-semibold">Sarah Mitchell</p>
                    <p className="text-green-400 text-sm">Personal Trainer, Cardiff</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-300 text-lg italic mb-6">
                  "My cleaning business was all word-of-mouth. EliteHub created an online booking 
                  system and automated my scheduling. I've doubled my customer base and save 10 hours 
                  per week on admin work!"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    JK
                  </div>
                  <div>
                    <p className="text-white font-semibold">James Kumar</p>
                    <p className="text-blue-400 text-sm">Cleaning Service Owner, London</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-500/10 border-purple-500/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-300 text-lg italic mb-6">
                  "I had a great idea for helping local restaurants but no clue how to build it. 
                  EliteHub turned my concept into a working platform that now generates £3,200/month 
                  in recurring revenue!"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    MR
                  </div>
                  <div>
                    <p className="text-white font-semibold">Mike Rodriguez</p>
                    <p className="text-purple-400 text-sm">Restaurant Tech Entrepreneur</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-500/10 border-orange-500/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-300 text-lg italic mb-6">
                  "As a consultant, I was manually handling everything. EliteHub automated my client 
                  onboarding, proposals, and invoicing. I've increased my rates by 40% and work fewer hours!"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    EL
                  </div>
                  <div>
                    <p className="text-white font-semibold">Emma Lewis</p>
                    <p className="text-orange-400 text-sm">Business Consultant, Manchester</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20" id="pricing">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Investment In Your Business Future
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the option that fits your business needs. All packages include ongoing support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">£1,497</div>
                  <p className="text-gray-400 mb-4">Perfect for testing your idea</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span>2 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Simple business website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Contact forms & basic automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Perfect for service providers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">1 week launch support</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full"
                  onClick={() => navigateTo('/auth')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="relative ring-2 ring-blue-500 scale-105 hover:scale-110 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="default" className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardContent className="p-8 pt-12">
                <div className="text-center mb-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Complete Business</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">£2,997</div>
                  <p className="text-gray-400 mb-4">Everything you need to succeed</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span>4 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Professional business platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Online booking & payment system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Email automation & customer management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Mobile-responsive design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">2 weeks launch support</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => navigateTo('/auth')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">£4,997</div>
                  <p className="text-gray-400 mb-4">For ambitious growth</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span>6 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Everything in Complete Business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Custom integrations & workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Multi-location/staff management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">1 month dedicated support</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full"
                  onClick={() => navigateTo('/auth')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gray-800 border border-gray-700 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready To Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of business owners who've automated their operations, 
            increased their revenue, and reclaimed their time with EliteHub.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-12 py-4 mb-6"
            onClick={() => navigateTo('/auth')}
          >
            <RocketIcon className="h-6 w-6 mr-3" />
            Start Your Business Journey
          </Button>
          
          <div className="mt-6 text-gray-400 text-sm">
            <p>✨ No Technical Knowledge Required • 30-Day Delivery • You Own Everything</p>
          </div>
        </div>
      </div>
    </div>
  );
}