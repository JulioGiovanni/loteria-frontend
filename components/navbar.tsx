'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ModeToggle } from './themeToogle';
import Sidebar from './sidebar';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap  p-6">
      <div className="flex items-center flex-shrink-0 text-black dark:text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link href="/">Lotería App</Link>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
          </svg>
        </button>
        {showMenu && (
          <Sidebar isOpen={showMenu} onClose={toggleMenu} />
        )}
      </div>
      <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto none ">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/loteria"
            className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-800 mr-4"
          >
            Ver cartas de lotería
          </Link>
        </div>
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
