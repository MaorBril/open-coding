import React from 'react';
import { Section } from '../layout/Section';

export const ForWho: React.FC = () => {
  return (
    <Section id="for-who" variant="default" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Who Is This For?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Whether you're interviewing or conducting interviews, we've got you covered
          </p>

          {/* Image Placeholder - Problem Statement */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-video group hover:scale-[1.02] transition-all duration-300">
              <img
                src="/images/interview-challenge.png"
                alt="Split screen comparison of good vs bad AI usage in interviews"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* For Candidates */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-primary-50 rounded-3xl p-10 border-2 border-primary-200 hover:border-primary-400 transition-all duration-300 hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-4xl">👤</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">For Candidates</h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Master the art of using AI tools effectively during technical interviews
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-success-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-800 leading-relaxed">
                    <strong className="text-gray-900">Learn what works:</strong> See exact examples of good approaches to common interview questions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-success-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-800 leading-relaxed">
                    <strong className="text-gray-900">Avoid pitfalls:</strong> Understand common mistakes that make you look bad even with AI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-success-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-800 leading-relaxed">
                    <strong className="text-gray-900">Build confidence:</strong> Practice with realistic scenarios before the real interview
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-success-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-800 leading-relaxed">
                    <strong className="text-gray-900">Use AI ethically:</strong> Learn to communicate transparently about AI usage
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* For Interviewers */}
          <div className="group relative bg-gradient-to-br from-purple-50 to-accent-50 rounded-3xl p-10 border-2 border-accent-200 hover:border-accent-400 transition-all duration-300 hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-4xl">🎯</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">For Interviewers</h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Assess candidates fairly in the AI era while maintaining signal quality
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-success-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-800 leading-relaxed">
                    <strong className="text-gray-900">Ask better questions:</strong> Focus on understanding and judgment, not memorization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-success-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-800 leading-relaxed">
                    <strong className="text-gray-900">Spot red flags:</strong> Identify when candidates don't understand AI-generated code
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-success-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-800 leading-relaxed">
                    <strong className="text-gray-900">Design fair assessments:</strong> Create AI-aware interviews that test real skills
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-success-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-800 leading-relaxed">
                    <strong className="text-gray-900">Set clear policies:</strong> Learn how to communicate AI guidelines effectively
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
