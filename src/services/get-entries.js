import Entry from '../models/Entry';
import { dbConnect } from '../lib/db/database';

export default async function getEntries() {
	await dbConnect();

	const entries = await Entry.find();
	console.log('get-Entries: ', entries);

	return entries.map(({ id, date, location, name, isAlive, number, topography, description }) => {
		return {
			id,
			date,
			location,
			name,
			isAlive,
			number,
			topography,
			description,
		};
	});
}
