"use client"
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Zap, 
  Shield, 
  Code, 
  Globe, 
  Clock
} from 'lucide-react';
import Link from 'next/link';

const FaqItem = ({ question, answer, icon: Icon, delay = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
            {question}
          </h3>
        </div>
        
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-purple-400 transition-transform duration-300" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
          )}
        </div>
      </button>

      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <div className="mt-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

const FaqComponent = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const faqs = [
    {
      question: "Do I need API keys or authentication to use the API?",
      answer: "No authentication required! Our API is completely open and free to use. Simply make HTTP requests to our endpoints without any API keys, tokens, or registration. This makes it perfect for quick prototyping, testing, and development.",
      icon: Shield
    },
    {
      question: "What data types and endpoints are currently available?",
      answer: "Currently, we offer the Tasks endpoint (https://api-house-delta.vercel.app/api/tasks) with mock task data. We're actively working on adding Users, Products, and Posts endpoints. Each endpoint provides realistic JSON data perfect for testing and development.",
      icon: Globe
    },
    {
      question: "Is there a rate limit or usage restrictions?",
      answer: "Our API is designed to be developer-friendly with generous rate limits suitable for development and testing. There are no strict usage restrictions for reasonable use. If you need higher limits for production use, please contact us to discuss your requirements.",
      icon: Zap
    },
    {
      question: "Can I use this API in production applications?",
      answer: "While our API is reliable and fast, it's primarily designed for development, testing, and prototyping. For production use, we recommend implementing proper error handling and considering your specific data requirements. Contact us if you need production-grade guarantees.",
      icon: Code
    },
    {
      question: "How long will this service remain free?",
      answer: "We're committed to keeping our core API service free forever! This is part of our mission to support developers and foster innovation. We may introduce premium features in the future, but the basic API access will always remain free.",
      icon: Clock
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_70%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className={`text-center mb-16 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-800`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-yellow-300 font-medium">Got Questions?</span>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          
         <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
  Everything you need to know about using our API service. Can&apos;t find what you&apos;re looking for? Feel free to reach out!
</p>

        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              icon={faq.icon}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Contact Section */}
        <div className={`text-center mt-16 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-800 delay-600`}>
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
          <p className="text-gray-300 mb-6">
  Our team is here to help! Reach out and we&apos;ll get back to you as soon as possible.
</p>

            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"https://mail.google.com/"} className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg text-white font-medium">
                <HelpCircle className="w-5 h-5" />
                Contact Support
              </Link>
              
              <Link href={"/docs"} className="inline-flex items-center gap-2 bg-gray-700/50 hover:bg-gray-600/50 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-white font-medium border border-gray-600">
                <Code className="w-5 h-5" />
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/3 to-blue-500/3 rounded-full blur-3xl"></div>
    </div>
  );
};

export default FaqComponent;