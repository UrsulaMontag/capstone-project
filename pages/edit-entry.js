import EntryCreateForm from '../src/components/form/EntryCreateForm';

import Box from '../src/components/ui/MainBox.styled';
import Typography from '../src/components/ui/Typography';
//import dynamic from 'next/dynamic';
//import SmallMap from '../src/components/ui/MapSmall.styled';
// const MapWithNoSSR = dynamic(() => import('../src/components/map/Map'), {
// 	ssr: false,
// });

export default function EditEntry() {
	return (
		<Box>
			<Typography variant="h2">Editiere deinen Eintrag</Typography>
			<EntryCreateForm />
		</Box>
	);
}
