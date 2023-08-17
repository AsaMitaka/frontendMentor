import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { MainProps } from '../@types/mainProps';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from '../assets/icon-location.svg';
import { useEffect, useState } from 'react';

const Main: React.FC<MainProps> = ({ data }) => {
  const [marker, setMarker] = useState({
    geocode: [0, 0],
    popUp: 'You are here',
  });

  const customIcon = new Icon({
    iconUrl: icon,
    iconSize: [38, 38],
  });

  useEffect(() => {
    if (data) {
      setMarker({
        geocode: [data?.location.lat, data?.location.lng],
        popUp: 'You are here now',
      });
    }
  }, [data]);

  return (
    <main className="main">
      {data ? (
        <div className="main__map">
          <MapContainer center={[data?.location.lat, data?.location.lng]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : (
        <div className="main__loading">Loading</div>
      )}
    </main>
  );
};

export default Main;
