"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Zap, 
  Star,
  ArrowRight,
  Phone,
  MessageSquare,
  Calendar,
  Rocket,
  TrendingUp,
  Code,
  Shield
} from 'lucide-react';

export default function WorkWithMe() {
  const [showMessageForm, setShowMessageForm] = useState(false);

  const handleSendMessage = () => {
    setShowMessageForm(true);
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleServiceClick = (serviceName: string, price: string) => {
    // Map services to their Cal.com booking links
    const calLinks: { [key: string]: string } = {
      "SaaS Strategy Session": "https://cal.com/elitehubnetwork/saas-strategy-session",
      "Idea to Prototype": "https://cal.com/elitehubnetwork/saas-prototype-consultation",
      "SaaS MVP Builder": "https://cal.com/elitehubnetwork/saas-mvp-consultation",
      "Full SaaS Development": "https://cal.com/elitehubnetwork/saas-full-consultation"
    };

    const bookingLink = calLinks[serviceName];
    if (bookingLink) {
      window.open(bookingLink, '_blank');
    }
  };

  const services = [
    {
      name: "SaaS Strategy Session",
      duration: "2 hours",
      price: "£197",
      description: "Perfect if you want to build it yourself but need expert guidance on the technical approach",
      includes: [
        "2-hour deep dive consultation",
        "Technical architecture planning",
        "Best technology stack recommendations",
        "Database design and structure",
        "Development roadmap and milestones",
        "Cost estimates and hosting recommendations",
        "Security best practices",
        "Recorded session for future reference"
      ],
      popular: false
    },
    {
      name: "Idea to Prototype",
      duration: "2 weeks",
      price: "£1,497",
      description: "Perfect for testing your concept with real users before building the full product",
      includes: [
        "Discovery & planning session (2 hours)",
        "Basic working prototype with core features", 
        "User registration and authentication system",
        "Simple, clean user interface design",
        "Basic data management functionality",
        "Hosting setup and deployment",
        "1 week of tweaks based on user feedback",
        "Code ownership and documentation"
      ],
      popular: false
    },
    {
      name: "SaaS MVP Builder",
      duration: "4 weeks", 
      price: "£2,997",
      description: "Complete, production-ready SaaS that you can start selling to customers immediately",
      includes: [
        "Comprehensive discovery and planning (4 hours)",
        "Complete user authentication and authorization",
        "Stripe payment processing integration", 
        "Full dashboard with all core features",
        "Admin panel for user and content management",
        "Mobile-responsive design and optimization",
        "Email notifications and basic analytics",
        "Database design and hosting setup",
        "2 weeks of post-launch support and bug fixes",
        "Complete code ownership and documentation",
        "Training session on managing your SaaS"
      ],
      popular: true
    },
    {
      name: "Full SaaS Development",
      duration: "6 weeks",
      price: "£4,997", 
      description: "Enterprise-ready SaaS with advanced features, integrations, and marketing support",
      includes: [
        "Everything in SaaS MVP Builder PLUS:",
        "Advanced user roles and permissions system",
        "Third-party integrations (Zapier, APIs, webhooks)",
        "Advanced analytics and reporting dashboard",
        "Custom branding and professional design",
        "Marketing landing page with conversion optimization",
        "Advanced security features and compliance",
        "Launch strategy and go-to-market plan",
        "1 month of post-launch optimization and feature additions",
        "Priority support and consultation access"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-green-500/20 text-green-300 border border-green-500/30 px-4 py-2 mb-6">
            ✨ 12 SAAS PRODUCTS LAUNCHED IN 2024
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            From Idea to Profitable SaaS in 30 Days
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Skip months of trial and error. Get your SaaS product built by an experienced developer 
            who&apos;s launched 12+ profitable products. From validated idea to paying customers in 4 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => {
                document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Rocket className="h-5 w-5 mr-2" />
              View Packages
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={handleSendMessage}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Discuss Your Idea
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your SaaS Development Package</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From quick prototypes to full-scale SaaS platforms, get exactly what you need to validate and launch your product
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" id="services-section">
          {services.map((service, index) => (
            <Card key={index} className={`relative ${service.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>
                <p className="text-gray-600 text-sm">{service.duration}</p>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.includes.slice(0, 5).map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                  {service.includes.length > 5 && (
                    <li className="text-sm text-gray-500 italic">
                      + {service.includes.length - 5} more features...
                    </li>
                  )}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={service.popular ? "default" : "outline"}
                  onClick={() => handleServiceClick(service.name, service.price)}
                >
                  Book Consultation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services & Options</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* White Label SaaS Templates */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  White Label SaaS Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Ready-made SaaS templates you can rebrand and launch as your own
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Booking/Scheduling SaaS</span>
                    <span className="text-green-400 font-semibold">£997</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Project Management SaaS</span>
                    <span className="text-green-400 font-semibold">£1,497</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">CRM SaaS</span>
                    <span className="text-green-400 font-semibold">£1,997</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Membership Site SaaS</span>
                    <span className="text-green-400 font-semibold">£1,297</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                  onClick={() => window.open('https://cal.com/elitehubnetwork/white-label-templates', '_blank')}
                >
                  View Templates
                </Button>
              </CardContent>
            </Card>

            {/* Training & Coaching */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  Training & Coaching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Learn to build SaaS products yourself with expert guidance
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">"Build Your Own SaaS" Course</span>
                    <span className="text-green-400 font-semibold">£497</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">1-on-1 Coaching (per hour)</span>
                    <span className="text-green-400 font-semibold">£297</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Group Workshop (8 people)</span>
                    <span className="text-green-400 font-semibold">£197/person</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                  onClick={() => window.open('https://cal.com/elitehubnetwork/saas-training', '_blank')}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Partnership/Equity Section */}
          <div className="mt-8 bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-6 border border-purple-700">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3 flex items-center justify-center gap-2">
                <Rocket className="h-6 w-6 text-purple-400" />
                Partnership & Equity Opportunities
              </h3>
              <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
                Have a great idea but limited budget? Let&apos;s discuss equity partnerships or revenue sharing models. 
                I&apos;m open to building your SaaS for 10-30% equity or a revenue share arrangement.
              </p>
              <Button 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => window.open('https://cal.com/elitehubnetwork/partnership-discussion', '_blank')}
              >
                Discuss Partnership
              </Button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My SaaS Development Track Record</h2>
            <p className="text-lg text-gray-600">
              Real results from real products launched in 2024
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">12 SaaS Products</h3>
              <p className="text-gray-600">Successfully launched in 2024</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">85% Success Rate</h3>
              <p className="text-gray-600">Products reaching profitability</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">30-Day Average</h3>
              <p className="text-gray-600">From idea to launch</p>
            </div>
          </div>
        </div>

        {/* Why Choose Me Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Me?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Experienced SaaS Developer</h3>
                <p className="text-gray-600">
                  12+ successful SaaS products launched in 2024 alone. I know what works and what doesn&apos;t.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Fast, Reliable Delivery</h3>
                <p className="text-gray-600">
                  30-day average from idea to launch. No endless revisions or scope creep.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">You Own Everything</h3>
                <p className="text-gray-600">
                  100% code ownership, documentation, and deployment access. It&apos;s your product.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Star className="h-5 w-5 text-yellow-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Launch Support Included</h3>
                <p className="text-gray-600">
                  I don&apos;t just build and disappear. Get support through launch and initial growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" id="contact-form">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your SaaS?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Tell me about your idea and I&apos;ll get back to you within 24 hours with a custom 
              development plan and timeline.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Free Consultation</h4>
                  <p className="text-gray-600">30-minute discovery call</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Quick Response</h4>
                  <p className="text-gray-600">24-hour response guarantee</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Fixed Pricing</h4>
                  <p className="text-gray-600">No surprises or hidden costs</p>
                </div>
              </div>
            </div>
          </div>

          <Card className={showMessageForm ? 'ring-2 ring-blue-500' : ''}>
            <CardHeader>
              <CardTitle>Get Your Custom SaaS Development Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <form 
                action="https://formspree.io/f/xrbkqbaz"
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                
                <Input
                  name="company"
                  placeholder="Company Name (optional)"
                />

                <div>
                  <label className="text-gray-700 text-sm mb-2 block font-medium">
                    Describe Your SaaS Idea
                  </label>
                  <Textarea
                    name="saas_idea"
                    placeholder="What problem does your SaaS solve? Who are your target users? What are the main features you need?"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-700 text-sm mb-2 block font-medium">
                      Budget Range
                    </label>
                    <select 
                      name="budget"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="£1,000-£2,000">£1,000 - £2,000</option>
                      <option value="£2,000-£3,500">£2,000 - £3,500</option>
                      <option value="£3,500-£5,000">£3,500 - £5,000</option>
                      <option value="£5,000+">£5,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-gray-700 text-sm mb-2 block font-medium">
                      Timeline
                    </label>
                    <select 
                      name="timeline"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="1 month">1 month</option>
                      <option value="2+ months">2+ months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-gray-700 text-sm mb-2 block font-medium">
                    Additional Information (optional)
                  </label>
                  <Textarea
                    name="additional_info"
                    placeholder="Any specific requirements, technical preferences, or questions?"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Hidden field to track which package they're interested in */}
                <input 
                  type="hidden" 
                  name="_subject" 
                  value="New SaaS Development Request - EliteHub" 
                />
                
                {/* Redirect after submission (optional) */}
                <input 
                  type="hidden" 
                  name="_next" 
                  value="http://localhost:3000/thank-you" 
                />
                
                <Button type="submit" className="w-full" size="lg">
                  Send My SaaS Project Request
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}