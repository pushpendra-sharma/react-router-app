import React from 'react';
import type { Route } from './+types/about';

export function meta() {
  return [
    { title: 'About Us | Our Website' },
    {
      name: 'description',
      content:
        'Learn about our dedicated team and our mission to deliver excellence in everything we do.',
    },
  ];
}

export default function About() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-gray-900 mb-6'>About Us</h1>
      <div className='max-w-3xl mx-auto'>
        <p className='text-gray-600 mb-6'>
          We are dedicated to bringing you the best concert experiences. Our
          platform helps you discover and book tickets for concerts in your
          area, with a focus on user experience and convenience.
        </p>
        <div className='bg-white rounded-lg shadow p-6 mb-6'>
          <h2 className='text-xl font-semibold mb-4'>Our Mission</h2>
          <p className='text-gray-600'>
            To connect music lovers with their favorite artists through seamless
            concert experiences.
          </p>
        </div>
        <div className='bg-white rounded-lg shadow p-6'>
          <h2 className='text-xl font-semibold mb-4'>Contact Us</h2>
          <p className='text-gray-600'>
            Have questions or feedback? We'd love to hear from you. Reach out to
            us at support@example.com
          </p>
        </div>
      </div>
    </div>
  );
}
