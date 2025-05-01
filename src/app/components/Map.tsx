import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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
const redPinIcon = new L.Icon({
  iconUrl: "/pin.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const yellowPinIcon = new L.Icon({
  iconUrl: "/yellow_pin.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});


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
      <Marker position={[center.latitude, center.longitude]} icon={redPinIcon}>
        <Popup>Centered Location</Popup>
      </Marker>
      {spots.map((spot) => (
        <Marker key={spot._id} position={[spot.location.latitude, spot.location.longitude]} icon={yellowPinIcon}>
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