'use client';

import React, { useState } from 'react';
import { scenarios, scenarioTypes, type Scenario } from '@/lib/data/scenarios';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const ScenarioSelector: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>(scenarioTypes[0].value);
  const selectedScenario = scenarios.find((s) => s.type === selectedType);

  if (!selectedScenario) return null;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {scenarioTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => setSelectedType(type.value)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedType === type.value
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-300'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      <Card variant="bordered">
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedScenario.title}
              </h3>
              <Badge variant="primary">{selectedScenario.type}</Badge>
            </div>
            <p className="text-gray-700 text-lg">{selectedScenario.problem}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 bg-green-50 border-2 border-green-200 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-semibold text-green-900">How AI Can Help</h4>
              </div>
              <ul className="space-y-2">
                {selectedScenario.aiHelps.map((help, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>{help}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-red-50 border-2 border-red-200 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h4 className="font-semibold text-red-900">Where AI Might Mislead</h4>
              </div>
              <ul className="space-y-2">
                {selectedScenario.aiMisleads.map((mislead, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-600 mt-0.5">⚠</span>
                    <span>{mislead}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-5 bg-primary-50 border-l-4 border-primary-600 rounded-r-lg">
              <h4 className="font-semibold text-primary-900 mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Good Behaviors (What Evaluators Look For)
              </h4>
              <ul className="space-y-2">
                {selectedScenario.goodBehaviors.map((behavior, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-800">
                    <span className="text-primary-600 font-bold mt-0.5">✓</span>
                    <span>{behavior}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-yellow-50 border-l-4 border-yellow-600 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
                Red Flags (What to Avoid)
              </h4>
              <ul className="space-y-2">
                {selectedScenario.redFlags.map((flag, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-800">
                    <span className="text-yellow-700 font-bold mt-0.5">✗</span>
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
