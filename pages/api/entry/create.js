import { dbConnect } from '../../../src/lib/db/database';
import Entry from '../../../src/models/Entry';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const newEntryData = JSON.parse(req.body);
		await dbConnect();

		const newEntry = await Entry.create({
			date: newEntryData.date,
			location: newEntryData.location,
			name: newEntryData.name,
			isAlive: newEntryData.isAlive,
			number: newEntryData.number,
			topography: newEntryData.topography,
			description: newEntryData.description,
		});

		res.status(200).json({
			message: 'entry created',
			entry: newEntry,
		});
	} else {
		res.status(405).json({ error: 'wrong method' });
	}
}
