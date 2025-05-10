import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { homeLinks } from '@/data/homeLinks';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-[#fdf1e4] to-[#f5deb3]">
      <Navbar />
      <div
        className="flex flex-col items-center justify-center text-center py-20 px-6"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 mt-6">
          Say Where?
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Discover the best places to eat, study, or hang out. Say Where is your
          go-to guide for finding amazing spots near you!
        </p>
        <button className="mt-6 bg-[#f5deb3] text-gray-800 py-3 px-6 rounded-lg shadow-md hover:bg-[#e6cfa3] transition duration-200">
          Get Started
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-12">
        {homeLinks.map((link, index) => (
          <Card
            key={index}
            href={link.href}
            title={link.title}
            icon={link.icon}
          />
        ))}
      </div>

      <footer className="bg-[#f5deb3] text-gray-800 py-8 text-center">
        <p className="text-sm mb-4">
          © {new Date().getFullYear()} Say Where. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
