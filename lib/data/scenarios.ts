export interface Scenario {
  id: string;
  title: string;
  type: 'coding' | 'refactor' | 'ml-design' | 'debugging' | 'system-design';
  problem: string;
  aiHelps: string[];
  aiMisleads: string[];
  goodBehaviors: string[];
  redFlags: string[];
}

export const scenarios: Scenario[] = [
  {
    id: 'leet-coding',
    title: 'Algorithmic Problem Solving',
    type: 'coding',
    problem: 'Given an array of integers, find two numbers that add up to a specific target. Return indices of the two numbers.',
    aiHelps: [
      'Quickly generating boilerplate code structure',
      'Suggesting multiple solution approaches (brute force, hash map, two pointers)',
      'Helping write test cases for edge conditions',
      'Explaining time/space complexity trade-offs',
    ],
    aiMisleads: [
      'May suggest over-engineered solutions for simple problems',
      'Generated code might have off-by-one errors (34.8% error rate)',
      'Could miss edge cases like empty arrays or duplicate values',
      'May not explain WHY a particular approach is optimal',
    ],
    goodBehaviors: [
      'Start by explaining your approach before asking AI for code',
      'Review AI-generated code line-by-line, testing edge cases',
      'Articulate the time and space complexity yourself',
      'Modify AI suggestions to handle edge cases it missed',
      'Explain your debugging process when AI code fails tests',
    ],
    redFlags: [
      'Copying AI code without understanding or testing it',
      'Unable to explain why the algorithm works',
      'Not testing edge cases or error conditions',
      'Claiming AI suggestions as your original thinking',
      'Struggling to modify AI code when it has bugs',
    ],
  },
  {
    id: 'refactor-legacy',
    title: 'Refactoring Legacy Code',
    type: 'refactor',
    problem: 'You inherit a 500-line function with nested conditionals, no tests, and unclear variable names. Make it maintainable.',
    aiHelps: [
      'Identifying code smells and anti-patterns',
      'Suggesting design patterns (Strategy, Factory, etc.)',
      'Generating unit tests for existing behavior',
      'Breaking large functions into smaller, testable units',
    ],
    aiMisleads: [
      'May suggest refactorings that change behavior unexpectedly',
      'Generated tests might not cover critical business logic',
      'Could introduce security vulnerabilities (Stanford research: AI users write less secure code)',
      'May not preserve edge case handling from original code',
    ],
    goodBehaviors: [
      'Write characterization tests BEFORE refactoring',
      'Ask AI to explain existing code behavior first',
      'Refactor incrementally, testing after each change',
      'Review AI suggestions for security issues (SQL injection, XSS)',
      'Document why you chose certain design patterns over others',
    ],
    redFlags: [
      'Refactoring without tests or verification',
      'Not understanding the original code business logic',
      'Introducing breaking changes without realizing it',
      'Trusting AI-generated tests without validation',
      'Unable to explain refactoring decisions',
    ],
  },
  {
    id: 'ml-system-design',
    title: 'ML System Design',
    type: 'ml-design',
    problem: 'Design a recommendation system for a video streaming platform with 100M users. Consider model training, serving, and feedback loops.',
    aiHelps: [
      'Outlining standard ML pipeline components (data, training, serving)',
      'Suggesting relevant architectures (collaborative filtering, content-based)',
      'Identifying scaling considerations (batch vs online learning)',
      'Providing code snippets for data preprocessing or model serving',
    ],
    aiMisleads: [
      'May suggest outdated ML approaches or frameworks',
      'Could overlook critical production concerns (latency, cost)',
      'Generated architectures might not scale to 100M users',
      'May miss important considerations like cold start or bias',
    ],
    goodBehaviors: [
      'Start with requirements gathering and clarifying questions',
      'Use AI to validate your architectural decisions, not create them',
      'Discuss trade-offs explicitly (accuracy vs latency, batch vs real-time)',
      'Ask AI about specific components after you design high-level system',
      'Critique AI suggestions for scalability and production readiness',
    ],
    redFlags: [
      'Accepting AI architecture diagrams without questioning them',
      'Not discussing trade-offs or alternative approaches',
      'Ignoring operational concerns (monitoring, rollback, A/B testing)',
      'Unable to defend design choices when challenged',
      'Missing discussions about bias, fairness, or privacy',
    ],
  },
  {
    id: 'debugging-production',
    title: 'Debugging Production Issue',
    type: 'debugging',
    problem: 'A microservice is experiencing 15% request failure rate in production. Logs show intermittent timeouts. Debug and propose fixes.',
    aiHelps: [
      'Analyzing stack traces and error patterns',
      'Suggesting common causes (connection pools, rate limits, memory leaks)',
      'Generating monitoring queries or log parsing scripts',
      'Proposing potential fixes with code examples',
    ],
    aiMisleads: [
      'May jump to conclusions without systematic investigation',
      'Suggested fixes might not address root cause',
      'Could recommend changes that break other functionality',
      'May overlook infrastructure or configuration issues',
    ],
    goodBehaviors: [
      'Outline your debugging methodology before diving in',
      'Use AI to brainstorm hypotheses, then test them systematically',
      'Ask AI to help analyze logs, not just suggest fixes',
      'Verify AI suggestions against production architecture',
      'Explain how you would validate fixes before deploying',
    ],
    redFlags: [
      'Applying fixes without understanding root cause',
      'Not asking about system architecture or dependencies',
      'Proposing changes without considering side effects',
      'Unable to form or test hypotheses systematically',
      'Skipping verification steps like testing or monitoring',
    ],
  },
  {
    id: 'system-design-api',
    title: 'Distributed System Design',
    type: 'system-design',
    problem: 'Design a URL shortener service like bit.ly that handles 1000 requests/second with high availability and low latency.',
    aiHelps: [
      'Outlining standard distributed system patterns (load balancing, caching, sharding)',
      'Calculating capacity estimates (storage, bandwidth, QPS)',
      'Suggesting database choices and schema design',
      'Providing example code for key generation algorithms',
    ],
    aiMisleads: [
      'May suggest over-complicated architectures for the scale',
      'Could miss critical failure modes or edge cases',
      'Generated capacity calculations might have wrong assumptions',
      'May not consider cost optimization or regional distribution',
    ],
    goodBehaviors: [
      'Clarify functional and non-functional requirements first',
      'Use AI to validate your capacity estimates and architecture',
      'Discuss trade-offs between consistency, availability, partition tolerance',
      'Ask AI about specific components after designing high-level flow',
      'Challenge AI suggestions with "what if" failure scenarios',
    ],
    redFlags: [
      'Accepting AI architecture without discussing trade-offs',
      'Not calculating or explaining capacity requirements',
      'Missing discussions about failure handling or scaling',
      'Unable to adapt design when requirements change',
      'Not considering operational aspects (monitoring, deployment)',
    ],
  },
];

export const scenarioTypes = [
  { value: 'coding', label: 'Algorithmic Coding' },
  { value: 'refactor', label: 'Refactoring Legacy Code' },
  { value: 'ml-design', label: 'ML System Design' },
  { value: 'debugging', label: 'Debugging Production Issue' },
  { value: 'system-design', label: 'Distributed System Design' },
] as const;
