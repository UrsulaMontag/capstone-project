import Typography from '../ui/Typography';
import Button from '../ui/Button.styled';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useStore from '../../lib/store/useStore';
import Image from 'next/image';
import { DetailCard } from '../ui/DetailCard.styled';
import CardImage from '../ui/CardImage.styled';
import ButtonBox from '../ui/CardButtonBox.styled';
import { Details } from '../ui/CardDetails.styled';
import { TextBox } from '../ui/TextBox.styled';

export default function EntryDetail() {
	const [isDeleteMode, setIsDeleteMode] = useState(false);
	const setEntryToUpdate = useStore(state => state.setEntryToUpdate);
	const deleteEntry = useStore(state => state.deleteEntry);
	const router = useRouter();

	const entryID = router.query;
	const entries = useStore(state => state.entries);
	const entry = entries?.filter(entry => entry.id === entryID.id)[0];

	return (
		<DetailCard>
			<CardImage>
				<Image
					src="/homepic.png"
					alt="example picture of animal"
					width={900}
					height={700}
					layout="responsive"
				/>
			</CardImage>
			<TextBox>
				<Typography variant="h3">Datum:</Typography>
				<Typography variant="body1">{entry.date}</Typography>
			</TextBox>
			<TextBox>
				<Typography variant="h3">Name:</Typography>
				<Typography variant="body1">{entry.name}</Typography>
			</TextBox>

			<TextBox>
				<Typography variant="h3">Anzahl:</Typography>
				{entry.number ? (
					<Typography variant="body1">{entry.number}</Typography>
				) : (
					'Nicht zählbar'
				)}
			</TextBox>

			<Details>
				<summary>
					<Typography variant="h3">Fundort in Worten: </Typography>
				</summary>
				{entry.topography ? (
					<Typography variant="body1">{entry.topography}</Typography>
				) : (
					'Deinen Fundort hast du noch nicht beschrieben.'
				)}
			</Details>

			<Details>
				<summary>
					<Typography variant="h3">Besonderheiten der Entdeckung:</Typography>
				</summary>
				{entry.description ? (
					<Typography variant="body1">{entry.description}</Typography>
				) : (
					'Du hast noch keine Besonderheiten deiner Entdeckung eingetragen.'
				)}
			</Details>

			{!isDeleteMode ? (
				<ButtonBox>
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
				</ButtonBox>
			) : (
				<ButtonBox>
					<Button
						variant="warning"
						type="button"
						onClick={() => {
							deleteEntry(entry.id);
							router.push({
								pathname: '/entries',
							});
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
				</ButtonBox>
			)}
		</DetailCard>
	);
}
