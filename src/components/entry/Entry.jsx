import { StyledEntry } from '../ui/Entry.styled';
import Typography from '../ui/Typography';
import useStore from '../../lib/useStore';
import { useState } from 'react';
import RenderIf from '../global/RenderIf';
import Button from '../ui/Button.styled';

export default function Entry({ entry, index }) {
	const [isDeleteMode, setIsDeleteMode] = useState(false);
	const deleteEntry = useStore(state => state.deleteEntry);

	function toggleDeleteMode() {
		setIsDeleteMode(!isDeleteMode);
	}

	return (
		<StyledEntry>
			<Typography variant="h3">Name:</Typography>
			<Typography variant="body1">{entry.name}</Typography>
			<Typography variant="h3">Place:</Typography>
			<Typography variant="body1">
				lng: {entry.location[0]} <br />
				lat: {entry.location[1]}
			</Typography>
			<RenderIf isTrue={!isDeleteMode}>
				<button
					type="button"
					variant="smallDo"
					onClick={() => {
						toggleDeleteMode();
					}}
				>
					X
				</button>
			</RenderIf>
			<RenderIf isTrue={isDeleteMode}>
				<Button
					type="button"
					variant="warning"
					onClick={() => {
						deleteEntry(index);
					}}
				>
					Unwiederruflich Löschen
				</Button>
				<button
					type="button"
					onClick={() => {
						toggleDeleteMode();
					}}
				>
					Abbrechen
				</button>
			</RenderIf>
		</StyledEntry>
	);
}
