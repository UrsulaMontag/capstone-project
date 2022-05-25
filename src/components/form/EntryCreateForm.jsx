import { useState, useEffect } from 'react';
import useStore from '../../lib/useStore';
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
	const addEntry = useStore(state => state.addEntry);
	const [entryInput, setEntryInput] = useState(initInputState);
	const [isAlive, setIsAlive] = useState('alive');
	const locationInput = useStore(state => state.currentLocation);
	const addLocationInput = useStore(state => state.addCurrentLocation);
	useEffect(() => {
		addLocationInput();
	}, [addLocationInput]);

	const handleChange = event => {
		setIsAlive(event.target.value);
		console.log(event.target.value);
	};

	const current = new Date();
	const date = `${current.getFullYear()}-${current.getDate()}-${current.getMonth() + 1}`;

	const resetFormState = () => {
		//addLocationInput('');
		setIsAlive('alive');
		setEntryInput(initInputState);
	};

	const submit = event => {
		event.preventDefault();
		console.log(locationInput);
		addEntry(entryInput, isAlive, date, [
			locationInput.coords?.latitude,
			locationInput.coords?.longitude,
		]);
		alert('Erfolgreich in dein Feldtagebuch eingetragen 🐜');
		resetFormState('');
		event.target.reset();
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
						type="radio"
						value="alive"
						checked={isAlive === 'alive'}
						name="isAlive"
						variant="radio"
						onChange={handleChange}
					/>
				</label>
				<label>
					tot{' '}
					<input
						type="radio"
						checked={isAlive === 'dead'}
						name="isAlive"
						value="dead"
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
				Eintrag Erstellen
			</button>
		</StyledEntryForm>
	);
}
