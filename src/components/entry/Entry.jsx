import { StyledEntry } from './Entry.styled';
import Typography from '../ui/Typography';

export default function Entry({ entry }) {
	return (
		<StyledEntry>
			<Typography variant="h3">Name:</Typography>
			<Typography variant="body1">{entry.name}</Typography>
			<Typography variant="h3">Place:</Typography>
			<Typography variant="body1">long: {entry.location[0]}</Typography>
			<Typography variant="body1">lat: {entry.location[1]}</Typography>
		</StyledEntry>
	);
}
