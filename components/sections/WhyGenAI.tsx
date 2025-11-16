import React from 'react';
import { Section, SectionHeader } from '../layout/Section';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

const timeline = [
  {
    era: 'Past',
    period: '2010-2020',
    title: 'Traditional Assessments',
    description:
      'Whiteboard coding, memorization of algorithms, no external resources allowed. Focus on syntax and recall.',
    color: 'gray',
    challenges: [
      'High candidate anxiety',
      'Unrealistic work conditions',
      'Bias toward memorization',
      'Limited accessibility',
    ],
  },
  {
    era: 'Present',
    period: '2020-2023',
    title: 'Evolving Practices',
    description:
      'Take-home assignments, pair programming, work-sample tasks. Google and Stack Overflow allowed.',
    color: 'primary',
    challenges: [
      'Take-homes easily cheated',
      'Time-consuming for candidates',
      'Still tested recall over reasoning',
      'Emerging AI tools unaddressed',
    ],
  },
  {
    era: 'GenAI Era',
    period: '2024+',
    title: 'AI-Augmented Assessment',
    description:
      'Assume AI tools exist. Test reasoning, judgment, collaboration with AI, and critical thinking.',
    color: 'accent',
    strengths: [
      'Focus on problem decomposition',
      'Realistic work conditions',
      'Test AI collaboration skills',
      'Prompt engineering assessed',
    ],
  },
];

const keyChanges = [
  {
    title: 'What We Measure',
    before: 'Syntax memorization, algorithm recall, coding speed',
    after: 'Problem-solving, critical thinking, AI collaboration, code review',
    icon: '🎯',
  },
  {
    title: 'How We Interview',
    before: 'Ban all external resources, pure memorization tests',
    after: 'Allow AI tools, focus on explaining decisions and trade-offs',
    icon: '💡',
  },
  {
    title: 'Skills That Matter',
    before: 'Writing code from scratch, perfect syntax, leetcode patterns',
    after: 'Decomposing problems, validating AI output, security awareness',
    icon: '⚡',
  },
  {
    title: 'Candidate Expectation',
    before: 'Memorize 150+ leetcode problems, fear making mistakes',
    after: 'Understand fundamentals, use AI responsibly, communicate well',
    icon: '🎓',
  },
];

export const WhyGenAI: React.FC = () => {
  return (
    <Section id="why-genai" variant="gray">
      <SectionHeader
        title="Why Technical Assessment Is Changing"
        subtitle="GenAI tools like Copilot, ChatGPT, and Cursor are fundamentally reshaping how we evaluate technical talent."
        centered
      />

      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {timeline.map((item, index) => (
            <Card key={index} variant="default" className="relative">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge
                    variant={
                      item.color === 'gray'
                        ? 'neutral'
                        : item.color === 'primary'
                        ? 'primary'
                        : 'secondary'
                    }
                  >
                    {item.era}
                  </Badge>
                  <span className="text-sm text-gray-500">{item.period}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4">{item.description}</p>

                <div className="space-y-2">
                  {(item.challenges || item.strengths)?.map(
                    (point: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span
                          className={`mt-1 ${
                            item.challenges
                              ? 'text-red-500'
                              : 'text-green-500'
                          }`}
                        >
                          {item.challenges ? '✗' : '✓'}
                        </span>
                        <span className="text-gray-700">{point}</span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>

              {index < timeline.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg
                    className="w-8 h-8 text-gray-300"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Key Shifts in Technical Assessment
        </h3>

        <div className="space-y-6">
          {keyChanges.map((change, index) => (
            <Card key={index} variant="bordered">
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="text-4xl flex-shrink-0">{change.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      {change.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="text-xs font-semibold text-red-700 uppercase mb-2">
                          Before GenAI
                        </div>
                        <p className="text-sm text-gray-700">{change.before}</p>
                      </div>
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="text-xs font-semibold text-green-700 uppercase mb-2">
                          GenAI Era
                        </div>
                        <p className="text-sm text-gray-700">{change.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card variant="highlighted">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The Bottom Line
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            In 2025, interviews don't test what you know—they test{' '}
            <span className="font-semibold text-primary-700">
              how you think with AI
            </span>
            . 82% of developers already use AI tools daily. The question is no
            longer "if" but "how" to integrate AI into assessments fairly and
            effectively.
          </p>
        </CardContent>
      </Card>
    </Section>
  );
};
