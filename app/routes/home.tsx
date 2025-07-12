import React from 'react';

export function meta() {
  return [
    { title: 'Home' },
    {
      name: 'description',
      content: 'Home page.',
    },
  ];
}

export default function Home() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-gray-900 mb-6'>
        Welcome to Our App
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-white rounded-lg shadow p-6'>
          <h2 className='text-xl font-semibold mb-4'>Concerts</h2>
          <p className='text-gray-600 mb-4'>
            Discover upcoming concerts in your area
          </p>
          <a href='/concerts' className='text-blue-600 hover:text-blue-800'>
            Browse Concerts →
          </a>
        </div>
        <div className='bg-white rounded-lg shadow p-6'>
          <h2 className='text-xl font-semibold mb-4'>Trending</h2>
          <p className='text-gray-600 mb-4'>See what's popular right now</p>
          <a
            href='/concerts/trending'
            className='text-blue-600 hover:text-blue-800'
          >
            View Trending →
          </a>
        </div>
        <div className='bg-white rounded-lg shadow p-6'>
          <h2 className='text-xl font-semibold mb-4'>Account</h2>
          <p className='text-gray-600 mb-4'>
            Manage your account and preferences
          </p>
          <a href='/auth/login' className='text-blue-600 hover:text-blue-800'>
            Sign In →
          </a>
        </div>
      </div>
    </div>
  );
}
