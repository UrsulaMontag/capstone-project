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

		addEntry: async (state, input, bool) => {
			try {
				const response = await fetch('/api/entry/create', {
					method: 'POST',
					body: JSON.stringify({
						//date: date,
						location: [state.currentLocation.lat, state.currentLocation.lng],
						name: input.nameValue,
						isAlive: bool,
						number: input.numberValue ? input.numberValue : null,
						topography: input.topographyValue ? input.topographyValue : null,
						description: input.descriptionValue ? input.descriptionValue : null,
					}),
				});
				console.log(await response.json());
				alert('Erfolgreich in dein Feldtagebuch eingetragen');
			} catch (error) {
				console.error(`Upps das war ein Fehler: ${error}`);
			}
		},
	};
});
export default useStore;
