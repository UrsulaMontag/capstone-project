import { StyledEntry } from '../ui/Entry.styled';
import Typography from '../ui/Typography';
import useStore from '../../lib/store/useStore';
import Button from '../ui/Button.styled';

export default function Entry({ entry, index }) {
	const isDeleteMode = useStore(state => state.deleteMode);
	const setDeleteMode = useStore(state => state.setDeleteMode);
	const deleteEntry = useStore(state => state.deleteEntry);

	const toggleDeleteMode = () => {
		setDeleteMode(!isDeleteMode);
	};

	return (
		<StyledEntry>
			<Typography variant="h3">Name:</Typography>
			<Typography variant="body1">{entry.name}</Typography>
			<Typography variant="h3">Place:</Typography>
			<Typography variant="body1">
				lng: {entry.location[0]} <br />
				lat: {entry.location[1]}
			</Typography>
			{!isDeleteMode ? (
				<Button
					type="button"
					variant="smallDo"
					onClick={() => {
						toggleDeleteMode();
					}}
				>
					X
				</Button>
			) : (
				<>
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
							toggleDeleteMode();
						}}
					>
						Abbrechen
					</Button>
				</>
			)}
		</StyledEntry>
	);
}
