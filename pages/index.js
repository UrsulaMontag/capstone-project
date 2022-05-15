import EntriesList from '../src/components/entriesList/EntriesList';
import { getEntries } from '../src/services/get-entries';
import dynamic from 'next/dynamic';
import { StyledMap } from '../src/components/map/Map.styled';

export function getStaticProps() {
	const entries = getEntries();
	return {
		props: {
			entries: entries,
		},
	};
}

export default function Home({ entries }) {
	const MapWithNoSSR = dynamic(() => import('../src/components/map/Map'), {
		ssr: false,
	});
	return (
		<>
			<EntriesList entries={entries} />
			<StyledMap>
				<MapWithNoSSR />
			</StyledMap>
		</>
	);
}
