import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { useEffect, useState } from 'react';

function LocationMarker() {
	const [position, setPosition] = useState(null);
	const map = useMapEvents({
		locationfound(location) {
			setPosition(location.latlng);
			map.flyTo(location.latlng, map.getZoom());
		},
	});
	useEffect(() => {
		map.locate();
	}, [map]);

	return position === null ? null : (
		<Marker position={position}>
			<Popup>You are here</Popup>
		</Marker>
	);
}

function Map() {
	return (
		<MapContainer
			scrollWheelZoom
			center={[48.867712, 9.306532]}
			zoom={12}
			style={{ height: '100%', width: '100%' }}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<LocationMarker />
		</MapContainer>
	);
}

export default Map;
