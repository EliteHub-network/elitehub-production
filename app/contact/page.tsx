"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { 
  Mail, 
  MessageSquare, 
  Clock,
  MapPin,
  Send,
  Phone,
  Calendar,
  CheckCircle,
  ArrowRight,
  Users,
  ArrowLeft,
  Home
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual form handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const contactReasons = [
    {
      title: "General Inquiry",
      description: "Questions about EliteHub or our services",
      icon: MessageSquare,
      color: "blue"
    },
    {
      title: "Technical Support",
      description: "Help with tools or platform issues",
      icon: Clock,
      color: "green"
    },
    {
      title: "Business Partnership",
      description: "Explore collaboration opportunities",
      icon: Users,
      color: "purple"
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-2 mb-6">
            GET IN TOUCH
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact EliteHub
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Have questions? Need help? We're here for you. Reach out and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Methods */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:elitehubnetwork@outlook.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                      elitehubnetwork@outlook.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Response Time</p>
                    <p className="text-gray-400">Within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">Cardiff, Wales, UK</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  variant="outline"
                  onClick={() => window.location.href = '/work-with-me'}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book a Consultation
                </Button>
                <Button 
                  className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  variant="outline"
                  onClick={() => window.location.href = '/learn'}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  View Resources
                </Button>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM GMT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM GMT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <p className="text-green-300">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}

                <form 
                  action="https://formspree.io/f/xrbkqbaz"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-300 text-sm mb-2 block">Your Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        required
                        className="bg-gray-700/50 border-gray-600"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm mb-2 block">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        required
                        className="bg-gray-700/50 border-gray-600"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-300 text-sm mb-2 block">Country/Region</label>
                      <select 
                        name="country"
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white"
                        required
                      >
                        <option value="">Select your country</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Spain">Spain</option>
                        <option value="Italy">Italy</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Norway">Norway</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Other">Other (please specify in message)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm mb-2 block">Time Zone</label>
                      <select 
                        name="timezone"
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white"
                        required
                      >
                        <option value="">Select your timezone</option>
                        <option value="GMT (London)">GMT (London)</option>
                        <option value="EST (New York)">EST (New York)</option>
                        <option value="PST (Los Angeles)">PST (Los Angeles)</option>
                        <option value="CET (Berlin/Paris)">CET (Berlin/Paris)</option>
                        <option value="AEST (Sydney)">AEST (Sydney)</option>
                        <option value="JST (Tokyo)">JST (Tokyo)</option>
                        <option value="IST (Mumbai)">IST (Mumbai)</option>
                        <option value="Other">Other (please specify in message)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="How can we help?"
                      required
                      className="bg-gray-700/50 border-gray-600"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className="bg-gray-700/50 border-gray-600"
                    />
                  </div>

                  {/* Hidden fields for Formspree */}
                  <input type="hidden" name="_subject" value="New International Contact Form Submission" />
                  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">How quickly will I see results?</h3>
                <p className="text-gray-400">
                  Most users see initial results within 2-4 weeks of implementing our automation tools and strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">Do I need technical skills?</h3>
                <p className="text-gray-400">
                  No! Our tools are designed for non-technical users. We provide step-by-step guides and support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">What if I need help?</h3>
                <p className="text-gray-400">
                  We offer comprehensive support through our community, documentation, and direct consultation options.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-400">
                  Yes! All our subscriptions are month-to-month with no long-term contracts. Cancel anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of entrepreneurs who are building automated businesses with EliteHub.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={() => window.location.href = '/auth'}
          >
            Start Your Journey
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}