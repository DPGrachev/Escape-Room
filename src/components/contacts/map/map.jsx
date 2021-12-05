import {Icon} from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const OFFICE_COORDINATES = [59.968137, 30.316272];
const DEFAULT_ZOOM = 15;

const defaultIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map() {
 
  return (

      <MapContainer 
        center={OFFICE_COORDINATES} 
        zoom={DEFAULT_ZOOM} 
        zoomControl={false} 
        style={{ height: '100%', width: '100%', zIndex: 0}}
      >
        <TileLayer
          attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={OFFICE_COORDINATES} icon={defaultIcon}></Marker>
      </MapContainer>
  )
}


export default Map;
