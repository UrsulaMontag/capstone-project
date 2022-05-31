import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import LocationMarker from '../marker/LocationMarker';
import EntryMarker from '../marker/EntryMarker';

function Map() {
	return (
		<MapContainer
			scrollWheelZoom
			center={[48.867712, 9.306532]}
			zoom={8}
			style={{ height: '100%', width: '100%', zindex: '1000' }}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<EntryMarker />
			<LocationMarker />
		</MapContainer>
	);
}

export default Map;
