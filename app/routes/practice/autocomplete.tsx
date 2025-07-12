import React, { useState } from 'react';
import Autocomplete from '../../components/Autocomplete';

const sampleOptions = [
  { id: '1', label: 'React' },
  { id: '2', label: 'React Native' },
  { id: '3', label: 'React Router' },
  { id: '4', label: 'Redux' },
  { id: '5', label: 'TypeScript' },
  { id: '6', label: 'JavaScript' },
  { id: '7', label: 'HTML' },
  { id: '8', label: 'CSS' },
  { id: '9', label: 'Node.js' },
  { id: '10', label: 'Express.js' },
];

export default function AutocompletePage() {
  const [selectedOption, setSelectedOption] = useState<{
    id: string;
    label: string;
  } | null>(null);

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>
          Autocomplete Component
        </h1>
        <p className='text-gray-600 mb-8'>
          An input component with suggestions that appear as you type.
        </p>

        <div className='bg-white rounded-lg shadow-sm p-6'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Example</h2>
          <div className='max-w-md'>
            <Autocomplete
              options={sampleOptions}
              placeholder='Search technologies...'
              onSelect={setSelectedOption}
            />
            {selectedOption && (
              <div className='mt-4 p-4 bg-gray-50 rounded-md'>
                <p className='text-gray-600'>
                  Selected:{' '}
                  <span className='font-semibold'>{selectedOption.label}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className='mt-12'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Features</h2>
          <ul className='list-disc list-inside text-gray-600 space-y-2'>
            <li>Keyboard navigation (arrow keys, enter, escape)</li>
            <li>Click outside to close</li>
            <li>Customizable styling</li>
            <li>Accessible input and suggestions</li>
            <li>Flexible option rendering</li>
          </ul>
        </div>

        <div className='mt-12'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Usage</h2>
          <pre className='bg-gray-50 p-4 rounded-md text-sm overflow-x-auto'>
            {`<Autocomplete
  options={[
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' }
  ]}
  placeholder="Search..."
  onSelect={(option) => console.log(option)}
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
