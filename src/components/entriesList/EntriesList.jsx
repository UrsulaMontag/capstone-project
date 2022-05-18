import Entry from '../entry/Entry';
import { StyledList } from '../ui/EntriesList.styled';

export default function EntriesList({ entries }) {
	return (
		<StyledList>
			{entries.map(entry => {
				return (
					<li key={entry.id}>
						<Entry entry={entry} />
					</li>
				);
			})}
		</StyledList>
	);
}
