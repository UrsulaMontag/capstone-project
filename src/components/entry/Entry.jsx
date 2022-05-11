import { StyledEntry } from './Entry.styled';

export default function Entry({ entry }) {
	return (
		<StyledEntry>
			<h3>Name:</h3>
			<p>{entry.name}</p>
		</StyledEntry>
	);
}
