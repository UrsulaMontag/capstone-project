import Entry from '../entry/Entry';

export default function EntriesList({ entries, locations }) {
	return (
		<ul>
			{entries.map(entry => {
				const index = entries.filter(({ id }) => id === entry.id);
				return (
					<li key={entry.id}>
						<Entry index={index} locations={locations} />
					</li>
				);
			})}
		</ul>
	);
}
