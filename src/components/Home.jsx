import React from 'react';
import { FileText, Lock, Image, Zap, Users, Shield } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Lock,
      title: "Secure Authentication",
      description: "Built-in user authentication with role-based access control powered by Appwrite"
    },
    {
      icon: FileText,
      title: "Rich Text Editing",
      description: "TinyMCE editor integration for creating beautiful, formatted content"
    },
    {
      icon: Image,
      title: "Image Uploads",
      description: "Seamless image upload and management directly in your posts"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with Vite for optimal performance and instant hot reload"
    },
    {
      icon: Users,
      title: "Content Management",
      description: "Comprehensive CMS with Redux Toolkit for state management"
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description: "Fine-grained permissions and access control for different user roles"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-pink-950/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-800/50 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2 text-blue-400" />
                Modern Blogging Platform
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Welcome to PostFeed
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              A powerful, modern blogging platform built with React, Redux, and Appwrite. 
              Create, manage, and share your content with ease.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-900/50">
                Get Started
              </button>
              <button className="px-8 py-4 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm">
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build and manage a modern blogging platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 to-purple-950/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-100 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-800 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              Built With Modern Technologies
            </h2>
            <p className="text-xl text-gray-400">
              Leveraging the best tools for optimal performance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'Redux Toolkit', 'Appwrite', 'TinyMCE', 'Tailwind CSS', 'Vite', 'JavaScript', 'Git'].map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-600 transition-all hover:transform hover:scale-105"
              >
                <span className="text-lg font-semibold text-gray-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-purple-950 to-pink-950 rounded-3xl p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQyIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAgMCBMIDAgMCAwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkMikiLz48L3N2Zz4=')] opacity-30" />
          
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Blogging?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join PostFeed today and experience the future of content management
            </p>
            <button className="px-10 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
              Launch Platform
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-500">
            <p className="text-sm">
              © 2024 PostFeed. Built with React, Redux Toolkit, and Appwrite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}