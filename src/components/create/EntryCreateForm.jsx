import { useState, useEffect } from 'react';
import useStore from '../../lib/useStore';

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
		<form onSubmit={submit}>
			<label>
				Name:{' '}
				<input
					required
					type="text"
					name="name"
					value={entryInput.nameValue}
					onChange={event => {
						setEntryInput({
							...entryInput,
							nameValue: event.target.value,
						});
					}}
				/>
			</label>
			{/* <label>
				Datum:{' '}
				<input
					type="text"
					name="date"
					value={entryInput.dateValue}
					onChange={() => {
						setEntryInput({
							...entryInput,
							dateValue: date,
						});
					}}
				/>
			</label> */}

			{/* <label>
				Verortung:{' '}
				<input
					type="text"
					name="location"
					value={locationInput}
					onChange={() => {
						addLocationInput({
							locationInput: [date],
						});
					}}
				/>
			</label> */}
			<label>
				lebend{' '}
				<input
					type="checkbox"
					name="alive"
					checked={entryInput.isAliveValue}
					onChange={event => {
						setEntryInput({
							...entryInput,
							isAliveValue: event.target.value,
						});
					}}
				/>
			</label>
			<label>
				tot{' '}
				<input
					type="checkbox"
					name="dead"
					checked={entryInput.isDeadValue}
					onChange={event => {
						setEntryInput({
							...entryInput,
							isDeadValue: event.target.value,
						});
					}}
				/>
			</label>
			<label>
				Anzahl an Individuen:{' '}
				<input
					type="text"
					name="number"
					value={entryInput.numberValue}
					onChange={event => {
						if (!event.target.value.match(/[^0-9]/)) {
							setEntryInput({
								...entryInput,
								numberValue: event.target.value,
							});
						} else {
							alert('Only numeric input allowed');
						}
					}}
				/>
			</label>
			<label>
				Fundort Beschreibung:{' '}
				<input
					type="text"
					name="topography"
					value={entryInput.topographyValue}
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
				<input
					type="text"
					name="description"
					value={entryInput.descriptionValue}
					onChange={event => {
						setEntryInput({
							...entryInput,
							descriptionValue: event.target.value,
						});
					}}
				/>
			</label>

			<button type="submit">submit</button>
		</form>
	);
}
