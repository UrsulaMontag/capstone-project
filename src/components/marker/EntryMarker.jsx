import { Marker, Popup } from 'react-leaflet';
import useSWR from 'swr';

export default function EntryMarker() {
	const { data: entries, errorEntries } = useSWR('/api/entries');

	if (errorEntries) {
		return <h3>Error: {errorEntries.message}</h3>;
	}
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
