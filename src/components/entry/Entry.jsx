import { StyledEntry } from '../ui/Entry.styled';
import Typography from '../ui/Typography';

export default function Entry({ entry }) {
	return (
		<StyledEntry>
			<Typography variant="h3">Name:</Typography>
			<Typography variant="body1">{entry.name}</Typography>
			<Typography variant="h3">Place:</Typography>
			<Typography variant="body1">
				lng: {entry.location[0]} <br />
				lat: {entry.location[1]}
			</Typography>
		</StyledEntry>
	);
}
