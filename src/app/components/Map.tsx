import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Spot {
  name: string;
  latitude: number;
  longitude: number;
}

interface MapProps {
  spots: Spot[];
}

const Map: React.FC<MapProps> = ({ spots }) => {
  return (
    <MapContainer center={[42.2565, -72.5759]} zoom={14} className="w-full h-72 rounded-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {spots.map((spot, index) => (
        <Marker key={index} position={[spot.latitude, spot.longitude]}>
          <Popup>
            <strong>{spot.name}</strong>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
