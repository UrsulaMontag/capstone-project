import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import useStore from '../../lib/store/useStore';
import Button from '../ui/Button.styled';
import Fieldset from '../ui/form/Fieldset.styled';
import StyledEntryForm from '../ui/form/FormEntry.styled';
import { Input } from '../ui/form/InputEntry.styled';

export default function EntryCreateForm() {
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
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [entryToUpdate, setEntryInput]);

	const submit = async event => {
		event.preventDefault();
		if (entryToUpdate) {
			editEntry(oldEntry.id, { ...entryInput });
			router.push('/entries');
		} else {
			addEntry(entryInput, currentLocation);
			router.push('/entries');
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
				<Input
					type="textarea"
					name="topography"
					maxlength="400"
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
				<Input
					type="textarea"
					name="description"
					maxlength="1500"
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

			<Button type="submit" variant="submit">
				{entryToUpdate ? 'Korrigieren' : 'Eintrag Erstellen'}
			</Button>
		</StyledEntryForm>
	);
}
