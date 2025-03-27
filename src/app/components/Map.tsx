import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
}

const MapComponent = ({ spots }: MapComponentProps) => {
  return (
    <MapContainer center={[42.3918, -72.5285]} zoom={10} className="h-full w-full rounded-lg">
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
    </MapContainer>
  );
};

export default MapComponent;