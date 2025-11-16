import React from 'react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';

export const Playground: React.FC = () => {
  return (
    <Section id="playground" variant="default" className="relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary-300/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-success-300/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mb-6 shadow-lg border border-primary-200 hover:scale-105 transition-transform duration-300">
            <span className="text-2xl animate-bounce-gentle">🎓</span>
            <span className="text-sm font-bold text-primary-700">Learn What Good Looks Like</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 bg-clip-text text-transparent">
              Practice?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Jump into our interactive playground and start learning through comprehensive, real-world scenarios
          </p>
        </div>

        {/* Image Placeholder - What You'll Learn */}
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 bg-gradient-to-br from-gray-100 to-gray-200 aspect-video group hover:scale-[1.02] transition-all duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-900/90 to-red-900/90 backdrop-blur-sm">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Example: Good vs Bad Code Review</h3>
              <p className="text-white/90 text-center max-w-2xl text-sm leading-relaxed">
                <strong>Image Prompt:</strong> Split-screen code editor, Left: code with SQL injection highlighted + annotation (✓ green), Right: same code unmarked (✗ red), VS Code dark theme, clear comparison
              </p>
            </div>
          </div>
        </div>

        {/* Quick Preview - Topics Covered */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">💻</div>
            <div className="text-sm font-bold text-gray-900">Coding</div>
            <div className="text-xs text-gray-600 mt-1">Algorithms & Data Structures</div>
          </div>

          <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">🏗️</div>
            <div className="text-sm font-bold text-gray-900">System Design</div>
            <div className="text-xs text-gray-600 mt-1">Architecture & Scale</div>
          </div>

          <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">🤖</div>
            <div className="text-sm font-bold text-gray-900">ML Systems</div>
            <div className="text-xs text-gray-600 mt-1">Models & Production</div>
          </div>

          <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">🐛</div>
            <div className="text-sm font-bold text-gray-900">Debugging</div>
            <div className="text-xs text-gray-600 mt-1">Real Production Issues</div>
          </div>
        </div>

        {/* Single CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button
            size="lg"
            href="/playground"
            className="text-lg group"
          >
            <span className="text-2xl mr-3">🚀</span>
            Launch Playground
            <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </div>
    </Section>
  );
};
