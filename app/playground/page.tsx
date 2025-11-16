'use client';

import React, { useState } from 'react';
import { playgroundQuestions, questionCategories, roleTags, type PlaygroundQuestion, type ApproachExample } from '@/lib/data/playgroundQuestions';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function PlaygroundApp() {
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set());

  const filteredQuestions = playgroundQuestions.filter(q => {
    const roleMatch = selectedRole === 'all' || q.role === selectedRole || q.role === 'both';
    const categoryMatch = selectedCategory === 'all' || q.category === selectedCategory;
    return roleMatch && categoryMatch;
  });

  const currentQuestion = filteredQuestions[currentQuestionIndex] || playgroundQuestions[0];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'success';
      case 'intermediate': return 'warning';
      case 'advanced': return 'secondary';
      default: return 'neutral';
    }
  };

  const getCategoryIcon = (category: string) => {
    const cat = questionCategories.find(c => c.value === category);
    return cat?.icon || '📚';
  };

  const markComplete = () => {
    const newCompleted = new Set(completedQuestions);
    newCompleted.add(currentQuestion.id);
    setCompletedQuestions(newCompleted);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      {/* App Header */}
      <div className="sticky top-0 z-50 h-16 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="h-full max-w-[1800px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <a href="/#playground" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🎓</span>
              <h1 className="text-xl font-black text-gray-900 hidden sm:block">
                AI Interview Playground
              </h1>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-success-50 rounded-xl border border-success-200">
              <svg className="w-5 h-5 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold text-success-700">
                {completedQuestions.size} / {filteredQuestions.length}
              </span>
            </div>
            <a
              href="/#playground"
              className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Exit
            </a>
          </div>
        </div>
      </div>

      <div className="flex max-w-[1800px] mx-auto">
        {/* Sidebar */}
        <aside
          className={`sticky top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 overflow-y-auto ${
            showSidebar ? 'w-80' : 'w-0 lg:w-20'
          }`}
        >
          {showSidebar && (
            <div className="p-6 space-y-6">
              {/* Filters */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Role
                  </label>
                  <div className="space-y-2">
                    {roleTags.map(role => (
                      <button
                        key={role.value}
                        onClick={() => {
                          setSelectedRole(role.value);
                          setCurrentQuestionIndex(0);
                        }}
                        className={`w-full px-4 py-2 rounded-xl text-left font-bold text-sm transition-all duration-200 ${
                          selectedRole === role.value
                            ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="mr-2">{role.icon}</span>
                        {role.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Category
                  </label>
                  <div className="space-y-2">
                    {questionCategories.map(cat => (
                      <button
                        key={cat.value}
                        onClick={() => {
                          setSelectedCategory(cat.value);
                          setCurrentQuestionIndex(0);
                        }}
                        className={`w-full px-4 py-2 rounded-xl text-left font-bold text-sm transition-all duration-200 ${
                          selectedCategory === cat.value
                            ? 'bg-gradient-to-r from-accent-600 to-primary-600 text-white shadow-lg'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="mr-2">{cat.icon}</span>
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Question List */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Questions ({filteredQuestions.length})
                </label>
                <div className="space-y-2">
                  {filteredQuestions.map((q, idx) => (
                    <button
                      key={q.id}
                      onClick={() => {
                        setCurrentQuestionIndex(idx);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                        currentQuestionIndex === idx
                          ? 'bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-300 shadow-md'
                          : 'bg-white border border-gray-200 hover:border-primary-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className={`text-xs font-bold ${
                          currentQuestionIndex === idx ? 'text-primary-700' : 'text-gray-500'
                        }`}>
                          Q{idx + 1}
                        </span>
                        {completedQuestions.has(q.id) && (
                          <span className="text-success-600 text-lg">✓</span>
                        )}
                      </div>
                      <div className={`text-sm font-bold mb-1 line-clamp-2 ${
                        currentQuestionIndex === idx ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {q.title}
                      </div>
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                          {getCategoryIcon(q.category)} {q.category}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto p-6 lg:p-8 space-y-6">
            {/* Question Header */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 p-8 md:p-12 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-600/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge variant="primary" className="bg-white/90 text-primary-700 text-sm">
                    {currentQuestion.role === 'both' ? '🤝 Both Roles' : currentQuestion.role === 'candidate' ? '👤 Candidate' : '🎯 Interviewer'}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/90 text-accent-700 text-sm">
                    {getCategoryIcon(currentQuestion.category)} {currentQuestion.category}
                  </Badge>
                  <Badge variant={getDifficultyColor(currentQuestion.difficulty)} className="bg-white/90 text-sm">
                    {currentQuestion.difficulty}
                  </Badge>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 drop-shadow-lg">
                  {currentQuestion.title}
                </h2>

                <p className="text-white/95 text-lg leading-relaxed mb-2">
                  <span className="font-bold">Scenario:</span> {currentQuestion.scenario}
                </p>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/20">
                  <div className="text-white/90 text-sm font-bold">
                    Question {currentQuestionIndex + 1} of {filteredQuestions.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area - Unified View */}
            <div className="space-y-8">
              {/* Step 1: Context & Setup */}
              <ContextView question={currentQuestion} />

              {/* Step 2: Good vs Bad Comparison */}
              <ComparisonView question={currentQuestion} />

              {/* Step 3: Key Takeaways */}
              <TakeawaysView question={currentQuestion} />
            </div>

            {/* Navigation Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t-2 border-gray-200">
              <Button
                variant="outline"
                onClick={() => {
                  if (currentQuestionIndex > 0) {
                    setCurrentQuestionIndex(currentQuestionIndex - 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                disabled={currentQuestionIndex === 0}
                className="group w-full sm:w-auto"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </Button>

              <div className="flex items-center gap-3">
                {!completedQuestions.has(currentQuestion.id) ? (
                  <Button
                    variant="secondary"
                    onClick={markComplete}
                    className="w-full sm:w-auto"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mark Complete
                  </Button>
                ) : (
                  <span className="px-4 py-2 bg-success-100 text-success-700 rounded-xl font-bold text-sm flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="hidden sm:inline">Completed</span>
                  </span>
                )}
              </div>

              <Button
                variant="primary"
                onClick={goToNextQuestion}
                disabled={currentQuestionIndex === filteredQuestions.length - 1}
                className="group w-full sm:w-auto"
              >
                Next
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Context View Component
const ContextView: React.FC<{ question: PlaygroundQuestion }> = ({ question }) => (
  <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200">
    <div className="flex items-center gap-3 mb-6 pb-6 border-b-2 border-gray-100">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
        <span className="text-2xl">🎬</span>
      </div>
      <h3 className="text-2xl font-black text-gray-900">The Scenario</h3>
    </div>

    <div className="prose prose-lg max-w-none">
      <p className="text-gray-800 leading-relaxed text-lg mb-6">
        {question.context}
      </p>
    </div>

    {question.aiPrompt && question.aiResponse && (
      <div className="mt-8 space-y-4">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">💬</span>
            <span className="text-sm font-bold text-blue-900 uppercase tracking-wide">What you ask AI</span>
          </div>
          <p className="text-gray-900 font-medium text-lg">
            "{question.aiPrompt}"
          </p>
        </div>

        <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🤖</span>
            <span className="text-sm font-bold text-purple-900 uppercase tracking-wide">What AI responds</span>
          </div>
          <pre className="text-sm text-gray-900 whitespace-pre-wrap font-mono leading-relaxed bg-white/70 p-4 rounded-lg">
{question.aiResponse}
          </pre>
        </div>
      </div>
    )}
  </div>
);

// Comparison View Component - Shows Good vs Bad side by side
const ComparisonView: React.FC<{ question: PlaygroundQuestion }> = ({ question }) => {
  const maxLength = Math.max(question.goodApproaches.length, question.badApproaches.length);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200">
      <div className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-gray-100">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
          <span className="text-2xl">⚖️</span>
        </div>
        <h3 className="text-2xl font-black text-gray-900">Good vs Bad Approaches</h3>
      </div>

      <div className="space-y-8">
        {Array.from({ length: maxLength }).map((_, idx) => {
          const goodApproach = question.goodApproaches[idx];
          const badApproach = question.badApproaches[idx];

          return (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Good Approach */}
              {goodApproach && (
                <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl flex-shrink-0">✅</span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{goodApproach.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{goodApproach.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/70 rounded-xl p-4 border border-green-200">
                      <p className="text-sm font-bold text-green-900 mb-2">💬 Example:</p>
                      <p className="text-gray-800 italic leading-relaxed">"{goodApproach.explanation}"</p>
                    </div>

                    <div className="bg-blue-100 rounded-xl p-4 border border-blue-300">
                      <p className="text-sm font-bold text-blue-900 mb-2">✨ Why this works:</p>
                      <p className="text-gray-800 leading-relaxed">{goodApproach.impact}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Bad Approach */}
              {badApproach && (
                <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl flex-shrink-0">❌</span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{badApproach.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{badApproach.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/70 rounded-xl p-4 border border-red-200">
                      <p className="text-sm font-bold text-red-900 mb-2">💬 Example:</p>
                      <p className="text-gray-800 italic leading-relaxed">"{badApproach.explanation}"</p>
                    </div>

                    <div className="bg-orange-100 rounded-xl p-4 border border-orange-300">
                      <p className="text-sm font-bold text-orange-900 mb-2">⚠️ Why this fails:</p>
                      <p className="text-gray-800 leading-relaxed">{badApproach.impact}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Takeaways View Component
const TakeawaysView: React.FC<{ question: PlaygroundQuestion }> = ({ question }) => (
  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-xl border-2 border-yellow-300">
    <div className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-yellow-200">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
        <span className="text-2xl">💡</span>
      </div>
      <h3 className="text-2xl font-black text-gray-900">Remember This</h3>
    </div>

    <div className="bg-white rounded-2xl p-6 mb-6">
      <ul className="space-y-4">
        {question.keyTakeaways.map((takeaway, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-md">
              {idx + 1}
            </span>
            <p className="text-gray-900 leading-relaxed pt-1 font-medium">
              {takeaway}
            </p>
          </li>
        ))}
      </ul>
    </div>

    {question.resources && question.resources.length > 0 && (
      <div className="bg-white rounded-2xl p-6">
        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-xl">📚</span>
          Learn More
        </h4>
        <div className="space-y-2">
          {question.resources.map((resource, idx) => (
            <a
              key={idx}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-gray-50 hover:bg-primary-50 rounded-xl border border-gray-200 hover:border-primary-400 transition-all group"
            >
              <span className="text-gray-900 font-medium group-hover:text-primary-700">
                {resource.title}
              </span>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
);
