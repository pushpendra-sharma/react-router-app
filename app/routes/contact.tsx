import React from 'react';

export function meta() {
  return [
    { title: 'Contact' },
    {
      name: 'description',
      content:
        "Get in touch. Send us a message and I'll respond as soon as possible.",
    },
  ];
}

export default function Contact() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-6 text-white'>Contact Us</h1>
      <div className='max-w-md'>
        <p className='text-lg mb-4 text-gray-300'>
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
        <form className='space-y-4'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium mb-1 text-gray-300'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
              placeholder='Your name'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium mb-1 text-gray-300'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
              placeholder='your.email@example.com'
            />
          </div>
          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium mb-1 text-gray-300'
            >
              Message
            </label>
            <textarea
              id='message'
              rows={4}
              className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
              placeholder='Your message'
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
