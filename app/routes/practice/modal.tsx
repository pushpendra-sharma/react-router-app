import React, { useState } from 'react';
import Modal from '../../components/Modal';

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>
          Modal Component
        </h1>
        <p className='text-gray-600 mb-8'>
          A modal dialog component that overlays the main content of the page.
        </p>

        <div className='bg-white rounded-lg shadow-sm p-6'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Example</h2>
          <button
            onClick={() => setIsOpen(true)}
            className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
          >
            Open Modal
          </button>

          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title='Modal Example'
          >
            <div className='space-y-4'>
              <p className='text-gray-600'>
                This is an example modal dialog. It can contain any content you
                want to display.
              </p>
              <div className='bg-gray-50 p-4 rounded-md'>
                <h3 className='font-semibold mb-2'>Features:</h3>
                <ul className='list-disc list-inside text-gray-600'>
                  <li>Click outside to close</li>
                  <li>Press ESC to close</li>
                  <li>Focus management</li>
                  <li>Accessible dialog</li>
                </ul>
              </div>
            </div>
          </Modal>
        </div>

        <div className='mt-12'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Usage</h2>
          <pre className='bg-gray-50 p-4 rounded-md text-sm overflow-x-auto'>
            {`const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
>
  <div>Modal content goes here</div>
</Modal>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
