export interface RubricDimension {
  id: string;
  name: string;
  description: string;
  defaultWeight: number;
  examples: {
    weak: string;
    strong: string;
  };
}

export const rubricDimensions: RubricDimension[] = [
  {
    id: 'problem-solving',
    name: 'Problem Solving & Decomposition',
    description: 'Ability to break down complex problems into manageable components and identify optimal approaches.',
    defaultWeight: 25,
    examples: {
      weak: 'Jumps to coding without clarifying requirements. Struggles to break down problem into steps.',
      strong: 'Asks clarifying questions, outlines approach, discusses trade-offs before coding.',
    },
  },
  {
    id: 'ai-collaboration',
    name: 'AI Collaboration & Critical Thinking',
    description: 'Effective use of AI tools while maintaining critical judgment and ownership of solutions.',
    defaultWeight: 20,
    examples: {
      weak: 'Copies AI code blindly without understanding. Cannot explain AI suggestions or identify errors.',
      strong: 'Uses AI strategically, reviews outputs critically, tests thoroughly, explains reasoning.',
    },
  },
  {
    id: 'code-quality',
    name: 'Code Quality & Best Practices',
    description: 'Writing clean, maintainable, and correct code following industry standards.',
    defaultWeight: 20,
    examples: {
      weak: 'Code is hard to read, lacks error handling, ignores edge cases. Poor naming and structure.',
      strong: 'Clear code structure, handles errors gracefully, considers edge cases, follows conventions.',
    },
  },
  {
    id: 'communication',
    name: 'Communication & Collaboration',
    description: 'Clearly articulating thought process, asking questions, and explaining technical decisions.',
    defaultWeight: 15,
    examples: {
      weak: 'Works silently. Unclear explanations. Defensive when given feedback or hints.',
      strong: 'Thinks out loud, explains decisions, asks good questions, receptive to feedback.',
    },
  },
  {
    id: 'testing-validation',
    name: 'Testing & Validation',
    description: 'Systematically verifying solutions work correctly across different scenarios.',
    defaultWeight: 10,
    examples: {
      weak: 'Skips testing. Assumes code works. Does not consider edge cases or error conditions.',
      strong: 'Tests systematically, validates edge cases, explains testing strategy, catches bugs.',
    },
  },
  {
    id: 'security-ethics',
    name: 'Security & Ethical Awareness',
    description: 'Recognizing security vulnerabilities, privacy concerns, and ethical implications of solutions.',
    defaultWeight: 10,
    examples: {
      weak: 'Ignores security concerns. Does not validate AI-generated code for vulnerabilities.',
      strong: 'Identifies security risks (injection, XSS), validates data, considers privacy implications.',
    },
  },
];

export const calculateTotalWeight = (weights: Record<string, number>): number => {
  return Object.values(weights).reduce((sum, weight) => sum + weight, 0);
};

export const getDefaultWeights = (): Record<string, number> => {
  return rubricDimensions.reduce((acc, dim) => {
    acc[dim.id] = dim.defaultWeight;
    return acc;
  }, {} as Record<string, number>);
};
