import Box from '../src/components/ui/MainBox.styled';
import Typography from '../src/components/ui/Typography';
import EntriesList from '../src/components/entriesList/EntriesList';

export default function Entries() {
	return (
		<Box variant="cardList">
			<Typography variant="h2">Deine Entdeckungen</Typography>
			<EntriesList />
		</Box>
	);
}
