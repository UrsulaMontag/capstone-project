import { StyledEntry } from '../ui/Entry.styled';
import Typography from '../ui/Typography';
import useStore from '../../lib/store/useStore';
import RenderIf from '../global/RenderIf';
import Button from '../ui/Button.styled';
import { useState } from 'react';
import { toggleMode } from '../../lib/helpers/toggleFunctions';

export default function Entry({ entry, index }) {
	const [isDeleteMode, setIsDeleteMode] = useState(false);
	const deleteEntry = useStore(state => state.deleteEntry);

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
				<Button
					type="button"
					variant="smallDo"
					onClick={() => {
						toggleMode(isDeleteMode, setIsDeleteMode);
					}}
				>
					X
				</Button>
			</RenderIf>
			<RenderIf isTrue={isDeleteMode}>
				<Button
					type="button"
					variant="warning"
					onClick={() => {
						deleteEntry(index);
					}}
				>
					Unwiderruflich Löschen
				</Button>
				<Button
					type="button"
					onClick={() => {
						toggleMode(isDeleteMode, setIsDeleteMode);
					}}
				>
					Abbrechen
				</Button>
			</RenderIf>
		</StyledEntry>
	);
}
