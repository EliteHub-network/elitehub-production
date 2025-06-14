"use client"

import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  ArrowLeft, 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  UserCheck,
  Mail,
  Globe,
  Cookie
} from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            className="mb-4 text-white hover:text-purple-400"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <div className="text-center">
            <Shield className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
            <p className="text-gray-300">Your privacy is our priority</p>
            <Badge className="mt-2 bg-purple-600">
              Last Updated: January 2025
            </Badge>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Introduction */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <p className="text-gray-200 leading-relaxed">
                Elite Hub Network ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our services.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Database className="w-5 h-5 text-purple-400 mr-2" />
                <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Personal Information</h3>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>• Name and contact information</li>
                    <li>• Email address</li>
                    <li>• Business information</li>
                    <li>• Payment and billing information</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Usage Information</h3>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>• Device and browser information</li>
                    <li>• IP address and location data</li>
                    <li>• Pages visited and features used</li>
                    <li>• Time spent on our platform</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Eye className="w-5 h-5 text-purple-400 mr-2" />
                <h2 className="text-2xl font-semibold text-white">How We Use Your Information</h2>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Provide and improve our services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Process transactions and send related information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Send administrative and promotional communications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Respond to your comments and questions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Enforce our terms and policies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Protect against fraudulent or illegal activity</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Lock className="w-5 h-5 text-purple-400 mr-2" />
                <h2 className="text-2xl font-semibold text-white">Data Protection</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-600/20 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Security Measures</h3>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• SSL/TLS encryption</li>
                    <li>• Secure data storage</li>
                    <li>• Regular security audits</li>
                    <li>• Access controls</li>
                  </ul>
                </div>
                <div className="bg-purple-600/20 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Your Rights</h3>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Access your data</li>
                    <li>• Correct inaccuracies</li>
                    <li>• Request deletion</li>
                    <li>• Opt-out of marketing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Cookie className="w-5 h-5 text-purple-400 mr-2" />
                <h2 className="text-2xl font-semibold text-white">Cookies and Tracking</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our platform.
              </p>
              
              <div className="bg-purple-600/20 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Types of Cookies We Use:</h3>
                <ul className="text-gray-300 space-y-2">
                  <li><strong>Essential:</strong> Required for basic site functionality</li>
                  <li><strong>Analytics:</strong> Help us understand how you use our services</li>
                  <li><strong>Preferences:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing:</strong> Used to deliver relevant advertisements</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Third Party Sharing */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Globe className="w-5 h-5 text-purple-400 mr-2" />
                <h2 className="text-2xl font-semibold text-white">Third-Party Sharing</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                information with:
              </p>
              
              <ul className="space-y-2 text-gray-300">
                <li>• Service providers who assist in our operations</li>
                <li>• Professional advisors (lawyers, accountants)</li>
                <li>• Law enforcement when required by law</li>
                <li>• Business partners with your consent</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 text-purple-400 mr-2" />
                <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              
              <div className="bg-purple-600/20 rounded-lg p-4">
                <p className="text-white font-semibold">Elite Hub Network</p>
                <p className="text-gray-300">Email: elitehubnetwork@outlook.com</p>
                <p className="text-gray-300">Location: Cardiff, Wales, United Kingdom</p>
              </div>
              
              <div className="mt-6 flex justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Privacy Team
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Note */}
          <div className="text-center py-8">
            <p className="text-gray-400 text-sm">
              By using Elite Hub Network, you agree to the terms outlined in this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}