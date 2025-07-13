
"use client"
import React, { useState } from 'react';
import { 
  Book, 
  Users, 

  Copy,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Play,
  Check,
  AlertCircle
} from 'lucide-react';

const APIDocumentation = () => {
  const [activeAPI, setActiveAPI] = useState('tasks');
  const [activeEndpoint, setActiveEndpoint] = useState('get-all');
  const [copiedCode, setCopiedCode] = useState('');

  const apiCategories = [
    {
      id: 'tasks',
      name: 'Task Management Apis',
      icon: Users,
      description: 'Manage Your Task and Work',
      endpoints: ['get-all', 'get-by-id', 'get-by-query', 'post', 'patch', 'put', 'delete']
    }
  
  ];

  const endpoints = {
    'get-all': {
      method: 'GET',
      title: 'Get All Tasks',
      description: 'Retrieve all tasks from the collection with optional pagination',
      url: `https://api-house-delta.vercel.app/${activeAPI}`,
      queryParams: ['status','priority'],
      response: {
        status: 200,
        data: `[
  {
            "_id": "686e56ea191d68ccdd834dee",
            "id": 1,
            "name": "Learn Next.js API Routes",
            "description": "Understand how to create and connect REST API routes using App Router in Next.js",
            "status": "incomplete",
            "priority": "high",
            "createdAt": "2025-07-09T11:47:54.693Z",
            "updatedAt": "2025-07-09T11:47:54.693Z",
            "__v": 0
        },
        {
            "_id": "686e573f191d68ccdd834df1",
            "id": 2,
            "name": "Buy groceries",
            "description": "Purchase vegetables, fruits, milk, and bread from the local supermarket.",
            "status": "incomplete",
            "priority": "high",
            "createdAt": "2025-07-09T11:49:19.954Z",
            "updatedAt": "2025-07-09T11:49:19.954Z",
            "__v": 0
        }
]`
      }
    },
    'get-by-id': {
      method: 'GET',
      title: 'Get Tasks by ID',
      description: 'Retrieve a specific tasks by its unique identifier',
      url: `https://api-house-delta.vercel.app/${activeAPI}/{id}`,
      pathParams: ['id'],
      response: {
        status: 200,
        data: `{
  
            "_id": "686e56ea191d68ccdd834dee",
            "id": 1,
            "name": "Learn Next.js API Routes",
            "description": "Understand how to create and connect REST API routes using App Router in Next.js",
            "status": "incomplete",
            "priority": "high",
            "createdAt": "2025-07-09T11:47:54.693Z",
            "updatedAt": "2025-07-09T11:47:54.693Z",
            "__v": 0
}
        `
      }
    },
    'get-by-query': {
      method: 'GET',
      title: 'Get Tasks by Query',
      description: 'Search and filter Tasks using query parameters',
      url: `https://api-house-delta.vercel.app/${activeAPI}?status=compleated&priority=high`,
      queryParams: ['status','priority'],
      response: {
        status: 200,
        data: `{
  "results": [
    {
            "_id": "686e56ea191d68ccdd834dee",
            "id": 1,
            "name": "Learn Next.js API Routes",
            "description": "Understand how to create and connect REST API routes using App Router in Next.js",
            "status": "incomplete",
            "priority": "high",
            "createdAt": "2025-07-09T11:47:54.693Z",
            "updatedAt": "2025-07-09T11:47:54.693Z",
            "__v": 0
        }
  ],
  "status": compleated,
  "priority": high,
  
}`
      }
    },
    'post': {
      method: 'POST',
      title: 'Create New Tasks',
      description: 'Create a new Tasks in the collection',
      url: `https://api-house-delta.vercel.app/${activeAPI}`,
      requestBody: `  {
    "id": 10,
    "name": "Prepare dinner",
    "description": "Cook a healthy meal for the family including rice, vegetables, and salad.",
    "status": "incomplete",
    "priority": "high"
  }`,
      response: {
        status: 201,
        data: ` {
            "_id": "686e56ea191d68ccdd834dee",
            "id": 1,
            "name": "Learn Next.js API Routes",
            "description": "Understand how to create and connect REST API routes using App Router in Next.js",
            "status": "incomplete",
            "priority": "high",
            "createdAt": "2025-07-09T11:47:54.693Z",
            "updatedAt": "2025-07-09T11:47:54.693Z",
            "__v": 0
 }`
      }
    },
    'patch': {
      method: 'PATCH',
      title: 'Partially Update Tasks',
      description: 'Update specific fields of an existing Tasks',
      url: `https://api-house-delta.vercel.app/${activeAPI}/{id}`,
      pathParams: ['id'],
      requestBody: `{
    "status": "incomplete",
    "priority": "high"
}`,
      response: {
        status: 200,
        data: `    {
            "_id": "686e56ea191d68ccdd834dee",
            "id": 1,
            "name": "Learn Next.js API Routes",
            "description": "Understand how to create and connect REST API routes using App Router in Next.js",
            "status": "incomplete",
            "priority": "high",
            "createdAt": "2025-07-09T11:47:54.693Z",
            "updatedAt": "2025-07-09T11:47:54.693Z",
            "__v": 0
    }`
      }
    },
    'put': {
      method: 'PUT',
      title: 'Replace Taks',
      description: 'Replace an entire Tasks with new data',
      url: `https://api-house-delta.vercel.app/${activeAPI}/{id}`,
      pathParams: ['id'],
      requestBody: `{
            "id": 2,
            "name": "Go For bike Ride",
            "description": "Understand how to create and connect REST API routes using App Router in Next.js",
            "status": "incomplete",
            "priority": "high",
}`,
      response: {
        status: 200,
        data: `    {
            "_id": "686e56ea191d68ccdd834dee",
            "id": 2,
            "name": "Go For bike Ride",
            "description": "Understand how to create and connect REST API routes using App Router in Next.js",
            "status": "incomplete",
            "priority": "high",
            "createdAt": "2025-07-09T11:47:54.693Z",
            "updatedAt": "2025-07-09T11:47:54.693Z",
            "__v": 0
    }`
      }
    },
    'delete': {
      method: 'DELETE',
      title: 'Delete Tasks',
      description: 'Remove an Tasks from the collection',
      url: `https://api-house-delta.vercel.app/${activeAPI}/{id}`,
      pathParams: ['id'],
      response: {
        status: 204,
        data: `// No content returned`
      }
    }
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const getMethodColor = (method) => {
    const colors = {
      GET: 'bg-green-100 text-green-800 border-green-200',
      POST: 'bg-blue-100 text-blue-800 border-blue-200',
      PATCH: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      PUT: 'bg-orange-100 text-orange-800 border-orange-200',
      DELETE: 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[method] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const currentEndpoint = endpoints[activeEndpoint];

  return (
    <div className="min-h-screen bg-gray-50">
     


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">API Collections</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {apiCategories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeAPI === category.id;
                  
                  return (
                    <div key={category.id} className="relative">
                      <button
                        onClick={() => setActiveAPI(category.id)}
                        className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                          isActive ? 'bg-purple-50 border-r-2 border-purple-500' : ''
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            isActive 
                              ? 'bg-purple-100 text-purple-600' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{category.name}</h3>
                            <p className="text-sm text-gray-500">{category.description}</p>
                          </div>
                          {isActive ? (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                      </button>
                      
                      {isActive && (
                        <div className="bg-gray-50 border-t border-gray-200">
                          {category.endpoints.map((endpoint) => (
                            <button
                              key={endpoint}
                              onClick={() => setActiveEndpoint(endpoint)}
                              className={`w-full p-3 text-left hover:bg-gray-100 transition-colors ${
                                activeEndpoint === endpoint ? 'bg-white shadow-sm' : ''
                              }`}
                            >
                              <div className="flex items-center space-x-3 ml-12">
                                <span className={`px-2 py-1 text-xs font-medium rounded border ${
                                  getMethodColor(endpoints[endpoint].method)
                                }`}>
                                  {endpoints[endpoint].method}
                                </span>
                                <span className="text-sm text-gray-700">{endpoints[endpoint].title}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {/* Endpoint Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 text-sm font-medium rounded-lg border ${
                      getMethodColor(currentEndpoint.method)
                    }`}>
                      {currentEndpoint.method}
                    </span>
                    <h1 className="text-2xl font-bold text-gray-900">{currentEndpoint.title}</h1>
                  </div>
                
                </div>
                <p className="text-gray-600 mb-4">{currentEndpoint.description}</p>
                
                {/* URL */}
                <div className="bg-gray-50 rounded-lg p-4 bg-gray-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 ">
                      <span className="text-sm font-medium text-gray-500">URL:</span>
                      <code className="text-sm font-mono text-gray-900">{currentEndpoint.url}</code>
                    </div>
                    <button
                      onClick={() => copyToClipboard(currentEndpoint.url, 'url')}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {copiedCode === 'url' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Parameters */}
              <div className="p-6 space-y-6">
                {currentEndpoint.pathParams && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Path Parameters</h3>
                    <div className="bg-gray-300 rounded-lg p-4">
                      {currentEndpoint.pathParams.map((param) => (
                        <div key={param} className="flex items-center space-x-3 mb-2 last:mb-0">
                          <span className="px-2 py-1 bg-orange-100 text-orange-800 text-sm font-mono rounded">
                            {param}
                          </span>
                          <span className="text-sm text-gray-600">Required path parameter</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentEndpoint.queryParams && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Query Parameters</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      {currentEndpoint.queryParams.map((param) => (
                        <div key={param} className="flex items-center space-x-3 mb-2 last:mb-0">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm font-mono rounded">
                            {param}
                          </span>
                          <span className="text-sm text-gray-600">Optional query parameter</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentEndpoint.requestBody && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Request Body</h3>
                    <div className="bg-gray-900 rounded-lg p-4 relative">
                      <button
                        onClick={() => copyToClipboard(currentEndpoint.requestBody, 'request')}
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 transition-colors"
                      >
                        {copiedCode === 'request' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{currentEndpoint.requestBody}</code>
                      </pre>
                    </div>
                  </div>
                )}

                {/* Code Examples */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Code Examples</h3>
                  <div className="space-y-4">
                    {/* JavaScript Example */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">JavaScript (Fetch)</h4>
                      <div className="bg-gray-900 rounded-lg p-4 relative">
                        <button
                          onClick={() => copyToClipboard(generateJSCode(), 'js')}
                          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 transition-colors"
                        >
                          {copiedCode === 'js' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                        <pre className="text-sm text-gray-300 overflow-x-auto">
                          <code>{generateJSCode()}</code>
                        </pre>
                      </div>
                    </div>

                    {/* cURL Example */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">cURL</h4>
                      <div className="bg-gray-900 rounded-lg p-4 relative">
                        <button
                          onClick={() => copyToClipboard(generateCurlCode(), 'curl')}
                          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 transition-colors"
                        >
                          {copiedCode === 'curl' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                        <pre className="text-sm text-gray-300 overflow-x-auto">
                          <code>{generateCurlCode()}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Response</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-500">Status Code:</span>
                      <span className={`px-2 py-1 text-sm font-medium rounded ${
                        currentEndpoint.response.status < 300 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {currentEndpoint.response.status}
                      </span>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 relative">
                      <button
                        onClick={() => copyToClipboard(currentEndpoint.response.data, 'response')}
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 transition-colors"
                      >
                        {copiedCode === 'response' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{currentEndpoint.response.data}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Error Responses */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Error Responses</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-medium text-red-800">400 Bad Request</span>
                      </div>
                      <p className="text-sm text-red-700">Invalid request parameters or body</p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm font-medium text-yellow-800">404 Not Found</span>
                      </div>
                      <p className="text-sm text-yellow-700">Resource not found</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-medium text-red-800">500 Internal Server Error</span>
                      </div>
                      <p className="text-sm text-red-700">Server error occurred</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function generateJSCode() {
    const { method, url, requestBody } = currentEndpoint;
    const baseCode = `fetch('${url}'${method === 'GET' ? '' : `, {
  method: '${method}',
  headers: {
    'Content-Type': 'application/json',
  },${requestBody ? `
  body: JSON.stringify(${requestBody})` : ''}
}`})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`;
    
    return baseCode;
  }

  function generateCurlCode() {
    const { method, url, requestBody } = currentEndpoint;
    let curlCode = `curl -X ${method} '${url}'`;
    
    if (requestBody) {
      curlCode += ` \\
  -H 'Content-Type: application/json' \\
  -d '${requestBody.replace(/\n/g, '').replace(/\s+/g, ' ')}'`;
    }
    
    return curlCode;
  }
};

export default APIDocumentation;