"use client"

import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  MessageSquare,
  Rocket,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
  Home,
  Building,
  Code,
  BarChart,
  Briefcase,
  ArrowRight
} from 'lucide-react';

export default function WorkWithMe() {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  const handleBooking = (calUrl) => {
    window.open(calUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Navigation Bar */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigateTo('/dashboard')}
              className="text-gray-300 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <Button
              variant="outline"
              onClick={() => navigateTo('/')}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-2 mb-6">
            WORK WITH ME
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Your Automated Business Together
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            From MVPs to enterprise solutions. Choose the package that fits your ambition 
            and let's transform your business.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Building className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-gray-400">Businesses Built</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">£2.4M</p>
              <p className="text-gray-400">Revenue Generated</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">15k+</p>
              <p className="text-gray-400">Hours Saved</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">98%</p>
              <p className="text-gray-400">Success Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Packages Section */}
        <div className="mb-20" id="pricing">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Investment Options
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From testing your idea to building enterprise solutions. All packages include 
              support and you own everything we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Starter */}
            <Card className="hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">£1,497</div>
                  <p className="text-gray-400 mb-4">Test your idea with users</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>2 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Basic working prototype</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Core functionality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">User testing ready</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full"
                  onClick={() => handleBooking('https://cal.com/elitehub')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Full SaaS */}
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
                    <Clock className="h-4 w-4" />
                    <span>4 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Complete SaaS platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Payment integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Ready to sell</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">2 weeks support</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleBooking('https://cal.com/elitehub')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">£4,997</div>
                  <p className="text-gray-400 mb-4">Advanced features</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>6 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Everything in Full SaaS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Advanced integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Custom features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">1 month support</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full"
                  onClick={() => handleBooking('https://cal.com/elitehub')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Business Transformation */}
            <Card className="hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Business Transform</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">£8,997</div>
                  <p className="text-gray-400 mb-4">Complete digital overhaul</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>6 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Multi-department automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Advanced reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Process optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">4 weeks support</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full"
                  onClick={() => handleBooking('https://cal.com/elitehub/business-transformation-consultation')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Solution */}
            <Card className="hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Enterprise Solution</h3>
                  <div className="text-4xl font-bold text-orange-400 mb-2">£14,997</div>
                  <p className="text-gray-400 mb-4">Large scale automation</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>8 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Complex automation systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">API integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Team training included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">6 weeks support</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full"
                  onClick={() => handleBooking('https://cal.com/elitehub/enterprise-solution-consultation')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Custom Build */}
            <Card className="hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
                    PREMIUM
                  </Badge>
                  <h3 className="text-white text-2xl font-bold mb-2">Custom Build</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">£19,997+</div>
                  <p className="text-gray-400 mb-4">Recruitment, SaaS, Marketplaces</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>10-12 weeks delivery</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Fully custom platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Scalable architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Advanced features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Ongoing maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">3 months support</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => handleBooking('https://cal.com/elitehub/custom-build-consultation')}
                >
                  Discuss Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What's Included in Every Package
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">You Own Everything</h3>
                <p className="text-gray-400">
                  All code, designs, and systems are 100% yours. No licensing fees or restrictions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Training Included</h3>
                <p className="text-gray-400">
                  We show you exactly how to manage and grow your new automated business.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Rocket className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Launch Support</h3>
                <p className="text-gray-400">
                  We're with you every step of the way to ensure a successful launch.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your business goals and find the perfect automation solution for you.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={() => handleBooking('https://cal.com/elitehub')}
          >
            <Calendar className="h-5 w-5 mr-2" />
            Book Your Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}