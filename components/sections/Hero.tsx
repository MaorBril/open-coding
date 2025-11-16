import React from 'react';
import { Button } from '../ui/Button';
import { Section } from '../layout/Section';

export const Hero: React.FC = () => {
  return (
    <Section id="overview" variant="gradient" className="pt-32 pb-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 right-20 w-64 h-64 bg-success-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-bold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-primary-200">
          <span className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse shadow-lg"></span>
          82% of developers use AI tools daily - are you ready?
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 animate-slide-up leading-[1.1]">
          Master{' '}
          <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 bg-clip-text text-transparent drop-shadow-sm">
            AI-Augmented
          </span>
          <br />
          Interviews
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-medium" style={{ animationDelay: '0.1s' }}>
          Learn what separates great candidates from those who just copy-paste AI code.
          Practice with <span className="text-primary-600 font-bold">comprehensive scenarios</span> showing good vs bad approaches.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button href="#for-who" variant="outline" size="lg" className="text-lg">
            See How It Works
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        </div>

        {/* Quick value props */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2">
            <span className="text-success-600 text-lg">✓</span>
            <span className="font-medium">100% Free</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success-600 text-lg">✓</span>
            <span className="font-medium">Real Scenarios</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success-600 text-lg">✓</span>
            <span className="font-medium">Good vs Bad Examples</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success-600 text-lg">✓</span>
            <span className="font-medium">For Candidates & Interviewers</span>
          </div>
        </div>

      </div>
    </Section>
  );
};
