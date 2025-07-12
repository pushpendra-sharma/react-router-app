import React from 'react';
import { PRACTICE_FEATURES } from '../../constants/features';

export default function PracticeIndex() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-gray-900 mb-6'>
        Practice Components
      </h1>
      <p className='text-gray-600 mb-8'>
        Explore our collection of reusable React components. Each component
        comes with examples, documentation, and interactive demos.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {PRACTICE_FEATURES.map(feature => (
          <a
            key={feature.id}
            href={`/practice/${feature.id}`}
            className='block bg-white rounded-lg shadow hover:shadow-md transition-shadow'
          >
            <div className='p-6'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-xl font-semibold text-gray-900'>
                  {feature.label}
                </h2>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    feature.difficulty === 'Easy'
                      ? 'bg-green-100 text-green-800'
                      : feature.difficulty === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {feature.difficulty}
                </span>
              </div>
              <p className='text-gray-600 mb-4'>{feature.description}</p>
              <div className='flex items-center text-sm text-gray-500'>
                <svg
                  className='w-4 h-4 mr-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                {feature.estimatedTime} min
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
