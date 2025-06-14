"use client"

import { SignIn, SignUp } from "@clerk/nextjs";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, CheckCircle, Zap } from 'lucide-react';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Branding & Promo */}
        <div className="hidden lg:block">
          <div className="space-y-8">
            {/* Main Branding */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-12 w-12 text-blue-500" />
                <span className="text-4xl font-bold text-white">EliteHub</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                Build Your{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  SaaS Product
                </span>{' '}
                in 30 Days
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Join entrepreneurs who are turning their ideas into profitable automated businesses with expert guidance and proven systems.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-gray-300">Expert development & guidance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-gray-300">30-day delivery guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-gray-300">No technical skills required</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                </div>
                <span className="text-gray-300">Full code ownership</span>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                ))}
              </div>
              <p className="text-gray-300 italic mb-3">
                "EliteHub turned my idea into a working SaaS in just 3 weeks. Now I'm generating £5k/month in recurring revenue!"
              </p>
              <p className="text-blue-400 font-medium">- Sarah M., SaaS Founder</p>
            </div>
          </div>
        </div>

        {/* Right Side - Clerk Auth */}
        <Card className="w-full max-w-md mx-auto bg-white border-gray-300 shadow-2xl">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => router.push('/')}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <Badge className="bg-blue-100 text-blue-800 border border-blue-200">
                <Zap className="h-4 w-4 mr-1" />
                EliteHub
              </Badge>
            </div>
            <div className="text-center pt-4 pb-2">
              <h2 className="text-2xl font-bold text-gray-900">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-gray-600 mt-2">
                {isSignUp ? 'Start building your SaaS today' : 'Sign in to your dashboard'}
              </p>
            </div>
          </CardHeader>
          <CardContent className="bg-white">
            {isSignUp ? (
              <SignUp 
                afterSignUpUrl="/dashboard"
                appearance={{
                  elements: {
                    rootBox: "mx-auto",
                    card: "bg-white shadow-none border-0",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    socialButtonsBlockButton: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
                    socialButtonsBlockButtonText: "text-gray-700 font-medium",
                    formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md",
                    formFieldInput: "border border-gray-300 rounded-md px-3 py-2 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500",
                    formFieldLabel: "text-gray-700 font-medium",
                    dividerLine: "bg-gray-300",
                    dividerText: "text-gray-500",
                    footerActionLink: "text-blue-600 hover:text-blue-700",
                    identityPreviewText: "text-gray-700",
                    formHeaderTitle: "text-gray-900",
                    formHeaderSubtitle: "text-gray-600"
                  }
                }}
              />
            ) : (
              <SignIn 
                afterSignInUrl="/dashboard"
                appearance={{
                  elements: {
                    rootBox: "mx-auto",
                    card: "bg-white shadow-none border-0",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    socialButtonsBlockButton: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
                    socialButtonsBlockButtonText: "text-gray-700 font-medium",
                    formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md",
                    formFieldInput: "border border-gray-300 rounded-md px-3 py-2 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500",
                    formFieldLabel: "text-gray-700 font-medium",
                    dividerLine: "bg-gray-300",
                    dividerText: "text-gray-500",
                    footerActionLink: "text-blue-600 hover:text-blue-700",
                    identityPreviewText: "text-gray-700",
                    formHeaderTitle: "text-gray-900",
                    formHeaderSubtitle: "text-gray-600"
                  }
                }}
              />
            )}
            
            <div className="text-center pt-4 border-t border-gray-200 mt-6">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium underline transition-colors"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : "Don't have an account? Create one"
                }
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Mobile Branding */}
        <div className="lg:hidden mt-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-6 w-6 text-blue-500" />
            <span className="text-lg font-bold text-white">EliteHub</span>
          </div>
          <p className="text-gray-400 text-sm">
            Turn your ideas into profitable SaaS products in 30 days
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Auth;