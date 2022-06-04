import { StyledEntry } from '../ui/Entry.styled';
import Typography from '../ui/Typography';
import Button from '../ui/Button.styled';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useStore from '../../lib/store/useStore';
import { nanoid } from 'nanoid';
import Image from 'next/image';

export default function Entry({ entry }) {
	const [isDeleteMode, setIsDeleteMode] = useState(false);
	const setEntryToUpdate = useStore(state => state.setEntryToUpdate);
	const deleteEntry = useStore(state => state.deleteEntry);
	const router = useRouter();

	return (
		<StyledEntry>
			<ul>
				{Object.entries(entry).map(entry => {
					return (
						entry[0] !== 'id' &&
						entry[1] && (
							<li key={nanoid()}>
								<Typography variant="h3">{entry[0]}</Typography>
								<Typography variant="body1">{entry[1]}</Typography>
							</li>
						)
					);
				})}
			</ul>
			<Image
				src="https://source.unsplash.com/random/900X700?{entry.name}"
				alt="example picture of animal"
				width={900}
				height={700}
				layout="responsive"
			/>
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
