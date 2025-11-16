'use client';

import React, { useState } from 'react';
import {
  playgroundScenarios,
  playgroundRoles,
  playgroundTypes,
} from '@/lib/data/playground';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const PlaygroundStepper: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedRole, setSelectedRole] = useState<'candidate' | 'interviewer' | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedScenario, setSelectedScenario] = useState<number>(0);

  const currentScenarios = playgroundScenarios.filter(
    (s) => s.role === selectedRole && s.type === selectedType
  );

  const currentScenario = currentScenarios[selectedScenario];

  const resetPlayground = () => {
    setStep(1);
    setSelectedRole(null);
    setSelectedType(null);
    setSelectedScenario(0);
  };

  const progressPercentage = (step / 3) * 100;

  return (
    <div className="space-y-8">
      {/* Modern Progress Indicator */}
      <div className="relative">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 flex-1 max-w-2xl">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-3 flex-1">
                <div className="relative group">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-500 transform ${
                      step >= s
                        ? 'bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 text-white shadow-lg scale-110 animate-pulse-slow'
                        : step === s - 1
                        ? 'bg-gradient-to-br from-primary-100 to-accent-100 text-primary-700 shadow-md scale-105'
                        : 'bg-white text-gray-400 shadow border-2 border-gray-200'
                    }`}
                  >
                    {step > s ? (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      s
                    )}
                  </div>
                  {step >= s && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-600 opacity-50 blur-xl animate-pulse-slow" />
                  )}
                </div>
                {s < 3 && (
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${
                        step > s
                          ? 'w-full bg-gradient-to-r from-primary-500 to-accent-600'
                          : 'w-0'
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={resetPlayground}
            className="ml-6 hover:scale-105 transition-transform"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset
          </Button>
        </div>
      </div>

      {step === 1 && (
        <div className="animate-slide-up">
          <div className="glass-effect rounded-3xl p-8 shadow-2xl border border-white/40">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-600 text-white mb-4 animate-bounce-gentle">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-3">
                Choose Your Role
              </h3>
              <p className="text-gray-600 text-lg">
                Are you practicing as a candidate or learning to evaluate as an interviewer?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {playgroundRoles.map((role, idx) => (
                <button
                  key={role.value}
                  onClick={() => {
                    setSelectedRole(role.value);
                    setStep(2);
                  }}
                  className="group relative p-8 text-left bg-white rounded-2xl border-2 border-transparent hover:border-primary-500 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 group-hover:from-primary-500 group-hover:to-accent-600 flex items-center justify-center transition-all duration-300">
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {role.value === 'candidate' ? '👤' : '🎯'}
                        </span>
                      </div>
                      <h4 className="font-bold text-xl text-gray-900 group-hover:text-primary-600 transition-colors">
                        {role.label}
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-slide-up">
          <div className="glass-effect rounded-3xl p-8 shadow-2xl border border-white/40">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-primary-600 text-white mb-4 animate-bounce-gentle">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mb-3">
                Choose Assessment Type
              </h3>
              <p className="text-gray-600 text-lg">
                Select the type of technical assessment scenario you want to explore
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {playgroundTypes.map((type, idx) => (
                <button
                  key={type.value}
                  onClick={() => {
                    setSelectedType(type.value);
                    setStep(3);
                  }}
                  className="group relative p-6 text-center bg-white rounded-2xl border-2 border-transparent hover:border-accent-500 transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 overflow-hidden"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-white to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {type.value === 'coding' ? '💻' :
                       type.value === 'system-design' ? '🏗️' :
                       type.value === 'ml' ? '🤖' : '🐛'}
                    </div>
                    <span className="font-bold text-gray-900 group-hover:text-accent-600 transition-colors">
                      {type.label}
                    </span>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 3 && currentScenario && (
        <div className="space-y-6 animate-slide-up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 p-8 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-600/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Badge
                  variant="primary"
                  className="bg-white/90 text-primary-700 font-bold px-4 py-2 text-sm backdrop-blur-sm"
                >
                  {selectedRole}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/90 text-accent-700 font-bold px-4 py-2 text-sm backdrop-blur-sm"
                >
                  {selectedType}
                </Badge>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                {currentScenario.title}
              </h3>
              <p className="text-white/95 text-lg leading-relaxed mb-6 drop-shadow">
                {currentScenario.context}
              </p>
              {currentScenario.problem && (
                <div className="glass-effect rounded-2xl p-6 border-l-4 border-white">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Scenario Challenge:
                  </h4>
                  <p className="text-white/95 leading-relaxed">
                    {currentScenario.problem}
                  </p>
                </div>
              )}
            </div>
          </div>

          {currentScenario.candidatePrompt && currentScenario.aiResponse && (
            <div className="glass-effect rounded-3xl p-8 shadow-2xl border border-white/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  Example AI Interaction
                </h4>
              </div>
              <div className="space-y-5">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300" />
                  <div className="relative p-6 bg-gradient-to-br from-blue-50 to-primary-50 border-2 border-primary-200 rounded-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">👤</span>
                      <div className="text-xs font-bold text-primary-700 uppercase tracking-wider">
                        Candidate Prompt to AI
                      </div>
                    </div>
                    <p className="text-gray-800 leading-relaxed">
                      {currentScenario.candidatePrompt}
                    </p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300" />
                  <div className="relative p-6 bg-gradient-to-br from-purple-50 to-accent-50 border-2 border-accent-200 rounded-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">✨</span>
                      <div className="text-xs font-bold text-accent-700 uppercase tracking-wider">
                        AI Response
                      </div>
                    </div>
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono leading-relaxed">
                      {currentScenario.aiResponse}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedRole === 'candidate' && currentScenario.candidateGuidance && (
            <div className="glass-effect rounded-3xl p-8 shadow-2xl border border-white/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success-500 to-success-600 flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  Guidance for Candidates
                </h4>
              </div>
              <ul className="space-y-4">
                {currentScenario.candidateGuidance.map((guide, idx) => (
                  <li
                    key={idx}
                    className={`group relative flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                      guide.startsWith('✅')
                        ? 'bg-gradient-to-br from-green-50 to-success-100 border-2 border-success-300'
                        : 'bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300'
                    }`}
                  >
                    <span className="text-lg flex-shrink-0">
                      {guide.startsWith('✅') ? '✅' : '❌'}
                    </span>
                    <span className="text-gray-800 leading-relaxed flex-1">
                      {guide.replace(/^[✅❌]\s*/, '')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedRole === 'interviewer' &&
            currentScenario.interviewerGuidance && (
              <div className="glass-effect rounded-3xl p-8 shadow-2xl border border-white/40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    Guidance for Interviewers
                  </h4>
                </div>
                <ul className="space-y-4">
                  {currentScenario.interviewerGuidance.map((guide, idx) => (
                    <li
                      key={idx}
                      className={`group relative flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                        guide.startsWith('✅')
                          ? 'bg-gradient-to-br from-green-50 to-success-100 border-2 border-success-300'
                          : guide.startsWith('❌')
                          ? 'bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300'
                          : 'bg-gradient-to-br from-blue-50 to-primary-100 border-2 border-primary-300'
                      }`}
                    >
                      <span className="text-lg flex-shrink-0">
                        {guide.startsWith('✅') ? '✅' : guide.startsWith('❌') ? '❌' : '💡'}
                      </span>
                      <span className="text-gray-800 leading-relaxed flex-1">
                        {guide.replace(/^[✅❌💡]\s*/, '')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {currentScenarios.length > 1 && (
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                onClick={() =>
                  setSelectedScenario(
                    (selectedScenario - 1 + currentScenarios.length) %
                      currentScenarios.length
                  )
                }
                className="group hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous Scenario
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  setSelectedScenario(
                    (selectedScenario + 1) % currentScenarios.length
                  )
                }
                className="group hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Next Scenario
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
