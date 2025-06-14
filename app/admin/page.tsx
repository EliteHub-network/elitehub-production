"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { 
  Shield,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Package,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  TrendingUp,
  Eye,
  DollarSign,
  Home
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [isAddingTool, setIsAddingTool] = useState(false);
  const [isAddingResource, setIsAddingResource] = useState(false);
  
  const router = useRouter();
  const supabase = createClientComponentClient();

  // Real data states
  const [stats, setStats] = useState({
    totalUsers: 0,
    premiumUsers: 0,
    totalTemplates: 0,
    monthlyDownloads: 0,
    monthlyRevenue: 0
  });

  const [tools, setTools] = useState<any[]>([]);
  const [resources, setResources] = useState<any[]>([]);
  const [recentActivity, setRecentActivity] = useState<any[]>([]);

  // Check admin authorization
  useEffect(() => {
    const checkAdminAccess = async () => {
      try {
        // Get current user
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          router.push('/auth');
          return;
        }

        // Check if user is admin
        const { data: profile } = await supabase
          .from('profiles')
          .select('email, is_admin')
          .eq('id', user.id)
          .single();

        if (!profile?.is_admin) {
          alert('Unauthorized access. This incident has been logged.');
          
          // Log unauthorized access attempt
          await supabase.rpc('log_admin_action', {
            action_type: 'unauthorized_access_attempt',
            details: { attempted_by: user.email }
          });
          
          router.push('/dashboard');
          return;
        }

        setIsAuthorized(true);
        setUserEmail(profile.email);
        
        // Load dashboard data
        await loadDashboardData();
        
      } catch (error) {
        console.error('Auth error:', error);
        router.push('/dashboard');
      } finally {
        setLoading(false);
      }
    };

    checkAdminAccess();
  }, [router, supabase]);

  // Load real dashboard data
  const loadDashboardData = async () => {
    try {
      // Get stats from the view we created
      const { data: dashboardStats } = await supabase
        .from('admin_dashboard_stats')
        .select('*')
        .single();

      if (dashboardStats) {
        setStats({
          totalUsers: dashboardStats.total_users || 0,
          premiumUsers: dashboardStats.premium_users || 0,
          totalTemplates: dashboardStats.total_templates || 0,
          monthlyDownloads: dashboardStats.monthly_downloads || 0,
          monthlyRevenue: dashboardStats.monthly_revenue || 0
        });
      }

      // Get templates
      const { data: templates } = await supabase
        .from('templates')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      setTools(templates || []);

      // Get recent activity (downloads)
      const { data: downloads } = await supabase
        .from('downloads')
        .select(`
          *,
          profiles (email),
          templates (title)
        `)
        .order('downloaded_at', { ascending: false })
        .limit(5);

      const activities = downloads?.map(d => ({
        type: 'download',
        description: `${d.profiles?.email} downloaded ${d.templates?.title}`,
        time: new Date(d.downloaded_at).toLocaleString()
      })) || [];

      setRecentActivity(activities);

    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  };

  // Add new template
  const handleAddTool = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      const { error } = await supabase
        .from('templates')
        .insert({
          title: formData.get('title'),
          description: formData.get('description'),
          category: formData.get('category'),
          price: parseFloat(formData.get('price') as string) || 0,
          is_premium: formData.get('access_level') === 'premium',
          tags: formData.get('tags')?.toString().split(',').map(t => t.trim())
        });

      if (error) throw error;

      // Log admin action
      await supabase.rpc('log_admin_action', {
        action_type: 'template_added',
        target_type: 'template',
        details: { title: formData.get('title') }
      });

      alert('Template added successfully!');
      setIsAddingTool(false);
      loadDashboardData(); // Reload data
      
    } catch (error) {
      console.error('Error adding template:', error);
      alert('Error adding template');
    }
  };

  // Delete template
  const handleDeleteTool = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const { error } = await supabase
        .from('templates')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // Log admin action
      await supabase.rpc('log_admin_action', {
        action_type: 'template_deleted',
        target_type: 'template',
        target_id: id,
        details: { title }
      });

      alert('Template deleted successfully!');
      loadDashboardData();
      
    } catch (error) {
      console.error('Error deleting template:', error);
      alert('Error deleting template');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardContent className="p-8">
            <Shield className="h-12 w-12 text-red-500 mx-auto mb-4 animate-pulse" />
            <p className="text-white text-center">Verifying admin access...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
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
                <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-gray-400 text-sm">Logged in as: {userEmail}</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => router.push('/dashboard')}
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
          {['overview', 'templates', 'users', 'settings'].map((tab) => (
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
                      <p className="text-gray-400 text-sm">Premium Users</p>
                      <p className="text-2xl font-bold text-white">{stats.premiumUsers}</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Templates</p>
                      <p className="text-2xl font-bold text-white">{stats.totalTemplates}</p>
                    </div>
                    <Package className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Downloads (30d)</p>
                      <p className="text-2xl font-bold text-white">{stats.monthlyDownloads}</p>
                    </div>
                    <Eye className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Revenue (30d)</p>
                      <p className="text-2xl font-bold text-white">£{stats.monthlyRevenue}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-300">{activity.description}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{activity.time}</span>
                    </div>
                  ))}
                  {recentActivity.length === 0 && (
                    <p className="text-gray-400 text-center">No recent activity</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Templates Management Tab */}
        {activeTab === 'templates' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Manage Templates</h2>
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => setIsAddingTool(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New Template
              </Button>
            </div>

            {/* Add Template Form */}
            {isAddingTool && (
              <Card className="bg-gray-800/50 border-gray-700 mb-6">
                <CardHeader>
                  <CardTitle className="text-white">Add New Template</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddTool} className="space-y-4">
                    <div>
                      <label className="text-gray-300 text-sm">Template Name</label>
                      <Input name="title" placeholder="e.g., SaaS Dashboard Template" className="mt-1" required />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">Price (£)</label>
                      <Input name="price" type="number" placeholder="0" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">Category</label>
                      <select name="category" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white" required>
                        <option value="SaaS Templates">SaaS Templates</option>
                        <option value="N8N Workflows">N8N Workflows</option>
                        <option value="Make.com Scenarios">Make.com Scenarios</option>
                        <option value="Zapier Templates">Zapier Templates</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">Access Level</label>
                      <select name="access_level" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white">
                        <option value="free">Free for All</option>
                        <option value="premium">Premium Only</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">Description</label>
                      <Textarea name="description" placeholder="Describe what this template does..." className="mt-1" required />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">Tags (comma separated)</label>
                      <Input name="tags" placeholder="saas, dashboard, react" className="mt-1" />
                    </div>
                    <div className="flex gap-4">
                      <Button type="submit" className="bg-green-600 hover:bg-green-700">
                        <Save className="h-4 w-4 mr-2" />
                        Save Template
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setIsAddingTool(false)}>
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Templates List */}
            <div className="grid gap-4">
              {tools.map((tool) => (
                <Card key={tool.id} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{tool.title}</h3>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-gray-400">£{tool.price || 0}</span>
                          <span className="text-gray-400">•</span>
                          <Badge>{tool.category}</Badge>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400">{tool.downloads_count || 0} downloads</span>
                          {tool.is_premium && (
                            <Badge className="bg-purple-500/20 text-purple-300">Premium</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-red-600 text-red-400 hover:bg-red-600/20"
                          onClick={() => handleDeleteTool(tool.id, tool.title)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {tools.length === 0 && (
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-400">No templates yet. Add your first template!</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">User Management</h2>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <p className="text-gray-300">User management interface coming soon...</p>
                <p className="text-gray-400 text-sm mt-2">View users, manage subscriptions, and more.</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">Site Settings</h2>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <p className="text-gray-300">Site configuration coming soon...</p>
                <p className="text-gray-400 text-sm mt-2">Manage site settings, integrations, and more.</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}