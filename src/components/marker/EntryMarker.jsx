import Link from 'next/link';
import { Marker, Popup } from 'react-leaflet';
import useStore from '../../lib/store/useStore';

export default function EntryMarker() {
	const entries = useStore(state => state.entries);

	return (
		<div>
			{entries?.map(entry => {
				return (
					<Marker key={entry.id} position={entry.location}>
						<Popup>
							<Link
								passHref
								href={{
									pathname: '/entry/[id]',
									query: {
										id: entry.id,
									},
								}}
							>
								{entry.name}
							</Link>
							<p>{entry.date}</p>
						</Popup>
					</Marker>
				);
			})}
		</div>
	);
}
