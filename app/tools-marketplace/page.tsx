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
  Home
} from "lucide-react";

const ToolsMarketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [pricingFilter, setPricingFilter] = useState("all");
  const [membershipType, setMembershipType] = useState("Free");

  // Get user membership from localStorage
  useEffect(() => {
    const membership = localStorage.getItem('membership') || 'Free';
    setMembershipType(membership);
  }, []);

  // Real tools data - replace with actual API call later
  const tools = [
    {
      id: 1,
      title: "Email Marketing Automation",
      description: "Complete email sequences for lead nurturing and sales conversion. Includes welcome series, abandoned cart recovery, and customer retention flows.",
      category: "Marketing",
      pricing_type: "free",
      price: 0,
      rating: 4.8,
      downloads: 1247,
      tags: ["email", "marketing", "automation"],
      access_level: "free", // free, premium, enterprise
      is_premium_workflow: false
    },
    {
      id: 2,
      title: "Lead Generation Machine",
      description: "Automated lead capture system with landing pages, forms, and follow-up sequences. Generate qualified leads 24/7.",
      category: "Sales",
      pricing_type: "paid",
      price: 29,
      rating: 4.9,
      downloads: 892,
      tags: ["leads", "sales", "conversion"],
      access_level: "paid",
      is_premium_workflow: true
    },
    {
      id: 3,
      title: "Social Media Scheduler Pro",
      description: "Schedule and automate your social media posts across all platforms. Includes content templates and engagement tracking.",
      category: "Marketing",
      pricing_type: "free",
      price: 0,
      rating: 4.7,
      downloads: 1563,
      tags: ["social", "scheduling", "content"],
      access_level: "premium", // Requires Premium membership
      is_premium_workflow: false
    },
    {
      id: 4,
      title: "Customer Support Bot",
      description: "AI-powered chatbot for customer support. Handles common queries and escalates complex issues to human agents.",
      category: "Customer Service",
      pricing_type: "free",
      price: 0,
      rating: 4.6,
      downloads: 654,
      tags: ["chatbot", "support", "ai"],
      access_level: "enterprise", // Requires Enterprise membership
      is_premium_workflow: true
    },
    {
      id: 5,
      title: "Invoice Automation System",
      description: "Automatically generate, send, and track invoices. Includes payment reminders and late fee calculations.",
      category: "Finance",
      pricing_type: "free",
      price: 0,
      rating: 4.5,
      downloads: 987,
      tags: ["invoicing", "finance", "payments"],
      access_level: "free",
      is_premium_workflow: false
    },
    {
      id: 6,
      title: "Inventory Management Plus",
      description: "Advanced inventory tracking with automated reordering, supplier management, and demand forecasting.",
      category: "Operations",
      pricing_type: "paid",
      price: 79,
      rating: 4.8,
      downloads: 432,
      tags: ["inventory", "operations", "forecasting"],
      access_level: "enterprise",
      is_premium_workflow: true
    }
  ];

  const categories = ["all", "Marketing", "Sales", "Customer Service", "Finance", "Operations"];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = searchQuery === "" || 
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = categoryFilter === "all" || tool.category === categoryFilter;
    
    const matchesPricing = pricingFilter === "all" || 
      (pricingFilter === "free" && tool.pricing_type === "free") ||
      (pricingFilter === "paid" && tool.pricing_type !== "free");
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const getPriceDisplay = (tool: any) => {
    if (tool.pricing_type === "free") return "Free";
    return `£${tool.price}`;
  };

  const getTierIcon = (tool: any) => {
    if (tool.access_level === "enterprise") return <Crown className="h-4 w-4 text-yellow-600" />;
    if (tool.is_premium_workflow) return <Zap className="h-4 w-4 text-purple-600" />;
    return null;
  };

  const canUserAccess = (tool: any) => {
    const accessLevels = {
      "free": ["Free", "Premium", "Enterprise"],
      "premium": ["Premium", "Enterprise"], 
      "enterprise": ["Enterprise"]
    };
    
    return accessLevels[tool.access_level]?.includes(membershipType) || false;
  };

  const getAccessMessage = (tool: any) => {
    if (tool.access_level === "premium" && membershipType === "Free") {
      return "Upgrade to Premium to access this tool";
    }
    if (tool.access_level === "enterprise" && membershipType !== "Enterprise") {
      return "Upgrade to Enterprise to access this tool";
    }
    return "";
  };

  // Handle tool access/purchase
  const handleToolAction = (tool: any) => {
    if (!canUserAccess(tool)) {
      alert(`${getAccessMessage(tool)}\n\nClick "Upgrade" to unlock this tool and many more!`);
      return;
    }

    if (tool.pricing_type === "free") {
      // Free tool - simulate download
      alert(`Downloading "${tool.title}"! 🎉\n\nThis would normally:\n• Download the automation template\n• Add to your tools library\n• Provide setup instructions`);
      // In real app: trigger download, add to user's tools, etc.
    } else {
      // Paid tool - redirect to checkout
      alert(`Redirecting to checkout for "${tool.title}" - £${tool.price} 💳\n\nThis would normally redirect to Stripe/payment processor.`);
      // In real app: redirect to Stripe checkout or payment page
    }
  };

  const handleViewTool = (tool: any) => {
    alert(`Viewing details for "${tool.title}" 👀\n\nThis would show:\n• Full description\n• Screenshots/demos\n• User reviews\n• Setup requirements`);
    // In real app: navigate to tool detail page
  };

  const handleSaveTool = (tool: any) => {
    alert(`Saved "${tool.title}" to your wishlist! ❤️\n\nThis would add the tool to your saved items for later.`);
    // In real app: add to user's saved/wishlist
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => window.location.href = '/dashboard'}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tools Marketplace</h1>
          <p className="text-lg text-gray-600">
            Discover automation tools and workflows to build your profitable business
          </p>
          <div className="mt-4">
            <Badge className="bg-blue-100 text-blue-800 border border-blue-200">
              Your Plan: {membershipType}
            </Badge>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  placeholder="Search tools, workflows, and automation..."
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
                <option value="all">All Pricing</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredTools.length} of {tools.length} tools
          </p>
        </div>

        {/* Tools Grid */}
        {filteredTools.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No tools found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <Card key={tool.id} className={`hover:shadow-lg transition-shadow ${!canUserAccess(tool) ? 'opacity-70' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 flex items-center gap-2">
                        {tool.title}
                        {getTierIcon(tool)}
                        {!canUserAccess(tool) && <Lock className="h-4 w-4 text-gray-400" />}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mb-3">
                        {tool.description.substring(0, 100)}
                        {tool.description.length > 100 ? "..." : ""}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {tool.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {tool.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{tool.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{tool.rating.toFixed(1)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          <span>{tool.downloads}</span>
                        </div>
                      </div>
                      <div className="font-semibold text-gray-900">
                        {getPriceDisplay(tool)}
                      </div>
                    </div>

                    {/* Access Message */}
                    {!canUserAccess(tool) && (
                      <div className="text-xs text-amber-600 bg-amber-50 p-2 rounded border border-amber-200">
                        {getAccessMessage(tool)}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1" 
                        variant={canUserAccess(tool) ? (tool.pricing_type === "free" ? "default" : "outline") : "outline"}
                        onClick={() => handleToolAction(tool)}
                        disabled={!canUserAccess(tool) && tool.pricing_type === "free"}
                      >
                        {!canUserAccess(tool) ? "Upgrade" : (tool.pricing_type === "free" ? "Get Free" : "Buy Now")}
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleViewTool(tool)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleSaveTool(tool)}>
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Upgrade CTA for Free Users */}
        {membershipType === "Free" && (
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Unlock More Tools
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Upgrade to Premium or Enterprise to access all automation tools and workflows.
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.location.href = '/pricing'}
            >
              View Upgrade Options
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolsMarketplace;