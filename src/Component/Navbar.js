"use client"
import { Home, FileText, Github, Menu, X, Zap, Code } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-100 sticky top-0 z-50">
    
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-white to-indigo-50 opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href={"/"} className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Home className="w-6 h-6 text-white" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <Code className="w-2 h-2 text-white" />
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                API House
              </h1>
              <div className="text-xs text-gray-500 -mt-1">Free REST APIs</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/docs" 
              className="group flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 relative"
            >
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-2 rounded-lg group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-200">
                <FileText className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-medium">Documentation</span>
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            <Link 
              href="https://github.com/Ir786921/ApiHouse" 
              className="group flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 relative"
            >
              <div className="bg-gradient-to-r from-gray-100 to-slate-100 p-2 rounded-lg group-hover:from-gray-200 group-hover:to-slate-200 transition-all duration-200">
                <Github className="w-4 h-4 text-gray-600" />
              </div>
              <span className="font-medium">GitHub</span>
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-full transition-all duration-300"></div>
            </Link>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 border border-purple-100">
              <a
                href="/docs"
                className="group flex items-center space-x-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-lg transition-all duration-200"
              >
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-2 rounded-lg">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <span className="font-medium">Documentation</span>
              </a>
              
              <a
                href="https://github.com"
                className="group flex items-center space-x-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-lg transition-all duration-200"
              >
                <div className="bg-gradient-to-r from-gray-100 to-slate-100 p-2 rounded-lg">
                  <Github className="w-4 h-4 text-gray-600" />
                </div>
                <span className="font-medium">GitHub</span>
              </a>

              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-700 font-medium">API Online</span>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-1 rounded-lg font-medium text-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>
    </nav>
  );
};

export default Navbar;