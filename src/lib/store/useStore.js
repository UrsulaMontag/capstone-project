import produce from 'immer';
import { nanoid } from 'nanoid';
import create from 'zustand';

const useStore = create(set => {
	return {
		currentLocation: null,
		addLocation: currentLocation => {
			set({ currentLocation });
		},
		entries: [],
		fetchEntries: async () => {
			try {
				const response = await fetch('/api/entries');
				const data = await response.json();
				set({ entries: data });
			} catch (error) {
				console.error(`Upps das war ein Fehler: ${error}`);
			}
		},
		deleteEntry: async id => {
			try {
				const response = await fetch('/api/entry/' + id, {
					method: 'DELETE',
				});
				set(state => {
					return { entries: state?.entries.filter(entry => entry.id !== id) };
				});
				console.log(await response.json());
			} catch (error) {
				console.error(`Upps das war ein Fehler: ${error}`);
			}
		},

		addEntry: async (input, location) => {
			const current = new Date();
			const date = `${current.getFullYear()}-${current.getDate()}-${current.getMonth() + 1}`;
			const newEntry = {
				date: date,
				location: [location.lat, location.lng],
				name: input.nameValue,
				isAlive: input.isAlive,
				number: input.numberValue ? input.numberValue : null,
				topography: input.topographyValue ? input.topographyValue : null,
				description: input.descriptionValue ? input.descriptionValue : null,
			};
			try {
				const response = await fetch('/api/entry/create', {
					method: 'POST',
					body: JSON.stringify(newEntry),
				});
				console.log(await response.json());
				set(
					produce(draft => {
						draft.entries.push({ ...newEntry, id: nanoid() });
					})
				);
				alert('Erfolgreich in dein Feldtagebuch eingetragen');
			} catch (error) {
				console.error(`Upps das war ein Fehler: ${error}`);
			}
		},
		entryToUpdate: null,
		setEntryToUpdate: id => {
			set(state => {
				state.entryToUpdate = state.entries.filter(entry => entry.id === id);
			});
		},
		editEntry: async (id, input) => {
			const editedEntry = {
				id: input.id,
				date: input.date,
				location: input.location,
				name: input.nameValue,
				isAlive: input.isAlive,
				number: input.numberValue ? input.numberValue : null,
				topography: input.topographyValue ? input.topographyValue : null,
				description: input.descriptionValue ? input.descriptionValue : null,
			};
			try {
				const response = await fetch('/api/entry/' + id, {
					method: 'PUT',
					body: JSON.stringify(editedEntry),
				});
				console.log(await response.body);
				set(state => {
					return {
						entries: state.entries.map(entry =>
							entry.id === id ? { ...entry, ...editedEntry } : entry
						),
						entryToUpdate: null,
					};
				});

				alert('Erfolgreich editiert und wieder in dein Feldtagebuch eingetragen');
			} catch (error) {
				console.error(`Upps das war ein Fehler: ${error}`);
			}
		},
	};
});
export default useStore;
