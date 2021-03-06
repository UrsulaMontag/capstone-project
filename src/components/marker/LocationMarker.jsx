import { useEffect } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import useStore from '../../lib/store/useStore';

export default function LocationMarker() {
	const addLocation = useStore(state => state.addLocation);
	const currentLocation = useStore(state => state.currentLocation);

	const map = useMapEvents({
		locationfound(location) {
			addLocation(location.latlng);
			map.flyTo(location.latlng, 14);
		},
	});
	useEffect(() => {
		map.locate();
	}, [map]);

	return currentLocation === null ? null : (
		<Marker position={currentLocation}>
			<Popup>Du bist hier </Popup>
		</Marker>
	);
}
