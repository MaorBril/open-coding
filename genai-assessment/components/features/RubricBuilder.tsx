'use client';

import React, { useState } from 'react';
import {
  rubricDimensions,
  getDefaultWeights,
  calculateTotalWeight,
  type RubricDimension,
} from '@/lib/data/rubrics';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const RubricBuilder: React.FC = () => {
  const [weights, setWeights] = useState<Record<string, number>>(
    getDefaultWeights()
  );

  const totalWeight = calculateTotalWeight(weights);

  const handleWeightChange = (id: string, value: number) => {
    setWeights((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="space-y-6">
      <Card variant="bordered">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Customize Assessment Rubric
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Total Weight:</span>
              <Badge
                variant={totalWeight === 100 ? 'success' : 'warning'}
                size="md"
              >
                {totalWeight}%
              </Badge>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            Adjust the weight of each dimension to match your role requirements.
            Total should equal 100%.
          </p>

          <div className="space-y-6">
            {rubricDimensions.map((dimension) => (
              <div key={dimension.id} className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">
                        {dimension.name}
                      </h4>
                      <Badge variant="neutral" size="sm">
                        {weights[dimension.id]}%
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      {dimension.description}
                    </p>
                  </div>
                </div>

                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={weights[dimension.id]}
                  onChange={(e) =>
                    handleWeightChange(dimension.id, parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="text-xs font-semibold text-red-700 uppercase mb-1">
                      Weak Performance
                    </div>
                    <p className="text-xs text-gray-700">
                      {dimension.examples.weak}
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-xs font-semibold text-green-700 uppercase mb-1">
                      Strong Performance
                    </div>
                    <p className="text-xs text-gray-700">
                      {dimension.examples.strong}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card variant="highlighted">
        <CardContent className="p-6">
          <h4 className="font-semibold text-gray-900 mb-4">
            Your Customized Rubric Preview
          </h4>
          <div className="space-y-3">
            {rubricDimensions
              .filter((d) => weights[d.id] > 0)
              .sort((a, b) => weights[b.id] - weights[a.id])
              .map((dimension) => (
                <div
                  key={dimension.id}
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200"
                >
                  <span className="font-medium text-gray-900">
                    {dimension.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all"
                        style={{ width: `${(weights[dimension.id] / 50) * 100}%` }}
                      ></div>
                    </div>
                    <span className="font-semibold text-primary-600 w-12 text-right">
                      {weights[dimension.id]}%
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {totalWeight !== 100 && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                ⚠️ Total weight is {totalWeight}%. Adjust sliders to reach 100% for
                a balanced rubric.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
