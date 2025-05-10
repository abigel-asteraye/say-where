'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Outdoors', path: '/outdoors' },
    { name: 'Groceries', path: '/essentials' },
    { name: 'Study', path: '/study' },
    { name: 'Events', path: '/events' },
    { name: 'Dining', path: '/dining' },
    { name: 'Hidden Gems', path: '/gems' },
    { name: 'Admin', path: '/admin' },
  ];

  return (
    <div className="fixed top-6 bg-[#f8e8d8] px-6 py-2 rounded-lg shadow-md text-gray-800 flex justify-center items-center space-x-4 border border-gray-300">
      {navItems.map((item, index) => (
        <Link key={index} href={item.path}>
          <button
            className={`px-3 py-1 rounded-lg transition duration-200 ${
              pathname === item.path
                ? 'bg-[#e3d5c9] font-bold'
                : 'hover:bg-[#e3d5c9]'
            }`}
          >
            {item.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
