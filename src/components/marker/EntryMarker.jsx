import { Marker, Popup } from 'react-leaflet';
import useStore from '../../lib/useStore.js';

export default function EntryMarker() {
	const entries = useStore(state => state.entries);
	console.log(entries);
	return (
		<>
			{entries.map(entry => {
				return (
					<Marker key={entry.id} position={entry.location}>
						<Popup>{entry.name}</Popup>
					</Marker>
				);
			})}
		</>
	);
}