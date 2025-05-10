import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* 
      <header className="bg-[#f5deb3] text-gray-800 py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Say Where</h1>
        </div>
      </header> */}

      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      {/* 
      <footer className="bg-[#f5deb3] text-gray-800 py-4 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Say Where. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Layout;
