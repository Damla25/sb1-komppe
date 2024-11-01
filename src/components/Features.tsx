import React from 'react';
import { Zap, Code2, Brain, Rocket } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Real-time code suggestions with minimal latency'
  },
  {
    icon: Code2,
    title: 'Multi-Language Support',
    description: 'Works with all major programming languages and frameworks'
  },
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Advanced machine learning for context-aware completions'
  },
  {
    icon: Rocket,
    title: 'Boost Productivity',
    description: 'Write better code faster with intelligent assistance'
  }
];

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to accelerate your development workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-200 transform hover:scale-105"
              >
                <Icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}