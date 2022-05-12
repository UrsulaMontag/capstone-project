import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Entry from './Entry';

describe('Entry', () => {
	it('renders name and location of entry only', () => {
		render(
			<Entry
				entry={{ name: 'Feuersalamander' }}
				location={{
					location: [48.745537999999996, 9.4452515],
				}}
			/>
		);

		const name = screen.queryByText(/Feuersalamander/i);
		const location1 = screen.queryByText(/48.745537999999996/i);
		const location2 = screen.queryByText(/9.4452515/i);

		expect(name).toBeInTheDocument();
		expect(location1).toBeInTheDocument();
		expect(location2).toBeInTheDocument();
	});
});
