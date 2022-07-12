import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import useStore from '../../lib/store/useStore';
import Button from '../ui/Button.styled';
import Fieldset from '../ui/form/Fieldset.styled';
import StyledEntryForm from '../ui/form/FormEntry.styled';
import { Input } from '../ui/form/InputEntry.styled';
import { Textarea } from '../ui/form/Textarea.styled';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import styled from 'styled-components';

export default function EntryCreateForm() {
	const { data: session } = useSession();
	const currentLocation = useStore(state => state.currentLocation);
	const initInputState = {
		isAlive: true,
		nameValue: '',
		numberValue: '',
		topographyValue: '',
		descriptionValue: '',
	};
	const [entryInput, setEntryInput] = useState(initInputState);
	const router = useRouter();
	const addEntry = useStore(state => state.addEntry);
	const editEntry = useStore(state => state.editEntry);
	const entryToUpdate = useStore(state => state.entryToUpdate);

	const oldEntry = entryToUpdate && entryToUpdate[0];

	useEffect(() => {
		if (entryToUpdate) {
			setEntryInput({
				...entryInput,
				id: oldEntry.id,
				date: oldEntry.date,
				location: oldEntry.location,
				nameValue: oldEntry.name,
				isAlive: oldEntry.isAlive,
				numberValue: oldEntry.number,
				topographyValue: oldEntry.topography,
				descriptionValue: oldEntry.description,
				user: oldEntry.user,
				img: oldEntry.img,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [entryToUpdate, setEntryInput]);

	const CLOUD = process.env.CLOUDINARY_CLOUD;
	const PRESET = process.env.CLOUDINARY_PRESET;
	const placeholderImage = {
		url: 'https://res.cloudinary.com/montagu666/image/upload/v1654763003/homepic_ppbju0.png',
		width: 900,
		height: 700,
	};

	const [previewImage, setPreviewImage] = useState(placeholderImage);

	const uploadImage = async event => {
		try {
			const url = `https://api.cloudinary.com/v1_1/${CLOUD}/upload`;
			const image = event.target.files[0];

			const fileData = new FormData();
			fileData.append('file', image);
			fileData.append('upload_preset', PRESET);

			const response = await fetch(url, {
				method: 'POST',
				body: fileData,
			});
			const translation = await response.json();
			const newImage = {
				url: translation.public_id,
				width: translation.width,
				height: translation.height,
			};

			setPreviewImage(newImage);
		} catch (error) {
			console.error(error.message);
		}
	};

	const submit = async event => {
		event.preventDefault();
		if (entryToUpdate) {
			editEntry(oldEntry.id, { ...entryInput });
			router.push('/entries');
		} else {
			event.image = {
				width: previewImage.width,
				height: previewImage.height,
			};

			(event.image.url = {
				previewImage:
					previewImage.url ==
					'https://res.cloudinary.com/dlzyhqilm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1653520182/Group_16_ggv2bu.svg'
						? {
								url: 'https://images.unsplash.com/photo-1624160719218-33eb1081919c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMHBhdHRlcm58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
						  }
						: { url: previewImage.url },
			}),
				setEntryInput({ ...entryInput, imgValue: event.image });
			addEntry(entryInput, currentLocation, session);
			router.push('/entries');
		}
		console.log(entryInput);
		event.image = previewImage.url;
	};

	return (
		<StyledEntryForm onSubmit={submit}>
			<label>
				Name:{' '}
				<Input
					required
					type="text"
					maxlength="100"
					label="name"
					id="name"
					name="name"
					value={entryInput.nameValue}
					placeholder="Feuersalamander"
					variant="text"
					onChange={event => {
						setEntryInput({
							...entryInput,
							nameValue: event.target.value,
						});
					}}
				/>
			</label>

			<Fieldset>
				<label>
					lebend{' '}
					<input
						required
						value
						checked
						id="alive"
						type="radio"
						name="isAlive"
						variant="radio"
						onChange={event => {
							const livingState = event.target.id === 'alive' && true;
							setEntryInput({
								...entryInput,
								isAlive: livingState,
							});
						}}
					/>
				</label>
				<label>
					tot{' '}
					<input
						id="dead"
						type="radio"
						name="isAlive"
						value={false}
						variant="radio"
						onChange={event => {
							const livingState = event.target.id === 'dead' && false;
							setEntryInput({
								...entryInput,
								isAlive: livingState,
							});
						}}
					/>
				</label>
			</Fieldset>
			<label>
				Anzahl an Individuen:{' '}
				<Input
					type="text"
					name="number"
					value={entryInput.numberValue}
					variant="number"
					placeholder="2"
					onChange={event => {
						if (!event.target.value.match(/[^0-9]/)) {
							setEntryInput({
								...entryInput,
								numberValue: event.target.value,
							});
						} else {
							alert('Only numeric Input allowed');
						}
					}}
				/>
			</label>
			<label>
				Fundort Beschreibung:{' '}
				<Textarea
					type="textarea"
					name="topography"
					value={entryInput.topographyValue}
					variant="textarea"
					onChange={event => {
						setEntryInput({
							...entryInput,
							topographyValue: event.target.value,
						});
					}}
				/>
			</label>
			<label>
				Beschreibe deine Entdeckung:{' '}
				<Textarea
					type="textarea"
					name="description"
					value={entryInput.descriptionValue}
					variant="textarea"
					onChange={event => {
						setEntryInput({
							...entryInput,
							descriptionValue: event.target.value,
						});
					}}
				/>
			</label>
			<label>
				Hier kannst du ein Bild deiner Entdeckung hochladen:{' '}
				<input
					id="img"
					type="file"
					onChange={event => {
						uploadImage(event);
					}}
				/>
				<Div>
					<Image src={previewImage.url} alt="blupp" layout="fill" />
				</Div>
			</label>

			<Button type="submit" variant="submit">
				{entryToUpdate ? 'Korrigieren' : 'Eintrag Erstellen'}
			</Button>
		</StyledEntryForm>
	);
}
const Div = styled.div`
	max-width: 30px;
	max-height: 30px;
	object-fit: cover;
	position: relative;
`;
