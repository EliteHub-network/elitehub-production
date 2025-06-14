"use client"

import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  BookOpen,
  Video,
  FileText,
  Zap,
  Clock,
  Target,
  ChevronRight,
  Play,
  Download,
  CheckCircle,
  Home,
  ExternalLink,
  ArrowLeft
} from 'lucide-react';

export default function Learn() {
  // Educational resources will be loaded from your CMS/database
  const freeResources = [
    // Resources will be added from your content management system
  ];

  const videoTutorials = [
    // Video tutorials will be loaded from your video platform
  ];

  const downloadables = [
    // Downloadable resources will be loaded from your file storage
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Navigation Bar */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => window.location.href = '/dashboard'}
              className="text-gray-300 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <Badge className="bg-green-500/20 text-green-300 border border-green-500/30 px-4 py-2 mb-6">
            100% FREE EDUCATION
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn Business Automation
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Free guides, tutorials, and resources to help you understand and implement 
            business automation. No fluff, just practical knowledge that works.
          </p>
        </div>

        {/* Free Articles & Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Free Guides & Articles</h2>
          {freeResources.length === 0 ? (
            <div className="text-center py-12">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <BookOpen className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold text-xl mb-4">Learning Resources Coming Soon</h3>
                  <p className="text-gray-400 mb-6">
                    We're preparing comprehensive guides and tutorials to help you master business automation.
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Request Specific Topics
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {freeResources.map((resource, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="outline" className="mb-3 border-gray-600 text-gray-300">{resource.type}</Badge>
                        <h3 className="text-white font-semibold text-lg mb-2">{resource.title}</h3>
                        <p className="text-gray-400 mb-3">{resource.description}</p>
                        <p className="text-sm text-blue-400">{resource.readTime}</p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-gray-400 mt-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Video Tutorials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Free Video Tutorials</h2>
          {videoTutorials.length === 0 ? (
            <div className="text-center py-12">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <Video className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold text-xl mb-4">Video Content In Production</h3>
                  <p className="text-gray-400 mb-6">
                    Professional video tutorials are being created to walk you through automation step-by-step.
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Get Notified When Ready
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {videoTutorials.map((video, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gray-900 rounded-t-lg flex items-center justify-center relative">
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500/20 text-green-300 border border-green-500/30">
                          FREE
                        </Badge>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Play className="h-8 w-8 text-blue-400 ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-white font-semibold mb-2">{video.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{video.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {video.duration}
                        </span>
                        <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                          Watch Now
                          <Play className="h-3 w-3 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Downloadable Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Free Downloads</h2>
          {downloadables.length === 0 ? (
            <div className="text-center py-12">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <FileText className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold text-xl mb-4">Downloadable Resources Coming Soon</h3>
                  <p className="text-gray-400 mb-6">
                    Templates, worksheets, and guides are being prepared for download.
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Request Templates
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {downloadables.map((resource, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <FileText className="h-12 w-12 text-blue-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">{resource.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-gray-600 text-gray-300">{resource.type}</Badge>
                      <span className="text-gray-500 text-sm">{resource.size}</span>
                    </div>
                    <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download Free
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Key Concepts */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Automation Concepts</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Triggers & Actions</h3>
                  <p className="text-gray-400 text-sm">
                    Every automation starts with a trigger (when this happens) and results in actions (do this).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Workflows</h3>
                  <p className="text-gray-400 text-sm">
                    Connected series of automations that handle complex business processes end-to-end.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Integration</h3>
                  <p className="text-gray-400 text-sm">
                    Connecting different tools and platforms to work together seamlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Conditional Logic</h3>
                  <p className="text-gray-400 text-sm">
                    If/then rules that make your automations smart and responsive to different scenarios.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Testing & Optimization</h3>
                  <p className="text-gray-400 text-sm">
                    Always test your automations and continuously improve them based on results.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-2">ROI Measurement</h3>
                  <p className="text-gray-400 text-sm">
                    Track time saved and revenue generated to measure automation success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Put This Knowledge Into Action?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start implementing what you've learned with our automation tools and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.location.href = '/tools-marketplace'}
            >
              Browse Automation Tools
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
              onClick={() => window.location.href = '/work-with-me'}
            >
              Get Expert Help
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}