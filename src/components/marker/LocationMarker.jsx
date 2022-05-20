import { useEffect, useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

export default function LocationMarker() {
	const [position, setPosition] = useState(null);
	const map = useMapEvents({
		locationfound(location) {
			setPosition(location.latlng);
			map.flyTo(location.latlng, 14);
		},
	});
	useEffect(() => {
		map.locate();
	}, [map]);

	return position === null ? null : (
		<Marker position={position}>
			<Popup>Du bist hier </Popup>
		</Marker>
	);
}
