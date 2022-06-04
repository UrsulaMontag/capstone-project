import Entry from '../../src/components/entry/EntryDetail';
import { useRouter } from 'next/router';
import useStore from '../../src/lib/store/useStore';

export default function EntryCard() {
	const router = useRouter();
	const entryID = router.query;
	const entries = useStore(state => state.entries);
	const entry = entries.filter(entry => entry.id === entryID.id)[0];

	return <Entry entry={entry} />;
}
