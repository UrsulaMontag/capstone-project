import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useStore from '../../lib/store/useStore';
import Fieldset from '../ui/form/Fieldset.styled';
import StyledEntryForm from '../ui/form/FormEntry.styled';
import Input from '../ui/form/InputEntry.styled';

export default function EntryCreateForm() {
	const initInputState = {
		nameValue: '',
		numberValue: '',
		topographyValue: '',
		descriptionValue: '',
	};
	const [entryInput, setEntryInput] = useState(initInputState);
	const [isAlive, setIsAlive] = useState('true');
	const router = useRouter();
	const addEntry = useStore(state => state.addEntry);
	const editEntry = useStore(state => state.editEntry);

	const currentLocation = useStore(state => state.currentLocation);

	const handleChange = event => {
		setIsAlive(event.target.value);
	};

	React.useEffect(() => {
		if (router.isReady) {
			setEntryInput({
				...entryInput,
				id: router.query.id,
				date: router.query.date,
				location: router.query.location,
				nameValue: router.query.nameValue,
				isAlive: router.query.isAlive,
				numberValue: router.query.numberValue,
				topographyValue: router.query.topographyValue,
				descriptionValue: router.query.descriptionValue,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.isReady]);

	const submit = async event => {
		event.preventDefault();
		if (!router.query.idValue) {
			addEntry(entryInput, isAlive, currentLocation);
			router.push('/entries');
		} else if (router.query.idValue) {
			editEntry(entryInput, isAlive, router);
			router.push('/entries');
		} else {
			router.push('/edit-entry');
		}
	};

	return (
		<StyledEntryForm onSubmit={submit}>
			<label>
				Name:{' '}
				<Input
					required
					type="text"
					maxlength="100"
					name="name"
					value={entryInput.nameValue}
					placeholder="Feuersalamander"
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
						type="radio"
						value="true"
						checked={isAlive === 'true'}
						name="isAlive"
						variant="radio"
						onChange={handleChange}
					/>
				</label>
				<label>
					tot{' '}
					<input
						type="radio"
						checked={isAlive === 'false'}
						name="isAlive"
						value="false"
						variant="radio"
						onChange={handleChange}
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
				<Input
					type="textarea"
					name="topography"
					maxlength="400"
					value={entryInput.topographyValue}
					variant="textarea"
					placeholder="Hinterer Balkeshauweg. Schotterweg im Wald."
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
				<Input
					type="textarea"
					name="description"
					maxlength="1500"
					value={entryInput.descriptionValue}
					variant="textarea"
					placeholder="Zwei ausgewachsene Exemplare zwischen Graben und Spazierweg."
					onChange={event => {
						setEntryInput({
							...entryInput,
							descriptionValue: event.target.value,
						});
					}}
				/>
			</label>

			<button type="submit" variant="submit">
				{router.query.nameValue ? 'Korrigieren' : 'Eintrag Erstellen'}
			</button>
		</StyledEntryForm>
	);
}
