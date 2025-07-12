"use client"
import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Globe, 
  Heart, 
  Mail, 
  Twitter, 
  Github, 
  Linkedin, 
  ExternalLink,
  Zap,
  Shield,
  Database,
  BookOpen,
  Coffee,
  Star
} from 'lucide-react';

const FooterSection = ({ title, children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`space-y-4 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } transition-all duration-800`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
};

const FooterLink = ({ href, icon: Icon, children, external = false }) => {
  return (
    <a 
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
    >
      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
      <span className="group-hover:translate-x-1 transition-transform duration-300">
        {children}
      </span>
      {external && (
        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </a>
  );
};

const SocialLink = ({ href, icon: Icon, label, color }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-${color}-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-${color}-500/20`}
      title={label}
    >
      <Icon className={`w-5 h-5 text-gray-400 group-hover:text-${color}-400 transition-colors duration-300`} />
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-${color}-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    </a>
  );
};

const FooterComponent = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-gray-800/50">
      {/* Animated Background */}
      

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className={`text-center mb-16 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-800`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">API House</h2>
              <p className="text-sm text-purple-300">Mock APIs for Developers</p>
            </div>
          </div>
          
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Empowering developers with fast, reliable, and free mock APIs. 
            No authentication required, just start building!
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* API Resources */}
          <FooterSection title="API Resources" delay={100}>
            <FooterLink href="https://api.apihouse.com/tasks" icon={Database}>
              Tasks Endpoint
            </FooterLink>
            <FooterLink href="/docs" icon={BookOpen}>
              Documentation
            </FooterLink>
            <FooterLink  icon={Zap}>
              Quick Start Guide
            </FooterLink>
            <FooterLink  icon={Code}>
              Code Examples
            </FooterLink>
          </FooterSection>

          {/* Features */}
          <FooterSection title="Features" delay={200}>
            <FooterLink icon={Shield}>
              No Authentication
            </FooterLink>
            <FooterLink  icon={Zap}>
              Fast & Reliable
            </FooterLink>
            <FooterLink  icon={Heart}>
              Free Forever
            </FooterLink>
            <FooterLink  icon={Globe}>
              JSON Responses
            </FooterLink>
          </FooterSection>

          {/* Support */}
          <FooterSection title="Support" delay={300}>
            <FooterLink  icon={Mail}>
              Contact Us
            </FooterLink>
            <FooterLink  icon={BookOpen}>
              FAQ
            </FooterLink>
            <FooterLink  icon={Coffee}>
              Community
            </FooterLink>
            <FooterLink  icon={Star}>
              Feature Requests
            </FooterLink>
          </FooterSection>

          {/* Developer */}
          <FooterSection title="Developer" delay={400}>
            <FooterLink href="https://github.com/Ir786921/ApiHouse" icon={Github} external>
              GitHub
            </FooterLink>
            <FooterLink href="#" icon={Twitter} external>
              Twitter
            </FooterLink>
            <FooterLink href="#" icon={Linkedin} external>
              LinkedIn
            </FooterLink>
           
          </FooterSection>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center gap-4 mb-12 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-800 delay-500`}>
          <SocialLink 
            href="https://github.com/Ir786921/ApiHouse" 
            icon={Github} 
            label="GitHub" 
            color="gray"
          />
          <SocialLink 
            href="https://twitter.com" 
            icon={Twitter} 
            label="Twitter" 
            color="blue"
          />
          <SocialLink 
            href="https://linkedin.com" 
            icon={Linkedin} 
            label="LinkedIn" 
            color="blue"
          />
          <SocialLink 
            href="mailto:hello@apihouse.com" 
            icon={Mail} 
            label="Email" 
            color="purple"
          />
        </div>

        {/* Status Bar */}
        {/* <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-8 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-800 delay-600`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">All Systems Operational</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-gray-700"></div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Globe className="w-4 h-4 text-purple-400" />
              <span>Global CDN</span>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className={`border-t border-gray-800/50 pt-8 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-800 delay-700`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>© {currentYear} API House. All rights reserved.</span>
              <div className="hidden md:block w-px h-4 bg-gray-700"></div>
              <span>Built with ❤️ for developers</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                API Status
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default FooterComponent;