import { StyledEntry } from './Entry.styled';
import { StyledH3 } from '../ui/Typography';

export default function Entry({ entry, location }) {
	return (
		<StyledEntry>
			<StyledH3>Name:</StyledH3>
			<p>{entry.name}</p>
			<StyledH3>Place</StyledH3>
			<p>long: {location.location[0]}</p>
			<p>lat: {location.location[1]}</p>
		</StyledEntry>
	);
}
