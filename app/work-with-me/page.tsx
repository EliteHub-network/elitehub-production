"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Calendar,
  CheckCircle,
  Clock,
  Star,
  ArrowLeft,
  ArrowRight,
  Home,
  Zap,
  BarChart3,
  Shield
} from 'lucide-react';

export default function WorkWithMe() {
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-2 mb-6">
            WORK WITH ME
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Business with Automation
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            I build custom automation solutions that save you time, increase revenue, 
            and help your business run on autopilot.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Save 15+ Hours/Week</h3>
              <p className="text-gray-400">Automate repetitive tasks and focus on growth</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <BarChart3 className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Increase Revenue</h3>
              <p className="text-gray-400">Systems that work 24/7 to grow your business</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Reliable & Scalable</h3>
              <p className="text-gray-400">Professional solutions that grow with you</p>
            </CardContent>
          </Card>
        </div>

        {/* Packages */}
        <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Package</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Starter */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-gray-600 transition-all">
            <CardHeader>
              <CardTitle className="text-white text-xl">Starter</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold text-white">£1,497</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">Perfect for testing your business idea</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Basic working prototype</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Core functionality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">2 weeks delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Basic support</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://cal.com/elitehubnetwork/starter-consultation', '_blank')}
              >
                Book Consultation
              </Button>
            </CardContent>
          </Card>

          {/* Full SaaS - Most Popular */}
          <Card className="bg-gray-800/50 border-blue-500 border-2 backdrop-blur-sm relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-500 text-white">Most Popular</Badge>
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="text-white text-xl">Full SaaS</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold text-white">£2,997</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">Production-ready SaaS platform</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Complete SaaS platform</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Payment integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">4 weeks delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">2 weeks support</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://cal.com/elitehubnetwork/full-saas-consultation', '_blank')}
              >
                Book Consultation
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-gray-600 transition-all">
            <CardHeader>
              <CardTitle className="text-white text-xl">Enterprise</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold text-white">£4,997</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">Advanced features & integrations</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Everything in Full SaaS</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Advanced integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">6 weeks delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">1 month support</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://cal.com/elitehubnetwork/enterprise-consultation', '_blank')}
              >
                Book Consultation
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Premium Packages */}
        <h2 className="text-3xl font-bold text-white text-center mb-12">Premium Solutions</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Business Transformation */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-gray-600 transition-all">
            <CardHeader>
              <CardTitle className="text-white text-xl">Business Transform</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold text-white">£8,997</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">Complete digital transformation</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Multi-department automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">6 weeks delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">4 weeks support</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://cal.com/elitehubnetwork/business-transformation-consultation', '_blank')}
              >
                Book Consultation
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Solution */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-gray-600 transition-all">
            <CardHeader>
              <CardTitle className="text-white text-xl">Enterprise Solution</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold text-white">£14,997</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">Large scale automation systems</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Complex automation systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">API integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">8 weeks delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">6 weeks support</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://cal.com/elitehubnetwork/enterprise-solution-consultation', '_blank')}
              >
                Book Consultation
              </Button>
            </CardContent>
          </Card>

          {/* Custom Build */}
          <Card className="bg-gray-800/50 border-purple-500 backdrop-blur-sm">
            <CardHeader>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-2">PREMIUM</Badge>
              <CardTitle className="text-white text-xl">Custom Build</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold text-white">£19,997+</span>
                <span className="text-gray-400 ml-2">starting at</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">Recruitment, SaaS, Marketplaces</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Fully custom platform</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Scalable architecture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">10-12 weeks delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">3 months support</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700"
                onClick={() => window.open('https://cal.com/elitehubnetwork/custom-build-consultation', '_blank')}
              >
                Discuss Project
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not Sure Which Package is Right for You?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's have a quick chat about your business goals and I'll recommend 
              the best solution for your needs.
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.open('https://cal.com/elitehubnetwork/free-strategy-call', '_blank')}
            >
              Book Free Strategy Call
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}