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
    secondary: "bg-gray-100 text-gray-900 border border-gray-300"
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

const ArrowRightIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
  </svg>
);

export default function LandingPage() {
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
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <Button onClick={() => window.location.href = '/auth'}>
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
            ✨ TURN YOUR IDEA INTO A PROFITABLE SAAS
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Build Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              SaaS Product
            </span>{' '}
            in 30 Days
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            EliteHub helps entrepreneurs turn their business ideas into working SaaS products. 
            Get expert development, proven systems, and ongoing support to build a profitable business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/auth'}
              className="text-lg px-12 py-4"
            >
              <RocketIcon className="h-6 w-6 mr-3" />
              Start Building Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.location.href = '#how-it-works'}
              className="text-lg px-12 py-4"
            >
              Learn How It Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <ShieldIcon className="h-4 w-4 text-green-400" />
              <span>No Technical Skills Required</span>
            </div>
            <div className="flex items-center gap-2">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <span>Proven Process</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-blue-400" />
              <span>30-Day Delivery</span>
            </div>
          </div>
        </div>

        {/* What Is EliteHub Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Is EliteHub?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your complete platform for turning business ideas into profitable SaaS products
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:scale-105 transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CodeIcon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">Expert Development</h3>
                <p className="text-gray-400 leading-relaxed">
                  Work with experienced developers who understand both business and technology. 
                  We build your SaaS product from scratch using modern, scalable technology.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:scale-105 transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <RocketIcon className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">Fast Launch</h3>
                <p className="text-gray-400 leading-relaxed">
                  Go from idea to working product in 30 days or less. Our proven process 
                  eliminates months of trial and error, getting you to market quickly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:scale-105 transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldIcon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">Ongoing Support</h3>
                <p className="text-gray-400 leading-relaxed">
                  Get continued guidance to grow and scale your SaaS business. From launch 
                  to profitability, we're here to help you succeed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-20" id="how-it-works">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Simple 3-step process to get your SaaS built and launched
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-blue-500/30">
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-4">Share Your Idea</h3>
                <p className="text-gray-400 leading-relaxed">
                  Tell us about your business idea, target customers, and what problems you want to solve. 
                  We'll help refine your concept into a buildable product.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/30">
                  <span className="text-2xl font-bold text-green-400">2</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-4">We Build It</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our team develops your complete SaaS product with user authentication, payments, 
                  core features, and everything needed to start selling.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-cyan-500/30">
                  <span className="text-2xl font-bold text-cyan-400">3</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-4">Launch & Grow</h3>
                <p className="text-gray-400 leading-relaxed">
                  Launch your SaaS product and start acquiring customers. We provide ongoing 
                  support to help you scale and reach profitability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20" id="pricing">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include development, launch support, and code ownership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Prototype</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">£1,497</div>
                  <p className="text-gray-400 mb-4">Test your idea with users</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span>2 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Basic working prototype</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Core functionality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">User testing ready</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full"
                  onClick={() => window.location.href = '/auth'}
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
                  <h3 className="text-white text-2xl font-bold mb-2">Full SaaS</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">£2,997</div>
                  <p className="text-gray-400 mb-4">Production-ready SaaS</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span>4 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Complete SaaS platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Payment integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Ready to sell</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">2 weeks support</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = '/auth'}
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
                  <p className="text-gray-400 mb-4">Advanced features</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span>6 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Everything in Full SaaS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Advanced integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Custom features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">1 month support</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full"
                  onClick={() => window.location.href = '/auth'}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FIXED Final CTA - No more purple gradient, no empty white box */}
        <div className="bg-gray-800 border border-gray-700 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your SaaS?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join entrepreneurs who are turning their ideas into profitable SaaS businesses. 
            Start your journey today.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-12 py-4"
            onClick={() => window.location.href = '/auth'}
          >
            <RocketIcon className="h-6 w-6 mr-3" />
            Get Started Now
          </Button>
          
          <div className="mt-6 text-gray-400 text-sm">
            <p>✨ No Technical Skills Required • 30-Day Delivery • You Own Everything</p>
          </div>
        </div>
      </div>
    </div>
  );
}