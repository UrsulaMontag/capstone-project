import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Entry from './Entry';

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
		const location1 = screen.queryByText(/48.745537999999996/i);
		const location2 = screen.queryByText(/9.4452515/i);
		const deleteButton = screen.queryByRole('button', { name: /X/i });

		expect(name).toBeInTheDocument();
		expect(location1).toBeInTheDocument();
		expect(location2).toBeInTheDocument();
		expect(deleteButton).toBeInTheDocument();
	});
});
