import Box from '../src/components/ui/MainBox.styled';
import Typography from '../src/components/ui/Typography';
import EntriesList from '../src/components/entriesList/EntriesList';
import { HeadingBox } from '../src/components/ui/HeadingBox.styled';

export default function Entries() {
	return (
		<Box variant="cardList">
			<HeadingBox>
				<Typography variant="h2">Deine Entdeckungen</Typography>
			</HeadingBox>
			<EntriesList />
		</Box>
	);
}
