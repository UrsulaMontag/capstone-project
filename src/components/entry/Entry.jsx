import { StyledEntry } from '../ui/Entry.styled';
import Typography from '../ui/Typography';
//import useStore from '../../lib/store/useStore';
import Button from '../ui/Button.styled';
import { useSWRConfig } from 'swr';
import { useState } from 'react';

export default function Entry({ entry }) {
	//const setDeleteMode = useStore(state => state.setISDeleteMode);
	const [isDeleteMode, setIsDeleteMode] = useState(false);
	const { mutate } = useSWRConfig();

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
				<Button
					type="button"
					variant="smallDo"
					onClick={() => {
						setIsDeleteMode(!isDeleteMode);
					}}
				>
					X
				</Button>
			) : (
				<>
					<Button
						variant="warning"
						type="button"
						onClick={async () => {
							const response = await fetch('/api/entry/' + entry.id, {
								method: 'DELETE',
							});
							console.log(await response.json());
							mutate('/api/entries');
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
