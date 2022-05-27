import EntriesList from '../src/components/entriesList/EntriesList';
import dynamic from 'next/dynamic';
import { StyledMap } from '../src/components/ui/Map.styled';
import EntryCreateForm from '../src/components/form/EntryCreateForm';
const MapWithNoSSR = dynamic(() => import('../src/components/map/Map'), {
	ssr: false,
});

export default function Home() {
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
