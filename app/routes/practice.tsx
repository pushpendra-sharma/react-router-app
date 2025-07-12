import React from 'react';
import { Link } from 'react-router';
import { PRACTICE_FEATURES } from '../constants/constants';

export default function Practice() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header Section */}
      <header className='bg-white border-b border-gray-200'>
        <div className='container mx-auto px-4 py-8'>
          <h1 className='text-4xl font-bold text-gray-900 mb-2'>
            Practice Components
          </h1>
          <p className='text-xl text-gray-600'>
            Master frontend development through practical component challenges
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className='container mx-auto px-4 py-12'>
        {/* Featured Section */}
        <section className='mb-12'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
            Featured Challenges
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {PRACTICE_FEATURES.map(feature => (
              <Link
                key={feature.id}
                to={feature.path}
                className='group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden'
              >
                <div className='p-6'>
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
                      {feature.label}
                    </h3>
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
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
                  <p className='text-gray-600 mb-4 line-clamp-2'>
                    {feature.description}
                  </p>
                  <div className='flex items-center justify-between text-sm text-gray-500'>
                    <div className='flex items-center'>
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
                    <span className='text-blue-600 group-hover:text-blue-700'>
                      Start Challenge →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className='mb-12'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
            Categories
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
              <h3 className='font-semibold text-gray-900 mb-2'>
                UI Components
              </h3>
              <p className='text-gray-600 text-sm'>
                Master common UI patterns and interactions
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Form Elements
              </h3>
              <p className='text-gray-600 text-sm'>
                Build and style form components
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
              <h3 className='font-semibold text-gray-900 mb-2'>Navigation</h3>
              <p className='text-gray-600 text-sm'>
                Create responsive navigation patterns
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
              <h3 className='font-semibold text-gray-900 mb-2'>Data Display</h3>
              <p className='text-gray-600 text-sm'>
                Present data in various formats
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className='bg-white rounded-lg shadow-sm p-8'>
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              Stay Updated
            </h2>
            <p className='text-gray-600 mb-6'>
              Get notified about new challenges and frontend development tips
            </p>
            <div className='flex gap-4 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button className='px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
