"use client"
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  Settings, 
  Database, 
  FileJson, 
  Heart,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <CheckCircle className="w-5 h-5 text-green-400" />
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      </div>
    </div>
  );
};

const FloatingParticle = ({ delay = 0 }) => {
  return (
    <div 
      className="absolute w-2 h-2 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-30 animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}ms`,
        animationDuration: `${2000 + Math.random() * 2000}ms`
      }}
    />
  );
};

const ApiFeaturesSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "No Authentication Required",
      description: "Start building immediately without complex API keys or authentication setup. Perfect for rapid prototyping and development."
    },
    {
      icon: Zap,
      title: "Fast and Reliable Mock APIs",
      description: "Lightning-fast response times with 99.9% uptime. Built on modern infrastructure for consistent performance."
    },
    {
      icon: Settings,
      title: "Customizable Responses",
      description: "Tailor API responses to match your exact needs. Flexible parameters and dynamic data generation."
    },
    {
      icon: Database,
      title: "Multiple Data Types",
      description: "Access diverse datasets including Users, Products, Tasks, and more. Everything you need for comprehensive testing."
    },
    {
      icon: FileJson,
      title: "JSON Responses",
      description: "Clean, structured JSON responses that integrate seamlessly with modern applications and frameworks."
    },
    {
      icon: Heart,
      title: "Free Forever",
      description: "No hidden costs, no subscription fees. Our commitment to supporting developers and fostering innovation."
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 200} />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className={`text-center mb-16 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-800`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Why Choose Our API?</span>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Features & Benefits
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Built for developers, by developers. Experience the power of seamless API integration with our cutting-edge mock service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-800 delay-700`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer group">
            <span className="text-white font-semibold">Get Started Now</span>
            <Zap className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default ApiFeaturesSection;