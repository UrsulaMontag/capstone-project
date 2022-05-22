import EntriesList from '../src/components/entriesList/EntriesList';
import dynamic from 'next/dynamic';
import { StyledMap } from '../src/components/ui/Map.styled';
import EntryCreateForm from '../src/components/create/EntryCreateForm';

export default function Home() {
	const MapWithNoSSR = dynamic(() => import('../src/components/map/Map'), {
		ssr: false,
	});
	return (
		<>
			<EntriesList />
			<StyledMap>
				<MapWithNoSSR />
			</StyledMap>
			<EntryCreateForm />
		</>
	);
}
