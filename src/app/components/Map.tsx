import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { q } from "framer-motion/client";

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

interface MapComponentProps {
  spots: Spot[];
  center: {latitude: number, longitude: number;}
}

const MapComponent = ({ spots, center }: MapComponentProps) => {
  const MapUpdater = () => {
    const map = useMap();
    useEffect(() => {
      map.setView([center.latitude, center.longitude], 13); 
    }, [center, map]);
    return null;    
  };

  return (
    <MapContainer
      center= {[center.latitude, center.longitude]}
      zoom={13} 
      className="h-full w-full rounded-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {spots.map((spot) => (
        <Marker key={spot._id} position={[spot.location.latitude, spot.location.longitude]}>
          <Popup>
            <strong>{spot.name}</strong>
            <p>{spot.description}</p>
            <p>Type: {spot.type}</p>
            <p>Rating: {spot.rating}</p>
          </Popup>
        </Marker>
      ))}
      <MapUpdater />
    </MapContainer>
  );
};

export default MapComponent;