import React, { useState } from 'react';
import Pagination from '../../components/Pagination';

const ITEMS_PER_PAGE = 10;
const TOTAL_ITEMS = 100;

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

  // Generate dummy data
  const items = Array.from({ length: TOTAL_ITEMS }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `This is a description for item ${i + 1}`,
  }));

  // Get current page items
  const currentItems = items.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <div className='text-center mb-12'>
        <h1 className='text-3xl font-bold text-gray-900 mb-4'>
          Pagination Component
        </h1>
        <p className='text-lg text-gray-600'>
          A reusable pagination component with customizable page size and
          navigation controls.
        </p>
      </div>

      {/* Example Section */}
      <div className='bg-white rounded-lg shadow-lg p-6 mb-8'>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>
          Example Usage
        </h2>
        <div className='space-y-4'>
          {currentItems.map(item => (
            <div
              key={item.id}
              className='p-4 border border-gray-200 rounded-lg hover:bg-gray-50'
            >
              <h3 className='font-medium text-gray-900'>{item.title}</h3>
              <p className='text-gray-600'>{item.description}</p>
            </div>
          ))}
        </div>
        <div className='mt-6'>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            maxVisiblePages={5}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className='bg-white rounded-lg shadow-lg p-6 mb-8'>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>Features</h2>
        <ul className='space-y-2 text-gray-600'>
          <li>• Responsive design with mobile-friendly controls</li>
          <li>• Customizable number of visible page numbers</li>
          <li>• Previous/Next navigation buttons</li>
          <li>• First/Last page quick access</li>
          <li>• Accessible keyboard navigation</li>
          <li>• Visual feedback for current page and hover states</li>
        </ul>
      </div>

      {/* Usage Example */}
      <div className='bg-white rounded-lg shadow-lg p-6'>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>How to Use</h2>
        <pre className='bg-gray-50 p-4 rounded-lg overflow-x-auto'>
          <code className='text-sm text-gray-800'>
            {`import Pagination from './components/Pagination';

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      maxVisiblePages={5}
    />
  );
}`}
          </code>
        </pre>
      </div>
    </div>
  );
}
