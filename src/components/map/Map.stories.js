import Map from './Map';

export default {
	title: 'Components/Map',
	component: Map,
	decorators: [
		Story => {
			return (
				<div style={{ padding: '3em', width: '400px', height: '300px' }}>
					<Story />
				</div>
			);
		},
	],
};

export function Default() {
	return <Map />;
}
