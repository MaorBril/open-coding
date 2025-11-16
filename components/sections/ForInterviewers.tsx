import React from 'react';
import { Section, SectionHeader } from '../layout/Section';
import { Card, CardContent } from '../ui/Card';
import { RubricBuilder } from '../features/RubricBuilder';

const designPrinciples = [
  {
    title: 'Accept AI as Default',
    description:
      'Design assessments assuming candidates have AI tools. Trying to ban them creates unfair advantages for those willing to cheat. 7-25% use AI when banned anyway.',
    icon: '🤖',
    color: 'primary',
  },
  {
    title: 'Test Reasoning, Not Recall',
    description:
      'AI can write code. Focus on problem decomposition, critical thinking, trade-off analysis, and the ability to validate AI outputs.',
    icon: '🧠',
    color: 'accent',
  },
  {
    title: 'Explicit AI Policies',
    description:
      'Clearly communicate: What AI tools are allowed? When? How? Ambiguity disadvantages ethical candidates and rewards rule-breakers.',
    icon: '📋',
    color: 'success',
  },
  {
    title: 'Work-Sample Tasks',
    description:
      'Move from algorithmic puzzles to realistic tasks: refactoring, debugging, code review, system design. These better reflect actual job skills.',
    icon: '💼',
    color: 'warning',
  },
];

const evaluationQuestions = [
  {
    category: 'Problem Solving',
    questions: [
      'Can they explain their approach before using AI?',
      'Do they ask clarifying questions?',
      'Can they decompose complex problems into steps?',
    ],
  },
  {
    category: 'AI Collaboration',
    questions: [
      'Do they review AI code critically or accept it blindly?',
      'Can they identify errors or security issues in AI outputs?',
      'Do they modify AI suggestions appropriately?',
    ],
  },
  {
    category: 'Communication',
    questions: [
      'Do they explain their thought process out loud?',
      'Can they articulate trade-offs and alternatives?',
      'Are they receptive to feedback and hints?',
    ],
  },
  {
    category: 'Ownership',
    questions: [
      'Can they explain why AI-generated code works?',
      'Do they test edge cases and error conditions?',
      'Do they take responsibility for all submitted code?',
    ],
  },
];

export const ForInterviewers: React.FC = () => {
  return (
    <Section id="for-interviewers" variant="gray">
      <SectionHeader
        title="For Interviewers: Designing AI-Era Assessments"
        subtitle="Learn to design, conduct, and evaluate technical assessments that embrace AI tools while maintaining signal quality."
        centered
      />

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Core Design Principles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designPrinciples.map((principle, idx) => (
            <Card key={idx} variant="bordered" hover>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">{principle.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-gray-700">{principle.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Build Your Assessment Rubric
        </h3>
        <p className="text-gray-600 mb-6">
          Customize evaluation criteria to match your role requirements. Adjust
          weights to emphasize what matters most for your team.
        </p>
        <RubricBuilder />
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Key Evaluation Questions
        </h3>
        <p className="text-gray-600 mb-6">
          Use these questions during interviews to assess candidate skills beyond
          code generation. Focus on observing behaviors that indicate strong
          judgment and collaboration with AI.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {evaluationQuestions.map((category, idx) => (
            <Card key={idx} variant="bordered">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  {category.category}
                </h4>
                <ul className="space-y-3">
                  {category.questions.map((question, qIdx) => (
                    <li key={qIdx} className="flex items-start gap-3">
                      <span className="text-primary-600 mt-1">•</span>
                      <span className="text-sm text-gray-700">{question}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card variant="highlighted">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Best Practices for Fair AI-Augmented Assessments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-900 mb-3">✓ Do This</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Clearly communicate AI tool policies upfront</li>
                <li>• Ask candidates to explain their reasoning process</li>
                <li>• Probe deeper when AI generates code quickly</li>
                <li>• Test ability to modify and debug AI outputs</li>
                <li>• Assess security awareness and validation skills</li>
                <li>• Use structured rubrics for consistency</li>
                <li>• Give candidates opportunities to ask questions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-900 mb-3">✗ Avoid This</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Assuming AI usage equals cheating</li>
                <li>• Testing pure syntax or memorization</li>
                <li>• Focusing only on final code, not process</li>
                <li>• Creating ambiguous or unclear AI policies</li>
                <li>• Expecting candidates to code without any tools</li>
                <li>• Ignoring bias in rubrics or questions</li>
                <li>• Penalizing candidates for asking clarifying questions</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12">
        <Card variant="bordered">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Remember: You're Hiring for Real-World Success
                </h4>
                <p className="text-gray-700 text-sm">
                  In production, engineers will have AI tools, Stack Overflow,
                  documentation, and colleagues. Design assessments that test whether
                  candidates can succeed in that realistic environment—not an
                  artificial one where all tools are banned.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
