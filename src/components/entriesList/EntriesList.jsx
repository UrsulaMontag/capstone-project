import useStore from '../../lib/useStore';
import Entry from '../entry/Entry';
import { StyledList } from '../ui/StyledListEntries';

export default function EntriesList() {
	const entries = useStore(state => state.entries);
	console.log(entries);
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
