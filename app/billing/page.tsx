"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  ArrowLeft,
  CreditCard,
  Calendar,
  Download,
  FileText,
  AlertCircle,
  Check,
  X,
  Crown,
  Star,
  TrendingUp
} from 'lucide-react';

export default function Billing() {
  const [membershipType, setMembershipType] = useState('Free');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get membership from localStorage
    const membership = localStorage.getItem('membership') || 'Free';
    setMembershipType(membership);
  }, []);

  const handleCancelSubscription = () => {
    if (confirm('Are you sure you want to cancel your subscription? You will lose access to premium features at the end of your billing period.')) {
      setLoading(true);
      setTimeout(() => {
        // In real app, this would cancel via Stripe API
        localStorage.setItem('membership', 'Free');
        alert('Subscription cancelled. You will retain access until the end of your billing period.');
        window.location.href = '/dashboard';
      }, 1500);
    }
  };

  const handleUpdatePayment = () => {
    // In real app, this would open Stripe customer portal
    alert('This would open Stripe customer portal to update payment method');
  };

  const getMembershipIcon = () => {
    if (membershipType === 'Enterprise') return <Crown className="h-5 w-5" />;
    if (membershipType === 'Premium') return <Star className="h-5 w-5" />;
    return null;
  };

  const getMembershipColor = () => {
    if (membershipType === 'Enterprise') return 'bg-purple-600';
    if (membershipType === 'Premium') return 'bg-blue-600';
    return 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <h1 className="text-3xl font-bold text-gray-900">Billing & Subscription</h1>
          <p className="text-gray-600 mt-2">Manage your subscription and payment methods</p>
        </div>

        <div className="space-y-6">
          {/* Current Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    {getMembershipIcon()}
                    <h3 className="text-2xl font-bold">{membershipType} Plan</h3>
                  </div>
                  <p className="text-gray-600">
                    {membershipType === 'Free' ? 'No active subscription' :
                     membershipType === 'Premium' ? '£50 per month' : '£125 per month'}
                  </p>
                </div>
                <Badge className={`${getMembershipColor()} text-white`}>
                  {membershipType === 'Free' ? 'No Subscription' : 'Active'}
                </Badge>
              </div>

              {membershipType !== 'Free' && (
                <>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Next billing date</span>
                      <span className="font-medium">February 15, 2025</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Payment method</span>
                      <div className="flex items-center">
                        <CreditCard className="h-4 w-4 mr-2" />
                        <span className="font-medium">•••• 4242</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      variant="outline"
                      onClick={handleUpdatePayment}
                    >
                      Update Payment Method
                    </Button>
                    <Button 
                      variant="outline"
                      className="text-red-600 hover:bg-red-50 border-red-300"
                      onClick={handleCancelSubscription}
                      disabled={loading}
                    >
                      {loading ? 'Cancelling...' : 'Cancel Subscription'}
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Upgrade Options */}
          {membershipType !== 'Enterprise' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  {membershipType === 'Free' ? 'Upgrade Your Plan' : 'Upgrade to Enterprise'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {membershipType === 'Free' ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Premium Upgrade */}
                    <div className="border rounded-lg p-4 hover:border-blue-500 transition-colors">
                      <div className="flex items-center mb-2">
                        <Star className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold">Premium Plan</h4>
                      </div>
                      <p className="text-2xl font-bold mb-2">£50<span className="text-sm text-gray-600">/month</span></p>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>✓ Unlimited free downloads</li>
                        <li>✓ 10 pro tools/month</li>
                        <li>✓ 7.5% discount</li>
                      </ul>
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => window.location.href = '/pricing'}
                      >
                        Upgrade to Premium
                      </Button>
                    </div>

                    {/* Enterprise Upgrade */}
                    <div className="border rounded-lg p-4 hover:border-purple-500 transition-colors">
                      <div className="flex items-center mb-2">
                        <Crown className="h-5 w-5 text-purple-600 mr-2" />
                        <h4 className="font-semibold">Enterprise Plan</h4>
                      </div>
                      <p className="text-2xl font-bold mb-2">£125<span className="text-sm text-gray-600">/month</span></p>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>✓ Unlimited everything</li>
                        <li>✓ 5 enterprise tools/month</li>
                        <li>✓ 15% discount</li>
                      </ul>
                      <Button 
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        onClick={() => window.location.href = '/pricing'}
                      >
                        Upgrade to Enterprise
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Premium users see only Enterprise upgrade */
                  <div className="border border-purple-500 rounded-lg p-6 bg-purple-50">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <Crown className="h-6 w-6 text-purple-600 mr-2" />
                          <h4 className="text-xl font-semibold">Enterprise Plan</h4>
                        </div>
                        <p className="text-gray-600">Unlock maximum benefits and exclusive features</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold">£125</p>
                        <p className="text-sm text-gray-600">/month</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="text-sm">
                        <Check className="h-4 w-4 text-green-500 inline mr-1" />
                        Unlimited all downloads
                      </div>
                      <div className="text-sm">
                        <Check className="h-4 w-4 text-green-500 inline mr-1" />
                        5 enterprise tools/month
                      </div>
                      <div className="text-sm">
                        <Check className="h-4 w-4 text-green-500 inline mr-1" />
                        15% discount (vs your 7.5%)
                      </div>
                      <div className="text-sm">
                        <Check className="h-4 w-4 text-green-500 inline mr-1" />
                        Priority support
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={() => window.location.href = '/pricing'}
                    >
                      Upgrade to Enterprise
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Plan Features */}
          <Card>
            <CardHeader>
              <CardTitle>Your Current Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {membershipType === 'Free' && (
                  <>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>5 free tool downloads per month</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <X className="h-5 w-5 mr-3" />
                      <span>No access to pro tools</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <X className="h-5 w-5 mr-3" />
                      <span>No discount on purchases</span>
                    </div>
                  </>
                )}
                
                {membershipType === 'Premium' && (
                  <>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>Unlimited free tool downloads</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>10 pro tool downloads per month</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>7.5% discount on all purchases</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <X className="h-5 w-5 mr-3" />
                      <span>No access to enterprise tools</span>
                    </div>
                  </>
                )}
                
                {membershipType === 'Enterprise' && (
                  <>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>Unlimited free & pro tool downloads</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>5 enterprise tool downloads per month</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>15% discount on all purchases</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>Priority support & exclusive features</span>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Billing History */}
          {membershipType !== 'Free' && (
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-600 mr-3" />
                      <div>
                        <p className="font-medium">January 2025</p>
                        <p className="text-sm text-gray-600">{membershipType} Plan</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">£{membershipType === 'Premium' ? '50.00' : '125.00'}</p>
                      <Button variant="link" className="text-sm p-0 h-auto">
                        <Download className="h-3 w-3 mr-1" />
                        Invoice
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-600 mr-3" />
                      <div>
                        <p className="font-medium">December 2024</p>
                        <p className="text-sm text-gray-600">{membershipType} Plan</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">£{membershipType === 'Premium' ? '50.00' : '125.00'}</p>
                      <Button variant="link" className="text-sm p-0 h-auto">
                        <Download className="h-3 w-3 mr-1" />
                        Invoice
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Need Help */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Need help with billing?</h3>
                  <p className="text-blue-800 text-sm">
                    Contact us at elitehubnetwork@outlook.com for any billing questions or issues.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}