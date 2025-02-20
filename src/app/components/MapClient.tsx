"use client";

import dynamic from 'next/dynamic';
import React from 'react';

const Map = dynamic(() => import('./Map'), { ssr: false });

interface MapClientProps {
  spots: {
    name: string;
    latitude: number;
    longitude: number;
  }[];
}

const MapClient: React.FC<MapClientProps> = ({ spots }) => {
  return <Map spots={spots} />;
};

export default MapClient;