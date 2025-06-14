"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useClerk } from '@clerk/nextjs';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Download, 
  Star, 
  Clock, 
  TrendingUp,
  Bookmark,
  Search,
  Users,
  Settings,
  LogOut,
  Plus,
  Zap,
  Target,
  BarChart3,
  Home,
  Briefcase,
  Info,
  Mail,
  ShoppingBag,
  Crown,
  User,
  Tag,
  Video,
  MessageSquare,
  Lock,
  Code,
  Eye,
  Rocket,
  BookOpen
} from 'lucide-react';

// Progress Component Built-In
const Progress = ({ value, className = "" }: { value: number; className?: string }) => {
  return (
    <div className={`relative h-2 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}>
      <div
        className="h-full bg-blue-600 transition-all duration-300"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
};

export default function Dashboard() {
  const router = useRouter();
  const { signOut } = useClerk();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [membershipType, setMembershipType] = useState('Free');
  const [loading, setLoading] = useState(true);

  // Download tracking
  const [downloads, setDownloads] = useState({
    free: { used: 0, limit: 5 },
    premium: { used: 0, limit: 999 }
  });

  useEffect(() => {
    // Get user data
    setTimeout(() => {
      const userData = {
        firstName: localStorage.getItem('firstName') || 'User',
        lastName: localStorage.getItem('lastName') || '',
        email: localStorage.getItem('email') || 'user@example.com',
        membership: localStorage.getItem('membership') || 'Free'
      };
      
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setEmail(userData.email);
      setMembershipType(userData.membership);
      
      // Set download limits based on membership
      if (userData.membership === 'Premium') {
        setDownloads({
          free: { used: 0, limit: 999 },
          premium: { used: 0, limit: 999 }
        });
      }
      
      setLoading(false);
    }, 1000);
  }, []);

  const handleSettings = () => {
    router.push('/settings');
  };

  const handleLogout = async () => {
    try {
      localStorage.clear();
      await signOut({ redirectUrl: '/' });
    } catch (error) {
      console.error('Logout error:', error);
      // Fallback: force redirect if Clerk fails
      window.location.href = '/';
    }
  };

  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home, active: true },
    { name: 'Templates', href: '/tools-marketplace', icon: Code },
    { name: 'Work With Me', href: '/work-with-me', icon: Briefcase },
    { name: 'Resources', href: '/learn', icon: BookOpen },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-blue-200 mt-2">Welcome back, {firstName}! Your SaaS development hub</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={handleSettings} className="border-gray-600 text-gray-300 hover:bg-gray-700">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout} className="border-gray-600 text-gray-300 hover:bg-gray-700">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="mb-8">
          <nav className="flex space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-lg p-1 border border-gray-700">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.active 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Membership Status Card */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <span>Your Membership</span>
              {membershipType === 'Premium' ? (
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <Star className="h-4 w-4 mr-1" />
                  Premium Active
                </Badge>
              ) : (
                <Badge className="bg-gray-600 text-white">Free Plan</Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {membershipType === 'Premium' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Template Downloads</span>
                  <span className="text-green-400 font-semibold">Unlimited</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Service Discount</span>
                  <span className="text-green-400 font-semibold">15% OFF</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Commercial License</span>
                  <span className="text-green-400 font-semibold">Included</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Next billing</span>
                  <span className="text-gray-300">February 15, 2025</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                  onClick={() => window.location.href = '/billing'}
                >
                  Manage Subscription
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Template Downloads</span>
                  <span className="text-gray-300">{downloads.free.used} / {downloads.free.limit} this month</span>
                </div>
                <Progress value={(downloads.free.used / downloads.free.limit) * 100} className="h-2" />
                
                <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-700/50">
                  <h4 className="text-white font-semibold mb-2">Upgrade to Premium</h4>
                  <ul className="text-sm text-gray-300 space-y-1 mb-3">
                    <li>✓ Unlimited template downloads</li>
                    <li>✓ 15% discount on all services</li>
                    <li>✓ Commercial use license</li>
                    <li>✓ Premium templates access</li>
                  </ul>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    onClick={() => window.location.href = '/pricing'}
                  >
                    Upgrade for £50/month
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Main Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Get Started with SaaS */}
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Code className="h-6 w-6" />
                Ready to Build Your SaaS Product?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 mb-6">
                Turn your business idea into a working SaaS product in 30 days. From concept to paying customers.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => window.location.href = '/work-with-me'} 
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  <Rocket className="h-4 w-4 mr-2" />
                  Start Your Build
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.location.href = '/contact'}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">
                Service Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Quick Strategy</span>
                  <span className="text-2xl font-bold text-white">£197</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">MVP Build</span>
                  <span className="text-2xl font-bold text-green-400">£2,997</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Full SaaS</span>
                  <span className="text-2xl font-bold text-blue-400">£4,997</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Target className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button 
                onClick={() => window.location.href = '/tools-marketplace'} 
                className="h-24 flex-col bg-gray-700/50 hover:bg-gray-600/50 text-white border-gray-600"
                variant="outline"
              >
                <Code className="h-6 w-6 mb-2 text-blue-400" />
                <span>Templates</span>
              </Button>
              
              <Button 
                onClick={() => window.location.href = '/work-with-me'} 
                className="h-24 flex-col bg-gray-700/50 hover:bg-gray-600/50 text-white border-gray-600"
                variant="outline"
              >
                <Briefcase className="h-6 w-6 mb-2 text-green-400" />
                <span>Services</span>
              </Button>
              
              <Button 
                className="h-24 flex-col bg-gray-700/50 hover:bg-gray-600/50 text-white border-gray-600"
                variant="outline"
                onClick={() => window.location.href = '/contact'}
              >
                <MessageSquare className="h-6 w-6 mb-2 text-purple-400" />
                <span>Contact</span>
              </Button>
              
              <Button 
                onClick={handleSettings}
                className="h-24 flex-col bg-gray-700/50 hover:bg-gray-600/50 text-white border-gray-600"
                variant="outline"
              >
                <Settings className="h-6 w-6 mb-2 text-yellow-400" />
                <span>Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Projects Preview */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mt-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                SaaS Development Services
              </CardTitle>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = '/work-with-me'}
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                View All Services
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">SaaS Strategy Session</h4>
                <p className="text-gray-400 text-sm mb-2">2-hour technical planning</p>
                <Badge className="bg-green-500/20 text-green-300">£197</Badge>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">SaaS MVP Builder</h4>
                <p className="text-gray-400 text-sm mb-2">4-week full development</p>
                <Badge className="bg-blue-500/20 text-blue-300">£2,997</Badge>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">1-on-1 Coaching</h4>
                <p className="text-gray-400 text-sm mb-2">Personalized guidance</p>
                <Badge className="bg-purple-500/20 text-purple-300">£297/hour</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}