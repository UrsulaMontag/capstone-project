import { StyledEntry } from '../ui/Entry.styled';
import Typography from '../ui/Typography';
import useStore from '../../lib/store/useStore';
import { toggleMode } from '../../lib/helpers/toggleFunctions';
import RenderIf from '../global/RenderIf';
import Button from '../ui/Button.styled';
import EntryCreateForm from '../form/EntryCreateForm';

export default function Entry({ entry, index }) {
	const isDeleteMode = useStore(state => state.isDeleteMode);
	const setDeleteMode = useStore(state => state.setDeleteMode);
	const isEditMode = useStore(state => state.isEditMode);
	const setEditMode = useStore(state => state.setEditMode);
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
						toggleMode(isDeleteMode, setDeleteMode);
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
					Unwiederruflich Löschen
				</Button>
				<Button
					type="button"
					onClick={() => {
						toggleMode(isDeleteMode, setDeleteMode);
					}}
				>
					Abbrechen
				</Button>
			</RenderIf>
			<Button
				type="button"
				variant="smallDo"
				onClick={() => {
					toggleMode(isEditMode, setEditMode);
				}}
			>
				✎
			</Button>
			<RenderIf isTrue={isEditMode}>
				<EntryCreateForm entryEdit={entry} />
			</RenderIf>
		</StyledEntry>
	);
}
