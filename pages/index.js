import Entry from '../src/components/entry/Entry';
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
	return <Entry entry={entries} />;
}
