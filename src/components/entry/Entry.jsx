import { StyledEntry } from './Entry.styled';

export default function Entry({ entry, location }) {
	return (
		<StyledEntry>
			<h3>Name:</h3>
			<p>{entry.name}</p>
			<h3>Place</h3>
			<p>long: {location.location[0]}</p>
			<p>lat: {location.location[1]}</p>
		</StyledEntry>
	);
}
