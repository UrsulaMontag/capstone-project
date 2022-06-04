import getEntries from '../../src/services/get-entries';

export default async function handler(reqest, response) {
	const entries = await getEntries();

	response.status(200).json(entries);
}
