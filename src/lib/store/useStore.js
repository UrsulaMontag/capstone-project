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
				console.log('--------------------------!!!!!!!!!!!!', data);
			} catch (error) {
				console.error(`Upps das war ein Fehler: ${error}`);
			}
		},
	};
});
export default useStore;
