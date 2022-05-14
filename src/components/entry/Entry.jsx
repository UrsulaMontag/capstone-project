import { StyledEntry } from './Entry.styled';
import Typography from '../ui/Typography';

export default function Entry({ entry, location }) {
	return (
		<StyledEntry>
			<Typography variant="h3">Name:</Typography>
			<Typography variant="body1">{entry.name}</Typography>
			<Typography variant="h3">Place:</Typography>
			<Typography variant="body1">long: {location.location[0]}</Typography>
			<Typography variant="body1">lat: {location.location[1]}</Typography>
		</StyledEntry>
	);
}
