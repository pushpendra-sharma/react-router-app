import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';

import { MAIN_NAV_LINKS, PRACTICE_FEATURES } from '../constants/constants';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPracticeOpen, setIsPracticeOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className='bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo/Brand */}
          <Link to='/' className='flex items-center space-x-2 group'>
            <span className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300'>
              Our Website
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            {MAIN_NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full'></span>
                )}
              </Link>
            ))}

            {/* Practice Dropdown */}
            <div className='relative'>
              <button
                onClick={() => setIsPracticeOpen(!isPracticeOpen)}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  PRACTICE_FEATURES.some(link => isActive(link.path))
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Practice
                <svg
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                    isPracticeOpen ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isPracticeOpen && (
                <div className='absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                  <div className='py-1' role='menu' aria-orientation='vertical'>
                    {PRACTICE_FEATURES.map(feature => (
                      <Link
                        key={feature.id}
                        to={feature.path}
                        onClick={() => setIsPracticeOpen(false)}
                        className={`block px-4 py-2 text-sm ${
                          isActive(feature.path)
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        role='menuitem'
                      >
                        <div className='flex justify-between items-center'>
                          <span>{feature.label}</span>
                          <span className='text-xs text-gray-500'>
                            {feature.difficulty}
                          </span>
                        </div>
                        <p className='text-xs text-gray-500 mt-1'>
                          {feature.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              type='button'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          {MAIN_NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive(link.path)
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Practice Links */}
          <div className='pt-2 pb-3 border-t border-gray-200'>
            <div className='px-3 py-2 text-sm font-medium text-gray-500'>
              Practice Components
            </div>
            {PRACTICE_FEATURES.map(feature => (
              <Link
                key={feature.id}
                to={feature.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(feature.path)
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className='flex justify-between items-center'>
                  <span>{feature.label}</span>
                  <span className='text-xs text-gray-500'>
                    {feature.difficulty}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
