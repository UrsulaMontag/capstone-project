import { StyledEntry } from '../ui/Entry.styled';
import Typography from '../ui/Typography';
import Button from '../ui/Button.styled';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useStore from '../../lib/store/useStore';

export default function Entry({ entry }) {
	const [isDeleteMode, setIsDeleteMode] = useState(false);
	const setEntryToUpdate = useStore(state => state.setEntryToUpdate);
	const deleteEntry = useStore(state => state.deleteEntry);
	const router = useRouter();

	return (
		<StyledEntry>
			<Typography variant="h3">Name:</Typography>
			<Typography variant="body1">{entry.name}</Typography>
			<Typography variant="h3">Place:</Typography>
			<Typography variant="body1">
				lng: {entry?.location[0]} <br />
				lat: {entry?.location[1]} <br />
				date: {entry.date}
			</Typography>
			{!isDeleteMode ? (
				<>
					<Button
						type="button"
						variant="smallDo"
						onClick={() => {
							setIsDeleteMode(!isDeleteMode);
						}}
					>
						x
					</Button>
					<Button
						type="button"
						variant="smallDo"
						onClick={() => {
							setEntryToUpdate(entry.id);

							router.push({
								pathname: '/edit-entry',
							});
						}}
					>
						✎
					</Button>
				</>
			) : (
				<>
					<Button
						variant="warning"
						type="button"
						onClick={() => {
							deleteEntry(entry.id);
						}}
					>
						Unwiderruflich Löschen
					</Button>
					<Button
						type="button"
						onClick={() => {
							setIsDeleteMode(!isDeleteMode);
						}}
					>
						Abbrechen
					</Button>
				</>
			)}
		</StyledEntry>
	);
}
