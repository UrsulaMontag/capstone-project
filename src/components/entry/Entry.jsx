import { StyledEntry } from '../ui/Entry.styled';
import Typography from '../ui/Typography';
import Button from '../ui/Button.styled';
import { useSWRConfig } from 'swr';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Entry({ entry }) {
	const [isDeleteMode, setIsDeleteMode] = useState(false);
	const { mutate } = useSWRConfig();
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
							router.push({
								pathname: '/edit-entry',
								query: {
									idValue: entry.id,
									date: entry.date,
									location: entry.location,
									nameValue: entry.name,
									isAlive: entry.isAlive,
									numberValue: entry.number,
									topographyValue: entry.topography,
									descriptionValue: entry.description,
								},
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
