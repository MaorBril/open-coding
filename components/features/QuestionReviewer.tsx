'use client';

import React, { useState } from 'react';
import { playgroundQuestions, questionCategories, difficultyLevels, roleTags, type PlaygroundQuestion, type ApproachExample } from '@/lib/data/playgroundQuestions';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

type ViewMode = 'context' | 'good' | 'bad' | 'takeaways';

interface QuestionReviewerProps {
  onClose?: () => void;
}

export const QuestionReviewer: React.FC<QuestionReviewerProps> = ({ onClose }) => {
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('context');
  const [showSidebar, setShowSidebar] = useState(true);
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set());

  const filteredQuestions = playgroundQuestions.filter(q => {
    const roleMatch = selectedRole === 'all' || q.role === selectedRole || q.role === 'both';
    const categoryMatch = selectedCategory === 'all' || q.category === selectedCategory;
    return roleMatch && categoryMatch;
  });

  const currentQuestion = filteredQuestions[currentQuestionIndex] || playgroundQuestions[0];
  const allApproaches = [...currentQuestion.goodApproaches, ...currentQuestion.badApproaches];

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
      setViewMode('context');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      {/* App Header */}
      <div className="h-16 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-black text-gray-900 flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            AI Interview Playground
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm font-bold text-gray-600">
            {completedQuestions.size} / {filteredQuestions.length} completed
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div
          className={`bg-white border-r border-gray-200 transition-all duration-300 overflow-y-auto ${
            showSidebar ? 'w-80' : 'w-0'
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
                        setViewMode('context');
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
                          <span className="text-success-600">✓</span>
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
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto p-8 space-y-6">
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

            {/* Navigation Pills */}
            <div className="flex flex-wrap gap-3 sticky top-0 bg-gradient-to-br from-gray-50/95 via-blue-50/95 to-purple-50/95 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-white/40 z-10">
              <button
                onClick={() => setViewMode('context')}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                  viewMode === 'context'
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:scale-105'
                }`}
              >
                <span>📋</span>
                Context
              </button>

              <button
                onClick={() => setViewMode('good')}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                  viewMode === 'good'
                    ? 'bg-gradient-to-r from-success-600 to-success-700 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:scale-105'
                }`}
              >
                <span>✅</span>
                Good Approaches ({currentQuestion.goodApproaches.length})
              </button>

              <button
                onClick={() => setViewMode('bad')}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                  viewMode === 'bad'
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:scale-105'
                }`}
              >
                <span>❌</span>
                Bad Approaches ({currentQuestion.badApproaches.length})
              </button>

              <button
                onClick={() => setViewMode('takeaways')}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                  viewMode === 'takeaways'
                    ? 'bg-gradient-to-r from-accent-600 to-accent-700 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:scale-105'
                }`}
              >
                <span>💡</span>
                Key Takeaways
              </button>
            </div>

            {/* Content Area */}
            <div className="animate-scale-in">
              {viewMode === 'context' && <ContextView question={currentQuestion} />}
              {viewMode === 'good' && <ApproachesView approaches={currentQuestion.goodApproaches} type="good" />}
              {viewMode === 'bad' && <ApproachesView approaches={currentQuestion.badApproaches} type="bad" />}
              {viewMode === 'takeaways' && <TakeawaysView question={currentQuestion} />}
            </div>

            {/* Navigation Footer */}
            <div className="flex items-center justify-between gap-4 pt-8 border-t-2 border-gray-200">
              <Button
                variant="outline"
                onClick={() => {
                  if (currentQuestionIndex > 0) {
                    setCurrentQuestionIndex(currentQuestionIndex - 1);
                    setViewMode('context');
                  }
                }}
                disabled={currentQuestionIndex === 0}
                className="group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous Question
              </Button>

              <div className="flex items-center gap-3">
                {!completedQuestions.has(currentQuestion.id) && (
                  <Button
                    variant="secondary"
                    onClick={markComplete}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mark Complete
                  </Button>
                )}
                {completedQuestions.has(currentQuestion.id) && (
                  <span className="px-4 py-2 bg-success-100 text-success-700 rounded-xl font-bold text-sm flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Completed
                  </span>
                )}
              </div>

              <Button
                variant="primary"
                onClick={goToNextQuestion}
                disabled={currentQuestionIndex === filteredQuestions.length - 1}
                className="group"
              >
                Next Question
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Context View Component
const ContextView: React.FC<{ question: PlaygroundQuestion }> = ({ question }) => (
  <div className="space-y-6">
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
        <span className="text-3xl">🎬</span>
        Context & Scenario
      </h3>
      <p className="text-gray-700 leading-relaxed text-lg">{question.context}</p>
    </div>

    {question.aiPrompt && question.aiResponse && (
      <div className="space-y-4">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-300" />
          <div className="relative p-8 bg-gradient-to-br from-blue-50 to-primary-50 border-2 border-primary-200 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">👤</span>
              </div>
              <div className="text-sm font-bold text-primary-700 uppercase tracking-wider">
                Your Prompt to AI
              </div>
            </div>
            <p className="text-gray-800 leading-relaxed text-lg font-medium">
              {question.aiPrompt}
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500 to-accent-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-300" />
          <div className="relative p-8 bg-gradient-to-br from-purple-50 to-accent-50 border-2 border-accent-200 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <div className="text-sm font-bold text-accent-700 uppercase tracking-wider">
                AI Response
              </div>
            </div>
            <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono leading-relaxed bg-white/50 p-4 rounded-xl">
              {question.aiResponse}
            </pre>
          </div>
        </div>
      </div>
    )}
  </div>
);

// Approaches View Component
const ApproachesView: React.FC<{ approaches: ApproachExample[]; type: 'good' | 'bad' }> = ({ approaches, type }) => {
  const isGood = type === 'good';

  return (
    <div className="space-y-6">
      {approaches.map((approach, idx) => (
        <div
          key={idx}
          className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:scale-[1.01] ${
            isGood
              ? 'border-success-300 hover:shadow-success-200/50'
              : 'border-red-300 hover:shadow-red-200/50'
          }`}
        >
          <div className="flex items-start gap-4 mb-6">
            <div
              className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg ${
                isGood
                  ? 'bg-gradient-to-br from-success-500 to-success-600'
                  : 'bg-gradient-to-br from-red-500 to-red-600'
              }`}
            >
              {isGood ? '✅' : '❌'}
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{approach.title}</h4>
              <p className="text-gray-700 leading-relaxed text-lg">{approach.description}</p>
            </div>
          </div>

          {approach.code && (
            <div className="mb-6 p-6 bg-gray-900 rounded-2xl overflow-x-auto shadow-inner">
              <pre className="text-sm text-gray-100 font-mono leading-relaxed">{approach.code}</pre>
            </div>
          )}

          <div className={`p-6 rounded-2xl mb-4 border-l-4 ${
            isGood
              ? 'bg-green-50 border-success-600'
              : 'bg-red-50 border-red-600'
          }`}>
            <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="text-lg">💬</span>
              Example Dialogue
            </div>
            <p className="text-gray-800 leading-relaxed italic text-lg">
              "{approach.explanation}"
            </p>
          </div>

          <div className={`p-6 rounded-2xl shadow-sm ${
            isGood
              ? 'bg-blue-50 border-2 border-blue-300'
              : 'bg-orange-50 border-2 border-orange-300'
          }`}>
            <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="text-lg">⚡</span>
              Impact & Consequences
            </div>
            <p className="text-gray-800 leading-relaxed font-medium text-lg">
              {approach.impact}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Takeaways View Component
const TakeawaysView: React.FC<{ question: PlaygroundQuestion }> = ({ question }) => (
  <div className="space-y-6">
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-success-500 to-success-600 flex items-center justify-center shadow-lg">
          <span className="text-3xl">💡</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-900">Key Takeaways</h3>
      </div>

      <div className="space-y-4">
        {question.keyTakeaways.map((takeaway, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-success-100 rounded-2xl border-2 border-success-300 hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-success-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md">
              {idx + 1}
            </div>
            <p className="text-gray-800 leading-relaxed flex-1 pt-1 text-lg font-medium">
              {takeaway}
            </p>
          </div>
        ))}
      </div>

      {question.resources && question.resources.length > 0 && (
        <div className="mt-10 pt-8 border-t-2 border-success-200">
          <h4 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
            <span className="text-2xl">📚</span>
            Additional Resources
          </h4>
          <div className="space-y-3">
            {question.resources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 font-bold text-lg group-hover:text-primary-700">
                    {resource.title}
                  </span>
                  <svg className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);
