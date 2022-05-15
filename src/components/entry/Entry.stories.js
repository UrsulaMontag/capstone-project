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

const props = {
	entry: { name: 'Feuersalamander', location: [48.745537999999996, 9.4452515] },
};

export function Default() {
	return <Entry {...props} />;
}
