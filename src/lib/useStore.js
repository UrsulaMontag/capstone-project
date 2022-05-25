import { nanoid } from 'nanoid';
import create from 'zustand';
import produce from 'immer';

const useStore = create(set => {
	return {
		currentLocation: null,
		addCurrentLocation: () => {
			navigator.geolocation.getCurrentPosition(currentLocation => {
				set(() => ({
					currentLocation,
				}));
			});
		},
		entries: [
			{
				id: 1,
				date: '2022-08-05',
				location: [48.745537999999996, 9.4452515],
				name: 'Feuersalamander',
				isAlive: 'alive',
				number: 3,
				topography: 'Steinhaufen hinter Haus',
				descripcion: 'Drei muntere Salamander am Stammplatz unter dem Steinhaufen.',
			},
			{
				id: 2,
				date: '2022-11-05',
				location: [48.736193, 9.40904],
				name: 'Hirschkäfer',
				isAlive: 'alive',
				number: 1,
				topography: 'Asphaltweg am Waldrand, Schulweg',
				descripcion: 'Großes, stattliches Männchen. Lief quer über den Weg zum Wald.',
			},
			{
				id: 3,
				date: '2022-11-05',
				location: [48.7198, 9.419143],
				name: 'Teichmolch',
				isAlive: 'alive',
				number: 8,
				topography: 'Unterer Balkeshauweg, Tümpel am Wegrand unter Forstfläche',
				descripcion:
					'Ein Wimmelbecken an Molchen. Bestimmt noch andere Arten hier vorhanden. Fadenwürmer im selben Tümpel.',
			},
		],
		addEntry: (entry, alive, date, location) => {
			set(
				produce(draft => {
					draft.entries.push({
						name: entry.nameValue,
						id: nanoid(),
						date: date,
						location: location,
						isAlive: alive,
						number: entry.numberValue,
						topography: entry.topographyValue,
						description: entry.descriptionValue,
					});
				})
			);
		},
	};
});
export default useStore;
