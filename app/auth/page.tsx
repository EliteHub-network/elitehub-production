"use client"

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, Eye, EyeOff, Mail, CheckCircle, AlertTriangle, Zap } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  // Handle messages from URL parameters
  useEffect(() => {
    const message = searchParams.get('message');
    const errorParam = searchParams.get('error');
    
    if (message) {
      setSuccess(decodeURIComponent(message));
      setIsSignUp(false); // Switch to sign in mode
    }
    
    if (errorParam) {
      setError(decodeURIComponent(errorParam));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setSuccess('');
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      return false;
    }

    if (isSignUp) {
      if (!formData.firstName || !formData.lastName) {
        setError('First name and last name are required');
        return false;
      }
      
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
      
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError('');
    setSuccess('');

    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      try {
        attempts++;
        
        if (isSignUp) {
          console.log(`Signup attempt ${attempts}...`);
          
          const { data, error } = await supabase.auth.signUp({
            email: formData.email.toLowerCase().trim(),
            password: formData.password,
            options: {
              data: {
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                full_name: `${formData.firstName.trim()} ${formData.lastName.trim()}`
              }
            }
          });

          if (error) {
            if (error.message.includes('User already registered')) {
              throw new Error('An account with this email already exists. Please sign in instead.');
            }
            throw error;
          }
          
          setSuccess('Account created successfully! Please check your email to verify your account before signing in.');
          setFormData({
            email: formData.email,
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: ''
          });
          setIsSignUp(false);
          setLoading(false);
          return; // Success, exit the retry loop
          
        } else {
          console.log(`Signin attempt ${attempts}...`);
          
          const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email.toLowerCase().trim(),
            password: formData.password
          });

          if (error) {
            if (error.message.includes('Invalid login credentials')) {
              throw new Error('Invalid email or password. Please check your credentials.');
            }
            if (error.message.includes('Email not confirmed')) {
              throw new Error('Please verify your email before signing in. Check your inbox for the verification link.');
            }
            throw error;
          }
          
          if (data.user) {
            // Check if email is verified
            if (!data.user.email_confirmed_at) {
              setError('Please verify your email before signing in. Check your inbox for the verification link.');
              setLoading(false);
              return;
            }
            
            localStorage.setItem('email', data.user.email || '');
            localStorage.setItem('firstName', data.user.user_metadata?.firstName || 'User');
            localStorage.setItem('lastName', data.user.user_metadata?.lastName || '');
            localStorage.setItem('userId', data.user.id);
            localStorage.setItem('membership', 'Free');
            
            const isNewUser = new Date(data.user.created_at).getTime() > (Date.now() - 60000);
            
            if (isNewUser) {
              router.push('/pricing');
            } else {
              router.push('/dashboard');
            }
          }
          setLoading(false);
          return; // Success, exit the retry loop
        }
      } catch (error: any) {
        console.error(`Auth attempt ${attempts} failed:`, error);
        
        // If it's a network error and we have attempts left, retry
        if ((error.message?.includes('fetch') || 
             error.message?.includes('network') || 
             error.message?.includes('Failed to fetch')) && 
             attempts < maxAttempts) {
          
          console.log(`Retrying in ${attempts} seconds...`);
          await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
          continue; // Try again
        }
        
        // Don't retry user errors
        if (error.message?.includes('already registered') || 
            error.message?.includes('Invalid email') || 
            error.message?.includes('Invalid login') ||
            error.message?.includes('Email not confirmed')) {
          setError(error.message);
          break; // Exit retry loop
        }
        
        // Final attempt failed
        if (attempts >= maxAttempts) {
          setError('Unable to connect. Please check your internet connection and try again.');
          break;
        }
      }
    }
    
    setLoading(false);
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

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

        {/* Right Side - Auth Form */}
        <Card className="w-full max-w-md mx-auto bg-gray-800/50 backdrop-blur-lg border-gray-700 shadow-2xl">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => router.push('/')}
              className="text-gray-300 hover:text-white hover:bg-gray-700/50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30">
              <Zap className="h-4 w-4 mr-1" />
              EliteHub
            </Badge>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-white">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </CardTitle>
          <p className="text-gray-400 text-center">
            {isSignUp 
              ? 'Join EliteHub and start building your automated business' 
              : 'Sign in to access your dashboard and tools'
            }
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          {error && (
            <div className="bg-red-500/20 border border-red-400/50 text-red-300 px-4 py-3 rounded-lg flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {success && (
            <div className="bg-green-500/20 border border-green-400/50 text-green-300 px-4 py-3 rounded-lg flex items-center gap-2">
              <CheckCircle className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm">{success}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition-colors"
                    placeholder="John"
                    required={isSignUp}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition-colors"
                    placeholder="Doe"
                    required={isSignUp}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 pr-10 transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 pr-10 transition-colors"
                    placeholder="Confirm your password"
                    required={isSignUp}
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  {isSignUp ? 'Creating Account...' : 'Signing In...'}
                </div>
              ) : (
                isSignUp ? 'Create Account' : 'Sign In'
              )}
            </Button>
          </form>

          <div className="text-center pt-4">
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
                setSuccess('');
                setFormData({
                  email: '',
                  password: '',
                  confirmPassword: '',
                  firstName: '',
                  lastName: ''
                });
              }}
              className="text-blue-400 hover:text-blue-300 text-sm underline transition-colors"
            >
              {isSignUp 
                ? 'Already have an account? Sign in' 
                : "Don't have an account? Create one"
              }
            </button>
          </div>

          {isSignUp && (
            <div className="bg-blue-500/20 border border-blue-400/50 text-blue-300 px-4 py-3 rounded-lg mt-4">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-medium">Email Verification Required</p>
                  <p className="text-blue-200">
                    After creating your account, you'll receive an email with a verification link. 
                    Please click it to complete your registration.
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Mobile Branding - Show on small screens */}
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