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

const OutdoorsPage = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Outdoor Spots</h1>
      <p className="text-gray-600 mb-6">Explore the best outdoor spots near you!</p>

      {/* Map Section */}
      <div className="w-full h-96 mb-6">
        <MapComponent spots={validSpots} />
      </div>

      {/* List of Spots */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {validSpots.map((spot) => (
          <div key={spot._id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{spot.name}</h2>
            <p className="text-gray-600">{spot.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutdoorsPage;