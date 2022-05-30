import EntriesList from '../src/components/entriesList/EntriesList';
import Box from '../src/components/ui/MainBox.styled';
import Typography from '../src/components/ui/Typography';

export default function Entries() {
	return (
		<Box>
			<Typography variant="h2">Deine Entdeckungen</Typography>
			<EntriesList />
		</Box>
	);
}
