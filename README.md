# Technical Assessment in the GenAI World

A comprehensive Next.js web application that serves as both an informational site and training platform for conducting and participating in AI-augmented technical interviews.

## Overview

This application helps **candidates** and **interviewers** navigate the new era of technical assessment where AI tools like Copilot, ChatGPT, and Cursor are part of the workflow. It provides:

- **Educational content** about how GenAI is reshaping technical interviews
- **Interactive training modules** for candidates to practice AI-assisted coding
- **Rubric builders** for interviewers to design fair assessments
- **Mock interview playground** to experience both sides of AI-augmented interviews
- **Curated resources** from industry leaders and research

## Features

### For Candidates
- **Practice Scenarios**: 5 realistic interview scenarios (algorithmic coding, refactoring, ML design, debugging, system design)
- **AI Guidance**: Learn where AI helps and where it misleads
- **Self-Assessment Checklist**: Evaluate your AI collaboration skills
- **Best Practices**: Concrete examples of good vs. red-flag behaviors

### For Interviewers
- **Design Principles**: Research-backed guidance for AI-era assessments
- **Interactive Rubric Builder**: Customize evaluation criteria with live preview
- **Evaluation Questions**: Framework for assessing candidates who use AI
- **Best Practices**: What to do and avoid when designing assessments

### Playground
- **Role Selection**: Practice as candidate or interviewer
- **Scenario Types**: Coding, system design, ML, debugging
- **Example AI Interactions**: See realistic prompts and responses
- **Guidance**: Role-specific tips for each scenario

### Resources
- **Curated Reading List**: 12 articles and research papers
- **Category Filtering**: Candidate experience, AI tools, assessment design, ethics
- **Credible Sources**: Pragmatic Engineer, Interview Query, HackerRank, Stanford research, etc.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **UI Components**: Custom component library built with React

## Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

Open [http://localhost:3000](http://localhost:3000) in your browser. The app features:

- Smooth scroll navigation between sections
- Interactive components (scenario selector, rubric builder, playground stepper)
- Responsive design for mobile, tablet, and desktop
- All static data currently (no backend required)

## Project Structure

```
genai-assessment/
├── app/
│   ├── globals.css           # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page with all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky navigation
│   │   ├── Footer.tsx        # Footer with links
│   │   └── Section.tsx       # Reusable section wrapper
│   ├── ui/
│   │   ├── Button.tsx        # Primary/secondary/outline buttons
│   │   ├── Card.tsx          # Card component with variants
│   │   ├── Badge.tsx         # Category badges
│   │   └── Checklist.tsx     # Interactive checklist
│   ├── sections/
│   │   ├── Hero.tsx          # Landing hero section
│   │   ├── WhyGenAI.tsx      # Timeline and evolution cards
│   │   ├── ForCandidates.tsx # Candidate training section
│   │   ├── ForInterviewers.tsx # Interviewer guide section
│   │   ├── Playground.tsx    # Mock assessment flow
│   │   └── Resources.tsx     # Curated resource grid
│   └── features/
│       ├── ScenarioSelector.tsx   # Practice scenario selector
│       ├── RubricBuilder.tsx      # Interactive rubric builder
│       └── PlaygroundStepper.tsx  # Multi-step playground
├── lib/
│   └── data/
│       ├── scenarios.ts      # Practice scenario data
│       ├── rubrics.ts        # Rubric dimension definitions
│       ├── resources.ts      # Curated article links
│       └── playground.ts     # Playground scenario data
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Design Principles

This app was built using research-backed insights:

### Candidate Experience
1. **Transparency & Structure**: Clear expectations reduce anxiety by 48%
2. **Fairness Through Clarity**: Structured assessments with rubrics
3. **Real-World Relevance**: Work-sample tasks, not just algorithmic puzzles
4. **Psychological Safety**: Practice environments and explicit AI guidelines

### Interviewer Design
1. **Accept AI as Default**: 82% of developers use AI daily
2. **Test Reasoning, Not Recall**: Focus on problem decomposition
3. **Explicit Policies**: 7-25% use AI when banned—create fair guidelines
4. **Bias Auditing**: Implement DIF and human oversight

### UX Patterns Applied
1. **Progressive Disclosure**: Contextual tips and guidance
2. **Dual-Mode Components**: Work for both candidates and interviewers
3. **Before/After Comparisons**: Past → Present → GenAI Era timeline
4. **Trust Indicators**: Transparent AI involvement with sources

## How to Extend

### 1. Add Real LLM Integration

Replace static AI responses in the playground with real API calls:

```typescript
// lib/ai/client.ts
import OpenAI from 'openai';

export async function generateAIResponse(prompt: string) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  return completion.choices[0].message.content;
}
```

Update `PlaygroundStepper.tsx` to call this function instead of using static data.

### 2. Add Backend & Database

Store user progress, rubric customizations, and practice session data:

```bash
# Example with Prisma + PostgreSQL
npm install prisma @prisma/client
npx prisma init

