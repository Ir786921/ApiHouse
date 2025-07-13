"use client"
import React, { useState, useEffect } from 'react';
import { 
  Copy, 
  Check, 
  Terminal, 
  Code, 
  Zap, 
  Play,
  ChevronRight,
  Globe,
  Database,
  Users,
  CheckSquare,
  Package
} from 'lucide-react';
import Link from 'next/link';

const CodeBlock = ({ title, code, language, icon: Icon, delay = 0 }) => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div 
      className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-800/50 border-b border-gray-700/50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
            <Icon className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">{title}</h3>
            <p className="text-gray-400 text-xs uppercase tracking-wide">{language}</p>
          </div>
        </div>
        
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-200 group/btn"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400 group-hover/btn:text-white" />
          )}
          <span className="text-xs text-gray-400 group-hover/btn:text-white">
            {copied ? 'Copied!' : 'Copy'}
          </span>
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm leading-relaxed">
          <code className={`language-${language} text-gray-300`}>
            {code}
          </code>
        </pre>
      </div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

const EndpointCard = ({ title, url, method, icon: Icon, description, available = true, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all duration-300 ${
        available ? 'hover:bg-white/10 hover:scale-105' : 'opacity-60'
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {!available && (
        <div className="absolute top-2 right-2 px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full">
          Coming Soon
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg ${available ? 'bg-gradient-to-br from-purple-500 to-blue-500' : 'bg-gray-600'}`}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div>
          <h4 className="text-white font-medium text-sm">{title}</h4>
          <p className="text-gray-400 text-xs">{description}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-2">
        <span className={`px-2 py-1 text-xs font-mono rounded ${
          available ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-500'
        }`}>
          {method}
        </span>
        <code className={`text-xs font-mono ${available ? 'text-gray-300' : 'text-gray-500'}`}>
          {url}
        </code>
      </div>
    </div>
  );
};

const ApiUsageExamples = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const codeExamples = [

    {
      title: "JavaScript / Async/Await",
      language: "javascript",
      icon: Zap,
      code: `// Modern async approach
async function getTasks() {
  try {
    const response = await fetch("https://api-house-delta.vercel.app/tasks");
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

// Get specific task
async function getTask(id) {
  try {
    const response = await fetch(\`https://api-house-delta.vercel.app/tasks/\${id}\`);
    const task = await response.json();
    return task;
  } catch (error) {
    console.error("Error fetching task:", error);
  }
}

// Usage
const tasks = await getTasks();
const task = await getTask(1);`
    },
    {
      title: "React Hook",
      language: "javascript",
      icon: Play,
      code: `import { useState, useEffect } from 'react';

function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("https://api-house-delta.vercel.app/tasks");
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);
}`
    }
  ];

  const endpoints = [
    {
      title: "Tasks",
      url: "https://api-house-delta.vercel.app/tasks",
      method: "GET",
      icon: CheckSquare,
      description: "Get all tasks or specific task by ID",
      available: true
    },
    {
      title: "Users",
      url: "https://api-house-delta.vercel.app/users",
      method: "GET",
      icon: Users,
      description: "Coming soon - User data endpoints",
      available: false
    },
    {
      title: "Products",
      url: "https://api-house-delta.vercel.app/products",
      method: "GET",
      icon: Package,
      description: "Coming soon - Product data endpoints",
      available: false
    },
    {
      title: "Posts",
      url: "https://api-house-delta.vercel.app/posts",
      method: "GET",
      icon: Database,
      description: "Coming soon - Post data endpoints",
      available: false
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-purple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className={`text-center mb-16 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-800`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
            <Code className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-yellow-300 font-medium">Quick Integration</span>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Code Snippets & Usage Examples
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get started in seconds with these ready-to-use code examples. Copy, paste, and start building!
          </p>
        </div>

        {/* Available Endpoints */}
        <div className={`mb-16 w-5xl mx-auto ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-800 delay-300`}>
          <h3 className="text-2xl justify-center font-bold text-white mb-8 flex items-center gap-3">
            <Globe className="w-6 h-6 text-purple-400" />
            Available Endpoints
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {endpoints.map((endpoint, index) => (
              <EndpointCard
                key={index}
                title={endpoint.title}
                url={endpoint.url}
                method={endpoint.method}
                icon={endpoint.icon}
                description={endpoint.description}
                available={endpoint.available}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Code Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {codeExamples.map((example, index) => (
            <CodeBlock
              key={index}
              title={example.title}
              code={example.code}
              language={example.language}
              icon={example.icon}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Try It Out Section */}
        <div className={`text-center mt-16 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-800 delay-1000`}>
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Try It Live!</h3>
            <p className="text-gray-300 mb-6">
              Test our API directly in your browser. No setup required!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"https://www.google.com/"} className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg text-white font-medium">
                <Play className="w-5 h-5" />
                Open in Browser
              </Link>
              
             
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </div>
  );
};

export default ApiUsageExamples;