import EntryCreateForm from '../src/components/form/EntryCreateForm';

import Box from '../src/components/ui/MainBox.styled';
import Typography from '../src/components/ui/Typography';

export default function EditEntry() {
	return (
		<Box>
			<Typography variant="h2">Editiere deinen Eintrag</Typography>
			<EntryCreateForm />
		</Box>
	);
}
