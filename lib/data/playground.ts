export interface PlaygroundScenario {
  id: string;
  role: 'candidate' | 'interviewer';
  type: 'coding' | 'system-design' | 'ml' | 'debugging';
  title: string;
  context: string;
  problem: string;
  candidatePrompt?: string;
  aiResponse?: string;
  candidateGuidance?: string[];
  interviewerGuidance?: string[];
}

export const playgroundScenarios: PlaygroundScenario[] = [
  {
    id: 'candidate-coding-1',
    role: 'candidate',
    type: 'coding',
    title: 'Using AI for Two-Sum Problem',
    context: 'You are in a coding interview and allowed to use AI tools like ChatGPT or Copilot.',
    problem: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    candidatePrompt: 'Write a function in Python that finds two numbers in an array that add up to a target value',
    aiResponse: `def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return None`,
    candidateGuidance: [
      '✅ GOOD: Before using AI output, explain the brute force approach and its O(n²) time complexity',
      '✅ GOOD: Ask interviewer if optimizing for time or space is more important',
      '✅ GOOD: Identify that AI gave correct but sub-optimal solution',
      '✅ GOOD: Suggest hash map approach for O(n) time complexity',
      '❌ BAD: Copy-paste AI code without testing or explaining',
      '❌ BAD: Not discussing edge cases like duplicates or empty arrays',
    ],
    interviewerGuidance: [
      'Observe: Does candidate explain the approach before or after getting AI response?',
      'Observe: Do they identify the time/space complexity of AI solution?',
      'Observe: Do they suggest optimizations or accept first solution?',
      'Good sign: Candidate treats AI as a tool, not a crutch',
      'Red flag: Cannot explain why the code works or what it does',
    ],
  },
  {
    id: 'interviewer-coding-1',
    role: 'interviewer',
    type: 'coding',
    title: 'Evaluating AI-Assisted Coding',
    context: 'You are interviewing a candidate who is using Copilot for a coding problem.',
    problem: 'Candidate quickly generates a solution using AI. How do you assess their actual skills?',
    candidateGuidance: [],
    interviewerGuidance: [
      '✅ Ask: "Can you explain the approach you took and why it works?"',
      '✅ Ask: "What\'s the time and space complexity? How did you arrive at that?"',
      '✅ Ask: "What edge cases should we test? Can you write a few test cases?"',
      '✅ Ask: "How would you modify this if the input was a stream instead of an array?"',
      '✅ Observe: Do they review AI code carefully or accept it blindly?',
      '❌ Don\'t: Assume AI usage means cheating—it\'s a realistic skill',
      '❌ Don\'t: Focus only on syntax—focus on problem-solving and judgment',
    ],
  },
  {
    id: 'candidate-debugging-1',
    role: 'candidate',
    type: 'debugging',
    title: 'Debugging with AI Assistance',
    context: 'A production service is failing 15% of requests. You can use AI to help debug.',
    problem: 'Logs show: "TimeoutError: Request to database exceeded 5000ms"',
    candidatePrompt: 'A service is timing out on database calls 15% of the time. What could cause this?',
    aiResponse: `Possible causes of intermittent database timeouts:
1. Connection pool exhaustion
2. Database load/slow queries
3. Network issues between service and DB
4. Too many concurrent requests
5. Memory leak causing resource contention
6. Insufficient connection timeout settings`,
    candidateGuidance: [
      '✅ GOOD: Use AI to brainstorm hypotheses, then systematically test them',
      '✅ GOOD: Ask interviewer about architecture (connection pool size, DB type, traffic patterns)',
      '✅ GOOD: Propose specific investigation steps: check connection pool metrics, slow query logs, network latency',
      '✅ GOOD: Explain how you would validate each hypothesis',
      '❌ BAD: Pick the first AI suggestion and propose it as "the fix"',
      '❌ BAD: Not asking about monitoring, metrics, or observability',
    ],
    interviewerGuidance: [
      'Observe: Does candidate form their own hypotheses or just repeat AI output?',
      'Observe: Do they ask clarifying questions about the system architecture?',
      'Observe: Do they propose systematic debugging steps?',
      'Good sign: Candidate combines AI suggestions with their own debugging methodology',
      'Red flag: Accepts AI diagnosis without validation or further investigation',
    ],
  },
  {
    id: 'interviewer-security-1',
    role: 'interviewer',
    type: 'coding',
    title: 'Assessing Security Awareness',
    context: 'Candidate used AI to generate code for user authentication. You notice potential security issues.',
    problem: 'AI-generated code stores passwords in plain text. How do you evaluate candidate\'s security judgment?',
    candidateGuidance: [],
    interviewerGuidance: [
      '✅ Ask: "Walk me through the security considerations in this code"',
      '✅ Ask: "What would happen if the database was compromised?"',
      '✅ Observe: Do they identify the plain text password issue unprompted?',
      '✅ Observe: Do they mention hashing, salting, bcrypt/argon2?',
      '✅ Note: Stanford research shows AI users write LESS secure code but think it\'s MORE secure',
      '❌ Don\'t: Expect candidates to know every security best practice',
      '✅ Do: Assess whether they recognize the NEED to validate AI code for security',
    ],
  },
  {
    id: 'candidate-system-design-1',
    role: 'candidate',
    type: 'system-design',
    title: 'ML System Design with AI',
    context: 'Design a recommendation system. You can use AI for specific components.',
    problem: 'Design a video recommendation system for 100M users.',
    candidatePrompt: 'What are the key components of a video recommendation system architecture?',
    aiResponse: `Key components:
1. Data Collection: User interactions, video metadata
2. Feature Engineering: User preferences, video embeddings
3. Model Training: Collaborative filtering, deep learning models
4. Model Serving: Real-time inference API
5. Feedback Loop: A/B testing, metric tracking
6. Storage: User profiles, video catalog, model artifacts`,
    candidateGuidance: [
      '✅ GOOD: Start with clarifying questions (scale, latency requirements, personalization level)',
      '✅ GOOD: Draw high-level architecture BEFORE asking AI',
      '✅ GOOD: Use AI to validate specific components you already designed',
      '✅ GOOD: Discuss trade-offs: batch vs online learning, accuracy vs latency',
      '✅ GOOD: Challenge AI output: "Your architecture doesn\'t mention cold start problem"',
      '❌ BAD: Accept AI architecture diagram as-is without discussing trade-offs',
      '❌ BAD: Not mentioning operational concerns (monitoring, model drift, rollback)',
    ],
    interviewerGuidance: [
      'Observe: Does candidate lead the design or follow AI suggestions?',
      'Observe: Do they discuss trade-offs and alternative approaches?',
      'Observe: Do they consider production concerns (scale, cost, monitoring)?',
      'Good sign: Uses AI for validation and specific details, not high-level design',
      'Red flag: Cannot defend design choices or explain why they chose certain components',
    ],
  },
];

export const playgroundRoles = [
  { value: 'candidate', label: 'Practice as Candidate', description: 'Learn how to use AI tools effectively during interviews' },
  { value: 'interviewer', label: 'Practice as Interviewer', description: 'Learn how to evaluate candidates who use AI tools' },
] as const;

export const playgroundTypes = [
  { value: 'coding', label: 'Coding Challenge' },
  { value: 'system-design', label: 'System Design' },
  { value: 'ml', label: 'ML System Design' },
  { value: 'debugging', label: 'Debugging' },
] as const;
