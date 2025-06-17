"use client"

import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Wrench, 
  TrendingUp, 
  Code, 
  Users, 
  ArrowRight, 
  Heart,
  ArrowLeft,
  Home
} from 'lucide-react';

export default function About() {
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

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-2 mb-6">
              OUR STORY
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-relaxed pt-2 md:text-4xl text-center mx-0">
              From Plumber to 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-3xl pt-2">
                Building Digital Solutions
              </span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-xl">
              An honest journey from tradesman to tech entrepreneur, driven by curiosity and a passion for automation.
            </p>
          </div>

          {/* Main Story */}
          <div className="space-y-8 mb-12">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Wrench className="h-6 w-6 text-blue-400" />
                  The Beginning: Working as a Plumber
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed mb-4 pb-1">
                  For 12 years, I worked as a plumber. It was honest work that taught me the value of 
                  solving real problems for real people. However, the last 1.5 to 2 years I really hated it 
                  and was actively trying to explore new areas and opportunities.
                </p>
                <p className="text-gray-300 leading-relaxed pb-1">
                  Like many people, I was always looking for ways to improve my financial future and find 
                  something I was genuinely passionate about.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                  2019: A New Interest Emerges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed mb-4 pb-1">
                  In 2019, I started investing in cryptocurrency and AI stocks. I put a significant portion of my 
                  savings into these areas because I genuinely believed in the potential of these technologies. 
                  What started as an investment strategy quickly became a deep fascination.
                </p>
                <p className="text-gray-300 leading-relaxed pb-1">
                  I wasn't trying to build a business at this point - I was just curious. I wanted to understand 
                  how these technologies actually worked, not just invest in them blindly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Code className="h-6 w-6 text-purple-400" />
                  Stumbling Into Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed mb-4 pb-1">
                  My curiosity led me to take courses and start experimenting with coding and software development. 
                  I wasn't following some grand plan - I was just playing around, learning, and building things 
                  that interested me. I continue to undertake further development in my skills to stay current 
                  with emerging technologies.
                </p>
                <p className="text-gray-300 leading-relaxed pb-1">
                  Eventually, I created some automation tools for my own use. They saved me time and made my life 
                  easier. When people I knew saw what I'd built, they asked if I could create similar solutions 
                  for them. Word of mouth started spreading.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Users className="h-6 w-6 text-orange-400" />
                  EliteHub is Born
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed mb-4 pb-1">
                  What started as helping people I knew gradually grew into something bigger. I realized there 
                  was a real need for accessible automation tools and workflows that everyday business owners 
                  could actually use.
                </p>
                <p className="text-gray-300 leading-relaxed pb-1">
                  EliteHub emerged from this simple idea: create practical automation solutions that help real 
                  businesses save time and grow, without the complexity or inflated promises you see elsewhere.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <Card className="mb-12 bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Heart className="h-6 w-6 text-red-400" />
                Our Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Honesty First</h4>
                  <p className="text-gray-400 text-sm leading-relaxed pb-1">
                    No inflated numbers, no false promises. We share what actually works.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Real Solutions</h4>
                  <p className="text-gray-400 text-sm leading-relaxed pb-1">
                    Tools and workflows that solve actual business problems, not tech for tech's sake.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Accessible Innovation</h4>
                  <p className="text-gray-400 text-sm leading-relaxed pb-1">
                    Making advanced automation available to everyone, not just tech experts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Community Driven</h4>
                  <p className="text-gray-400 text-sm leading-relaxed pb-1">
                    Built by listening to real needs from real business owners.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed pb-1">
              Join our community and discover workflows that actually work.
            </p>
            <div className="flex justify-center">
  <Button 
    size="lg" 
    className="bg-blue-600 hover:bg-blue-700"
    onClick={() => window.location.href = '/work-with-me'}
  >
    Work With Me
    <ArrowRight className="h-4 w-4 ml-2" />
  </Button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}