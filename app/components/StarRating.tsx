import React, { useState } from 'react';

interface StarRatingProps {
  maxStars?: number;
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export default function StarRating({
  maxStars = 5,
  initialRating = 0,
  onRatingChange,
  size = 'md',
  disabled = false,
}: StarRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const handleMouseEnter = (starIndex: number) => {
    if (!disabled) {
      setHoverRating(starIndex);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setHoverRating(0);
    }
  };

  const handleClick = (starIndex: number) => {
    if (!disabled) {
      setRating(starIndex);
      onRatingChange?.(starIndex);
    }
  };

  return (
    <div className='flex items-center space-x-1'>
      {[...Array(maxStars)].map((_, index) => {
        const starIndex = index + 1;
        const isFilled = starIndex <= (hoverRating || rating);

        return (
          <button
            key={starIndex}
            type='button'
            className={`${sizeClasses[size]} focus:outline-none ${
              disabled ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starIndex)}
            disabled={disabled}
            aria-label={`Rate ${starIndex} out of ${maxStars}`}
          >
            <svg
              className={`${sizeClasses[size]} ${
                isFilled ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
