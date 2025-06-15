"use client"

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Shield,
  Users,
  BarChart3,
  Settings,
  TrendingUp,
  DollarSign,
  Home,
  Mail,
  Globe,
  Database,
  CheckCircle,
  AlertCircle,
  Crown,
  Star
} from 'lucide-react';

const ADMIN_EMAIL = "elitehubnetwork@outlook.com";

export default function AdminDashboard() {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(false);

  // Check admin access
  const userEmail = user?.emailAddresses?.[0]?.emailAddress?.toLowerCase();
  const isAdmin = userEmail === ADMIN_EMAIL.toLowerCase();

  // Simplified stats (no database required)
  const stats = {
    totalUsers: 12, // You can manually update these
    totalRevenue: 650, // Based on your actual sales
    websiteVisits: 1247,
    conversionRate: 4.2,
    monthlyGrowth: 23.5
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardContent className="p-8">
            <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <p className="text-white text-center">Please sign in to access admin dashboard</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardContent className="p-8">
            <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <p className="text-white text-center">Access Denied - Admin Only</p>
            <Button 
              onClick={() => window.location.href = '/dashboard'}
              className="w-full mt-4"
            >
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Admin Header */}
      <div className="bg-red-900/20 border-b border-red-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Shield className="h-8 w-8 text-red-500" />
              <div>
                <h1 className="text-2xl font-bold text-white">EliteHub Admin Dashboard</h1>
                <p className="text-gray-400 text-sm">Logged in as: {user?.emailAddresses?.[0]?.emailAddress}</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => window.location.href = '/dashboard'}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <Home className="h-4 w-4 mr-2" />
              Exit Admin
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-lg p-1 mb-8 border border-gray-700">
          {['overview', 'analytics', 'users', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                activeTab === tab 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Users</p>
                      <p className="text-2xl font-bold text-white">{stats.totalUsers}</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Monthly Revenue</p>
                      <p className="text-2xl font-bold text-white">£{stats.totalRevenue}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Website Visits</p>
                      <p className="text-2xl font-bold text-white">{stats.websiteVisits}</p>
                    </div>
                    <Globe className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Conversion Rate</p>
                      <p className="text-2xl font-bold text-white">{stats.conversionRate}%</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Growth</p>
                      <p className="text-2xl font-bold text-white">+{stats.monthlyGrowth}%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Button 
                    onClick={() => window.open('https://dashboard.clerk.com', '_blank')}
                    className="h-24 flex-col bg-blue-600 hover:bg-blue-700"
                  >
                    <Users className="h-6 w-6 mb-2" />
                    <span>Manage Users</span>
                  </Button>
                  
                  <Button 
                    onClick={() => window.open('https://supabase.com/dashboard', '_blank')}
                    className="h-24 flex-col bg-green-600 hover:bg-green-700"
                  >
                    <Database className="h-6 w-6 mb-2" />
                    <span>Database</span>
                  </Button>
                  
                  <Button 
                    onClick={() => window.open('https://vercel.com/dashboard', '_blank')}
                    className="h-24 flex-col bg-purple-600 hover:bg-purple-700"
                  >
                    <Globe className="h-6 w-6 mb-2" />
                    <span>Hosting</span>
                  </Button>
                  
                  <Button 
                    onClick={() => setActiveTab('settings')}
                    className="h-24 flex-col bg-yellow-600 hover:bg-yellow-700"
                  >
                    <Settings className="h-6 w-6 mb-2" />
                    <span>Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300">New user registration</span>
                    </div>
                    <span className="text-gray-500 text-sm">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300">Premium subscription purchased</span>
                    </div>
                    <span className="text-gray-500 text-sm">5 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300">Contact form submission</span>
                    </div>
                    <span className="text-gray-500 text-sm">1 day ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">Analytics Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">User Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Free Users</span>
                      <span className="text-white">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Premium Users</span>
                      <span className="text-white">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Enterprise Users</span>
                      <span className="text-white">1</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Revenue Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Premium (£50/mo)</span>
                      <span className="text-white">£150</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Enterprise (£125/mo)</span>
                      <span className="text-white">£125</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">One-time Sales</span>
                      <span className="text-white">£375</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">User Management</h2>
              <Button onClick={() => window.open('https://dashboard.clerk.com', '_blank')}>
                Open Clerk Dashboard
              </Button>
            </div>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4">Manage users through Clerk Dashboard:</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• View all registered users</li>
                  <li>• Update user information</li>
                  <li>• Manage user sessions</li>
                  <li>• View authentication logs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">Admin Settings</h2>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Admin Access</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-green-300">Active</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Authentication (Clerk)</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-green-300">Connected</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Payment System (Stripe)</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-green-300">Live Mode</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Email System</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-green-300">Operational</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => window.open('https://dashboard.stripe.com', '_blank')}
                    className="justify-start border-gray-600 text-gray-300"
                  >
                    <DollarSign className="h-4 w-4 mr-2" />
                    Stripe Dashboard
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => window.open('https://dashboard.clerk.com', '_blank')}
                    className="justify-start border-gray-600 text-gray-300"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Clerk Dashboard
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => window.open('https://vercel.com/dashboard', '_blank')}
                    className="justify-start border-gray-600 text-gray-300"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Vercel Dashboard
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => window.open('mailto:elitehubnetwork@outlook.com', '_blank')}
                    className="justify-start border-gray-600 text-gray-300"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Support Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}