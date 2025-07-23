"use client"

import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Setter School",
      year: "2024",
      category: "Private Education",
      description: "Premium learning platform for high-performance appointment setting",
      image: "/screenshots/setter-school.jpg", // You'll add this
      metrics: [
        "+340% Student Enrollment",
        "£2.4M Revenue Generated", 
        "95% Course Completion Rate"
      ],
      technologies: ["Learning Management System", "Payment Processing", "Student Portal"],
      url: "https://setterschool.com",
      gradient: "from-emerald-900 to-slate-900"
    },
    {
      id: 2,
      name: "Lewis Slennet",
      year: "2024", 
      category: "Tax Strategy",
      description: "Chartered Accountant helping entrepreneurs legally reduce tax to 0%",
      image: "/screenshots/lewis-slennet.jpg", // You'll add this
      metrics: [
        "0% Tax Strategy",
        "£1.8M Client Savings",
        "47% Conversion Rate"
      ],
      technologies: ["Tax Calculator", "Booking System", "Client Portal"],
      url: "https://lewisslennet.com",
      gradient: "from-green-900 to-blue-900"
    }
  ];

  return (
    <section className="py-20 sm:py-32 lg:py-40 relative bg-[#0a0a0a]">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent opacity-60"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="text-[#c9b037] text-xs sm:text-sm font-light tracking-[0.3em] mb-6 sm:mb-8">
            PORTFOLIO
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 sm:mb-8 leading-tight">
            <span className="text-white">Our Selected Projects</span>
            <br />
            <span className="text-[#c9b037] font-normal">That Deliver Results</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#c0c0c0] font-light max-w-3xl mx-auto">
            Explore our curated work, showcasing collaborations with visionary clients across diverse industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image Container */}
              <div className="relative overflow-hidden rounded-sm border border-[#333333] group-hover:border-[#c9b037]/30 transition-all duration-500">
                {/* Gradient Overlay Background (mimicking the website colors) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                
                {/* Screenshot Placeholder - Replace with actual screenshots */}
                <div className="relative aspect-[16/10] bg-[#111111] flex items-center justify-center">
                  {/* Website Preview */}
                  {project.id === 1 ? (
                    // Setter School Preview
                    <div className="w-full h-full bg-gradient-to-br from-emerald-900 to-slate-900 flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-16 h-16 bg-[#c9b037] rounded-lg mb-6 flex items-center justify-center">
                        <span className="text-black font-bold text-2xl">SS</span>
                      </div>
                      <h3 className="text-[#c9b037] text-3xl font-light mb-4 italic">Built for Men Who</h3>
                      <h3 className="text-white text-2xl font-light mb-6 italic">Move Different</h3>
                      <p className="text-gray-300 text-sm max-w-md">
                        The private standard for learning appointment setting, structure, and independence.
                      </p>
                      <div className="flex gap-4 mt-6 text-xs text-[#c9b037]">
                        <span>ESTABLISHED 2024</span>
                        <span>•</span>
                        <span>INVITE-ONLY</span>
                        <span>•</span>
                        <span>OUTCOMES-DRIVEN</span>
                      </div>
                    </div>
                  ) : (
                    // Lewis Slennet Preview
                    <div className="w-full h-full bg-gradient-to-br from-green-900 to-blue-900 flex flex-col items-center justify-center p-8 text-center">
                      <div className="inline-block bg-green-500 text-black px-4 py-1 rounded-full text-sm font-medium mb-6">
                        JOIN THE 1% WHO REFUSE TO OVERPAY
                      </div>
                      <h3 className="text-white text-4xl font-light mb-2">Stop Funding the Government.</h3>
                      <h3 className="text-green-400 text-4xl font-light mb-6">Start Funding Your Life.</h3>
                      <p className="text-gray-300 text-sm max-w-lg mb-6">
                        I'm a Chartered Accountant who left the UK to help entrepreneurs 
                        <span className="text-green-400"> legally reach 0% tax</span> and live life on their own terms.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Reduce tax from 45% to 0% — completely legally</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Work from anywhere in the world</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                  hoveredProject === project.id ? 'opacity-60' : 'opacity-0'
                }`}></div>

                {/* Project Info Overlay */}
                <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
                  hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <div className="text-white">
                    <h4 className="text-xl font-light mb-2">{project.name}</h4>
                    <p className="text-[#c9b037] text-sm mb-3">{project.category} • {project.year}</p>
                    <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#c9b037] hover:text-white transition-colors duration-300"
                    >
                      <span className="text-sm">View Live Site</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Details Below */}
              <div className="mt-6 space-y-4">
                {/* Project Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-light text-white group-hover:text-[#c9b037] transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[#666666]">{project.category} • {project.year}</p>
                  </div>
                  <div className="text-[#c9b037] text-xs tracking-wider">
                    NEW
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 gap-2">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-[#c9b037] rounded-full"></div>
                      <span className="text-sm text-[#c0c0c0] font-light">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-[#c0c0c0] text-xs font-light mb-2 tracking-wider">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs text-[#666666] bg-[#111111] border border-[#333333] px-3 py-1 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <p className="text-lg text-[#c0c0c0] font-light mb-6">
            Ready to see your business featured here?
          </p>
          <a 
            href="/book"
            className="inline-flex items-center gap-3 bg-[#c9b037] text-black px-8 py-4 font-medium tracking-wide hover:bg-[#d4c157] transition-all duration-300 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;