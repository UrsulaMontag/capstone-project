import Box from '../src/components/ui/MainBox.styled';
import Typography from '../src/components/ui/Typography';
import dynamic from 'next/dynamic';
const ListWithNoSSR = dynamic(() => import('../src/components/entriesList/EntriesList'), {
	ssr: false,
});
export default function Entries() {
	return (
		<Box variant="cardList">
			<Typography variant="h2">Deine Entdeckungen</Typography>
			<ListWithNoSSR />
		</Box>
	);
}
