import React from 'react';
import { Brain } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20" />
      </div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        <Brain className="mx-auto h-20 w-20 text-blue-400 mb-8 animate-pulse" />
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          AI-Powered Coding Assistant
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Transform your development workflow with intelligent code completion and real-time suggestions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 transform hover:scale-105">
            Get Started
          </button>
          <button className="px-8 py-4 bg-white/10 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}