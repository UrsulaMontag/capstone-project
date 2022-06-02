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
					return { entries: state.entries.filter(entry => entry.id !== id) };
				});
				console.log(await response.json());
			} catch (error) {
				console.error(`Upps das war ein Fehler: ${error}`);
			}
		},

		addEntry: async (input, bool, location) => {
			const current = new Date();
			const date = `${current.getFullYear()}-${current.getDate()}-${current.getMonth() + 1}`;
			try {
				const response = await fetch('/api/entry/create', {
					method: 'POST',
					body: JSON.stringify({
						date: date,
						location: [location.lat, location.lng],
						name: input.nameValue,
						isAlive: bool,
						number: input.numberValue ? input.numberValue : null,
						topography: input.topographyValue ? input.topographyValue : null,
						description: input.descriptionValue ? input.descriptionValue : null,
					}),
				});
				const newEntry = await response.json();

				set(state => {
					return {
						entries: [...state.entries, newEntry],
					};
				});
				alert('Erfolgreich in dein Feldtagebuch eingetragen');
			} catch (error) {
				console.error(`Upps das war ein Fehler: ${error}`);
			}
		},
		editEntry: async (input, alive, router) => {
			try {
				const response = await fetch('/api/product/' + router.query.idValue, {
					method: 'PUT',
					body: JSON.stringify({
						date: input.date,
						location: [input.location.lat, input.location.lng],
						name: input.nameValue,
						isAlive: alive,
						number: input.numberValue ? input.numberValue : null,
						topography: input.topographyValue ? input.topographyValue : null,
						description: input.descriptionValue ? input.descriptionValue : null,
					}),
				});
				const editedEntry = await response.json();

				set(state => {
					return {
						entries: state.entries.map(entry =>
							entry.id === input.id ? { ...editedEntry, ...input } : entry
						),
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
