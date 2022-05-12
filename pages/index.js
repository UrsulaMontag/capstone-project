import Entry from '../src/components/entry/Entry';
import { getEntries } from '../src/services/get-entries';
import { getLocations } from '../src/services/get-locations';

export function getStaticProps() {
	const entries = getEntries();
	const locations = getLocations();
	return {
		props: {
			entries: entries,
			locations: locations,
		},
	};
}

export default function Home({ entries, locations }) {
	return <Entry entry={entries} location={locations} />;
}
