import { Rocket, Code, Zap, Shield, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
     
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:50px_50px] animate-pulse"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
       

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm">Trusted by developers & Learner</span>
          </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Build. Test. 
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Learn.
              </span>
            </h1>
            
            {/* <h2 className="text-3xl lg:text-4xl font-semibold text-white/90 mb-6">
              Dummy REST APIs for 
              <span className="text-purple-400"> Free.</span>
            </h2> */}

            <div className="flex items-center justify-center lg:justify-start mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-full mr-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-white/90 font-medium">
                Developer and Learner Friendly REST APIs
              </span>
            </div>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Jumpstart your development journey with ready-to-use, beginner-friendly API endpoints. 
              No signup required. No complexity. Just pure code testing with real-world data structures 
              and comprehensive documentation.
            </p>

            

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             
              <Link href={"/docs"} className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                View Endpoints
              </Link>
            </div>

         
          </div>

          {/* Right Content - Code Preview */}
          <div className="flex-1 w-full max-w-lg">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-2 rounded-lg">
                  <Code className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">GET /api/tasks</div>
                <div className="text-white/80">
                  <span className="text-blue-400">fetch</span>
                  <span className="text-white/60">(</span>
                  <span className="text-orange-400">https://api-house-delta.vercel.app/api/tasks</span>
                  <span className="text-white/60">)</span>
                </div>
                <div className="text-white/80 ml-2">
                  <span className="text-white/60">.</span>
                  <span className="text-blue-400">then</span>
                  <span className="text-white/60">(</span>
                  <span className="text-purple-400">res</span>
                  <span className="text-white/60"></span>
                  <span className="text-purple-400">res</span>
                  <span className="text-white/60">.</span>
                  <span className="text-blue-400">json</span>
                  <span className="text-white/60">())</span>
                </div>
                <div className="text-white/80 ml-2">
                  <span className="text-white/60">.</span>
                  <span className="text-blue-400">then</span>
                  <span className="text-white/60">(</span>
                  <span className="text-purple-400">data</span>
                  <span className="text-white/60"> </span>
                  <span className="text-blue-400">console</span>
                  <span className="text-white/60">.</span>
                  <span className="text-blue-400">log</span>
                  <span className="text-white/60">(</span>
                  <span className="text-purple-400">data</span>
                  <span className="text-white/60">))</span>
                </div>
                
                <div className="mt-4 text-green-400 text-xs">
                  ✓ Response: 200 OK
                </div>
              </div>

              {/* API Features */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-white/80">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-sm">RESTful endpoints</span>
                </div>
                <div className="flex items-center text-white/80">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">JSON responses</span>
                </div>
                <div className="flex items-center text-white/80">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-sm">CORS enabled</span>
                </div>
                <div className="flex items-center text-white/80">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-sm">Rate limiting</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="relative mt-6">
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-lg animate-bounce">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full shadow-lg animate-pulse">
                <Zap className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;