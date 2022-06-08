import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Entry from './Entry';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			route: '/',
			pathname: '',
			query: '',
			asPath: '',
		};
	},
}));

describe('Entry', () => {
	it('renders name and location of entry only', () => {
		render(
			<Entry
				entry={{
					id: 1,
					date: '2022-08-05',
					location: [48.745537999999996, 9.4452515],
					name: 'Feuersalamander',
					alive: true,
					number: 3,
					topography: 'Steinhaufen hinter Haus',
					descripcion: 'Drei muntere Salamander am Stammplatz unter dem Steinhaufen.',
				}}
			/>
		);

		const name = screen.queryByText(/Feuersalamander/i);
		const date = screen.queryByText(/2022-08-05/i);

		expect(name).toBeInTheDocument();
		expect(date).toBeInTheDocument();
	});
});
