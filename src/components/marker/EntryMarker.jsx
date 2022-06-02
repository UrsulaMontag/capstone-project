import { Marker, Popup } from 'react-leaflet';
import useStore from '../../lib/store/useStore';

export default function EntryMarker() {
	const entries = useStore(state => state.entries);

	return (
		<div>
			{entries?.map(entry => {
				return (
					<Marker key={entry.id} position={entry.location}>
						<Popup>{entry.name}</Popup>
					</Marker>
				);
			})}
		</div>
	);
}
