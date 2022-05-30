import { nanoid } from 'nanoid';
import create from 'zustand';
import produce from 'immer';

const useStore = create(set => {
	return {
		currentLocation: null,
		addLocation: currentLocation => {
			set({ currentLocation });
		},
		entries: [
			{
				id: 1,
				date: '2022-08-05',
				location: [48.745537999999996, 9.4452515],
				name: 'Feuersalamander',
				isAlive: 'true',
				number: 3,
				topography: 'Steinhaufen hinter Haus',
				descripcion: 'Drei muntere Salamander am Stammplatz unter dem Steinhaufen.',
				deleteMode: false,
			},
			{
				id: 2,
				date: '2022-11-05',
				location: [48.736193, 9.40904],
				name: 'Hirschkäfer',
				isAlive: 'true',
				number: 1,
				topography: 'Asphaltweg am Waldrand, Schulweg',
				descripcion: 'Großes, stattliches Männchen. Lief quer über den Weg zum Wald.',
				deleteMode: false,
			},
			{
				id: 3,
				date: '2022-11-05',
				location: [48.7198, 9.419143],
				name: 'Teichmolch',
				isAlive: 'true',
				number: 8,
				topography: 'Unterer Balkeshauweg, Tümpel am Wegrand unter Forstfläche',
				descripcion:
					'Ein Wimmelbecken an Molchen. Bestimmt noch andere Arten hier vorhanden. Fadenwürmer im selben Tümpel.',
				deleteMode: false,
			},
		],
		addEntry: (entry, alive) => {
			const current = new Date();
			const date = `${current.getFullYear()}-${current.getDate()}-${current.getMonth() + 1}`;
			set(
				produce(draft => {
					draft.entries.push({
						name: entry.nameValue,
						id: nanoid(),
						date: date,
						location: [draft.currentLocation.lat, draft.currentLocation.lng],
						isAlive: alive,
						number: entry.numberValue,
						topography: entry.topographyValue,
						description: entry.descriptionValue,
					});
				})
			);
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
		deleteEntry: index => {
			set(
				produce(draft => {
					draft.entries.splice(index, 1);
				})
			);
		},
	};
});
export default useStore;
