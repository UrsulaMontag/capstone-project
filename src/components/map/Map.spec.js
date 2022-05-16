import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('./Map'), {
	ssr: false,
});

describe('Map', () => {
	it('renders zoomable map only', () => {
		const { container } = render(<MapWithNoSSR />);

		expect(container.firstChild).toBeNull();
	});
});
