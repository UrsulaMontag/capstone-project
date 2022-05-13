import { StyledEntry } from './Entry.styled';
import Typography from '../ui/Typography';

export default function Entry({ index, locations }) {
	return (
		<StyledEntry>
			<Typography variant="h3">Name:</Typography>
			<Typography variant="body1">{index.name}</Typography>
			<Typography variant="h3">Place:</Typography>
			<Typography variant="body1">
				long:
				{locations.map(location => {
					return location.entryId === index.id && location.location[0];
				})}
			</Typography>
			<Typography variant="body1">
				lat:
				{locations.map(location => {
					return location.entryId === index.id && location.location[1];
				})}
			</Typography>
		</StyledEntry>
	);
}
