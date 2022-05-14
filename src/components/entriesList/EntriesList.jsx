import Entry from '../entry/Entry';
import { StyledList } from './EntriesList.styled';
import { extractLocation } from '../../lib/helpers';

export default function EntriesList({ entries, locations }) {
	return (
		<StyledList>
			{entries.map(entry => {
				const location = extractLocation(entry, locations);
				return (
					<li key={entry.id}>
						<Entry entry={entry} location={location} />
					</li>
				);
			})}
		</StyledList>
	);
}
