import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import LocationMarker from '../marker/LocationMarker';
import EntryMarker from '../marker/EntryMarker';
import { useSession } from 'next-auth/react';
import Typography from '../ui/Typography';

function Map() {
	const { data: session } = useSession();
	return (
		<MapContainer
			scrollWheelZoom
			center={[48.867712, 9.306532]}
			zoom={8}
			style={{ height: '100%', width: '100%' }}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{session ? (
				<EntryMarker />
			) : (
				<Typography variant="body1">
					Bitte logge dich ein, um die Einträge auf der Karte zu sehen.
				</Typography>
			)}
			<LocationMarker />
		</MapContainer>
	);
}

export default Map;
