import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Technical Assessment in the GenAI World',
  description:
    'Learn, practice, and design fair AI-augmented interviews. A training platform for candidates and interviewers navigating the new era of technical assessment.',
  keywords: [
    'technical interview',
    'AI coding',
    'GenAI',
    'Copilot',
    'ChatGPT',
    'assessment',
    'candidate experience',
    'interviewer training',
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
