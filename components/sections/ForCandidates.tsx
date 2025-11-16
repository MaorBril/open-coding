import React from 'react';
import { Section, SectionHeader } from '../layout/Section';
import { Card, CardContent } from '../ui/Card';
import { Checklist } from '../ui/Checklist';
import { ScenarioSelector } from '../features/ScenarioSelector';

const checklistItems = [
  {
    id: '1',
    label: 'I explain my approach before asking AI for code',
    description: 'Demonstrate problem-solving ability independent of AI tools',
  },
  {
    id: '2',
    label: 'I review all AI-generated code line-by-line',
    description: 'Never copy-paste without understanding',
  },
  {
    id: '3',
    label: 'I test AI code for edge cases and errors',
    description: 'AI has 34.8-68.9% error rates—validation is critical',
  },
  {
    id: '4',
    label: 'I can explain why AI suggestions work',
    description: 'Ownership means understanding, not just using',
  },
  {
    id: '5',
    label: 'I identify security issues in AI code',
    description: 'Stanford research: AI users write less secure code',
  },
  {
    id: '6',
    label: 'I communicate my thought process out loud',
    description: 'Interviewers need to see your reasoning, not just results',
  },
  {
    id: '7',
    label: 'I ask clarifying questions before coding',
    description: 'Requirements gathering shows professional maturity',
  },
  {
    id: '8',
    label: 'I discuss trade-offs and alternative approaches',
    description: 'Critical thinking beyond first AI suggestion',
  },
];

const principles = [
  {
    title: 'Use AI Ethically',
    description:
      'Follow interview guidelines on AI usage. If unclear, ask. Using AI when banned or claiming AI work as your own are both unethical.',
    icon: '⚖️',
  },
  {
    title: 'Maintain Ownership',
    description:
      'You are responsible for all code you submit. "If an LLM writes code and you review and test it, that\'s responsible AI assisted programming."',
    icon: '👤',
  },
  {
    title: 'Think Out Loud',
    description:
      'Articulate your reasoning even when using AI. Interviewers need to understand YOUR thought process, not just see AI outputs.',
    icon: '💭',
  },
  {
    title: 'Test & Validate',
    description:
      'AI code has high error rates. Always test edge cases, validate logic, and review for security vulnerabilities before presenting.',
    icon: '🔍',
  },
];

export const ForCandidates: React.FC = () => {
  return (
    <Section id="for-candidates" variant="default">
      <SectionHeader
        title="For Candidates: Training for GenAI Interviews"
        subtitle="Learn to use AI tools effectively and ethically during technical assessments."
        centered
      />

      <div className="mb-12">
        <Card variant="highlighted">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Core Principles for AI-Augmented Interviews
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((principle, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">{principle.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-gray-700">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Practice Scenarios
        </h3>
        <p className="text-gray-600 mb-6">
          Select a scenario to see how AI can help, where it might mislead you, and
          what evaluators look for in your responses.
        </p>
        <ScenarioSelector />
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Self-Assessment: Am I Using AI Well?
        </h3>
        <Card variant="bordered">
          <CardContent className="p-6">
            <p className="text-gray-600 mb-6">
              Use this checklist during practice sessions or after interviews to
              evaluate your AI collaboration skills. Strong candidates consistently
              demonstrate these behaviors.
            </p>
            <Checklist items={checklistItems} />
          </CardContent>
        </Card>
      </div>

      <Card variant="bordered">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Remember: The Interview Tests How You Think, Not Just What You Produce
              </h4>
              <p className="text-gray-700 text-sm">
                Interviewers in 2025 assume you have AI tools. They're evaluating your
                problem-solving process, critical thinking, and ability to collaborate
                with AI—not whether you can write perfect code from memory. Focus on
                demonstrating judgment, communication, and responsible tool usage.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};
