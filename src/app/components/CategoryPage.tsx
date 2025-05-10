'use client';

import React from 'react';
import MapClient from './MapClient';

interface Spot {
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  image: string;
}

interface CategoryPageProps {
  title: string;
  description: string;
  spots: Spot[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  title,
  description,
  spots,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
        <p className="text-lg text-gray-600 mt-2 max-w-xl">{description}</p>
      </header>

      <section className="w-full max-w-4xl mb-6">
        <div className="w-full h-96 bg-gray-200 rounded-lg shadow-md overflow-hidden">
          <MapClient spots={spots} />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {spots.map((spot, index) => (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${spot.image})` }}
            ></div>

            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {spot.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{spot.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CategoryPage;
