import useStore from '../../lib/store/useStore';
import Entry from '../entry/Entry';
import { StyledList } from '../ui/ListEntries.styled';
import { useSession } from 'next-auth/react';

export default function EntriesList() {
	const { data: session } = useSession();
	const entriesDefault = useStore(state => state.entries);
	const entriesUser = entriesDefault.filter(entry => entry.user === session?.user.email);
	const entries = session > 0 ? entriesUser : entriesDefault;

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
