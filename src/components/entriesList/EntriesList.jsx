import Entry from '../entry/Entry';

export default function EntriesList({ entries, locations }) {
	return (
		<ul>
			{entries.map(entry => {
				return (
					<li key={entry.id}>
						<Entry entry={entry} locations={locations} />
					</li>
				);
			})}
		</ul>
	);
}
