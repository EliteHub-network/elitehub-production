"use client"

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

// Built-in UI Components
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

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold ${className}`}>
    {children}
  </h3>
);

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

// Icons
const Calendar = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const ShoppingBag = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
  </svg>
);

const BookOpen = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const Mail = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const Briefcase = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const Zap = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
  </svg>
);

const Clock = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const TrendingUp = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
    <polyline points="17,6 23,6 23,12"/>
  </svg>
);

const Users = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const Settings = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const LogOut = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16,17 21,12 16,7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const Menu = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const X = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const Home = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

const Info = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

const ArrowRight = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
  </svg>
);

export default function Dashboard() {
  const { user } = useUser();
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push('/auth');
      return;
    }
    
    setFirstName(user.firstName || 'User');
    setLoading(false);
  }, [user, router]);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || 'User');
      setLoading(false);
    }
  }, [user]);

  const handleSettings = () => {
    window.location.href = '/settings';
  };

  const handleSignOut = () => {
    if (confirm('Are you sure you want to sign out?')) {
      window.location.href = '/';
    }
  };

  const handleNavigation = (href) => {
    window.location.href = href;
  };

  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home, active: true },
    { name: 'Work With Me', href: '/work-with-me', icon: Briefcase },
    { name: 'Community', href: '/community-hub', icon: Users },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const businessTypes = [
    {
      title: "Coaching & Training Platform",
      icon: Calendar,
      description: "Perfect for personal trainers, life coaches, business mentors, fitness instructors",
      features: ["Client booking system", "Progress tracking", "Automated check-ins", "Payment collection"],
      timeSaved: "18 hours/week",
      example: "Like Sarah's personal training business - now earning £4,500/month",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Agency Business", 
      icon: Briefcase,
      description: "Marketing agencies, design studios, consultancies with streamlined operations",
      features: ["Client onboarding", "Project management", "Automated reporting", "Invoice generation"],
      timeSaved: "25 hours/week",
      example: "Like Mike's marketing agency - doubled clients without extra staff",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Online Course Business",
      icon: BookOpen, 
      description: "Monetize your expertise with automated course delivery and student management",
      features: ["Video hosting", "Student progress tracking", "Automated certificates", "Drip content"],
      timeSaved: "15 hours/week",
      example: "Like Emma's business course - £3,200/month passive income",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Service Booking Platform",
      icon: Calendar,
      description: "Beauty salons, cleaning services, repair businesses, healthcare providers",
      features: ["Online booking calendar", "Automated reminders", "Staff scheduling", "Customer management"],
      timeSaved: "22 hours/week", 
      example: "Like James's cleaning business - tripled bookings in 4 months",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "E-commerce Store",
      icon: ShoppingBag,
      description: "Sell physical or digital products with complete automated fulfillment",
      features: ["Product catalog", "Inventory management", "Order processing", "Customer support"],
      timeSaved: "20 hours/week",
      example: "Like Lisa's handmade jewelry - from hobby to £6k/month business",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Lead Generation System",
      icon: Mail,
      description: "Real estate agents, insurance brokers, B2B consultants capturing qualified leads",
      features: ["Landing pages", "Lead scoring", "Email nurturing", "CRM integration"],
      timeSaved: "16 hours/week",
      example: "Like Tom's insurance brokerage - 300% increase in qualified leads",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Mobile Header */}
      <div className="lg:hidden bg-gray-900/50 backdrop-blur-sm border-b border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">EliteHub</h1>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 text-gray-300 hover:text-white bg-gray-700/50 hover:bg-gray-600 px-3 py-2 rounded-lg border border-gray-600 transition-colors"
          >
            {mobileMenuOpen ? (
              <>
                <X className="h-5 w-5" />
                <span className="text-sm font-medium">Close</span>
              </>
            ) : (
              <>
                <Menu className="h-5 w-5" />
                <span className="text-sm font-medium">Menu</span>
              </>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-4 space-y-2 pb-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg w-full text-left"
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </button>
              );
            })}
            <button
              onClick={handleSettings}
              className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg w-full text-left"
            >
              <Settings className="h-5 w-5" />
              Settings
            </button>
            <button 
              onClick={handleSignOut}
              className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg w-full text-left"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Welcome back, {firstName}!</h1>
            <p className="text-blue-200 mt-2">Let's build something amazing for your business</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={handleSettings} className="border-gray-600 text-gray-300 hover:bg-gray-700">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            
            <Button variant="outline" size="sm" onClick={handleSignOut} className="border-gray-600 text-gray-300 hover:bg-gray-700">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Desktop Navigation - Simple */}
        <div className="hidden lg:block mb-8">
          <nav className="flex space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-lg p-1 border border-gray-700">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors w-full text-left ${
                    item.active 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center lg:text-left">
                <Badge variant="success" className="mb-6 bg-white/20 text-white border-white/30">
                  ✨ Your Business Automation Partner
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  What Can We Build For Your Business?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl">
                  Every successful business runs on systems that work automatically. We build these systems for you, 
                  so you can focus on what you do best while your business grows on autopilot.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                    <h3 className="font-semibold mb-1 text-white">Save 15+ Hours/Week</h3>
                    <p className="text-blue-100 text-sm">Automation handles repetitive tasks</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                    <h3 className="font-semibold mb-1 text-white">Increase Revenue</h3>
                    <p className="text-blue-100 text-sm">Work 24/7 to capture more customers</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                    <Zap className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                    <h3 className="font-semibold mb-1 text-white">Scale Without Stress</h3>
                    <p className="text-blue-100 text-sm">Handle more clients effortlessly</p>
                  </div>
                </div>
                
                <Button 
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                  onClick={() => handleNavigation('/work-with-me')}
                >
                  Book Your Free Strategy Call
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What We Can Build Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Choose Your Business Type
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every business is different. Here are the most popular types we build, 
              each designed to save you time and make you more money.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {businessTypes.map((business, index) => {
              const Icon = business.icon;
              return (
                <Card key={index} className="hover:scale-105 transition-all duration-300 cursor-pointer group h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${business.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-2">{business.title}</h3>
                        <p className="text-gray-400 mb-3 text-sm">{business.description}</p>
                        
                        <div className="mb-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Clock className="h-3 w-3 text-green-400" />
                            <span className="text-green-400 font-semibold text-sm">Saves {business.timeSaved}</span>
                          </div>
                          <p className="text-gray-500 text-xs italic">{business.example}</p>
                        </div>
                        
                        <div className="space-y-2 flex-1">
                          <p className="text-white font-medium text-xs">Key features:</p>
                          <ul className="space-y-1 text-gray-300 text-xs">
                            {business.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-1">
                                <div className="w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-4 p-2 bg-gray-700/30 rounded-lg border border-gray-600">
                          <p className="text-gray-300 text-xs text-center">
                            💡 This could be perfect for your business
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* How Automation Works Section */}
        <div className="mb-12">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                How Business Automation Actually Works
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">❌</div>
                    Without Automation
                  </h3>
                  <ul className="space-y-3 text-gray-400">
                    <li>• Manually answering the same questions over and over</li>
                    <li>• Chasing clients for payments and bookings</li>
                    <li>• Spending hours on admin instead of serving customers</li>
                    <li>• Missing opportunities because you're too busy</li>
                    <li>• Working evenings and weekends just to keep up</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✅</div>
                    With Automation
                  </h3>
                  <ul className="space-y-3 text-gray-400">
                    <li>• Your website answers questions and books appointments 24/7</li>
                    <li>• Payments are collected automatically</li>
                    <li>• Email sequences nurture leads while you sleep</li>
                    <li>• Systems capture every opportunity</li>
                    <li>• You focus on high-value work that only you can do</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 text-center">
                <h3 className="text-white font-semibold text-lg mb-2">The Result?</h3>
                <p className="text-blue-300 text-lg">
                  Our clients typically save 15-25 hours per week and increase revenue by 40-60% 
                  within 6 months of launching their automated systems.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Real Success Stories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-green-500/10 border-green-500/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <p className="text-white font-semibold">Sarah Mitchell</p>
                    <p className="text-green-400 text-sm">Personal Trainer → £4,500/month</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Before EliteHub, I was constantly on my phone booking sessions. Now my website 
                  handles everything automatically. I've tripled my income and work fewer hours!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    JK
                  </div>
                  <div>
                    <p className="text-white font-semibold">James Kumar</p>
                    <p className="text-blue-400 text-sm">Cleaning Business → Doubled Customers</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "My automated booking system and email follow-ups have doubled my customer base. 
                  I save 15 hours per week on admin work!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Explore Your Options?
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                These are just some examples of what's possible. Every business is unique, 
                and we'd love to discuss what could work best for yours.
              </p>
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 font-semibold"
                onClick={() => handleNavigation('/work-with-me')}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Your Free Strategy Call
              </Button>
              <p className="text-gray-400 text-sm mt-4">
                ✨ No pressure, no commitment - just valuable insights for your business
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}