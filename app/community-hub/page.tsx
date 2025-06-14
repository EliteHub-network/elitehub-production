"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Star,
  Heart,
  ThumbsUp,
  Calendar,
  Search,
  Plus,
  Trophy,
  Zap
} from 'lucide-react';

export default function CommunityHub() {
  const [activeTab, setActiveTab] = useState('discussions');

  // Demo data - will be replaced with real data
  const discussions = [
    {
      id: 1,
      title: "Just hit £10k/month with email automation!",
      author: "Sarah M.",
      avatar: "SM",
      replies: 23,
      likes: 45,
      time: "2 hours ago",
      category: "Success Story"
    },
    {
      id: 2,
      title: "Best tools for client onboarding?",
      author: "Mike R.",
      avatar: "MR",
      replies: 15,
      likes: 12,
      time: "5 hours ago",
      category: "Question"
    },
    {
      id: 3,
      title: "Free Zapier alternative workflow",
      author: "Alex K.",
      avatar: "AK",
      replies: 31,
      likes: 67,
      time: "1 day ago",
      category: "Resource"
    }
  ];

  const topContributors = [
    { name: "Sarah M.", posts: 45, likes: 234 },
    { name: "John D.", posts: 38, likes: 189 },
    { name: "Emma L.", posts: 32, likes: 156 },
    { name: "Mike R.", posts: 28, likes: 145 }
  ];

  const upcomingEvents = [
    {
      title: "Weekly Automation Workshop",
      date: "Every Tuesday",
      time: "2:00 PM GMT",
      attendees: 45
    },
    {
      title: "Success Story Sharing",
      date: "Friday",
      time: "4:00 PM GMT",
      attendees: 28
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-4 py-2 mb-6">
            COMMUNITY HUB
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Connect, Learn, and Grow Together
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Join our thriving community of entrepreneurs sharing wins, helping each other, 
            and building successful automated businesses.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">523</p>
              <p className="text-gray-400">Active Members</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">1,847</p>
              <p className="text-gray-400">Discussions</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">£2.4M</p>
              <p className="text-gray-400">Revenue Generated</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">98%</p>
              <p className="text-gray-400">Success Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Discussions Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-lg p-1 border border-gray-700">
                {['discussions', 'showcase', 'events'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                      activeTab === tab 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search discussions..." 
                className="pl-10 bg-gray-800/50 border-gray-700"
              />
            </div>

            {/* Discussions List */}
            {activeTab === 'discussions' && (
              <div className="space-y-4">
                {discussions.map((post) => (
                  <Card key={post.id} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {post.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-white font-semibold text-lg hover:text-blue-400 transition-colors">
                                {post.title}
                              </h3>
                              <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                                <span>{post.author}</span>
                                <span>•</span>
                                <span>{post.time}</span>
                                <Badge variant="outline" className="ml-2">{post.category}</Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-6 mt-4">
                            <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                              <MessageSquare className="h-4 w-4" />
                              <span>{post.replies} replies</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Showcase Tab */}
            {activeTab === 'showcase' && (
              <div className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Success Showcase</h3>
                    <p className="text-gray-400 mb-6">
                      Share your wins and inspire others in the community!
                    </p>
                    <Button className="bg-yellow-600 hover:bg-yellow-700">
                      Share Your Success Story
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">{event.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {event.date}
                            </span>
                            <span>{event.time}</span>
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {event.attendees} attending
                            </span>
                          </div>
                        </div>
                        <Button variant="outline">
                          Join Event
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-white font-medium">{contributor.name}</p>
                          <p className="text-gray-400 text-sm">{contributor.posts} posts</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{contributor.likes}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-blue-500 mt-0.5" />
                    <span>Share your wins and learnings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Help others when you can</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-purple-500 mt-0.5" />
                    <span>Keep discussions constructive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <span>No spam or self-promotion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Join CTA */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Ready to Join?
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Connect with 500+ entrepreneurs building automated businesses
                </p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}