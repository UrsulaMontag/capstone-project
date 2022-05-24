import { render, screen } from '@testing-library/react';
import EntryCreateForm from './EntryCreateForm';

describe('Form', () => {
	it('renders three input fields, two radiobuttons in a fieldset,', () => {
		render(<EntryCreateForm />);
		const name = screen.getByLabelText(/Name/i);
		const number = screen.getByLabelText(/Anzahl Individuen/i);
		const topography = screen.getByLabelText(/Fundort Beschreibung/i);
		const description = screen.getByLabelText(/Beschreibe Entdeckung/i);

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
