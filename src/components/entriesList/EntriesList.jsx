import useSWR from 'swr';
import Entry from '../entry/Entry';
import { StyledList } from '../ui/ListEntries.styled';

export default function EntriesList() {
	//const entries = useStore(state => state.entries);
	const { data: entries, errorEntries } = useSWR('/api/entries');

	if (errorEntries) {
		return <h3>Error: {errorEntries.message}</h3>;
	}

	return (
		<StyledList>
			{entries.map(entry => {
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
