import EntriesList from '../src/components/entriesList/EntriesList';
import Box from '../src/components/ui/MainBox.styled';
import Typography from '../src/components/ui/Typography';
import getEntries from '../src/services/get-entries';
import { SWRConfig } from 'swr';
import swrFetcher from '../src/lib/db/swr-fetcher';

export async function getStaticProps() {
	const entries = await getEntries();

	return {
		props: {
			fallback: {
				'/api/entries': entries,
			},
		},
	};
}

export default function Entries({ fallback }) {
	return (
		<SWRConfig value={{ fetcher: swrFetcher, fallback }}>
			<Box variant="cardList">
				<Typography variant="h2">Deine Entdeckungen</Typography>
				<EntriesList />
			</Box>
		</SWRConfig>
	);
}
