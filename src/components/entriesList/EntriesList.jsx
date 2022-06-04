import useStore from '../../lib/store/useStore';
import Entry from '../entry/Entry';
import { StyledList } from '../ui/ListEntries.styled';

export default function EntriesList() {
	const entries = useStore(state => state.entries);

	return (
		<StyledList>
			{entries?.map(entry => {
				const index = entries.findIndex(entry_ => entry_.id === entry.id);
				return (
					<li key={entry.id}>
						<Entry entry={entry} index={index} />
					</li>
				);
			})}
		</StyledList>
	);
}
