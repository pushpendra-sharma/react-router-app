import React from 'react';
import Tabs from '../../components/Tabs';

const sampleTabs = [
  {
    id: 'overview',
    label: 'Overview',
    content: (
      <div className='p-4'>
        <h3 className='text-lg font-semibold mb-2'>Component Overview</h3>
        <p className='text-gray-600'>
          The Tabs component provides a way to organize content into separate
          views where only one view is visible at a time.
        </p>
      </div>
    ),
  },
  {
    id: 'usage',
    label: 'Usage',
    content: (
      <div className='p-4'>
        <h3 className='text-lg font-semibold mb-2'>How to Use</h3>
        <pre className='bg-gray-50 p-4 rounded-md text-sm'>
          {`<Tabs
  tabs={[
    { id: 'tab1', label: 'Tab 1', content: 'Content 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content 2' }
  ]}
/>`}
        </pre>
      </div>
    ),
  },
  {
    id: 'api',
    label: 'API',
    content: (
      <div className='p-4'>
        <h3 className='text-lg font-semibold mb-2'>API Reference</h3>
        <ul className='list-disc list-inside text-gray-600 space-y-2'>
          <li>tabs: Array of tab items</li>
          <li>defaultTab: Optional default selected tab</li>
          <li>onChange: Optional callback when tab changes</li>
        </ul>
      </div>
    ),
  },
];

export default function TabsPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>
          Tabs Component
        </h1>
        <p className='text-gray-600 mb-8'>
          A tabbed interface component that organizes content into separate
          views.
        </p>

        <div className='bg-white rounded-lg shadow-sm p-6'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Example</h2>
          <Tabs tabs={sampleTabs} defaultTab='overview' />
        </div>

        <div className='mt-12'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Features</h2>
          <ul className='list-disc list-inside text-gray-600 space-y-2'>
            <li>Keyboard navigation support</li>
            <li>Accessible tab interface</li>
            <li>Customizable styling</li>
            <li>Support for default selected tab</li>
            <li>Flexible content rendering</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
