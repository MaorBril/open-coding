'use client';

import React, { useState } from 'react';

interface ChecklistItem {
  id: string;
  label: string;
  description?: string;
}

interface ChecklistProps {
  items: ChecklistItem[];
  title?: string;
}

export const Checklist: React.FC<ChecklistProps> = ({ items, title }) => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setChecked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="space-y-4">
      {title && (
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500">
            {checkedCount} / {items.length} checked
          </span>
        </div>
      )}
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              checked[item.id]
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
            onClick={() => toggleItem(item.id)}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    checked[item.id]
                      ? 'bg-primary-600 border-primary-600'
                      : 'bg-white border-gray-300'
                  }`}
                >
                  {checked[item.id] && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <label className="font-medium text-gray-900 cursor-pointer">
                  {item.label}
                </label>
                {item.description && (
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
