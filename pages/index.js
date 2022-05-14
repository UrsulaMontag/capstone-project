import EntriesList from '../src/components/entriesList/EntriesList';
import { getEntries } from '../src/services/get-entries';

export function getStaticProps() {
	const entries = getEntries();
	return {
		props: {
			entries: entries,
		},
	};
}

export default function Home({ entries }) {
	return <EntriesList entries={entries} />;
}
