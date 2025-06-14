"use client"

import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="text-gray-300 hover:text-white mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-2 mb-6">
            LEGAL
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: November 2024</p>
        </div>

        {/* Content */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Welcome to EliteHub. These Terms of Service ("Terms") govern your use of our website, 
                products, and services. By accessing or using EliteHub, you agree to be bound by these Terms.
              </p>
            </section>

            {/* Definitions */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Definitions</h2>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">"Service"</strong> refers to the EliteHub platform, including all tools, resources, and content.</p>
                <p><strong className="text-white">"User"</strong> refers to any individual or entity using our Service.</p>
                <p><strong className="text-white">"Content"</strong> refers to any materials, including automation tools, guides, and resources available through our Service.</p>
              </div>
            </section>

            {/* Use of Service */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Use of Service</h2>
              <div className="space-y-3 text-gray-300">
                <p>By using EliteHub, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the Service in compliance with all applicable laws</li>
                  <li>Not misuse or abuse our automation tools</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </div>
            </section>

            {/* Subscriptions and Payments */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Subscriptions and Payments</h2>
              <div className="space-y-3 text-gray-300">
                <p>EliteHub offers various subscription tiers:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Free Plan:</strong> Limited access to tools and resources</li>
                  <li><strong className="text-white">Professional Plan (£50/month):</strong> Full access to tools and monthly coaching</li>
                  <li><strong className="text-white">Enterprise Plan (£125/month):</strong> Everything in Professional plus priority support</li>
                </ul>
                <p className="mt-4">
                  Subscriptions are billed monthly. You may cancel at any time, with cancellation taking effect 
                  at the end of your current billing period.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  All content on EliteHub, including automation tools, workflows, and educational materials, 
                  is protected by intellectual property laws. Users are granted a limited license to use these 
                  materials for their personal or business use.
                </p>
                <p>You may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Resell or redistribute our tools without permission</li>
                  <li>Remove any proprietary notices</li>
                  <li>Use our content to create competing services</li>
                </ul>
              </div>
            </section>

            {/* User Content */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. User Content</h2>
              <p className="text-gray-300 leading-relaxed">
                You retain ownership of any content you create using our Service. By sharing content in our 
                community or forums, you grant EliteHub a non-exclusive license to use, display, and distribute 
                such content within the Service.
              </p>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Disclaimers</h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  EliteHub is provided "as is" without warranties of any kind. We do not guarantee specific 
                  results from using our tools or services.
                </p>
                <p>
                  Results depend on various factors including your implementation, market conditions, and 
                  business model. Past performance of other users does not guarantee your results.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                To the maximum extent permitted by law, EliteHub shall not be liable for any indirect, 
                incidental, special, or consequential damages arising from your use of the Service. Our 
                total liability shall not exceed the amount you paid us in the past 12 months.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to suspend or terminate your access to the Service for violation of 
                these Terms or for any other reason at our discretion. You may terminate your account at 
                any time through your account settings.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms from time to time. We will notify you of significant changes via 
                email or through the Service. Your continued use after changes constitutes acceptance of the 
                updated Terms.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Information</h2>
              <div className="text-gray-300">
                <p className="mb-2">If you have questions about these Terms, contact us at:</p>
                <p>Email: elitehubnetwork@outlook.com</p>
                <p>Location: Cardiff, Wales, UK</p>
              </div>
            </section>

            {/* Agreement */}
            <section className="border-t border-gray-700 pt-8">
              <p className="text-gray-300 text-center">
                By using EliteHub, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}