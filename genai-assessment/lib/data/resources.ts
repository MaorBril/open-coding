export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'candidate-experience' | 'ai-tools' | 'assessment-design' | 'ai-coding' | 'ethics-security';
  url: string;
  source: string;
}

export const resources: Resource[] = [
  {
    id: '1',
    title: 'How GenAI is Reshaping Tech Hiring',
    description: 'AI interview questions tripled since 2023. Companies now test how candidates think WITH AI, not just what they know.',
    category: 'ai-tools',
    url: 'https://newsletter.pragmaticengineer.com/p/how-genai-changes-tech-hiring',
    source: 'Pragmatic Engineer',
  },
  {
    id: '2',
    title: 'State of Interviewing 2025: AI Trends',
    description: 'In-person interviews rose from 24% to 38% in 2025 as companies counter AI cheating. Project-based assessments replace algorithmic take-homes.',
    category: 'assessment-design',
    url: 'https://www.interviewquery.com/p/ai-interview-trends-tech-hiring-2025',
    source: 'Interview Query',
  },
  {
    id: '3',
    title: 'AI in Interviews: Cheating or New Normal?',
    description: 'Karat found 7-25% of candidates use GenAI when explicitly banned. Industry shifts from prevention to acceptance with clear policies.',
    category: 'ethics-security',
    url: 'https://karat.com/ai-in-interviews-cheating-or-the-new-normal/',
    source: 'Karat',
  },
  {
    id: '4',
    title: 'Candidate Assessment Ultimate Guide 2025',
    description: 'Structured assessments with clear expectations reduce bias by 48%. Skills-based hiring is now essential, not optional.',
    category: 'candidate-experience',
    url: 'https://recruiterflow.com/blog/candidate-assessment/',
    source: 'Recruiterflow',
  },
  {
    id: '5',
    title: 'Fairness in AI-Driven Recruitment',
    description: 'Academic research on reducing bias in AI hiring. Covers differential item functioning (DIF) and algorithmic fairness metrics.',
    category: 'ethics-security',
    url: 'https://arxiv.org/html/2405.19699v3',
    source: 'arXiv',
  },
  {
    id: '6',
    title: 'AI Assisted Programming Complete Guide',
    description: '82% of developers use AI tools. Best practice: "If an LLM writes code and you review and test it, that\'s responsible AI assisted programming."',
    category: 'ai-coding',
    url: 'https://dualite.dev/blog/ai-assisted-programming-guide',
    source: 'Dualite',
  },
  {
    id: '7',
    title: 'GitHub Copilot Security Analysis',
    description: 'Stanford research: AI coding assistant users wrote significantly less secure code but believed it was MORE secure. Critical awareness needed.',
    category: 'ethics-security',
    url: 'https://intellias.com/github-copilot-review/',
    source: 'Intellias',
  },
  {
    id: '8',
    title: 'Prompt Engineering in Coding Interviews',
    description: 'HackerRank launched prompt engineering questions in January 2025, making AI proficiency a core assessment skill.',
    category: 'assessment-design',
    url: 'https://www.hackerrank.com/writing/prompt-engineering-questions-hackerrank-coding-interview-tests-2025-practice-guide',
    source: 'HackerRank',
  },
  {
    id: '9',
    title: 'Reducing Bias in Recruitment: 5 Steps',
    description: 'Implement blind CV screening, structured assessments, diverse interview panels, and skills-based evaluation to eliminate hiring bias.',
    category: 'candidate-experience',
    url: 'https://www.testpartnership.com/blog/reduce-bias-recruitment.html',
    source: 'TestPartnership',
  },
  {
    id: '10',
    title: 'Top AI Interview Tools for Recruiters',
    description: 'Overview of platforms like HireVue, Paradox, Woven, and others reshaping technical assessments with AI capabilities.',
    category: 'ai-tools',
    url: 'https://www.hrlineup.com/top-ai-interview-tools-for-recruiters/',
    source: 'HR Lineup',
  },
  {
    id: '11',
    title: 'ChatGPT & Future of Coding Interviews',
    description: 'Technical founder perspective on adapting coding interviews for an era where candidates have AI tools.',
    category: 'assessment-design',
    url: 'https://medium.com/@sushrit.pk21/chatgpt-copilot-and-the-future-of-coding-interviews-a-technical-founders-perspective-8628c7102a9b',
    source: 'Medium',
  },
  {
    id: '12',
    title: 'AI Code Compliance Strategies',
    description: 'Addressing compliance, security, and privacy concerns when using AI coding assistants in regulated environments.',
    category: 'ethics-security',
    url: 'https://www.blackduck.com/blog/ai-powered-code-compliance-strategies.html',
    source: 'Black Duck',
  },
];

export const categories = [
  { value: 'candidate-experience', label: 'Candidate Experience', count: 0 },
  { value: 'ai-tools', label: 'AI Interview Tools', count: 0 },
  { value: 'assessment-design', label: 'Assessment Design', count: 0 },
  { value: 'ai-coding', label: 'AI Coding Best Practices', count: 0 },
  { value: 'ethics-security', label: 'Ethics & Security', count: 0 },
];

// Calculate counts
categories.forEach(cat => {
  cat.count = resources.filter(r => r.category === cat.value).length;
});
