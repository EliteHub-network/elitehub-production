"use client"

import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, Home, MessageSquare, Calendar } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-400" />
              </div>
            </div>

            {/* Thank You Message */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Thank You for Your Interest!
            </h1>
            
            <p className="text-lg text-gray-300 mb-8">
              I've received your request and will get back to you within 24 hours with a custom automation plan for your business.
            </p>

            {/* What Happens Next */}
            <div className="bg-gray-700/50 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-semibold text-white mb-4">What Happens Next:</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-400 text-sm">1</span>
                  </div>
                  <p className="text-gray-300">I'll review your business needs and automation opportunities</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-400 text-sm">2</span>
                  </div>
                  <p className="text-gray-300">You'll receive a personalized email with recommendations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-400 text-sm">3</span>
                  </div>
                  <p className="text-gray-300">We'll schedule a call to discuss your automation strategy</p>
                </div>
              </div>
            </div>

            {/* Quick Tip */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-8">
              <p className="text-sm text-blue-300">
                <strong>💡 Pro Tip:</strong> Check your email (including spam folder) for my response. 
                Add EliteHubnetwork@outlook.com to your contacts to ensure delivery.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/'} 
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <Button 
                onClick={() => window.location.href = '/tools-marketplace'} 
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Browse Tools
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Need immediate assistance? Email me directly at{' '}
          <a href="mailto:EliteHubnetwork@outlook.com" className="text-blue-400 hover:underline">
            EliteHubnetwork@outlook.com
          </a>
        </p>
      </div>
    </div>
  );
}