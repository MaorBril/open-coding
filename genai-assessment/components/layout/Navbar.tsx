'use client';

import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#overview' },
  { label: 'How It Works', href: '#for-who' },
  { label: 'Resources', href: '#resources' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/#overview" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-xl">🎓</span>
            </div>
            <span className="text-xl font-black text-gray-900">
              AI Interview Trainer
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/playground"
              className="ml-2 px-5 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-sm rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              🚀 Playground
            </a>
          </div>

          <div className="md:hidden">
            <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
