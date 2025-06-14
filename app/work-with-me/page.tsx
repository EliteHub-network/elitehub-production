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
  Shield,
  ArrowLeft,
  Home
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
    const calLinks: { [key: string]: string } = {
      "SaaS Strategy Session": "https://cal.com/elitehubnetwork/saas-strategy-session",
      "Idea to Prototype": "https://cal.com/elitehubnetwork/idea-to-prototype",
      "SaaS MVP Builder": "https://cal.com/elitehubnetwork/saas-mvp-product",
      "Full SaaS Development": "https://cal.com/elitehubnetwork/full-saas-development"
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
      description: "Technical roadmap and architecture planning. For those building it themselves.",
      includes: [
        "Technical architecture planning",
        "Technology stack recommendations",
        "Database design guidance",
        "Development roadmap with milestones",
        "Security and hosting recommendations",
        "Recorded session for reference"
      ],
      popular: false
    },
    {
      name: "Idea to Prototype",
      duration: "2 weeks",
      price: "£1,497",
      description: "Working prototype to test your concept with real users before full development.",
      includes: [
        "Core functionality prototype",
        "User authentication system",
        "Clean, functional interface",
        "Basic data management",
        "Deployment and hosting setup",
        "Code ownership and documentation"
      ],
      popular: false
    },
    {
      name: "SaaS MVP Builder",
      duration: "4 weeks", 
      price: "£2,997",
      description: "Complete SaaS ready for customers. Payment processing, admin panel, the works.",
      includes: [
        "Full user authentication and authorization",
        "Stripe payment processing integration", 
        "Complete dashboard with core features",
        "Admin panel for management",
        "Mobile-responsive design",
        "Email notifications and analytics",
        "Post-launch support included",
        "Complete code ownership"
      ],
      popular: true
    },
    {
      name: "Full SaaS Development",
      duration: "6 weeks",
      price: "£4,997", 
      description: "Enterprise-ready SaaS with advanced features and integrations.",
      includes: [
        "Everything in MVP Builder",
        "Advanced user roles and permissions",
        "Third-party integrations (APIs, webhooks)",
        "Advanced analytics dashboard",
        "Custom branding and design",
        "Marketing landing page",
        "Advanced security features",
        "Launch strategy included"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Navigation Bar */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => window.location.href = '/dashboard'}
              className="text-gray-300 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-2 mb-8">
          DIRECT. FAST. NO BS.
        </Badge>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          I build SaaS products for businesses that need software that actually works.
        </h1>
        
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            4 weeks from idea to live product. Fixed price. No scope creep.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Most developers will spend 3 months in "discovery calls" then deliver something that doesn't match what you asked for. I build working software fast because I understand business problems, not just code.
          </p>
          <p className="text-gray-300 text-lg">
            You tell me what you need. I build it. It works. You own everything.
          </p>
          <p className="text-blue-400 text-xl font-semibold mt-4">
            That's it.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => {
              document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Rocket className="h-5 w-5 mr-2" />
            See Packages
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
            onClick={handleSendMessage}
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            Send Message
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services */}
        <div className="text-center mb-12" id="services-section">
          <h2 className="text-3xl font-bold text-white mb-4">Pick What You Need</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Fixed prices. Clear deliverables. No surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`relative bg-gray-800/50 border-gray-700 backdrop-blur-sm ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2 text-white">{service.name}</CardTitle>
                <div className="text-3xl font-bold text-blue-400 mb-2">{service.price}</div>
                <p className="text-gray-400 text-sm">{service.duration}</p>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Fixed button styling for better visibility */}
                <Button 
                  className={`w-full font-semibold ${
                    service.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white border-0'
                  }`}
                  onClick={() => handleServiceClick(service.name, service.price)}
                >
                  Book Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How I Work */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16 border border-gray-700">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How I Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-500/30">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">You Tell Me What You Need</h3>
              <p className="text-gray-400">
                One call. You explain your business problem. I tell you exactly what I'll build and when it'll be done.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500/30">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">I Build It</h3>
              <p className="text-gray-400">
                No weekly check-ins. No status meetings. I build your software and show you when it's done.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500/30">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">You Own Everything</h3>
              <p className="text-gray-400">
                Complete code ownership. Full documentation. Hosting setup. You're not dependent on me.
              </p>
            </div>
          </div>
        </div>

        {/* Why Me Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16 border border-gray-700">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">I Actually Ship</h3>
                <p className="text-gray-400">
                  No endless revisions. No feature creep. I build what we agreed on and deliver it on time.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-green-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Business-First Approach</h3>
                <p className="text-gray-400">
                  I understand business problems, not just code. Your software will actually solve real issues.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-purple-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">You Own Everything</h3>
                <p className="text-gray-400">
                  Complete code ownership. Full documentation. No vendor lock-in.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-yellow-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Fixed Timeline & Price</h3>
                <p className="text-gray-400">
                  What I quote is what you pay. When I say 4 weeks, I mean 4 weeks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" id="contact-form">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Tell me what you need built. I'll get back to you within 24 hours with exactly how I'll build it and when it'll be done.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">No Sales Calls</h4>
                  <p className="text-gray-400">Straight to technical discussion</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">24-Hour Response</h4>
                  <p className="text-gray-400">Usually much faster</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Clear Proposal</h4>
                  <p className="text-gray-400">Exactly what you'll get and when</p>
                </div>
              </div>
            </div>
          </div>

          <Card className={`bg-gray-800/50 border-gray-700 backdrop-blur-sm ${showMessageForm ? 'ring-2 ring-blue-500' : ''}`}>
            <CardHeader>
              <CardTitle className="text-white">Tell Me What You Need</CardTitle>
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
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="company"
                    placeholder="Company Name (optional)"
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  />
                  <select 
                    name="country"
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white"
                    required
                  >
                    <option value="">Select your country</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Spain">Spain</option>
                    <option value="Italy">Italy</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Norway">Norway</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block font-medium">
                    What do you need built?
                  </label>
                  <Textarea
                    name="project_description"
                    placeholder="Describe your business problem and what software would solve it..."
                    rows={4}
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block font-medium">
                      Budget Range
                    </label>
                    <select 
                      name="budget"
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white"
                      required
                    >
                      <option value="">Select budget</option>
                      <option value="£1,000-£2,000">£1,000 - £2,000</option>
                      <option value="£2,000-£3,500">£2,000 - £3,500</option>
                      <option value="£3,500-£5,000">£3,500 - £5,000</option>
                      <option value="£5,000+">£5,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block font-medium">
                      Preferred Payment
                    </label>
                    <select 
                      name="payment_preference"
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white"
                      required
                    >
                      <option value="">Select payment method</option>
                      <option value="Bank Transfer">Bank Transfer (SEPA/Wire)</option>
                      <option value="Stripe (Card)">Credit/Debit Card</option>
                      <option value="PayPal">PayPal</option>
                      <option value="Crypto">Cryptocurrency</option>
                      <option value="Other">Other (discuss)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block font-medium">
                      Timeline
                    </label>
                    <select 
                      name="timeline"
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white"
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="1 month">1 month</option>
                      <option value="2+ months">2+ months</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block font-medium">
                      Time Zone
                    </label>
                    <select 
                      name="timezone"
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white"
                      required
                    >
                      <option value="">Select timezone</option>
                      <option value="GMT (London)">GMT (London)</option>
                      <option value="EST (New York)">EST (New York)</option>
                      <option value="PST (Los Angeles)">PST (Los Angeles)</option>
                      <option value="CET (Berlin/Paris)">CET (Berlin/Paris)</option>
                      <option value="AEST (Sydney)">AEST (Sydney)</option>
                      <option value="JST (Tokyo)">JST (Tokyo)</option>
                      <option value="IST (Mumbai)">IST (Mumbai)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <input type="hidden" name="_subject" value="New International SaaS Project Request" />
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Send Project Details
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>

                <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-3 mt-4">
                  <p className="text-blue-300 text-sm">
                    💳 <strong>Payment Options:</strong> Bank transfer (SEPA/Wire), PayPal, Stripe, or crypto accepted for international clients.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}