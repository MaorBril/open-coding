import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Interviews Careers - Master AI-Augmented Technical Interviews',
  description:
    'Learn, practice, and design fair AI-augmented interviews at ai-interviews.careers. A training platform for candidates and interviewers navigating the new era of technical assessment.',
  keywords: [
    'AI interviews',
    'technical interview',
    'AI coding',
    'GenAI',
    'Copilot',
    'ChatGPT',
    'assessment',
    'candidate experience',
    'interviewer training',
    'ai-interviews.careers',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
