"use client"

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  Search, 
  Filter, 
  Download, 
  Star, 
  Crown, 
  Zap,
  ArrowLeft,
  Eye,
  Heart,
  Lock,
  Code,
  Bot,
  Rocket,
  ShoppingBag,
  Tag
} from "lucide-react";

const ToolsMarketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [pricingFilter, setPricingFilter] = useState("all");
  const [membershipType, setMembershipType] = useState("Free");
  const [downloadsUsed, setDownloadsUsed] = useState(0);
  const [downloadLimit, setDownloadLimit] = useState(5);

  useEffect(() => {
    // Get membership status from localStorage
    const membership = localStorage.getItem('membership') || 'Free';
    setMembershipType(membership);
    
    // Set download limits
    if (membership === 'Premium') {
      setDownloadLimit(999); // Unlimited
    }
    
    // Get current downloads used (in real app, this would come from database)
    const used = parseInt(localStorage.getItem('downloadsUsed') || '0');
    setDownloadsUsed(used);
  }, []);

  // Template data - replace with real data from your database
  const tools = [
    {
      id: 1,
      title: "SaaS User Dashboard Template",
      description: "Complete user dashboard with authentication, profile management, and settings. Perfect starting point for any SaaS.",
      category: "SaaS Templates",
      pricing_type: "premium",
      price: 97,
      downloads: 0,
      tags: ["react", "dashboard", "authentication"],
      is_premium: true
    },
    {
      id: 2,
      title: "Email Automation Workflow - N8N",
      description: "Automated email sequence workflow for N8N. Includes welcome series, follow-ups, and segmentation.",
      category: "N8N Workflows",
      pricing_type: "free",
      price: 0,
      downloads: 0,
      tags: ["n8n", "email", "automation"],
      is_premium: false
    },
    {
      id: 3,
      title: "Stripe Payment Integration Kit",
      description: "Complete Stripe integration with subscription management, webhooks, and customer portal.",
      category: "SaaS Templates",
      pricing_type: "premium",
      price: 147,
      downloads: 0,
      tags: ["stripe", "payments", "subscriptions"],
      is_premium: true
    },
    {
      id: 4,
      title: "Lead Scoring Automation - Make.com",
      description: "Automatically score and segment leads based on behavior. Integrates with any CRM.",
      category: "Make Scenarios",
      pricing_type: "free",
      price: 0,
      downloads: 0,
      tags: ["make", "leads", "crm"],
      is_premium: false
    },
    {
      id: 5,
      title: "Multi-tenant SaaS Boilerplate",
      description: "Production-ready multi-tenant architecture with team management, roles, and permissions.",
      category: "SaaS Templates",
      pricing_type: "premium",
      price: 297,
      downloads: 0,
      tags: ["multi-tenant", "teams", "saas"],
      is_premium: true
    },
    {
      id: 6,
      title: "Social Media Scheduler - Zapier",
      description: "Schedule posts across all platforms. Includes content calendar and analytics tracking.",
      category: "Zapier Templates",
      pricing_type: "free",
      price: 0,
      downloads: 0,
      tags: ["zapier", "social", "scheduling"],
      is_premium: false
    }
  ];

  const categories = ["all", "SaaS Templates", "N8N Workflows", "Make Scenarios", "Zapier Templates"];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = searchQuery === "" || 
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = categoryFilter === "all" || tool.category === categoryFilter;
    
    const matchesPricing = pricingFilter === "all" || 
      (pricingFilter === "free" && tool.pricing_type === "free") ||
      (pricingFilter === "premium" && tool.pricing_type === "premium");
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const handleDownload = (tool: any) => {
    // Check if user has downloads remaining (for free users)
    if (membershipType === 'Free' && tool.pricing_type === 'free') {
      if (downloadsUsed >= downloadLimit) {
        alert('You have reached your monthly download limit. Upgrade to Premium for unlimited downloads!');
        window.location.href = '/pricing';
        return;
      }
    }

    // Check if premium content and user is not premium
    if (tool.is_premium && membershipType !== 'Premium') {
      alert('This is a premium template. Upgrade to Premium to access all templates!');
      window.location.href = '/pricing';
      return;
    }

    // Process download
    alert(`Downloading "${tool.title}"...`);
    
    // Update downloads used
    if (membershipType === 'Free') {
      const newDownloadsUsed = downloadsUsed + 1;
      setDownloadsUsed(newDownloadsUsed);
      localStorage.setItem('downloadsUsed', newDownloadsUsed.toString());
    }
  };

  const handlePurchase = (tool: any) => {
    // For paid individual templates
    alert(`Redirecting to checkout for "${tool.title}" - £${tool.price}`);
    // In real app: redirect to Stripe checkout
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <a href="/dashboard">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </a>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">SaaS & Automation Templates</h1>
          <p className="text-lg text-gray-600">
            Ready-to-use templates for building SaaS products and automation workflows
          </p>
        </div>

        {/* Membership Status Bar */}
        <div className="mb-8">
          <Card className={membershipType === 'Premium' ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300' : 'bg-gray-50'}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {membershipType === 'Premium' ? (
                    <>
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <Star className="h-4 w-4 mr-1" />
                        Premium Member
                      </Badge>
                      <span className="text-gray-700">Unlimited downloads • 15% service discount • Commercial license</span>
                    </>
                  ) : (
                    <>
                      <Badge variant="outline">Free Plan</Badge>
                      <span className="text-gray-700">
                        {downloadsUsed} / {downloadLimit} downloads used this month
                      </span>
                    </>
                  )}
                </div>
                {membershipType !== 'Premium' && (
                  <Button 
                    variant="default" 
                    size="sm"
                    onClick={() => window.location.href = '/pricing'}
                  >
                    Upgrade to Premium
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select 
                value={categoryFilter} 
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>

              <select 
                value={pricingFilter} 
                onChange={(e) => setPricingFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Templates</option>
                <option value="free">Free Only</option>
                <option value="premium">Premium Only</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredTools.length} of {tools.length} templates
          </p>
        </div>

        {/* Templates Grid */}
        {filteredTools.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No templates found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <Card key={tool.id} className="hover:shadow-lg transition-shadow relative">
                {tool.is_premium && membershipType !== 'Premium' && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      <Lock className="h-3 w-3 mr-1" />
                      Premium
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">
                        {tool.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mb-3">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Category & Tags */}
                    <div>
                      <Badge variant="outline" className="mb-2">{tool.category}</Badge>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {tool.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-gray-900">
                        {tool.price > 0 ? `£${tool.price}` : 'Free'}
                      </div>
                      
                      {tool.price > 0 ? (
                        <Button 
                          size="sm"
                          onClick={() => handlePurchase(tool)}
                        >
                          Buy Now
                        </Button>
                      ) : (
                        <Button 
                          size="sm"
                          variant={tool.is_premium && membershipType !== 'Premium' ? 'outline' : 'default'}
                          onClick={() => handleDownload(tool)}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Value Proposition */}
        {membershipType !== 'Premium' && (
          <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Unlock Everything with Premium</h3>
              <div className="flex justify-center gap-8 mb-6">
                <div className="text-center">
                  <Download className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">Unlimited Downloads</p>
                </div>
                <div className="text-center">
                  <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold">Premium Templates</p>
                </div>
                <div className="text-center">
                  <Tag className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">15% Service Discount</p>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => window.location.href = '/pricing'}
              >
                Upgrade to Premium - £50/month
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ToolsMarketplace;