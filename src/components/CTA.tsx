import React from 'react';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <Rocket className="mx-auto h-16 w-16 text-blue-400 mb-8" />
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Ready to Transform Your Development Workflow?
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Join thousands of developers who are already coding smarter, not harder.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 transform hover:scale-105">
          Start Coding Now
        </button>
      </div>
    </section>
  );
}