"use client";

import { useEffect, useState } from "react";
import MapComponent from  "../components/Map"; 

interface Spot {
  _id: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  description: string;
  type: string;
  rating: number;
}

const DiningPage = () => {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await fetch("/api/spots");
        const data = await response.json();
        console.log("Fetched spots:", data); 
        setSpots(data);
      } catch (error) {
        console.error("Error fetching spots:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpots();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  // Filter out spots with invalid coordinates
  const validSpots = spots.filter(
    (spot) => spot.location.latitude !== undefined && spot.location.longitude !== undefined
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-[#fdf1e4] to-[#f5deb3]">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Eat Local</h1>
      <p className="text-lg text-gray-700 mb-8">
        Looking for a place to eat? Check out these local dining spots!
      </p>
  
      <div className="w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg border border-gray-200">
        <MapComponent spots={validSpots} />
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {validSpots.map((spot) => (
          <div
            key={spot._id}
            className="bg-[#fdf1e4] p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {spot.name}
            </h2>
            <p className="text-gray-700">{spot.description}</p>
            <p className="text-sm text-gray-500 mt-2">Rating: {spot.rating}</p>
            <p className="text-sm text-gray-500 mt-2">Type: {spot.type}</p>
            <p className="text-sm text-gray-500 mt-2">
              Location: {spot.location.latitude}, {spot.location.longitude}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiningPage;