export interface ApproachExample {
  type: 'good' | 'bad';
  title: string;
  description: string;
  code?: string;
  explanation: string;
  impact: string;
}

export interface PlaygroundQuestion {
  id: string;
  role: 'candidate' | 'interviewer' | 'both';
  category: 'coding' | 'system-design' | 'debugging' | 'communication' | 'ethics';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  title: string;
  scenario: string;
  context: string;
  aiPrompt?: string;
  aiResponse?: string;
  goodApproaches: ApproachExample[];
  badApproaches: ApproachExample[];
  keyTakeaways: string[];
  resources?: { title: string; url: string }[];
}

export const playgroundQuestions: PlaygroundQuestion[] = [
  {
    id: 'q1-candidate-coding',
    role: 'candidate',
    category: 'coding',
    difficulty: 'beginner',
    title: 'Using AI for Algorithm Problems',
    scenario: 'You need to implement a function to reverse a linked list',
    context: 'You\'re in an interview where AI tools are allowed. You ask ChatGPT for help.',
    aiPrompt: 'Write a function to reverse a linked list in Python',
    aiResponse: `def reverse_linked_list(head):
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Explain Before Implementing',
        description: 'Start by explaining your approach to the interviewer',
        explanation: '"I\'ll use a three-pointer approach: prev, current, and next. We\'ll iterate through the list, reversing the pointers as we go. Time complexity is O(n), space is O(1)."',
        impact: 'Shows you understand the problem and can articulate your thinking'
      },
      {
        type: 'good',
        title: 'Review AI Code Critically',
        description: 'After getting AI response, walk through the code line by line',
        explanation: '"The AI solution looks correct. Let me trace through it: we maintain prev as None initially, iterate through with current, save next_node to avoid losing reference, reverse the pointer, then move forward."',
        impact: 'Demonstrates code comprehension and debugging skills'
      },
      {
        type: 'good',
        title: 'Test with Examples',
        description: 'Propose test cases and mentally trace execution',
        explanation: '"Let me test with [1→2→3]. After iteration 1: None←1 2→3. After iteration 2: None←1←2 3. After iteration 3: None←1←2←3. Returns 3, which is correct."',
        impact: 'Shows systematic testing approach and attention to correctness'
      },
      {
        type: 'good',
        title: 'Discuss Edge Cases',
        description: 'Identify and handle edge cases without prompting',
        explanation: '"We should handle empty list (None), single node (return head), and two nodes. The current solution handles all these correctly."',
        impact: 'Demonstrates thoroughness and production-ready thinking'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Copy-Paste Without Understanding',
        description: 'Immediately copy AI code without explanation',
        explanation: '[Candidate pastes code] "Here\'s the solution. It reverses the linked list."',
        impact: 'Interviewer cannot assess your problem-solving ability or understanding'
      },
      {
        type: 'bad',
        title: 'Cannot Explain How It Works',
        description: 'Unable to walk through the code logic',
        explanation: 'Interviewer: "Can you explain how this works?" Candidate: "Um... it uses pointers to reverse the list..."',
        impact: 'Major red flag - suggests you don\'t understand the solution'
      },
      {
        type: 'bad',
        title: 'Skip Testing Entirely',
        description: 'Assume AI code is correct without verification',
        explanation: '"The AI generated this, so it should work. Let\'s move on."',
        impact: 'Shows lack of rigor and quality mindset'
      },
      {
        type: 'bad',
        title: 'No Edge Case Consideration',
        description: 'Don\'t think about null, empty, or special cases',
        explanation: '[Submits code without discussing what happens with None or single node]',
        impact: 'Misses critical bugs that would appear in production'
      }
    ],
    keyTakeaways: [
      'AI is a tool to augment your thinking, not replace it',
      'Always explain your approach before and after using AI',
      'Treat AI code like code from a junior developer - review it carefully',
      'Test systematically and consider edge cases',
      'Interviewers want to see your judgment, not just AI output'
    ]
  },
  {
    id: 'q2-interviewer-assessment',
    role: 'interviewer',
    category: 'coding',
    difficulty: 'intermediate',
    title: 'Evaluating AI-Assisted Solutions',
    scenario: 'Candidate quickly generates a working solution using Copilot',
    context: 'You need to assess their actual coding ability when AI did the heavy lifting.',
    goodApproaches: [
      {
        type: 'good',
        title: 'Ask About the Approach',
        description: 'Focus on problem-solving process, not syntax',
        explanation: '"Before you used Copilot, what approach did you have in mind? Why did you choose this data structure?"',
        impact: 'Reveals whether they can think through problems independently'
      },
      {
        type: 'good',
        title: 'Test Understanding with Modifications',
        description: 'Ask them to modify the solution',
        explanation: '"What if the input was a stream instead of an array? How would you adapt this code?"',
        impact: 'Shows if they understand the code well enough to modify it'
      },
      {
        type: 'good',
        title: 'Probe Complexity Analysis',
        description: 'Ask for time/space complexity with justification',
        explanation: '"What\'s the time complexity and how did you determine that? Could we optimize further?"',
        impact: 'Tests algorithmic thinking beyond code generation'
      },
      {
        type: 'good',
        title: 'Discuss Trade-offs',
        description: 'Explore alternative approaches and their pros/cons',
        explanation: '"Could we use a different approach? What would be the trade-offs between these solutions?"',
        impact: 'Assesses engineering judgment and design thinking'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Focus Only on Syntax',
        description: 'Judge based on code style rather than thinking',
        explanation: '"Your variable names could be better. Let\'s talk about the indentation..."',
        impact: 'Misses the point - AI can handle syntax perfectly'
      },
      {
        type: 'bad',
        title: 'Assume AI Usage is Cheating',
        description: 'Get frustrated that candidate used AI tools',
        explanation: '"This is supposed to test YOUR coding ability, not ChatGPT\'s."',
        impact: 'Disconnects from reality - 82% of developers use AI daily'
      },
      {
        type: 'bad',
        title: 'Accept Code at Face Value',
        description: 'Don\'t probe deeper if code looks correct',
        explanation: '"Looks good! Let\'s move to the next question."',
        impact: 'Fails to assess actual understanding and problem-solving ability'
      },
      {
        type: 'bad',
        title: 'No Follow-up Questions',
        description: 'Don\'t test understanding with modifications',
        explanation: '[Marks as "passed" without testing comprehension]',
        impact: 'May hire someone who can use AI but can\'t debug or adapt code'
      }
    ],
    keyTakeaways: [
      'Focus on problem-solving process, not code generation',
      'Ask candidates to modify, extend, or optimize the solution',
      'Probe understanding with "what if" scenarios',
      'Assess judgment: Do they review AI code critically?',
      'Look for engineering thinking beyond syntax correctness'
    ]
  },
  {
    id: 'q3-candidate-debugging',
    role: 'candidate',
    category: 'debugging',
    difficulty: 'intermediate',
    title: 'Debugging Production Issues with AI',
    scenario: 'API endpoints randomly returning 500 errors (5% of requests)',
    context: 'You have access to logs, metrics, and AI tools to help diagnose the issue.',
    aiPrompt: 'Why would an API return 500 errors randomly for 5% of requests?',
    aiResponse: `Common causes of intermittent 500 errors:
1. Race conditions in concurrent code
2. Memory leaks causing OOM errors
3. Database connection pool exhaustion
4. Timeout issues with downstream services
5. Unhandled exceptions for specific input edge cases
6. Resource contention (CPU, memory, file handles)
7. Thread pool saturation`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Systematic Hypothesis Testing',
        description: 'Use AI to brainstorm, then systematically investigate',
        explanation: '"AI suggests 7 causes. Let me prioritize: First, I\'d check error logs for stack traces. Then connection pool metrics. Then memory usage patterns over time."',
        impact: 'Shows structured debugging methodology'
      },
      {
        type: 'good',
        title: 'Ask Clarifying Questions',
        description: 'Gather context before jumping to solutions',
        explanation: '"What\'s our connection pool size? Are errors correlated with traffic spikes? Do we have distributed tracing? What changed recently?"',
        impact: 'Demonstrates understanding that context matters'
      },
      {
        type: 'good',
        title: 'Propose Observability Improvements',
        description: 'Identify gaps in monitoring and logging',
        explanation: '"We need request IDs for tracing, connection pool metrics, and error rate by endpoint. Let me add structured logging for failed requests."',
        impact: 'Shows proactive thinking about long-term system health'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Pick First AI Suggestion',
        description: 'Immediately propose AI\'s first hypothesis as "the fix"',
        explanation: '"AI says it\'s probably race conditions. Let\'s add locks everywhere."',
        impact: 'May waste time fixing the wrong problem or create new issues'
      },
      {
        type: 'bad',
        title: 'No Validation or Testing',
        description: 'Propose solutions without validating hypothesis',
        explanation: '"Let\'s increase the connection pool size to 100. That should fix it."',
        impact: 'Changes production without understanding root cause'
      },
      {
        type: 'bad',
        title: 'Skip Investigation Phase',
        description: 'Don\'t check logs, metrics, or recent changes',
        explanation: '[Doesn\'t ask about logs, monitoring, or recent deployments]',
        impact: 'Misses obvious clues that would lead to root cause'
      }
    ],
    keyTakeaways: [
      'Use AI for brainstorming, not as a diagnostic oracle',
      'Always gather data before proposing solutions',
      'Think systematically: logs → metrics → traces → code',
      'Validate hypotheses before implementing fixes',
      'Consider observability: Can we detect this faster next time?'
    ]
  },
  {
    id: 'q4-both-communication',
    role: 'both',
    category: 'communication',
    difficulty: 'beginner',
    title: 'Communicating AI Usage in Interviews',
    scenario: 'How to talk about using AI tools during interviews',
    context: 'Both candidates and interviewers need clear communication about AI usage.',
    goodApproaches: [
      {
        type: 'good',
        title: 'Candidate: Ask Permission Explicitly',
        description: 'Clarify AI usage policy upfront',
        explanation: '"Is it okay if I use GitHub Copilot and ChatGPT during this interview? I typically use them in my daily work."',
        impact: 'Shows professionalism and avoids misunderstandings'
      },
      {
        type: 'good',
        title: 'Candidate: Narrate Your Process',
        description: 'Think out loud when using AI',
        explanation: '"I\'m going to ask ChatGPT about the standard approach for this problem, then we\'ll review it together and optimize."',
        impact: 'Makes your thought process visible to interviewer'
      },
      {
        type: 'good',
        title: 'Interviewer: State Policy Clearly',
        description: 'Be explicit about what AI tools are allowed',
        explanation: '"You\'re welcome to use AI tools like Copilot or ChatGPT. I\'m more interested in how you think through problems and evaluate solutions."',
        impact: 'Reduces candidate anxiety and sets clear expectations'
      },
      {
        type: 'good',
        title: 'Interviewer: Focus on Judgment',
        description: 'Evaluate HOW they use AI, not WHETHER they use it',
        explanation: '"I noticed you reviewed the AI code and found an edge case bug. That\'s exactly the kind of critical thinking we value."',
        impact: 'Rewards good engineering practices'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Candidate: Use AI Secretly',
        description: 'Try to hide that you\'re using AI tools',
        explanation: '[Minimizes ChatGPT window when screen sharing, pretends to type code from memory]',
        impact: 'If caught, looks dishonest. If not caught, creates ethical issues'
      },
      {
        type: 'bad',
        title: 'Candidate: No Explanation',
        description: 'Use AI silently without narrating',
        explanation: '[Long pause, then suddenly code appears without explanation]',
        impact: 'Interviewer can\'t assess your thinking process'
      },
      {
        type: 'bad',
        title: 'Interviewer: Ambiguous Policy',
        description: 'Don\'t clarify if AI is allowed',
        explanation: '[Says nothing about AI tools, candidate is unsure what\'s acceptable]',
        impact: 'Candidate may avoid helpful tools out of caution, or use them and worry'
      },
      {
        type: 'bad',
        title: 'Interviewer: Ban AI Completely',
        description: 'Prohibit AI tools in interview',
        explanation: '"No AI tools allowed. This tests your coding ability, not ChatGPT\'s."',
        impact: 'Tests unrealistic scenario - developers use AI 82% of the time in real work'
      }
    ],
    keyTakeaways: [
      'Be explicit about AI usage - both sides should communicate clearly',
      'Candidates: Ask permission and narrate your AI usage',
      'Interviewers: State policy upfront and focus on judgment, not just output',
      'Treat AI tools like Stack Overflow - using them is normal, but understanding matters',
      'Good communication about AI builds trust and reduces anxiety'
    ]
  },
  {
    id: 'q5-candidate-ethics',
    role: 'candidate',
    category: 'ethics',
    difficulty: 'advanced',
    title: 'Security and Ethical Considerations',
    scenario: 'AI suggests code with potential security vulnerabilities',
    context: 'You asked AI to generate authentication code, but it has concerning patterns.',
    aiResponse: `def authenticate_user(username, password):
    user = db.query("SELECT * FROM users WHERE username='" + username + "'")
    if user and user.password == password:
        return create_session(user)
    return None`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Identify Security Issues',
        description: 'Spot SQL injection and plaintext password comparison',
        explanation: '"This code has two critical issues: SQL injection vulnerability from string concatenation, and plaintext password comparison instead of hashed passwords."',
        impact: 'Shows security awareness and critical thinking'
      },
      {
        type: 'good',
        title: 'Propose Secure Alternatives',
        description: 'Suggest parameterized queries and bcrypt',
        explanation: '"We should use parameterized queries to prevent SQL injection, and bcrypt.checkpw() to compare against hashed passwords stored in the database."',
        impact: 'Demonstrates knowledge of secure coding practices'
      },
      {
        type: 'good',
        title: 'Ask About Security Requirements',
        description: 'Discuss MFA, rate limiting, session management',
        explanation: '"Should we implement rate limiting to prevent brute force? What about MFA? How long should sessions last?"',
        impact: 'Thinks holistically about authentication security'
      },
      {
        type: 'good',
        title: 'Reference Security Standards',
        description: 'Mention OWASP, industry best practices',
        explanation: '"According to OWASP guidelines, we should also implement account lockout after failed attempts and use secure session tokens."',
        impact: 'Shows you stay current with security standards'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Accept AI Code As-Is',
        description: 'Don\'t review for security vulnerabilities',
        explanation: '"AI generated this authentication code. Should work fine."',
        impact: 'Critical security vulnerabilities make it to production'
      },
      {
        type: 'bad',
        title: 'Trust AI for Security',
        description: 'Assume AI writes secure code',
        explanation: '"I used ChatGPT so the security should be good."',
        impact: 'Research shows AI users write LESS secure code but think it\'s MORE secure (Stanford study)'
      },
      {
        type: 'bad',
        title: 'No Security Considerations',
        description: 'Focus only on functionality, ignore security',
        explanation: '[Tests if login works, doesn\'t check for injection, password handling, or session security]',
        impact: 'Creates major security debt and potential breaches'
      }
    ],
    keyTakeaways: [
      'NEVER trust AI-generated security code without thorough review',
      'Common AI mistakes: SQL injection, XSS, insecure deserialization, plaintext secrets',
      'Always review for OWASP Top 10 vulnerabilities',
      'Stanford research: AI users write less secure code but are overconfident',
      'Security is one area where AI assistance requires EXTRA scrutiny, not less'
    ],
    resources: [
      { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
      { title: 'Stanford Study on AI and Security', url: 'https://arxiv.org/abs/2211.03622' }
    ]
  },
  {
    id: 'q6-candidate-data-structures',
    role: 'candidate',
    category: 'coding',
    difficulty: 'intermediate',
    title: 'Choosing the Right Data Structure',
    scenario: 'You need to implement a cache with O(1) lookup and eviction',
    context: 'Interview question: Design an LRU (Least Recently Used) cache with get() and put() operations.',
    aiPrompt: 'How do I implement an LRU cache in Python with O(1) operations?',
    aiResponse: `Use a combination of:
1. HashMap (dict) for O(1) lookup
2. Doubly linked list for O(1) removal/addition
3. Track head (most recent) and tail (least recent)`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Explain Data Structure Choice',
        description: 'Articulate why you need both HashMap and Doubly Linked List',
        explanation: '"We need O(1) lookup, so HashMap is essential. But we also need O(1) removal from middle when updating order, so a doubly linked list works perfectly. Single linked list would be O(n) for removal."',
        impact: 'Shows you understand time complexity trade-offs and can justify design decisions'
      },
      {
        type: 'good',
        title: 'Identify Edge Cases First',
        description: 'List edge cases before implementing',
        explanation: '"Before coding, let me think: What if capacity is 0? What if we put() an existing key? What if we get() a non-existent key? Should get() update recency?"',
        impact: 'Demonstrates systematic thinking and prevents bugs upfront'
      },
      {
        type: 'good',
        title: 'Start with API Contract',
        description: 'Define the interface clearly',
        explanation: '"Let me define the class: LRUCache(capacity). Methods: get(key) returns value or -1. put(key, value) inserts or updates and evicts if over capacity."',
        impact: 'Shows you think about API design and user expectations'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Just Use OrderedDict',
        description: 'Suggest Python\'s OrderedDict without understanding internals',
        explanation: '"I\'ll just use OrderedDict with move_to_end(). Done."',
        impact: 'Interviewer wants to see if you can implement the data structure, not just use a library'
      },
      {
        type: 'bad',
        title: 'Use Array with Linear Search',
        description: 'Propose O(n) solution without recognizing inefficiency',
        explanation: '[Implements with list.remove() which is O(n)] "This should work fine."',
        impact: 'Misses the core requirement of O(1) operations'
      },
      {
        type: 'bad',
        title: 'Skip Edge Cases',
        description: 'Implement happy path only',
        explanation: '[Codes without handling capacity=0, duplicate keys, or empty cache]',
        impact: 'Code will break in production; shows lack of defensive programming'
      }
    ],
    keyTakeaways: [
      'Always explain WHY you chose specific data structures',
      'Discuss time/space complexity trade-offs explicitly',
      'Edge cases matter more than perfect syntax',
      'Interviewers want to see your problem-solving process, not memorized solutions',
      'If you use AI, understand what it suggests deeply enough to modify it'
    ]
  },
  {
    id: 'q7-candidate-async-programming',
    role: 'candidate',
    category: 'coding',
    difficulty: 'intermediate',
    title: 'Async/Await and Concurrency',
    scenario: 'Fetch data from multiple APIs in parallel',
    context: 'You need to call 5 external APIs and combine their results. Each API takes 2 seconds.',
    aiPrompt: 'How do I call multiple async functions in parallel in JavaScript?',
    aiResponse: `Use Promise.all():

const results = await Promise.all([
  fetch(url1),
  fetch(url2),
  fetch(url3)
]);`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Recognize Parallelization Opportunity',
        description: 'Identify that calls can run concurrently',
        explanation: '"These API calls are independent, so we can parallelize them. Sequential would take 10 seconds, but Promise.all() will take ~2 seconds."',
        impact: 'Shows understanding of async programming and performance optimization'
      },
      {
        type: 'good',
        title: 'Discuss Error Handling',
        description: 'Address what happens if one API fails',
        explanation: '"Promise.all() fails fast if any promise rejects. Should we use Promise.allSettled() to handle partial failures? Depends on requirements."',
        impact: 'Demonstrates production-ready thinking about failure scenarios'
      },
      {
        type: 'good',
        title: 'Consider Rate Limiting',
        description: 'Ask about concurrent request limits',
        explanation: '"Should we throttle requests? Some APIs have rate limits. We might need Promise.map with concurrency: 3 from a library like Bluebird."',
        impact: 'Shows real-world experience with external APIs'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Use Sequential Awaits',
        description: 'Call APIs one at a time',
        explanation: 'await fetch(url1); await fetch(url2); await fetch(url3);  // Takes 6+ seconds',
        impact: 'Major performance issue; shows lack of async/await understanding'
      },
      {
        type: 'bad',
        title: 'Forget Error Handling',
        description: 'No try/catch or .catch() handler',
        explanation: '[Uses Promise.all() with no error handling]',
        impact: 'App crashes if any API fails; not production-ready'
      },
      {
        type: 'bad',
        title: 'Misuse async/await',
        description: 'Create promises but don\'t await them properly',
        explanation: 'const p1 = fetch(url1); const p2 = fetch(url2); return [p1, p2]; // Returns promises, not values',
        impact: 'Common mistake that leads to [object Promise] instead of actual data'
      }
    ],
    keyTakeaways: [
      'Promise.all() for parallel execution when all must succeed',
      'Promise.allSettled() when you want results even if some fail',
      'Always discuss error handling and recovery strategies',
      'Recognize opportunities for parallelization to improve performance',
      'Consider rate limiting and backpressure in production scenarios'
    ]
  },
  {
    id: 'q8-interviewer-system-design',
    role: 'interviewer',
    category: 'system-design',
    difficulty: 'advanced',
    title: 'Evaluating AI-Assisted System Design',
    scenario: 'Candidate uses AI to generate system architecture diagram',
    context: 'You need to assess their system design skills when AI created the initial design.',
    goodApproaches: [
      {
        type: 'good',
        title: 'Ask About Trade-offs',
        description: 'Explore alternative approaches and their pros/cons',
        explanation: '"AI suggested a microservices architecture. Why is that better than a monolith for this use case? What are the downsides?"',
        impact: 'Tests whether they understand the design or just accepted AI output'
      },
      {
        type: 'good',
        title: 'Probe Scaling Scenarios',
        description: 'Ask how design handles 10x or 100x growth',
        explanation: '"This works for 100K users. What changes when you hit 10M users? Where are the bottlenecks?"',
        impact: 'Reveals depth of systems thinking'
      },
      {
        type: 'good',
        title: 'Test Operational Thinking',
        description: 'Ask about deployment, monitoring, debugging',
        explanation: '"How would you debug a failure in this system? What metrics would you track? How do you handle rollbacks?"',
        impact: 'Separates theoretical knowledge from production experience'
      },
      {
        type: 'good',
        title: 'Challenge the Design',
        description: 'Point out potential issues to see if they can defend choices',
        explanation: '"I notice you have a single database. What happens if it goes down? Why didn\'t AI mention that?"',
        impact: 'Tests critical thinking and ability to improve on AI suggestions'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Accept Diagram Without Questions',
        description: 'Don\'t probe understanding if diagram looks professional',
        explanation: '"Nice diagram! Looks like you know system design well."',
        impact: 'May hire someone who can use AI tools but lacks design judgment'
      },
      {
        type: 'bad',
        title: 'Focus on Buzzwords',
        description: 'Judge based on trendy technology mentions',
        explanation: '"I see you used Kubernetes, Kafka, and GraphQL. Great choices!"',
        impact: 'Rewards dropping buzzwords without understanding trade-offs'
      },
      {
        type: 'bad',
        title: 'Don\'t Test Modifications',
        description: 'Accept initial design without exploring adaptations',
        explanation: '[Doesn\'t ask about scaling, failure scenarios, or alternative approaches]',
        impact: 'Misses whether candidate can think dynamically about systems'
      }
    ],
    keyTakeaways: [
      'System design is about trade-offs, not just generating diagrams',
      'Ask "why this over that?" to test understanding',
      'Probe scaling, failure scenarios, and operational concerns',
      'Look for candidates who challenge and improve AI suggestions',
      'Best candidates use AI for validation, not initial design thinking'
    ]
  },
  {
    id: 'q9-candidate-ml-model-design',
    role: 'candidate',
    category: 'system-design',
    difficulty: 'advanced',
    title: 'ML Model Selection and Training',
    scenario: 'Design a fraud detection system for credit card transactions',
    context: 'You need to build a real-time fraud detection ML model with high precision and recall.',
    aiPrompt: 'What ML model should I use for credit card fraud detection?',
    aiResponse: `Recommended approaches:
1. Random Forest or XGBoost for tabular data
2. Neural Networks if you have large dataset
3. Anomaly detection (Isolation Forest, One-Class SVM)
4. Ensemble methods for best results

Consider class imbalance - fraud is typically <1% of transactions.`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Discuss Class Imbalance Strategy',
        description: 'Address the fundamental challenge upfront',
        explanation: '"Fraud is rare - maybe 0.1% of transactions. We need SMOTE for oversampling, or class weights, or use precision-recall curve instead of ROC-AUC. What\'s the cost of false positives vs false negatives?"',
        impact: 'Shows you understand ML fundamentals and business trade-offs'
      },
      {
        type: 'good',
        title: 'Ask About Latency Requirements',
        description: 'Connect model choice to system constraints',
        explanation: '"Real-time means <100ms? That rules out complex ensembles. Maybe a shallow decision tree or linear model first, then complex model async for review?"',
        impact: 'Demonstrates understanding that ML doesn\'t exist in isolation'
      },
      {
        type: 'good',
        title: 'Propose A/B Testing Strategy',
        description: 'Think about gradual rollout',
        explanation: '"We should start with 5% traffic, measure false positive rate in production, and compare to rule-based baseline. Need monitoring for model drift."',
        impact: 'Shows production ML experience and risk management'
      },
      {
        type: 'good',
        title: 'Consider Feature Engineering',
        description: 'Discuss what features matter',
        explanation: '"Beyond transaction amount and merchant, we need: time since last transaction, location change velocity, merchant category patterns, device fingerprint. Should we use embeddings for categorical features?"',
        impact: 'Reveals depth of domain knowledge and feature engineering skill'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Just Pick "Best" Algorithm',
        description: 'Choose model without considering constraints',
        explanation: '"Let\'s use a deep neural network with 10 layers. That\'s state of the art."',
        impact: 'Ignores latency, interpretability, and may be overkill for the problem'
      },
      {
        type: 'bad',
        title: 'Ignore Class Imbalance',
        description: 'Train on imbalanced data without adjustment',
        explanation: '"We have 1M transactions, 1K fraud cases. Just train the model on all data."',
        impact: 'Model will predict "not fraud" 99.9% of the time and be useless'
      },
      {
        type: 'bad',
        title: 'Skip Production Considerations',
        description: 'Focus only on model accuracy',
        explanation: '"I got 99% accuracy! Ship it."',
        impact: '99% accuracy means nothing with 0.1% fraud rate - that\'s worse than predicting "no fraud" always'
      },
      {
        type: 'bad',
        title: 'No Monitoring Plan',
        description: 'Don\'t discuss model degradation',
        explanation: '[Never mentions drift detection, retraining, or performance monitoring]',
        impact: 'Model will silently degrade as fraud patterns evolve'
      }
    ],
    keyTakeaways: [
      'Class imbalance is the #1 challenge in fraud detection',
      'Production ML requires thinking about latency, monitoring, and drift',
      'Accuracy is often the wrong metric - use precision/recall/F1',
      'Always propose A/B testing and gradual rollout',
      'Feature engineering often matters more than algorithm choice'
    ]
  },
  {
    id: 'q10-candidate-distributed-systems',
    role: 'candidate',
    category: 'system-design',
    difficulty: 'advanced',
    title: 'Designing Distributed Cache',
    scenario: 'Design a distributed caching layer for microservices',
    context: 'Your system has 50 microservices making repeated database queries. You need a shared cache.',
    aiPrompt: 'How do I design a distributed cache system?',
    aiResponse: `Key components:
1. Cache nodes: Redis/Memcached cluster
2. Consistent hashing for data distribution
3. Replication for availability
4. Eviction policy (LRU/LFU)
5. Cache invalidation strategy`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Discuss CAP Theorem Trade-offs',
        description: 'Address consistency vs availability',
        explanation: '"During network partition, do we prefer consistency or availability? If reads can be stale for 1 second, we can use eventual consistency and get better availability."',
        impact: 'Shows understanding of distributed systems fundamentals'
      },
      {
        type: 'good',
        title: 'Propose Cache Warming Strategy',
        description: 'Handle cold start problem',
        explanation: '"When a cache node fails and restarts, it\'s cold. Should we pre-warm popular keys? Or use probabilistic cache aside with fallback to DB?"',
        impact: 'Demonstrates awareness of operational challenges'
      },
      {
        type: 'good',
        title: 'Address Thundering Herd',
        description: 'Prevent cache stampede on expiration',
        explanation: '"If a popular key expires, 1000 requests hit the DB simultaneously. We need distributed locks or probabilistic early expiration to prevent this."',
        impact: 'Shows experience with production caching issues'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Just Say "Use Redis"',
        description: 'Name a tool without architecture',
        explanation: '"We\'ll use Redis. Done."',
        impact: 'Doesn\'t address data distribution, replication, invalidation, or failure modes'
      },
      {
        type: 'bad',
        title: 'Ignore Cache Invalidation',
        description: 'Don\'t discuss keeping cache consistent with DB',
        explanation: '[Never mentions how cache gets updated when DB changes]',
        impact: 'Cache will serve stale data indefinitely - one of hardest problems in CS'
      },
      {
        type: 'bad',
        title: 'No Monitoring Strategy',
        description: 'Skip metrics and observability',
        explanation: '[Doesn\'t mention hit rate, latency, memory usage tracking]',
        impact: 'Can\'t tell if cache is helping or hurting performance'
      }
    ],
    keyTakeaways: [
      'Cache invalidation is genuinely one of the hardest problems',
      'CAP theorem: you must choose between consistency and availability',
      'Consistent hashing enables horizontal scaling without full rehash',
      'Thundering herd and cold starts are real operational concerns',
      'Always monitor hit rate, latency, and memory usage'
    ]
  },
  {
    id: 'q11-candidate-sql-optimization',
    role: 'candidate',
    category: 'debugging',
    difficulty: 'intermediate',
    title: 'Optimizing Slow Database Queries',
    scenario: 'A dashboard query takes 30 seconds to load',
    context: 'Users complain that the analytics dashboard is unusable due to slow query performance.',
    aiPrompt: 'Why is my PostgreSQL query slow and how do I fix it?',
    aiResponse: `Common causes:
1. Missing indexes on WHERE/JOIN columns
2. N+1 query problem
3. Large dataset without pagination
4. Expensive JOINs or subqueries
5. No query optimization (EXPLAIN ANALYZE)`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Start with EXPLAIN ANALYZE',
        description: 'Get data before optimizing',
        explanation: '"Let me run EXPLAIN ANALYZE first to see the query plan. Are we doing sequential scans? Which part takes the most time?"',
        impact: 'Systematic debugging beats guessing; shows you know how to profile'
      },
      {
        type: 'good',
        title: 'Check for N+1 Queries',
        description: 'Look at application-level query patterns',
        explanation: '"Is the application making one query per row? That\'s N+1. We should use a JOIN or batch the queries."',
        impact: 'Shows you understand ORM pitfalls and database interaction patterns'
      },
      {
        type: 'good',
        title: 'Propose Index Strategy',
        description: 'But understand index trade-offs',
        explanation: '"Adding an index on user_id and created_at would help. But indexes slow down writes and use disk space. What\'s our write/read ratio?"',
        impact: 'Demonstrates nuanced understanding - indexes aren\'t free'
      },
      {
        type: 'good',
        title: 'Consider Materialized Views',
        description: 'Suggest pre-computing if query is expensive',
        explanation: '"If this dashboard is queried often but data changes hourly, we could use a materialized view refreshed on schedule."',
        impact: 'Shows knowledge of advanced database features'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Add Indexes Blindly',
        description: 'Index everything without analysis',
        explanation: '"Let\'s add indexes on every column in the WHERE clause."',
        impact: 'Wastes disk space, slows down writes, may not help if query doesn\'t use them'
      },
      {
        type: 'bad',
        title: 'Blame the Database',
        description: 'Assume database is the bottleneck',
        explanation: '"PostgreSQL is slow. Let\'s switch to MongoDB."',
        impact: 'Likely a query problem, not a database problem. Major migration for wrong reason'
      },
      {
        type: 'bad',
        title: 'Cache Without Fixing Query',
        description: 'Add caching layer to hide bad query',
        explanation: '"Just cache the results for 1 hour."',
        impact: 'Cache is a band-aid; someone will hit the slow query eventually'
      }
    ],
    keyTakeaways: [
      'Always use EXPLAIN ANALYZE before optimizing',
      'N+1 queries are a common ORM anti-pattern',
      'Indexes have trade-offs: speed up reads, slow down writes',
      'Consider materialized views or summary tables for expensive aggregations',
      'Profile and measure - don\'t optimize based on assumptions'
    ]
  },
  {
    id: 'q12-both-api-design',
    role: 'both',
    category: 'system-design',
    difficulty: 'intermediate',
    title: 'RESTful API Design Best Practices',
    scenario: 'Design API endpoints for a blog platform',
    context: 'You\'re building REST APIs for creating, reading, updating, and deleting blog posts and comments.',
    aiPrompt: 'What are REST API best practices for a blog platform?',
    aiResponse: `RESTful design:
- GET /posts - List all posts
- GET /posts/:id - Get single post
- POST /posts - Create post
- PUT /posts/:id - Update post
- DELETE /posts/:id - Delete post
- GET /posts/:id/comments - Get comments for post`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Use Proper HTTP Status Codes',
        description: 'Return meaningful status codes',
        explanation: '"200 for success, 201 for created, 404 for not found, 400 for bad input, 401 for unauthorized, 500 for server error. Status codes communicate intent."',
        impact: 'Makes API self-documenting and easier to debug'
      },
      {
        type: 'good',
        title: 'Design for Pagination',
        description: 'Don\'t return unlimited results',
        explanation: '"GET /posts should support ?page=1&limit=20. Return total count in response. Link headers for next/prev pages."',
        impact: 'Prevents performance issues as data grows'
      },
      {
        type: 'good',
        title: 'Version the API',
        description: 'Plan for breaking changes',
        explanation: '"Use /api/v1/posts in URL or Accept: application/vnd.api+json;version=1 header. Allows evolving API without breaking clients."',
        impact: 'Enables backward compatibility and gradual migration'
      },
      {
        type: 'good',
        title: 'Include Rate Limiting',
        description: 'Protect against abuse',
        explanation: '"Return X-RateLimit-Remaining and X-RateLimit-Reset headers. Return 429 Too Many Requests when exceeded."',
        impact: 'Prevents DoS and ensures fair usage'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Use Verbs in URLs',
        description: 'Non-RESTful naming',
        explanation: 'POST /createPost, GET /getAllPosts, POST /deletePost',
        impact: 'Not RESTful; HTTP verbs already express action'
      },
      {
        type: 'bad',
        title: 'Return 200 for All Responses',
        description: 'Misuse status codes',
        explanation: '{ "status": 200, "error": "Post not found" } // Returns HTTP 200',
        impact: 'Clients can\'t use standard HTTP error handling'
      },
      {
        type: 'bad',
        title: 'No Error Details',
        description: 'Return generic error messages',
        explanation: '{ "error": "Bad request" } // No details about what\'s wrong',
        impact: 'Hard to debug; poor developer experience'
      },
      {
        type: 'bad',
        title: 'Expose Internal IDs',
        description: 'Use database auto-increment IDs',
        explanation: 'GET /posts/12345 // Leaks information about database size and growth',
        impact: 'Security issue; consider UUIDs or hash IDs instead'
      }
    ],
    keyTakeaways: [
      'REST uses HTTP verbs (GET, POST, PUT, DELETE) - no verbs in URLs',
      'Status codes communicate success/failure - use them correctly',
      'Always paginate list endpoints to prevent performance issues',
      'Version APIs from day one to allow evolution',
      'Include rate limiting, authentication, and proper error messages'
    ]
  },
  {
    id: 'q13-candidate-react-performance',
    role: 'candidate',
    category: 'debugging',
    difficulty: 'intermediate',
    title: 'React Performance Optimization',
    scenario: 'Large React list re-renders on every keystroke',
    context: 'You have a searchable table with 1000 rows. Typing in the search box causes the entire table to re-render and feels laggy.',
    aiPrompt: 'How do I optimize React performance for a large list?',
    aiResponse: `Optimization strategies:
1. Use React.memo() to prevent unnecessary re-renders
2. Use useMemo() for expensive calculations
3. Use useCallback() to memoize functions
4. Virtualize long lists with react-window
5. Debounce search input`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Profile Before Optimizing',
        description: 'Use React DevTools Profiler',
        explanation: '"Let me profile this with React DevTools to see what\'s re-rendering and why. Is it the search component, the list, or both?"',
        impact: 'Data-driven optimization beats guessing'
      },
      {
        type: 'good',
        title: 'Identify the Root Cause',
        description: 'Understand why re-renders happen',
        explanation: '"Are we passing new object/array references on each render? Is the search state in the wrong component? Let me check the component tree."',
        impact: 'Fixes the architecture problem, not just symptoms'
      },
      {
        type: 'good',
        title: 'Apply Targeted Solutions',
        description: 'Don\'t optimize everything',
        explanation: '"The list items are pure - let\'s memo them. The search is fine. For 1000 rows, virtualization with react-window makes sense."',
        impact: 'Surgical optimization is better than blanket useMemo everywhere'
      },
      {
        type: 'good',
        title: 'Debounce User Input',
        description: 'Reduce filter frequency',
        explanation: '"Instead of filtering on every keystroke, let\'s debounce by 300ms. That reduces renders from 10/sec to 3/sec."',
        impact: 'Often the simplest and most effective solution'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Wrap Everything in useMemo',
        description: 'Over-optimize without measuring',
        explanation: '[Adds useMemo and useCallback everywhere without profiling]',
        impact: 'Makes code harder to read with minimal benefit; memoization has overhead'
      },
      {
        type: 'bad',
        title: 'Blame React',
        description: 'Think React is slow',
        explanation: '"React is slow with large lists. Let\'s rewrite in vanilla JS."',
        impact: 'React is rarely the bottleneck; usually an architecture or algorithm issue'
      },
      {
        type: 'bad',
        title: 'Skip Key Prop',
        description: 'Use index as key or omit keys',
        explanation: '{items.map((item, idx) => <Row key={idx} />)}',
        impact: 'React can\'t track which items changed; causes unnecessary re-renders and bugs'
      }
    ],
    keyTakeaways: [
      'Profile first with React DevTools - measure before optimizing',
      'Identify why re-renders happen (state location, prop references)',
      'React.memo for expensive pure components',
      'Debouncing input is often simpler than complex memoization',
      'Virtualization (react-window) for truly long lists (1000+ items)'
    ]
  },
  {
    id: 'q14-interviewer-code-review',
    role: 'interviewer',
    category: 'communication',
    difficulty: 'intermediate',
    title: 'Reviewing AI-Generated Pull Requests',
    scenario: 'Candidate submits PR with AI-generated code',
    context: 'You\'re reviewing a PR where the candidate admits they used AI to generate most of the code.',
    goodApproaches: [
      {
        type: 'good',
        title: 'Ask About Design Decisions',
        description: 'Test understanding of the approach',
        explanation: '"Walk me through why you chose this architecture. What alternatives did you consider?"',
        impact: 'Reveals whether they understand the code or just copied it'
      },
      {
        type: 'good',
        title: 'Request Modification',
        description: 'Ask them to extend or modify the code',
        explanation: '"Can you add error handling for network timeouts? What would you change if this needed to support 10x traffic?"',
        impact: 'Tests if they can work with and modify AI-generated code'
      },
      {
        type: 'good',
        title: 'Probe Edge Cases',
        description: 'Ask about scenarios AI might have missed',
        explanation: '"What happens if two users update the same record simultaneously? Did you test with empty input?"',
        impact: 'Shows whether they reviewed the code critically'
      },
      {
        type: 'good',
        title: 'Check for Security Issues',
        description: 'AI often generates insecure code',
        explanation: '"I see you\'re concatenating user input into SQL. Is this vulnerable to injection? What about input validation?"',
        impact: 'Tests security awareness and code review skills'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Reject AI Usage Outright',
        description: 'Policy against AI is unrealistic',
        explanation: '"We don\'t allow AI-generated code here. Rewrite this without AI."',
        impact: 'Disconnected from reality - 82% of devs use AI tools'
      },
      {
        type: 'bad',
        title: 'Accept Without Questions',
        description: 'Don\'t verify understanding',
        explanation: '"Looks good, tests pass. Approved."',
        impact: 'May merge code the author doesn\'t understand or that has subtle bugs'
      },
      {
        type: 'bad',
        title: 'Only Check Style',
        description: 'Focus on formatting instead of logic',
        explanation: '"Please fix the indentation and add semicolons."',
        impact: 'Misses logic errors, security issues, and architecture problems'
      }
    ],
    keyTakeaways: [
      'AI code requires more careful review, not less',
      'Test understanding by asking for modifications or explanations',
      'Check for security issues - AI often generates vulnerable code',
      'Probe edge cases and error handling',
      'Accepting AI use while ensuring code quality is the right balance'
    ]
  },
  {
    id: 'q15-backend-api-auth',
    role: 'candidate',
    category: 'coding',
    difficulty: 'advanced',
    title: 'Backend: Implementing JWT Authentication',
    scenario: 'Build secure JWT-based authentication for a REST API',
    context: 'Your API needs stateless authentication with access and refresh tokens.',
    aiPrompt: 'How do I implement JWT authentication with refresh tokens in Node.js?',
    aiResponse: `const jwt = require('jsonwebtoken');

function generateTokens(userId) {
  const accessToken = jwt.sign({ userId }, 'secret', { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId }, 'secret', { expiresIn: '7d' });
  return { accessToken, refreshToken };
}`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Identify Security Issues Immediately',
        description: 'Spot the hardcoded secret and lack of token storage',
        explanation: '"This AI code has critical issues: hardcoded secret should be in env vars, refresh tokens need to be stored in database to enable revocation, and we should use different secrets for access vs refresh tokens."',
        impact: 'Shows security awareness and production-ready thinking'
      },
      {
        type: 'good',
        title: 'Discuss Token Rotation',
        description: 'Propose refresh token rotation strategy',
        explanation: '"When refresh token is used, we should issue a new refresh token and invalidate the old one. This limits the window for token theft."',
        impact: 'Demonstrates understanding of advanced auth patterns'
      },
      {
        type: 'good',
        title: 'Consider Token Storage',
        description: 'Discuss where tokens should be stored client-side',
        explanation: '"Access token in memory, refresh token in httpOnly secure cookie. LocalStorage is vulnerable to XSS attacks."',
        impact: 'Shows web security knowledge beyond just backend'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Accept Hardcoded Secret',
        description: 'Use AI code with hardcoded credentials',
        explanation: '[Uses jwt.sign with hardcoded "secret" string in production]',
        impact: 'Major security vulnerability; anyone can forge tokens'
      },
      {
        type: 'bad',
        title: 'No Refresh Token Storage',
        description: 'Don\'t store refresh tokens for revocation',
        explanation: '"Refresh tokens are stateless, we don\'t need to store them."',
        impact: 'Can\'t revoke tokens if account is compromised'
      },
      {
        type: 'bad',
        title: 'Skip Token Expiry Validation',
        description: 'Don\'t verify token expiry in middleware',
        explanation: '[Verifies signature but not exp claim]',
        impact: 'Expired tokens still work; security issue'
      }
    ],
    keyTakeaways: [
      'Never hardcode secrets - use environment variables',
      'Refresh tokens must be stored for revocation capability',
      'Use different secrets for access and refresh tokens',
      'Token storage matters: httpOnly cookies > localStorage',
      'Always validate both signature AND expiry claims'
    ]
  },
  {
    id: 'q16-backend-database-transactions',
    role: 'candidate',
    category: 'coding',
    difficulty: 'advanced',
    title: 'Backend: Database Transactions and Race Conditions',
    scenario: 'Handle concurrent money transfers without double-spending',
    context: 'Your banking API needs to prevent race conditions during simultaneous transfers from the same account.',
    aiPrompt: 'How do I prevent race conditions in database transactions for money transfers?',
    aiResponse: `async function transferMoney(fromAccount, toAccount, amount) {
  const session = await db.startSession();
  session.startTransaction();
  try {
    await Account.findByIdAndUpdate(fromAccount, { $inc: { balance: -amount }});
    await Account.findByIdAndUpdate(toAccount, { $inc: { balance: amount }});
    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    throw error;
  }
}`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Identify Missing Balance Check',
        description: 'Spot that AI code doesn\'t validate sufficient funds',
        explanation: '"This code is missing a critical check: what if fromAccount has $100 but we\'re transferring $500? We need to read the balance, check if amount <= balance, THEN update. All within the transaction."',
        impact: 'Prevents overdrafts and negative balances'
      },
      {
        type: 'good',
        title: 'Discuss Isolation Levels',
        description: 'Understand transaction isolation',
        explanation: '"We need READ COMMITTED or SERIALIZABLE isolation to prevent dirty reads. MongoDB uses snapshot isolation by default, but we should explicitly set it."',
        impact: 'Shows deep understanding of database concurrency'
      },
      {
        type: 'good',
        title: 'Propose Optimistic Locking',
        description: 'Suggest version field to detect concurrent updates',
        explanation: '"We could add a version field and use findOneAndUpdate with version in the query. If version doesn\'t match, transaction fails and we retry."',
        impact: 'Demonstrates knowledge of concurrency control patterns'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Trust AI Code Completely',
        description: 'Accept transaction code without testing race conditions',
        explanation: '"AI used transactions, so it should be safe from race conditions."',
        impact: 'Missing balance validation means account can go negative'
      },
      {
        type: 'bad',
        title: 'Use Sleep/Delays',
        description: 'Try to "fix" race conditions with setTimeout',
        explanation: '"Let\'s add a small delay between read and write to avoid conflicts."',
        impact: 'Doesn\'t solve the problem; just makes race window smaller'
      },
      {
        type: 'bad',
        title: 'No Retry Logic',
        description: 'Don\'t handle transaction conflicts',
        explanation: '[Transaction fails on conflict, returns error to user instead of retrying]',
        impact: 'Poor user experience; many legitimate requests will fail'
      }
    ],
    keyTakeaways: [
      'Transactions alone don\'t prevent all race conditions',
      'Always validate business rules (like sufficient balance) within transaction',
      'Understand isolation levels: READ COMMITTED, REPEATABLE READ, SERIALIZABLE',
      'Optimistic locking (version fields) is often better than pessimistic locks',
      'Test race conditions explicitly with concurrent requests'
    ]
  },
  {
    id: 'q17-frontend-state-management',
    role: 'candidate',
    category: 'coding',
    difficulty: 'intermediate',
    title: 'Frontend: React State Management Patterns',
    scenario: 'Manage complex form state with validation',
    context: 'Multi-step checkout form with validation, API calls, and error handling.',
    aiPrompt: 'How should I manage state for a complex multi-step form in React?',
    aiResponse: `Options:
1. useState for simple local state
2. useReducer for complex state logic
3. Context API for sharing state
4. Redux/Zustand for global state
5. React Hook Form for form-specific state`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Start with Requirements',
        description: 'Ask clarifying questions about the form',
        explanation: '"Before choosing a solution, let me understand: Do other components need this state? Is there complex validation logic? Do we need to persist form data? How many steps?"',
        impact: 'Shows you don\'t cargo-cult solutions without understanding needs'
      },
      {
        type: 'good',
        title: 'Propose Progressive Enhancement',
        description: 'Start simple, add complexity as needed',
        explanation: '"Let\'s start with useState for each step. If we need cross-step validation, upgrade to useReducer. If other components need it, add Context. We can always refactor."',
        impact: 'Practical approach; avoids over-engineering'
      },
      {
        type: 'good',
        title: 'Consider Form Libraries',
        description: 'Evaluate React Hook Form or Formik',
        explanation: '"For complex validation, React Hook Form handles field-level validation, touched state, and errors out of the box. Less code to maintain than rolling our own."',
        impact: 'Shows awareness of ecosystem and when to use libraries'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Jump to Redux Immediately',
        description: 'Over-engineer with global state',
        explanation: '"Let\'s use Redux for this form."',
        impact: 'Massive overkill; Redux adds complexity that\'s not needed for local form state'
      },
      {
        type: 'bad',
        title: 'Use Props for Everything',
        description: 'Prop drill through multiple components',
        explanation: '[Passes formData, setFormData, errors, setErrors through 5 levels of components]',
        impact: 'Props drilling hell; hard to maintain and refactor'
      },
      {
        type: 'bad',
        title: 'Store Everything in URL',
        description: 'Use query params for complex state',
        explanation: '"Let\'s put all form data in URL query parameters."',
        impact: 'URL becomes huge, sensitive data exposed in URL, poor UX'
      }
    ],
    keyTakeaways: [
      'Choose state solution based on actual requirements, not trends',
      'Start simple (useState) and refactor when needed',
      'Consider form libraries for complex validation (React Hook Form, Formik)',
      'Context is for shared state, not all state',
      'Redux/Zustand are for global app state, not local component state'
    ]
  },
  {
    id: 'q18-frontend-accessibility',
    role: 'candidate',
    category: 'coding',
    difficulty: 'intermediate',
    title: 'Frontend: Web Accessibility (A11y)',
    scenario: 'Make a custom dropdown component accessible',
    context: 'You built a custom dropdown menu, but it fails accessibility audit.',
    aiPrompt: 'How do I make a custom dropdown accessible?',
    aiResponse: `Add ARIA attributes:
- role="listbox" on container
- role="option" on items
- aria-expanded on trigger
- aria-selected on selected item
- Handle keyboard navigation (Arrow keys, Enter, Esc)`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Explain Why Accessibility Matters',
        description: 'Discuss beyond compliance',
        explanation: '"20% of users have disabilities. Screen readers, keyboard-only users, low vision - we need to serve them all. Plus, good a11y improves UX for everyone."',
        impact: 'Shows you care about inclusive design, not just checking boxes'
      },
      {
        type: 'good',
        title: 'Test with Actual Tools',
        description: 'Use screen reader and keyboard',
        explanation: '"Let me test with VoiceOver/NVDA and keyboard only. Does it announce correctly? Can I navigate with Tab and Arrow keys? Is focus visible?"',
        impact: 'Demonstrates practical a11y testing, not just theory'
      },
      {
        type: 'good',
        title: 'Consider Using Existing Solutions',
        description: 'Mention Headless UI or Radix',
        explanation: '"Libraries like Radix UI or Headless UI have accessible dropdowns built-in. Should we use those instead of custom implementation?"',
        impact: 'Shows pragmatism; accessibility is hard to get right from scratch'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Just Add ARIA Without Testing',
        description: 'Slap on ARIA attributes blindly',
        explanation: '[Adds role="listbox" and aria-expanded without keyboard navigation]',
        impact: 'ARIA without proper implementation makes things worse for screen readers'
      },
      {
        type: 'bad',
        title: 'Skip Keyboard Navigation',
        description: 'Mouse-only interaction',
        explanation: '"Keyboard users can just use Tab to get to the dropdown items."',
        impact: 'Completely unusable for keyboard-only users'
      },
      {
        type: 'bad',
        title: 'Treat A11y as Afterthought',
        description: 'Don\'t think about it until audit fails',
        explanation: '"We\'ll add accessibility later if we have time."',
        impact: 'Much harder to retrofit; often never gets done'
      }
    ],
    keyTakeaways: [
      'Accessibility is not optional - 20% of users need it',
      'ARIA without proper implementation makes things worse',
      'Always test with screen reader and keyboard navigation',
      'Consider using battle-tested libraries (Radix UI, Headless UI)',
      'Build accessibility in from the start, not as afterthought'
    ]
  },
  {
    id: 'q19-data-etl-pipeline',
    role: 'candidate',
    category: 'system-design',
    difficulty: 'advanced',
    title: 'Data: Designing ETL Pipeline',
    scenario: 'Process 10TB of logs daily for analytics',
    context: 'You need to extract, transform, and load data from application logs into a data warehouse.',
    aiPrompt: 'How do I design a scalable ETL pipeline for processing large log files?',
    aiResponse: `Architecture:
1. Ingestion: Kafka or S3 for raw logs
2. Processing: Apache Spark or AWS Glue
3. Transformation: Clean, dedupe, aggregate
4. Storage: Data warehouse (Snowflake, BigQuery, Redshift)
5. Orchestration: Airflow or Prefect`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Discuss Batch vs Streaming',
        description: 'Understand latency requirements',
        explanation: '"Do we need real-time analytics or is hourly okay? Batch (Spark) is simpler and cheaper. Streaming (Flink, Spark Streaming) is complex but gives real-time insights."',
        impact: 'Shows you optimize for requirements, not resume-driven development'
      },
      {
        type: 'good',
        title: 'Address Data Quality',
        description: 'Plan for schema validation and bad data',
        explanation: '"We need schema validation at ingestion. What happens with malformed logs? Dead letter queue for bad records. Data quality checks before loading to warehouse."',
        impact: 'Demonstrates experience with real data pipelines'
      },
      {
        type: 'good',
        title: 'Propose Idempotency Strategy',
        description: 'Handle reprocessing and failures',
        explanation: '"Partitions by date/hour. If processing fails, we can rerun without duplicates. Use UPSERT or deduplication keys."',
        impact: 'Shows understanding of distributed system failure modes'
      },
      {
        type: 'good',
        title: 'Consider Cost Optimization',
        description: 'Discuss data lifecycle and compression',
        explanation: '"Recent data in hot storage, older data in cold storage (S3 Glacier). Use Parquet format for 10x compression. Partition by date for query performance."',
        impact: 'Thinks about operational costs and efficiency'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Just Name Technologies',
        description: 'List buzzwords without architecture',
        explanation: '"We\'ll use Kafka, Spark, and Snowflake."',
        impact: 'Doesn\'t explain data flow, error handling, or scaling strategy'
      },
      {
        type: 'bad',
        title: 'Ignore Failure Scenarios',
        description: 'Design only happy path',
        explanation: '[Never discusses what happens when Spark job fails or data is corrupted]',
        impact: 'Pipeline will have frequent outages and data quality issues'
      },
      {
        type: 'bad',
        title: 'No Monitoring Plan',
        description: 'Skip observability',
        explanation: '[Doesn\'t mention metrics, alerts, or data quality dashboards]',
        impact: 'Can\'t detect when pipeline is broken or producing bad data'
      }
    ],
    keyTakeaways: [
      'Batch vs streaming depends on latency requirements and complexity',
      'Data quality validation is critical - plan for bad data',
      'Idempotency allows safe reprocessing on failures',
      'Partition data by time for query performance and lifecycle management',
      'Monitor data freshness, volume, and quality metrics'
    ]
  },
  {
    id: 'q20-data-sql-window-functions',
    role: 'candidate',
    category: 'coding',
    difficulty: 'advanced',
    title: 'Data: SQL Window Functions for Analytics',
    scenario: 'Calculate running totals and moving averages',
    context: 'Analytics query needs to show daily revenue, 7-day moving average, and cumulative total.',
    aiPrompt: 'How do I write SQL with running totals and moving averages?',
    aiResponse: `SELECT
  date,
  revenue,
  SUM(revenue) OVER (ORDER BY date) as cumulative_total,
  AVG(revenue) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) as moving_avg_7day
FROM daily_revenue
ORDER BY date;`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Explain Window Functions',
        description: 'Articulate how OVER clause works',
        explanation: '"OVER creates a window of rows. ORDER BY date means cumulative. ROWS BETWEEN 6 PRECEDING AND CURRENT ROW gives us 7 days total for moving average."',
        impact: 'Shows deep SQL knowledge beyond basic queries'
      },
      {
        type: 'good',
        title: 'Handle Edge Cases',
        description: 'Discuss first 6 days of moving average',
        explanation: '"First 6 days won\'t have full 7-day window. Should we use RANGE instead of ROWS? Or filter WHERE date > DATE_SUB(MIN(date), INTERVAL 6 DAY)?"',
        impact: 'Demonstrates attention to data correctness'
      },
      {
        type: 'good',
        title: 'Consider Performance',
        description: 'Discuss indexes and materialized views',
        explanation: '"Window functions can be slow on large tables. Index on date column helps. If this query runs often, consider materialized view refreshed daily."',
        impact: 'Thinks about production performance'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Use Self-Join Instead',
        description: 'Implement with correlated subquery',
        explanation: '[Uses SELECT SUM(revenue) FROM daily_revenue dr2 WHERE dr2.date <= dr1.date for each row]',
        impact: 'O(n²) query; window functions are O(n) - performance disaster'
      },
      {
        type: 'bad',
        title: 'Calculate in Application Code',
        description: 'Fetch all data and compute in backend',
        explanation: '"Let\'s pull all rows into Python and calculate running total in a loop."',
        impact: 'Transfers huge datasets; should leverage database for computation'
      },
      {
        type: 'bad',
        title: 'Ignore NULL Values',
        description: 'Don\'t handle missing data',
        explanation: '[Doesn\'t consider what happens if revenue is NULL for some days]',
        impact: 'Moving average calculation breaks or gives incorrect results'
      }
    ],
    keyTakeaways: [
      'Window functions (OVER) are powerful for analytics queries',
      'Use ROWS for physical row counts, RANGE for logical ranges',
      'Window functions are more efficient than self-joins for running calculations',
      'Handle edge cases like incomplete windows and NULL values',
      'Index on ORDER BY columns for better performance'
    ]
  },
  {
    id: 'q21-ml-model-training',
    role: 'candidate',
    category: 'system-design',
    difficulty: 'advanced',
    title: 'ML: Training Pipeline and Model Deployment',
    scenario: 'Build production ML training pipeline',
    context: 'Your ML model needs retraining weekly as new data arrives. Current manual process takes 2 days.',
    aiPrompt: 'How do I build an automated ML training pipeline?',
    aiResponse: `Components:
1. Data ingestion: Pull new training data from warehouse
2. Feature engineering: Transform raw data
3. Model training: Train multiple models, pick best
4. Validation: Test on holdout set
5. Deployment: Replace production model if better
6. Monitoring: Track model performance`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Discuss Data Versioning',
        description: 'Track what data was used for each model',
        explanation: '"We need DVC or similar to version datasets. If model performs poorly, we should be able to reproduce training with exact same data. Also helps with debugging."',
        impact: 'Shows understanding of ML ops best practices'
      },
      {
        type: 'good',
        title: 'Propose A/B Testing Framework',
        description: 'Safely deploy new models',
        explanation: '"Don\'t replace prod model automatically. Deploy to 5% traffic, compare metrics to current model, gradually ramp up if better. Need feature flags for rollback."',
        impact: 'Demonstrates production ML deployment experience'
      },
      {
        type: 'good',
        title: 'Address Model Drift Monitoring',
        description: 'Detect when model degrades',
        explanation: '"Track input distribution drift and output metrics. If accuracy drops 5% or input features shift significantly, trigger alert. May need retraining with different features."',
        impact: 'Understands ML models degrade over time'
      },
      {
        type: 'good',
        title: 'Plan for Experiment Tracking',
        description: 'Use MLflow or Weights & Biases',
        explanation: '"Log hyperparameters, metrics, and artifacts for every training run. Makes it easy to compare experiments and reproduce results."',
        impact: 'Shows knowledge of ML development tools'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Auto-Deploy Without Validation',
        description: 'Replace prod model automatically',
        explanation: '"Train new model weekly and deploy to production automatically."',
        impact: 'If model is worse, it silently degrades prod without anyone noticing'
      },
      {
        type: 'bad',
        title: 'No Reproducibility',
        description: 'Don\'t track data or hyperparameters',
        explanation: '[Trains model but doesn\'t log what data, params, or code version was used]',
        impact: 'Can\'t reproduce results or debug performance regressions'
      },
      {
        type: 'bad',
        title: 'Skip Monitoring',
        description: 'No model performance tracking',
        explanation: '"Model is deployed, we\'re done."',
        impact: 'Model silently degrades as data distribution shifts'
      }
    ],
    keyTakeaways: [
      'Version data, code, and models for reproducibility',
      'Never auto-deploy without A/B testing and validation',
      'Monitor for model drift and input distribution changes',
      'Use experiment tracking tools (MLflow, W&B)',
      'Plan for rollback and gradual deployment strategies'
    ]
  },
  {
    id: 'q22-ml-feature-engineering',
    role: 'candidate',
    category: 'coding',
    difficulty: 'advanced',
    title: 'ML: Feature Engineering Best Practices',
    scenario: 'Predict customer churn for subscription service',
    context: 'You have raw event data: logins, payments, support tickets. Need to create features for churn prediction.',
    aiPrompt: 'What features should I engineer for customer churn prediction?',
    aiResponse: `Key features:
1. Recency: Days since last login
2. Frequency: Logins per week
3. Monetary: Payment history, amount
4. Engagement: Feature usage counts
5. Support: Number of tickets
6. Tenure: How long they've been a customer`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Identify Feature Leakage',
        description: 'Spot features that use future information',
        explanation: '"If we include \'canceled_subscription\' as a feature, that\'s leakage - we wouldn\'t know this at prediction time. Features must use only past data."',
        impact: 'Critical ML concept; prevents overfitted useless models'
      },
      {
        type: 'good',
        title: 'Propose Interaction Features',
        description: 'Go beyond basic features',
        explanation: '"Beyond individual features, let\'s try: engagement_drop (compare last 7 days to previous 30 days), payment_irregularity (variance in payment dates), support_ticket_spike."',
        impact: 'Shows creative feature engineering thinking'
      },
      {
        type: 'good',
        title: 'Discuss Feature Scaling',
        description: 'Address different scales and distributions',
        explanation: '"Tenure is 1-365 days, login_count is 0-1000. We need to normalize or use tree-based models that don\'t require scaling. What model are we using?"',
        impact: 'Understands how feature engineering depends on model choice'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Use Raw Event Counts',
        description: 'No aggregation or time windows',
        explanation: '"Let\'s use login_count, payment_count as features."',
        impact: 'Absolute counts without time context are less useful than rates/trends'
      },
      {
        type: 'bad',
        title: 'Include Target Leakage',
        description: 'Use information from the future',
        explanation: '[Includes features like "complaints_after_cancellation" in training data]',
        impact: 'Model performs great in training, completely fails in production'
      },
      {
        type: 'bad',
        title: 'Ignore Missing Data',
        description: 'Don\'t handle NULLs appropriately',
        explanation: '[Drops all rows with any NULL value, or fills with 0 without thinking]',
        impact: 'Loses data or creates misleading patterns'
      }
    ],
    keyTakeaways: [
      'Feature leakage is silent killer - only use past information',
      'Rates and trends often better than absolute counts',
      'Interaction features can capture complex patterns',
      'Feature scaling matters for some models, not others',
      'Handle missing data thoughtfully - imputation strategy matters'
    ]
  },
  {
    id: 'q23-mobile-offline-sync',
    role: 'candidate',
    category: 'system-design',
    difficulty: 'advanced',
    title: 'Mobile: Offline-First Architecture',
    scenario: 'Design mobile app that works offline',
    context: 'Note-taking app needs to work without internet and sync when connection returns.',
    aiPrompt: 'How do I implement offline-first architecture in a mobile app?',
    aiResponse: `Strategy:
1. Local database: SQLite or Realm
2. Optimistic UI updates
3. Background sync queue
4. Conflict resolution (last-write-wins or CRDT)
5. Network status detection`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Discuss Conflict Resolution',
        description: 'Address what happens when same note edited offline on two devices',
        explanation: '"If user edits note on phone and laptop while offline, which version wins when they sync? Last-write-wins is simple but loses data. CRDTs preserve all edits but are complex. Depends on use case."',
        impact: 'Shows understanding of distributed systems challenges'
      },
      {
        type: 'good',
        title: 'Propose Optimistic UI',
        description: 'Explain user experience during sync',
        explanation: '"User sees changes immediately even offline. We show sync status indicator. If sync fails, show retry option or conflict resolution UI."',
        impact: 'Thinks about user experience, not just technical implementation'
      },
      {
        type: 'good',
        title: 'Address Storage Limits',
        description: 'Mobile devices have limited storage',
        explanation: '"Can\'t store all data locally. Sync recent notes, cache frequently accessed ones. Provide UI to manually download older notes."',
        impact: 'Understands mobile platform constraints'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Just Queue Operations',
        description: 'Simple retry queue without conflict handling',
        explanation: '"Store failed requests in queue, retry when online."',
        impact: 'Doesn\'t address conflicts; data can be overwritten unexpectedly'
      },
      {
        type: 'bad',
        title: 'Assume Network is Always Available',
        description: 'Show errors when offline',
        explanation: '"Check if online before each operation. If offline, show error: \'No internet connection\'"',
        impact: 'Poor UX; app becomes unusable offline despite being installed locally'
      },
      {
        type: 'bad',
        title: 'No User Feedback',
        description: 'Silent background sync without status',
        explanation: '[Syncs in background but user has no idea if changes are saved to cloud]',
        impact: 'User anxiety; unclear if work is safe or will be lost'
      }
    ],
    keyTakeaways: [
      'Offline-first means app works without network, not just retries',
      'Conflict resolution is hard - choose strategy based on use case',
      'Optimistic UI improves perceived performance',
      'Mobile storage is limited - can\'t sync everything',
      'Always provide clear sync status feedback to users'
    ]
  },
  {
    id: 'q24-mobile-performance',
    role: 'candidate',
    category: 'debugging',
    difficulty: 'intermediate',
    title: 'Mobile: React Native Performance Optimization',
    scenario: 'FlatList scrolling is janky with 1000 items',
    context: 'Your React Native app has a feed that lags during scrolling.',
    aiPrompt: 'How do I optimize React Native FlatList performance?',
    aiResponse: `Optimization techniques:
1. Use getItemLayout for fixed heights
2. Set windowSize and initialNumToRender
3. Use React.memo on list items
4. Avoid anonymous functions in renderItem
5. Use keyExtractor properly`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Profile First',
        description: 'Use React Native performance monitor',
        explanation: '"Let me check the performance monitor. Is it JS thread or UI thread that\'s slow? Are we dropping frames during scroll?"',
        impact: 'Data-driven debugging; identifies actual bottleneck'
      },
      {
        type: 'good',
        title: 'Identify Expensive Renders',
        description: 'Check if items re-render unnecessarily',
        explanation: '"Are list items re-rendering on scroll? Let me add console.log in render. If yes, we need React.memo and fix prop references."',
        impact: 'Fixes root cause rather than applying random optimizations'
      },
      {
        type: 'good',
        title: 'Discuss getItemLayout Benefits',
        description: 'Explain why fixed heights help',
        explanation: '"If items have fixed height, getItemLayout lets FlatList calculate positions without rendering. Massive perf improvement for long lists."',
        impact: 'Shows understanding of virtualization internals'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Apply All Optimizations Blindly',
        description: 'Add every optimization without measuring',
        explanation: '[Adds memo, getItemLayout, reduces windowSize, all at once without profiling]',
        impact: 'Can\'t tell which optimization helped; might make things worse'
      },
      {
        type: 'bad',
        title: 'Blame React Native',
        description: 'Think framework is the problem',
        explanation: '"React Native is slow. Let\'s rewrite in native iOS/Android."',
        impact: 'Usually a code problem, not framework problem; huge wasted effort'
      },
      {
        type: 'bad',
        title: 'Use ScrollView Instead',
        description: 'Switch to non-virtualized list',
        explanation: '"FlatList is slow, let\'s use ScrollView."',
        impact: 'ScrollView renders ALL items; will be even slower and crash with 1000 items'
      }
    ],
    keyTakeaways: [
      'Profile first with React Native performance tools',
      'getItemLayout is huge win for fixed-height items',
      'Avoid creating new functions/objects in render',
      'React.memo prevents unnecessary re-renders',
      'FlatList virtualizes; ScrollView doesn\'t - use FlatList for long lists'
    ]
  },
  {
    id: 'q25-backend-microservices',
    role: 'candidate',
    category: 'system-design',
    difficulty: 'advanced',
    title: 'Backend: Microservices Communication Patterns',
    scenario: 'Design service communication for order processing',
    context: 'Order service needs to coordinate with inventory, payment, and shipping services.',
    aiPrompt: 'Should I use synchronous REST calls or async message queue for microservices?',
    aiResponse: `Options:
1. Synchronous (REST/gRPC): Simple, immediate response, but tight coupling
2. Asynchronous (Kafka/RabbitMQ): Loose coupling, better fault tolerance, eventual consistency
3. Hybrid: Critical path synchronous, background tasks async`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Analyze Use Case Requirements',
        description: 'Choose based on consistency needs',
        explanation: '"Order placement needs immediate inventory check - use sync REST. Payment processing can be async with callback. Shipping notification definitely async. Each interaction has different requirements."',
        impact: 'Shows nuanced thinking; not one-size-fits-all'
      },
      {
        type: 'good',
        title: 'Discuss Failure Scenarios',
        description: 'Address partial failures',
        explanation: '"What if payment succeeds but shipping service is down? We need saga pattern or compensating transactions to roll back. Or make operations idempotent and retry."',
        impact: 'Demonstrates distributed systems experience'
      },
      {
        type: 'good',
        title: 'Consider Latency Budget',
        description: 'Calculate end-to-end latency',
        explanation: '"If we chain 5 sync calls at 100ms each, that\'s 500ms minimum. User expects <1 second. We need async for non-critical steps or parallel execution."',
        impact: 'Thinks about user experience and performance'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Everything Synchronous',
        description: 'Chain all service calls sequentially',
        explanation: '"Order service calls inventory (200ms), then payment (300ms), then shipping (150ms). Total 650ms."',
        impact: 'Slow, brittle; if any service down, whole flow fails'
      },
      {
        type: 'bad',
        title: 'Everything Asynchronous',
        description: 'Make even critical path async',
        explanation: '"All services communicate via Kafka. User gets \'Order submitted\' immediately."',
        impact: 'Can\'t tell user if order actually succeeded; bad UX for critical operations'
      },
      {
        type: 'bad',
        title: 'No Retry Logic',
        description: 'Fail immediately on service unavailability',
        explanation: '[Service call fails, returns 500 to user without retry or circuit breaker]',
        impact: 'Poor reliability; transient failures cause user-facing errors'
      }
    ],
    keyTakeaways: [
      'Sync vs async depends on requirements - no universal answer',
      'Critical path (order validation) often needs sync for immediate feedback',
      'Background tasks (notifications, analytics) should be async',
      'Plan for partial failures with sagas or compensating transactions',
      'Use circuit breakers and retries for resilience'
    ]
  },
  {
    id: 'q26-frontend-webpack-optimization',
    role: 'candidate',
    category: 'debugging',
    difficulty: 'advanced',
    title: 'Frontend: Bundle Size and Performance',
    scenario: 'Production bundle is 5MB and takes 10 seconds to load',
    context: 'Your React app has a huge initial bundle affecting user experience.',
    aiPrompt: 'How do I reduce webpack bundle size?',
    aiResponse: `Strategies:
1. Code splitting with React.lazy()
2. Tree shaking - remove unused code
3. Analyze bundle with webpack-bundle-analyzer
4. Lazy load heavy libraries
5. Use production builds (minification)`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Analyze Before Optimizing',
        description: 'Use bundle analyzer to find culprits',
        explanation: '"Let me run webpack-bundle-analyzer first. Is it a huge library (lodash, moment)? Unused code? Or just lots of features? Can\'t optimize what we don\'t measure."',
        impact: 'Identifies actual problems instead of guessing'
      },
      {
        type: 'good',
        title: 'Propose Route-Based Splitting',
        description: 'Split by page/route',
        explanation: '"Admin panel code shouldn\'t load for regular users. Use React.lazy() for route components. Each route becomes separate chunk loaded on demand."',
        impact: 'Reduces initial bundle significantly with minimal code changes'
      },
      {
        type: 'good',
        title: 'Replace Heavy Dependencies',
        description: 'Identify bloated libraries',
        explanation: '"We\'re using all of lodash for 3 functions. Import specific functions or use native JS. Moment.js is 67KB; date-fns is 2KB for same features."',
        impact: 'Big wins by replacing heavy deps with lighter alternatives'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Optimize Random Things',
        description: 'Minify images or remove comments without analysis',
        explanation: '"Let\'s compress all images and remove console.logs. That should help."',
        impact: 'Wastes time on minor optimizations while ignoring 4MB of unused libraries'
      },
      {
        type: 'bad',
        title: 'Code Split Everything',
        description: 'Lazy load even tiny components',
        explanation: '[React.lazy() on 100 small components, creating 100 network requests]',
        impact: 'Too many small chunks; network overhead becomes worse than large bundle'
      },
      {
        type: 'bad',
        title: 'Skip Source Maps',
        description: 'Remove source maps to reduce size',
        explanation: '"Source maps are 2MB, let\'s not generate them in production."',
        impact: 'Can\'t debug production errors; source maps shouldn\'t be shipped to users anyway'
      }
    ],
    keyTakeaways: [
      'Always analyze bundle with webpack-bundle-analyzer first',
      'Route-based code splitting provides biggest wins',
      'Replace heavy dependencies (moment → date-fns, lodash → native)',
      'Tree shaking only works with ES6 imports',
      'Balance: too many small chunks vs one huge bundle'
    ]
  },
  {
    id: 'q27-data-pipeline-testing',
    role: 'candidate',
    category: 'debugging',
    difficulty: 'intermediate',
    title: 'Data: Testing ETL Pipelines',
    scenario: 'Data pipeline produces incorrect aggregations',
    context: 'Your Spark job calculates daily active users, but numbers don\'t match manual queries.',
    aiPrompt: 'How do I test and debug data pipelines?',
    aiResponse: `Testing approaches:
1. Unit tests for transformation functions
2. Integration tests with sample data
3. Data quality checks (row counts, nulls, ranges)
4. Compare output to known-good baseline
5. Schema validation`,
    goodApproaches: [
      {
        type: 'good',
        title: 'Start with Data Validation',
        description: 'Check input data quality first',
        explanation: '"Before debugging the pipeline, let\'s validate input data. Are there duplicates? NULL user_ids? Dates outside expected range? Bad input = bad output."',
        impact: 'Identifies data quality issues which are often root cause'
      },
      {
        type: 'good',
        title: 'Use Diff Testing',
        description: 'Compare with known-good subset',
        explanation: '"Let me manually calculate DAU for one day, then compare with pipeline output. If they differ, I can debug that specific case."',
        impact: 'Creates reproducible test case for debugging'
      },
      {
        type: 'good',
        title: 'Check for Logic Errors',
        description: 'Verify distinct user counting',
        explanation: '"Are we counting unique users or total events? If user has 10 sessions, are we counting them 10 times? Need DISTINCT or GROUP BY properly."',
        impact: 'Catches common aggregation mistakes'
      }
    ],
    badApproaches: [
      {
        type: 'bad',
        title: 'Blame the Framework',
        description: 'Think Spark has a bug',
        explanation: '"Spark must be calculating wrong. Let\'s try a different framework."',
        impact: 'Almost always a logic error in YOUR code, not Spark'
      },
      {
        type: 'bad',
        title: 'Add Random Filters',
        description: 'Try fixing by adding WHERE clauses',
        explanation: '[Adds random filters without understanding why numbers are wrong]',
        impact: 'Changes output but doesn\'t fix underlying bug'
      },
      {
        type: 'bad',
        title: 'No Assertions or Tests',
        description: 'Deploy without validation',
        explanation: '[Runs pipeline, ships results without comparing to expected values]',
        impact: 'Downstream consumers use incorrect data for decisions'
      }
    ],
    keyTakeaways: [
      'Validate input data quality before debugging pipeline logic',
      'Create known-good test cases for comparison',
      'Common errors: missing DISTINCT, wrong time zone, duplicates',
      'Add data quality assertions in pipeline code',
      'Test with realistic data volume, not just small samples'
    ]
  }
];

export const questionCategories = [
  { value: 'all', label: 'All Categories', icon: '📚' },
  { value: 'coding', label: 'Coding', icon: '💻' },
  { value: 'system-design', label: 'System Design', icon: '🏗️' },
  { value: 'debugging', label: 'Debugging', icon: '🐛' },
  { value: 'communication', label: 'Communication', icon: '💬' },
  { value: 'ethics', label: 'Ethics & Security', icon: '🔒' },
];

export const difficultyLevels = [
  { value: 'all', label: 'All Levels', color: 'gray' },
  { value: 'beginner', label: 'Beginner', color: 'green' },
  { value: 'intermediate', label: 'Intermediate', color: 'yellow' },
  { value: 'advanced', label: 'Advanced', color: 'red' },
];

export const roleTags = [
  { value: 'all', label: 'All Roles', icon: '👥' },
  { value: 'candidate', label: 'For Candidates', icon: '👤' },
  { value: 'interviewer', label: 'For Interviewers', icon: '🎯' },
  { value: 'both', label: 'For Both', icon: '🤝' },
];
