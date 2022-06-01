import create from 'zustand';
import produce from 'immer';

const useStore = create(set => {
	return {
		currentLocation: null,
		addLocation: currentLocation => {
			set({ currentLocation });
		},

		setDeleteMode: index => {
			set(
				produce(draft => {
					if (index !== -1) {
						draft.entries[index].deleteMode = !draft.entries[index].deleteMode;
					}
				})
			);
		},
	};
});
export default useStore;
