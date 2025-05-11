import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export default Layout;
