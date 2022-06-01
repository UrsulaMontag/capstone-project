import Entry from '../models/Entry';
import { dbConnect } from '../lib/database';

export default async function getEntries() {
	await dbConnect();

	const entries = await Entry.find();
	console.log('get-Entries: ', entries);

	return entries.map(({ id, date, location, name, isAlive, number, typography, description }) => {
		return {
			id,
			date,
			location,
			name,
			isAlive,
			number,
			typography,
			description,
		};
	});
}
