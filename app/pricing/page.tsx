"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield,
  CreditCard,
  ArrowLeft,
  Crown,
  Download,
  Tag,
  Users,
  BookOpen
} from 'lucide-react';

export default function Pricing() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  // Your LIVE Stripe Payment Link for Premium
  const STRIPE_PREMIUM_LINK = 'https://buy.stripe.com/bJe4gzej0dLu6YS7Zwew800';

  const handleFreePlan = () => {
    // For free plan, just set their membership and go to dashboard
    localStorage.setItem('membership', 'Free');
    alert('Continuing with free plan. Taking you to your dashboard...');
    window.location.href = '/dashboard';
  };

  const handlePremiumPlan = () => {
    setLoadingPlan('premium');
    window.location.href = STRIPE_PREMIUM_LINK;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free or unlock everything with Premium. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Free Plan */}
          <Card className="relative border-2 hover:border-gray-300 transition-all">
            <CardHeader>
              <div>
                <CardTitle className="text-2xl">Free</CardTitle>
                <p className="text-gray-600 mt-2">Get started with basics</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="text-4xl font-bold">£0</div>
                <div className="text-gray-600">forever</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-700">5 template downloads/month</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-700">Access to free templates</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-700">Personal use license</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <X className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Premium templates</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <X className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Service discounts</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <X className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Commercial license</span>
                </li>
              </ul>
              
              <Button 
                className="w-full" 
                variant="outline"
                onClick={handleFreePlan}
              >
                Continue with Free
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-2 border-blue-500 shadow-xl transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-1">
                <Star className="h-4 w-4 mr-1" />
                BEST VALUE
              </Badge>
            </div>
            
            <CardHeader className="pt-8">
              <div>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <p className="text-gray-600 mt-2">Everything you need to succeed</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="text-4xl font-bold">£50</div>
                <div className="text-gray-600">per month</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-700 font-semibold">Unlimited downloads</span>
                    <p className="text-sm text-gray-500">All templates, no limits</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-700 font-semibold">15% service discount</span>
                    <p className="text-sm text-gray-500">Save £449 on SaaS MVP build</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-700 font-semibold">Premium templates</span>
                    <p className="text-sm text-gray-500">Exclusive member-only access</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-700 font-semibold">Commercial license</span>
                    <p className="text-sm text-gray-500">Use in client projects</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-700 font-semibold">Early access</span>
                    <p className="text-sm text-gray-500">New templates first</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-700 font-semibold">Priority support</span>
                    <p className="text-sm text-gray-500">Get help faster</p>
                  </div>
                </li>
              </ul>

              <Button 
                className="w-full mb-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                onClick={handlePremiumPlan}
                disabled={loadingPlan === 'premium'}
              >
                {loadingPlan === 'premium' ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Redirecting to checkout...
                  </>
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Get Premium Access
                  </>
                )}
              </Button>
              
              <p className="text-center text-sm text-gray-500">
                Cancel anytime • Instant access
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Why Premium Members Win</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Save Thousands</h3>
              <p className="text-gray-600 text-sm">
                15% off services means saving £449 on just one SaaS project
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Unlimited Resources</h3>
              <p className="text-gray-600 text-sm">
                Download everything, build faster, no restrictions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Sell to Clients</h3>
              <p className="text-gray-600 text-sm">
                Commercial license lets you resell templates
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <div className="flex justify-center items-center space-x-8 text-gray-600">
            <div className="flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>

        {/* FAQ or Note */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-gray-600">
            Questions? Email us at{' '}
            <a href="mailto:elitehubnetwork@outlook.com" className="text-blue-600 hover:underline">
              elitehubnetwork@outlook.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}