import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">EliteHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Turn your business ideas into automated revenue machines. 
              Expert guidance to build, automate, and scale.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/auth" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1">
                  Home
                </a>
              </li>
              <li>
                <a href="/auth" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/auth" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1">
                  Tools Marketplace
                </a>
              </li>
              <li>
                <a href="/auth" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/auth" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1">
                  Work With Me
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/auth" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Automation Consulting
                </a>
              </li>
              <li>
                <a href="/auth" className="text-gray-400 hover:text-blue-400 transition-colors">
                  SaaS Development
                </a>
              </li>
              <li>
                <a href="/auth" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Business Process Audit
                </a>
              </li>
              <li>
                <a href="/auth" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Community Hub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-blue-500" />
                <a href="mailto:EliteHubnetwork@outlook.com" className="hover:text-blue-400 transition-colors">
                  EliteHubnetwork@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>Available Mon-Fri</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>Cardiff, Wales, UK</span>
              </li>
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-white font-medium mb-2">Stay Updated</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} EliteHub. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}