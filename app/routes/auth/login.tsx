import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Email address
        </label>
        <div className='mt-1'>
          <input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
          />
        </div>
      </div>

      <div>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-gray-700'
        >
          Password
        </label>
        <div className='mt-1'>
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
          />
        </div>
      </div>

      <div>
        <button
          type='submit'
          className='flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
