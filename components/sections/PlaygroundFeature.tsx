import React from 'react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';

export const PlaygroundFeature: React.FC = () => {
  return (
    <Section variant="gradient" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-6 shadow-lg border border-gray-200">
            <span className="text-2xl animate-bounce-gentle">🎯</span>
            <span className="text-sm font-bold text-gray-900">Featured Learning Tool</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Master AI-Augmented Interviews with{' '}
            <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 bg-clip-text text-transparent">
              Interactive Practice
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            Learn what good looks like through real-world scenarios with clear examples of good and bad approaches
          </p>
        </div>

        {/* Image Placeholder - Playground Demo */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-video group hover:scale-[1.02] transition-all duration-300">
            <img
              src="/images/playground-interface.png"
              alt="Screenshot of AI Interview Playground interface with sidebar and comparison view"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <span className="text-3xl">💻</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Coding Challenges</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Algorithms, data structures, async programming, and performance optimization
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-success-600">✓</span>
                LRU Cache implementation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-success-600">✓</span>
                Promise.all vs sequential
              </li>
              <li className="flex items-center gap-2">
                <span className="text-success-600">✓</span>
                React performance tuning
              </li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <span className="text-3xl">🏗️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">System Design</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Distributed systems, ML models, APIs, and scalability patterns
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-success-600">✓</span>
                ML fraud detection systems
              </li>
              <li className="flex items-center gap-2">
                <span className="text-success-600">✓</span>
                Distributed caching layers
              </li>
              <li className="flex items-center gap-2">
                <span className="text-success-600">✓</span>
                RESTful API best practices
              </li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <span className="text-3xl">🐛</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Real Problems</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Debugging, security, communication, and code review scenarios
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-success-600">✓</span>
                SQL query optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-success-600">✓</span>
                Security vulnerabilities
              </li>
              <li className="flex items-center gap-2">
                <span className="text-success-600">✓</span>
                AI-generated code review
              </li>
            </ul>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-16 bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-10 border-2 border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                1
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Read the Scenario</h4>
              <p className="text-gray-600 text-sm">
                Understand the interview question and see what AI suggests
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-600 to-primary-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                2
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Compare Approaches</h4>
              <p className="text-gray-600 text-sm">
                See good vs bad side-by-side with real examples and impact
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-success-600 to-success-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                3
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Remember Key Lessons</h4>
              <p className="text-gray-600 text-sm">
                Take away concrete strategies you can apply immediately
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