# Define schema in prisma/schema.prisma
# Run migrations
npx prisma migrate dev
```

Create API routes in `app/api/`:
- `app/api/scenarios/route.ts` - CRUD for scenarios
- `app/api/rubrics/route.ts` - Save custom rubrics
- `app/api/sessions/route.ts` - Track practice sessions

### 3. Add Authentication

Integrate user accounts to save progress:

```bash
npm install next-auth
```

Create `app/api/auth/[...nextauth]/route.ts` and add sign-in pages.

### 4. Add Analytics

Track user interactions and learning paths:

```typescript
// lib/analytics.ts
export function trackEvent(event: string, properties: object) {
  // Integrate with Mixpanel, Amplitude, or Google Analytics
  analytics.track(event, properties);
}
```

Track:
- Scenario selections
- Rubric customizations
- Time spent on sections
- Resource clicks

### 5. Add More Scenarios

Extend `lib/data/scenarios.ts` with new interview types:
- Front-end component building
- API design
- Database schema design
- DevOps/infrastructure
- Security review

### 6. Add AI Feedback

Provide automated feedback on candidate responses:

```typescript
// lib/ai/feedback.ts
export async function evaluateResponse(
  scenario: Scenario,
  candidateResponse: string
) {
  // Use LLM to analyze response against rubric
  // Return structured feedback with scores
}
```

### 7. Add Interviewer Dashboard

Create a dashboard for interviewers to:
- View candidate session recordings
- Compare rubric scores across candidates
- Generate interview reports
- Share feedback with hiring teams

### 8. Add Multi-Language Support

Use Next.js internationalization:

```bash
npm install next-intl
```

Create translations in `messages/en.json`, `messages/es.json`, etc.

### 9. Add Video/Voice Practice

Integrate recording for mock interviews:

```bash
npm install react-webcam
```

Allow candidates to:
- Record themselves explaining solutions
- Get AI feedback on communication clarity
- Practice "thinking out loud"

### 10. Add Community Features

- Discussion forums for scenarios
- Share custom rubrics
- Upvote helpful resources
- Candidate/interviewer blog posts

## Data Sources & Research

This application incorporates insights from:

1. **Pragmatic Engineer**: "How GenAI is Reshaping Tech Hiring" (2024)
2. **Interview Query**: "State of Interviewing 2025: AI Trends"
3. **Karat**: "AI in Interviews: Cheating or New Normal?"
4. **HackerRank**: Prompt engineering questions (January 2025)
5. **Stanford Research**: AI coding assistants and security
6. **arXiv**: "Fairness in AI-Driven Recruitment"
7. **Industry platforms**: Woven, CoderPad, LockedIn AI, Final Round AI

All resource links are live and curated in the Resources section.

## Performance Considerations

- Static data files keep initial load fast
- All interactive components use client-side state
- Code splitting via Next.js App Router
- Optimized Tailwind CSS bundle
- No external API calls (yet)

## Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all clickable elements
- Sufficient color contrast ratios
- Responsive design for all screen sizes

## Future Feature Ideas

### Short Term
- [ ] Export rubrics as PDF
- [ ] Share playground scenarios via URL
- [ ] Print-friendly candidate checklists
- [ ] Dark mode support

### Medium Term
- [ ] User accounts and progress tracking
- [ ] Real LLM integration for playground
- [ ] AI-powered feedback on responses
- [ ] Interviewer training certifications
- [ ] Integration with ATS systems

### Long Term
- [ ] Live mock interview matching
- [ ] Company-specific assessment templates
- [ ] ML-powered rubric recommendations
- [ ] Industry benchmarking data
- [ ] Mobile app (React Native)

## Contributing

This is a demonstration project, but ideas for enhancement:

1. Add more practice scenarios
2. Improve rubric dimensions
3. Expand resource collection
4. Enhance accessibility
5. Add internationalization

## License

MIT License - feel free to use this as a template or starting point for your own projects.

## Credits

Built with:
- Research from industry leaders (Pragmatic Engineer, Interview Query, etc.)
- Best practices from academic research (Stanford, arXiv)
- Insights from modern assessment platforms (HackerRank, Karat, Woven)
- Design patterns from leading SaaS products

---

**Built for the GenAI era. Because 2025 interviews test how you think WITH AI, not just what you know.**
