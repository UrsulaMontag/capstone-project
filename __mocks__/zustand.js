// @see https://docs.pmnd.rs/zustand/testing
import '@testing-library/jest-dom';
import actualCreate from 'zustand';
import { act } from 'react-dom/test-utils';

const initialEntries = [
	{
		id: 1,
		date: '2022-08-05',
		location: [48.745537999999996, 9.4452515],
		name: 'Feuersalamander',
		alive: true,
		number: 3,
		topography: 'Steinhaufen hinter Haus',
		descripcion: 'Drei muntere Salamander am Stammplatz unter dem Steinhaufen.',
	},
	{
		id: 2,
		date: '2022-11-05',
		location: [48.736193, 9.40904],
		name: 'Hirschkäfer',
		alive: true,
		number: 1,
		topography: 'Asphaltweg am Waldrand, Schulweg',
		descripcion: 'Großes, stattliches Männchen. Lief quer über den Weg zum Wald.',
	},
	{
		id: 3,
		date: '2022-11-05',
		location: [48.7198, 9.419143],
		name: 'Teichmolch',
		alive: true,
		number: 8,
		topography: 'Unterer Balkeshauweg, Tümpel am Wegrand unter Forstfläche',
		descripcion:
			'Ein Wimmelbecken an Molchen. Bestimmt noch andere Arten hier vorhanden. Fadenwürmer im selben Tümpel.',
	},
];
const mockGeolocation = {
	getCurrentPosition: jest.fn().mockImplementationOnce(success =>
		Promise.resolve(
			success({
				coords: {
					latitude: 51.1,
					longitude: 45.3,
				},
			})
		)
	),
};
global.navigator.geolocation = mockGeolocation;

// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set();

// when creating a store, we get its initial state, create a reset function and add it in the set
const create = createState => {
	const store = actualCreate(createState);
	const initialState = store.getState();
	initialState.entries = initialEntries;
	storeResetFns.add(() => store.setState(initialState, true));
	return store;
};

// Reset all stores after each test run
afterEach(() => {
	act(() => storeResetFns.forEach(resetFn => resetFn()));
});

export default create;
