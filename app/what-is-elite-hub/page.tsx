"use client"

import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { 
  Zap, 
  Target, 
  Rocket, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Clock,
  Shield
} from 'lucide-react';

export default function WhatIsEliteHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What is EliteHub?
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            EliteHub is your complete business automation platform that helps entrepreneurs 
            build, launch, and scale profitable online businesses without the technical overwhelm.
          </p>
        </div>

        {/* Main Value Proposition */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16 border border-gray-700">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Turn Your Business Ideas Into Automated Revenue Machines
              </h2>
              <p className="text-gray-300 mb-6">
                Whether you're starting from scratch or looking to automate your existing business, 
                EliteHub provides the tools, templates, and expert guidance you need to succeed.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <p className="text-gray-300">Pre-built automation templates ready to deploy</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <p className="text-gray-300">Step-by-step implementation guidance</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <p className="text-gray-300">Expert support when you need it</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gray-700/50 border-gray-600">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-1">Scale Fast</h3>
                  <p className="text-gray-400 text-sm">Grow without limits</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700/50 border-gray-600">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-green-500 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-1">Save Time</h3>
                  <p className="text-gray-400 text-sm">Automate everything</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700/50 border-gray-600">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-purple-500 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-1">Reduce Risk</h3>
                  <p className="text-gray-400 text-sm">Proven systems</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700/50 border-gray-600">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-1">Track Results</h3>
                  <p className="text-gray-400 text-sm">Data-driven growth</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How EliteHub Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <CardTitle className="text-white">Choose Your Path</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Browse our marketplace of proven automation templates or work with our experts 
                  to create a custom solution for your business.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-400">2</span>
                </div>
                <CardTitle className="text-white">Implement & Automate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Follow our step-by-step guides to implement your chosen systems. 
                  Get help when needed with our expert support options.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-400">3</span>
                </div>
                <CardTitle className="text-white">Scale & Profit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Watch your business grow on autopilot. Use our analytics to optimize 
                  and scale your automated systems for maximum profit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Who Is It For */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16 border border-gray-700">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Who Is EliteHub For?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Entrepreneurs</h3>
              <p className="text-gray-400 text-sm">
                Launch your business idea with proven systems
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Small Businesses</h3>
              <p className="text-gray-400 text-sm">
                Automate operations and scale efficiently
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Freelancers</h3>
              <p className="text-gray-400 text-sm">
                Build recurring revenue with automated services
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Agencies</h3>
              <p className="text-gray-400 text-sm">
                Streamline client work and increase margins
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Automation Templates</h3>
                <p className="text-gray-400">
                  Ready-to-use workflows for email marketing, sales funnels, customer onboarding, 
                  and more. Just customize and deploy.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Expert Guidance</h3>
                <p className="text-gray-400">
                  Get help when you need it with our consultation packages, from quick strategy 
                  calls to full implementation support.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Community Support</h3>
                <p className="text-gray-400">
                  Connect with other entrepreneurs, share wins, get feedback, and learn from 
                  those who've already succeeded.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Learning Resources</h3>
                <p className="text-gray-400">
                  Step-by-step tutorials, video guides, and documentation to help you implement 
                  everything successfully.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Automated Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of entrepreneurs who are already using EliteHub to build and scale 
            their businesses on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.location.href = '/auth'}
            >
              Get Started Free
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/work-with-me'}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}