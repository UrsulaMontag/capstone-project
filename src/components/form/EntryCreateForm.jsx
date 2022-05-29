import { useState, useEffect } from 'react';
import useStore from '../../lib/store/useStore';
import RenderIf from '../global/RenderIf';
import Fieldset from '../ui/form/Fieldset.styled';
import StyledEntryForm from '../ui/form/FormEntry.styled';
import Input from '../ui/form/InputEntry.styled';

export default function EntryCreateForm({ entryEdit, toggleEditMode }) {
	let initInputState = {};
	if (entryEdit) {
		initInputState = {
			id: entryEdit.id,
			isAlive: entryEdit.isAlive,
			nameValue: entryEdit.name,
			numberValue: entryEdit.number,
			topographyValue: entryEdit.topography,
			descriptionValue: entryEdit.description,
			date: entryEdit.date,
			location: entryEdit.location,
		};
	} else {
		initInputState = {
			nameValue: '',
			numberValue: '',
			topographyValue: '',
			descriptionValue: '',
		};
	}
	const editEntry = useStore(state => state.editEntry);

	const addEntry = useStore(state => state.addEntry);
	const [entryInput, setEntryInput] = useState(initInputState);
	const [isAlive, setIsAlive] = useState('alive');
	const currentLocation = useStore(state => state.currentLocation);

	useEffect(() => {
		setEntryInput;
	}, [setEntryInput]);
	const handleChange = event => {
		setIsAlive(event.target.value);
	};

	const current = new Date();
	const date = `${current.getFullYear()}-${current.getDate()}-${current.getMonth() + 1}`;

	const resetFormState = () => {
		setIsAlive('alive');
		setEntryInput(initInputState);
	};

	const submit = async event => {
		event.preventDefault();
		if (entryEdit.name) {
			console.log('-------------------------------------', entryEdit);
			await editEntry(entryInput, entryInput.id);
			toggleEditMode();
		} else {
			addEntry(entryInput, isAlive, date, currentLocation);
			alert('Erfolgreich in dein Feldtagebuch eingetragen');
			resetFormState('');
			event.target.reset();
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

			<RenderIf isTrue={entryEdit}>
				<Input name="location" value={entryInput.location} />
				<Input name="date" value={entryInput.date} />
			</RenderIf>

			<button type="submit" variant="submit">
				Eintrag Erstellen
			</button>
		</StyledEntryForm>
	);
}
