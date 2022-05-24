import EntryCreateForm from './EntryCreateForm';

export default {
	title: 'Components/Form/EntryCreateForm',
	component: EntryCreateForm,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

export function Default() {
	return <EntryCreateForm />;
}
