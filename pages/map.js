import StyledMap from '../src/components/ui/Map.styled';

import dynamic from 'next/dynamic';
const MapWithNoSSR = dynamic(() => import('../src/components/map/Map'), {
	ssr: false,
});

export default function Map() {
	return (
		<StyledMap>
			<MapWithNoSSR />
		</StyledMap>
	);
}
