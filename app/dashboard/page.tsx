"use client"

import { useState, useEffect } from 'react';
import { useUser, SignOutButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
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
  Shield
} from 'lucide-react';

// ADMIN EMAIL - ONLY THIS EMAIL GETS ADMIN ACCESS
const ADMIN_EMAIL = "Elitehubnetwork@outlook.com";

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
  const { user } = useUser();
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [membershipType, setMembershipType] = useState('Free');
  const [loading, setLoading] = useState(true);

  // Check if current user is admin
  const isAdmin = user?.emailAddresses?.[0]?.emailAddress?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

  // Download tracking
  const [downloads, setDownloads] = useState({
    free: { used: 2, limit: 5 },
    pro: { used: 0, limit: 10 },
    enterprise: { used: 0, limit: 5 }
  });

  useEffect(() => {
    if (user) {
      // Get user data from Clerk
      const userData = {
        firstName: user.firstName || 'User',
        lastName: user.lastName || '',
        email: user.emailAddresses?.[0]?.emailAddress || 'user@example.com',
        membership: localStorage.getItem('membership') || 'Free'
      };
      
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setEmail(userData.email);
      setMembershipType(userData.membership);
      
      // Set download limits based on membership
      if (userData.membership === 'Free') {
        setDownloads({
          free: { used: 2, limit: 5 },
          pro: { used: 0, limit: 0 },
          enterprise: { used: 0, limit: 0 }
        });
      } else if (userData.membership === 'Premium') {
        setDownloads({
          free: { used: 15, limit: 999 },
          pro: { used: 3, limit: 10 },
          enterprise: { used: 0, limit: 0 }
        });
      } else if (userData.membership === 'Enterprise') {
        setDownloads({
          free: { used: 45, limit: 999 },
          pro: { used: 28, limit: 999 },
          enterprise: { used: 2, limit: 5 }
        });
      }
      
      setLoading(false);
    }
  }, [user]);

  const handleSettings = () => {
    router.push('/settings');
  };

  // ADMIN ACCESS FUNCTION
  const handleAdminAccess = () => {
    router.push('/admin');
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

  const getDiscount = () => {
    if (membershipType === 'Enterprise') return 15;
    if (membershipType === 'Premium') return 7.5;
    return 0;
  };

  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home, active: true },
    { name: 'Tools Marketplace', href: '/tools-marketplace', icon: ShoppingBag },
    { name: 'Work With Me', href: '/work-with-me', icon: Briefcase },
    { name: 'Community', href: '/community-hub', icon: Users },
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
            <p className="text-blue-200 mt-2">Welcome back, {firstName}! Build, automate, and scale your business</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge className={`${getMembershipColor()} text-white`}>
              {getMembershipIcon()}
              <span className="ml-1">{membershipType} Plan</span>
            </Badge>

            {/* ADMIN ACCESS BUTTON - ONLY VISIBLE TO ADMIN EMAIL */}
            {isAdmin && (
              <Button 
                onClick={handleAdminAccess}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold border border-red-500"
              >
                <Shield className="h-4 w-4 mr-2" />
                Admin Dashboard
              </Button>
            )}

            <Button variant="outline" size="sm" onClick={handleSettings} className="border-gray-600 text-gray-300 hover:bg-gray-700">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            
            <SignOutButton afterSignOutUrl="/">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </SignOutButton>
          </div>
        </div>

        {/* ADMIN BANNER - ONLY VISIBLE TO ADMIN */}
        {isAdmin && (
          <div className="mb-8 p-4 bg-red-900/30 border border-red-700/50 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-red-400" />
              <div>
                <h3 className="text-red-300 font-semibold">Admin Access Detected</h3>
                <p className="text-red-200 text-sm">You have full administrative control over EliteHub.</p>
              </div>
              <Button 
                onClick={handleAdminAccess}
                className="ml-auto bg-red-600 hover:bg-red-700 text-white"
              >
                Open Admin Panel
              </Button>
            </div>
          </div>
        )}

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

        {/* Download Usage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Free Tools */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center justify-between text-white">
                Free Tools
                {membershipType === 'Free' && downloads.free.used >= downloads.free.limit && (
                  <Badge variant="destructive" className="text-xs">Limit Reached</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-white">{downloads.free.used}</span>
                <span className="text-gray-400">
                  / {downloads.free.limit === 999 ? '∞' : downloads.free.limit}
                </span>
              </div>
              {downloads.free.limit !== 999 && (
                <Progress 
                  value={(downloads.free.used / downloads.free.limit) * 100} 
                  className="h-2"
                />
              )}
              <p className="text-sm text-gray-400 mt-2">
                {membershipType === 'Free' ? 'Monthly downloads' : 'Unlimited access'}
              </p>
            </CardContent>
          </Card>

          {/* Pro Tools */}
          <Card className={`bg-gray-800/50 border-gray-700 backdrop-blur-sm ${membershipType === 'Free' ? 'opacity-60' : ''}`}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center justify-between text-white">
                Pro Tools
                {membershipType === 'Free' && <Lock className="h-4 w-4 text-gray-400" />}
                {membershipType === 'Premium' && downloads.pro.used >= downloads.pro.limit && (
                  <Badge variant="destructive" className="text-xs">Limit Reached</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-white">{downloads.pro.used}</span>
                <span className="text-gray-400">
                  / {downloads.pro.limit === 999 ? '∞' : downloads.pro.limit}
                </span>
              </div>
              {downloads.pro.limit !== 999 && downloads.pro.limit > 0 && (
                <Progress 
                  value={(downloads.pro.used / downloads.pro.limit) * 100} 
                  className="h-2"
                />
              )}
              <p className="text-sm text-gray-400 mt-2">
                {membershipType === 'Free' ? 'Upgrade to access' : 
                 membershipType === 'Premium' ? 'Monthly downloads' : 'Unlimited access'}
              </p>
            </CardContent>
          </Card>

          {/* Enterprise Tools */}
          <Card className={`bg-gray-800/50 border-gray-700 backdrop-blur-sm ${membershipType !== 'Enterprise' ? 'opacity-60' : ''}`}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center justify-between text-white">
                Enterprise Tools
                {membershipType !== 'Enterprise' && <Lock className="h-4 w-4 text-gray-400" />}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-white">{downloads.enterprise.used}</span>
                <span className="text-gray-400">
                  / {downloads.enterprise.limit}
                </span>
              </div>
              {downloads.enterprise.limit > 0 && (
                <Progress 
                  value={(downloads.enterprise.used / downloads.enterprise.limit) * 100} 
                  className="h-2"
                />
              )}
              <p className="text-sm text-gray-400 mt-2">
                {membershipType === 'Enterprise' ? 'Monthly downloads' : 'Enterprise only'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Your Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Tag className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">Discount</span>
                </div>
                <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                  {getDiscount()}% OFF
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Video className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-sm text-gray-300">Video Calls</span>
                </div>
                {membershipType === 'Enterprise' ? (
                  <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">Soon</Badge>
                ) : (
                  <Lock className="h-4 w-4 text-gray-500" />
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-purple-400 mr-2" />
                  <span className="text-sm text-gray-300">Groups</span>
                </div>
                {membershipType !== 'Free' ? (
                  <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30">Soon</Badge>
                ) : (
                  <Lock className="h-4 w-4 text-gray-500" />
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-sm text-gray-300">Status</span>
                </div>
                <span className="text-sm font-medium text-white">{membershipType}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Get Started */}
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Zap className="h-6 w-6" />
                Ready to Build Your First Automation?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 mb-6">
                Browse our marketplace of proven automation templates and start building your profitable business today.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => window.location.href = '/tools-marketplace'} 
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Browse Tools
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.location.href = '/resources'}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upgrade Card */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">
                {membershipType === 'Free' ? 'Unlock More Power' : 
                 membershipType === 'Premium' ? 'Go Enterprise' : 'You\'re All Set!'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {membershipType !== 'Enterprise' ? (
                <>
                  <p className="text-gray-400 text-sm mb-4">
                    {membershipType === 'Free' 
                      ? 'Upgrade to Premium for unlimited tools and features.'
                      : 'Take it to the next level with Enterprise.'}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      {membershipType === 'Free' ? 'Unlimited free tools' : 'Unlimited all tools'}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      {membershipType === 'Free' ? '10 pro tools/month' : '5 enterprise tools/month'}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      {membershipType === 'Free' ? '7.5% discount' : '15% discount'}
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/pricing'} 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    Upgrade Now
                  </Button>
                </>
              ) : (
                <>
                  <p className="text-gray-400 text-sm mb-4">
                    You have access to all features!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      All tools unlocked
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Maximum discount applied
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Priority support active
                    </div>
                  </div>
                </>
              )}
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
                <Search className="h-6 w-6 mb-2 text-blue-400" />
                <span>Browse Marketplace</span>
              </Button>
              
              <Button 
                onClick={() => window.location.href = '/billing'} 
                className="h-24 flex-col bg-gray-700/50 hover:bg-gray-600/50 text-white border-gray-600"
                variant="outline"
              >
                <TrendingUp className="h-6 w-6 mb-2 text-green-400" />
                <span>Manage Billing</span>
              </Button>
              
              <Button 
                className="h-24 flex-col bg-gray-700/50 hover:bg-gray-600/50 text-white border-gray-600"
                variant="outline"
                onClick={() => window.location.href = '/community-hub'}
              >
                <Users className="h-6 w-6 mb-2 text-purple-400" />
                <span>Join Community</span>
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
      </div>
    </div>
  );
}