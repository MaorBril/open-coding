import React from 'react';
import { Section } from '../layout/Section';

export const Stats: React.FC = () => {
  return (
    <Section variant="default" className="py-20">
      <div className="max-w-6xl mx-auto">
        {/* Image Placeholder - The Reality */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-video group hover:scale-[1.02] transition-all duration-300">
            <img
              src="/images/ai-reality.png"
              alt="Software developer using GitHub Copilot and ChatGPT at modern workspace"
              className="w-full h-full object-cover"
            />
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
