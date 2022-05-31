import dynamic from 'next/dynamic';
import { StyledMap } from '../src/components/ui/Map.styled';
const MapWithNoSSR = dynamic(() => import('../src/components/map/Map'), {
	ssr: false,
});

export default function Map() {
	return (
		<StyledMap variant="whole-window">
			<MapWithNoSSR />
		</StyledMap>
	);
}
