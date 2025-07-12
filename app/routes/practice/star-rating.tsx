import React, { useState } from 'react';
import StarRating from '../../components/StarRating';

export default function StarRatingPage() {
  const [rating, setRating] = useState(0);
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>
          Star Rating Component
        </h1>
        <p className='text-gray-600 mb-8'>
          A customizable star rating component for collecting user feedback.
        </p>

        <div className='bg-white rounded-lg shadow-sm p-6'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Example</h2>
          <div className='space-y-8'>
            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>
                Interactive Rating
              </h3>
              <StarRating
                maxStars={5}
                initialRating={rating}
                onRatingChange={setRating}
                size={size}
              />
              {rating > 0 && (
                <p className='mt-2 text-gray-600'>
                  You rated: {rating} {rating === 1 ? 'star' : 'stars'}
                </p>
              )}
            </div>

            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>
                Size Options
              </h3>
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Small
                  </label>
                  <StarRating maxStars={5} size='sm' disabled />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Medium
                  </label>
                  <StarRating maxStars={5} size='md' disabled />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Large
                  </label>
                  <StarRating maxStars={5} size='lg' disabled />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Features</h2>
          <ul className='list-disc list-inside text-gray-600 space-y-2'>
            <li>Customizable number of stars</li>
            <li>Multiple size options</li>
            <li>Interactive hover states</li>
            <li>Accessible rating controls</li>
            <li>Disabled state support</li>
          </ul>
        </div>

        <div className='mt-12'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Usage</h2>
          <pre className='bg-gray-50 p-4 rounded-md text-sm overflow-x-auto'>
            {`<StarRating
  maxStars={5}
  initialRating={3}
  onRatingChange={(rating) => console.log(rating)}
  size="md"
  disabled={false}
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
