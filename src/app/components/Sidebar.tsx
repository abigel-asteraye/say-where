'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`
      fixed top-0 left-0 h-full bg-gray-800 text-white
      ${isOpen ? 'w-64' : 'w-16'}
      transition-width duration-300
      overflow-x-hidden
      z-10
    `}
    >
      <button
        className="absolute top-4 right-4 text-2xl focus:outline-none md:hidden"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div className="p-4">
        <h1
          className={`text-2xl font-bold ${isOpen ? 'block' : 'hidden md:block'}`}
        >
          Menu
        </h1>
        <ul className="mt-4">
          <li>
            <Link href="/" className="block py-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block py-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
