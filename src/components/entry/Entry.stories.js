import Entry from './Entry';

export default {
	title: 'Components/Entry',
	component: Entry,
	decorators: [
		Story => {
			return (
				<div style={{ padding: '3em', maxWidth: '400px' }}>
					<Story />
				</div>
			);
		},
	],
};

const props = { entry: { name: 'Feuersalamander' } };

export function Default() {
	return <Entry {...props} />;
}
