import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { ModeToggle } from './themeToogle';

const Sidebar = ({ isOpen, onClose }: any) => {
  const { resolvedTheme } = useTheme(); // Obtén el tema actual

  const sidebarClasses = isOpen
    ? 'transform translate-x-0'
    : 'transform -translate-x-full';
  const backgroundClass =
    resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textClass =
    resolvedTheme === 'dark' ? 'text-white' : 'text-gray-800';

  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 transition-transform duration-300 ease-in-out ${sidebarClasses} ${backgroundClass}`}
    >
      <button
        className={`absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:hover:text-gray-200 ${textClass}`}
        onClick={onClose}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <ul className={`pt-16 ${textClass}`}>
        <li
          className={`px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 ${backgroundClass}`}
        >
          <Link href="loteria">Ver cartas de lotería</Link>
        </li>
        <li className="flex justify-center">
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
