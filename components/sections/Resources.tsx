'use client';

import React, { useState } from 'react';
import { Section, SectionHeader } from '../layout/Section';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { resources, categories } from '@/lib/data/resources';

export const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredResources = selectedCategory
    ? resources.filter((r) => r.category === selectedCategory)
    : resources;

  return (
    <Section id="resources" variant="gray">
      <SectionHeader
        title="Resources & Further Reading"
        subtitle="Curated collection of articles, research, and guides on modern technical assessment and AI-assisted coding."
        centered
      />

      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-300 hover:scale-105'
            }`}
          >
            All Resources ({resources.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                selectedCategory === cat.value
                  ? 'bg-gradient-to-r from-accent-600 to-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-accent-300 hover:scale-105'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <Card key={resource.id} variant="bordered" hover>
            <CardContent className="p-6">
              <div className="mb-3">
                <Badge
                  variant={
                    resource.category === 'candidate-experience'
                      ? 'primary'
                      : resource.category === 'ai-tools'
                      ? 'secondary'
                      : resource.category === 'assessment-design'
                      ? 'success'
                      : resource.category === 'ai-coding'
                      ? 'warning'
                      : 'neutral'
                  }
                  size="sm"
                >
                  {categories.find((c) => c.value === resource.category)?.label}
                </Badge>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {resource.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {resource.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{resource.source}</span>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No resources found in this category.
          </p>
        </div>
      )}
    </Section>
  );
};
