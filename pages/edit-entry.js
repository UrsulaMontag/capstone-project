import EntryCreateForm from '../src/components/form/EntryCreateForm';
import { HeadingBox } from '../src/components/ui/HeadingBox.styled';

import Box from '../src/components/ui/MainBox.styled';
import Typography from '../src/components/ui/Typography';

export default function EditEntry() {
	return (
		<>
			<HeadingBox>
				<Typography variant="h2">Editiere deinen Eintrag</Typography>
			</HeadingBox>
			<Box>
				<EntryCreateForm />
			</Box>
		</>
	);
}
