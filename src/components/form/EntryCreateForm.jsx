import { useState, useEffect } from 'react';
import useStore from '../../lib/useStore';
import { StyledEntryForm } from '../ui/form/FormEntry.styled';
import Input from '../ui/form/InputEntry.styled';

export default function EntryCreateForm() {
	const initInputState = {
		nameValue: '',
		isAliveValue: true,
		isDeadValue: false,
		numberValue: '',
		topographyValue: '',
		descriptionValue: '',
	};
	const addEntry = useStore(state => state.addEntry);
	const [entryInput, setEntryInput] = useState(initInputState);
	const locationInput = useStore(state => state.currentLocation);
	const addLocationInput = useStore(state => state.addCurrentLocation);
	useEffect(() => {
		addLocationInput();
	}, [addLocationInput]);

	const current = new Date();
	const date = `${current.getFullYear()}-${current.getDate()}-${current.getMonth() + 1}`;

	const submit = event => {
		event.preventDefault();
		addEntry(entryInput, date, [locationInput.coords.latitude, locationInput.coords.longitude]);
		event.target.reset();
	};

	return (
		<StyledEntryForm onSubmit={submit}>
			<label>
				Name:{' '}
				<Input
					required
					type="text"
					name="name"
					value={entryInput.nameValue}
					variant="text"
					placeholder="Feuersalamander"
					onChange={event => {
						setEntryInput({
							...entryInput,
							nameValue: event.target.value,
						});
					}}
				/>
			</label>

			<fieldset>
				<label>
					lebend <input type="radio" value="alive" name="isAlive" variant="checkbox" />
				</label>
				<label>
					tot <input type="radio" name="isAlive" value="dead" variant="checkbox" />
				</label>
			</fieldset>
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

			<button type="submit">Eintrag Erstellen</button>
		</StyledEntryForm>
	);
}