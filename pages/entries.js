import EntriesList from '../src/components/entriesList/EntriesList';
import Typography from '../src/components/ui/Typography';

export default function Entries() {
	return (
		<>
			<Typography variant="h2">Deine Entdeckungen</Typography>
			<EntriesList />
		</>
	);
}
