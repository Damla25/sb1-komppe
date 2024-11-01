import React from 'react';
import { Check, Zap } from 'lucide-react';

const packages = [
  {
    name: 'Starter',
    price: '$9',
    description: 'Perfect for individual developers',
    features: [
      'Basic AI code completion',
      'Single language support',
      'Standard response time',
      'Community support',
      '5 projects'
    ],
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Ideal for professional developers',
    features: [
      'Advanced AI completion',
      'Multi-language support',
      'Fast response time',
      'Priority support',
      'Unlimited projects',
      'Custom snippets',
      'Team collaboration'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large development teams',
    features: [
      'Custom AI model training',
      'All Pro features',
      'Dedicated support',
      'Custom integrations',
      'Advanced analytics',
      'SLA guarantee',
      'Team training'
    ],
    highlighted: false
  }
];

const Packages = () => {
  return (
    <section id="packages" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 text-lg">
            Select the perfect package for your development needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden ${
                pkg.highlighted
                  ? 'bg-gradient-to-b from-blue-500/20 to-purple-600/20 border-2 border-blue-400/50 transform scale-105'
                  : 'bg-gradient-to-b from-white/5 to-white/10'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-400 to-purple-400 text-white text-sm font-semibold px-4 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  {pkg.price !== 'Custom' && <span className="text-gray-400 ml-2">/month</span>}
                </div>
                <p className="text-gray-400 mb-6">{pkg.description}</p>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </button>
                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;