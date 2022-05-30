import EntriesList from '../src/components/entriesList/EntriesList';
import Typography from '../src/components/ui/Typography';

export default function Entries() {
	return (
		<>
			<Typography variant="h1">Deine Entdeckungen im Überblick</Typography>
			<EntriesList />
		</>
	);
}
