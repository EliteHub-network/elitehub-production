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
  const freeResources = [
    {
      title: "What is Business Automation?",
      description: "Complete beginner's guide to understanding automation and how it can transform your business",
      type: "Article",
      readTime: "10 min read",
      link: "#"
    },
    {
      title: "Automation vs Manual Work: Real Cost Analysis",
      description: "See the real numbers behind automation ROI with practical examples",
      type: "Guide",
      readTime: "15 min read",
      link: "#"
    },
    {
      title: "5 Automations Every Business Needs",
      description: "Start with these essential automations that save 10+ hours per week",
      type: "Tutorial",
      readTime: "20 min read",
      link: "#"
    },
    {
      title: "Email Marketing Automation Basics",
      description: "Build your first email sequence that nurtures leads automatically",
      type: "Tutorial",
      readTime: "25 min read",
      link: "#"
    }
  ];

  const videoTutorials = [
    {
      title: "Getting Started with Automation",
      duration: "12:45",
      description: "Perfect introduction for complete beginners"
    },
    {
      title: "Building Your First Workflow",
      duration: "18:30",
      description: "Step-by-step workflow creation tutorial"
    },
    {
      title: "Connecting Your Tools",
      duration: "15:20",
      description: "How to integrate your existing tools"
    },
    {
      title: "Automation Best Practices",
      duration: "22:15",
      description: "Common mistakes and how to avoid them"
    }
  ];

  const downloadables = [
    {
      title: "Automation Planning Worksheet",
      type: "PDF",
      description: "Map out your automation strategy with this free worksheet",
      size: "2.4 MB"
    },
    {
      title: "50 Automation Ideas Checklist",
      type: "PDF",
      description: "Discover automation opportunities in your business",
      size: "1.8 MB"
    },
    {
      title: "ROI Calculator Spreadsheet",
      type: "Excel",
      description: "Calculate exactly how much automation will save you",
      size: "845 KB"
    }
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
          <div className="grid md:grid-cols-2 gap-6">
            {freeResources.map((resource, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant="outline" className="mb-3">{resource.type}</Badge>
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
        </div>

        {/* Video Tutorials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Free Video Tutorials</h2>
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
                      <Button variant="outline" size="sm">
                        Watch Now
                        <Play className="h-3 w-3 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Free Downloads</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {downloadables.map((resource, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{resource.type}</Badge>
                    <span className="text-gray-500 text-sm">{resource.size}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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