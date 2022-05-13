import Entry from '../entry/Entry';
import { StyledList } from './EntriesList.styled';

export default function EntriesList({ entries, locations }) {
	return (
		<StyledList>
			{entries.map(entry => {
				return (
					<li key={entry.id}>
						<Entry entry={entry} locations={locations} />
					</li>
				);
			})}
		</StyledList>
	);
}
