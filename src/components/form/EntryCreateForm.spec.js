import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import EntryCreateForm from './EntryCreateForm';

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

describe('Form', () => {
	it('renders three input fields, two radiobuttons in a fieldset,', () => {
		render(<EntryCreateForm />);
		const name = screen.getByLabelText(/Name/i);
		const number = screen.getByLabelText(/Anzahl an Individuen/i);
		const topography = screen.getByLabelText(/Fundort Beschreibung/i);
		const description = screen.getByLabelText(/Beschreibe deine Entdeckung/i);

		expect(name).toBeInTheDocument();
		expect(number).toBeInTheDocument();
		expect(topography).toBeInTheDocument();
		expect(description).toBeInTheDocument();

		const isAlive = screen.getByLabelText(/lebend/i);
		const isDead = screen.getByLabelText(/tot/i);

		expect(isAlive).toBeInTheDocument();
		expect(isDead).toBeInTheDocument();

		const button = screen.getByRole('button', { name: /Eintrag Erstellen/i });
		expect(button).toBeInTheDocument();
	});
});
