import React, { useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string;
}

export default function Accordion({ items, defaultOpen }: AccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(defaultOpen || null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className='w-full max-w-2xl mx-auto'>
      {items.map(item => (
        <div key={item.id} className='border-b border-gray-200'>
          <button
            className='w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset cursor-pointer'
            onClick={() => toggleItem(item.id)}
            aria-expanded={openItem === item.id}
          >
            <span className='font-medium text-gray-900'>{item.title}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                openItem === item.id ? 'rotate-180' : ''
              }`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>
          {openItem === item.id && (
            <div className='px-4 py-3 bg-gray-50'>
              <p className='text-gray-600'>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
