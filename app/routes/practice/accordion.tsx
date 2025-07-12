import React from 'react';
import Accordion from '../../components/Accordion';

const sampleItems = [
  {
    id: '1',
    title: 'What is React?',
    content:
      "React is a JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer and allows you to create reusable UI components.",
  },
  {
    id: '2',
    title: 'What are React Hooks?',
    content:
      'React Hooks are functions that let you "hook into" React state and lifecycle features from function components. They allow you to use state and other React features without writing a class.',
  },
  {
    id: '3',
    title: 'What is JSX?',
    content:
      'JSX is a syntax extension for JavaScript that lets you write HTML-like code in your JavaScript files. It makes your code more readable and helps prevent injection attacks.',
  },
];

export default function AccordionPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>
          Accordion Component
        </h1>
        <p className='text-gray-600 mb-8'>
          A collapsible content component that allows users to expand and
          collapse sections of content.
        </p>

        <div className='bg-white rounded-lg shadow-sm p-6'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Example</h2>
          <Accordion items={sampleItems} defaultOpen='1' />
        </div>

        <div className='mt-12'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Features</h2>
          <ul className='list-disc list-inside text-gray-600 space-y-2'>
            <li>Collapsible sections with smooth animations</li>
            <li>Keyboard accessible</li>
            <li>Customizable styling</li>
            <li>Support for default open state</li>
            <li>ARIA attributes for accessibility</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
