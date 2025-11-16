import React from 'react';
import { Section } from '../layout/Section';

export const Stats: React.FC = () => {
  return (
    <Section variant="default" className="py-20">
      <div className="max-w-6xl mx-auto">
        {/* Image Placeholder - The Reality */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 bg-gradient-to-br from-gray-100 to-gray-200 aspect-video group hover:scale-[1.02] transition-all duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary-900/90 to-accent-900/90 backdrop-blur-sm">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The AI Interview Reality</h3>
              <p className="text-white/90 text-center max-w-2xl text-sm leading-relaxed">
                <strong>Image Prompt:</strong> Developer at dual monitor setup, GitHub Copilot autocompleting code on left screen, ChatGPT open on right screen, thoughtfully reviewing AI suggestions, modern office, natural lighting
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">
              82%
            </div>
            <p className="text-gray-600 font-medium">
              of developers use AI tools daily
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mb-2">
              27
            </div>
            <p className="text-gray-600 font-medium">
              real-world scenarios to practice
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-success-600 to-success-700 bg-clip-text text-transparent mb-2">
              48%
            </div>
            <p className="text-gray-600 font-medium">
              less anxiety with clear expectations
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-gray-600 font-medium">
              free and open for everyone
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
