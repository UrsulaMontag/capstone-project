import Entry from '../../../src/models/Entry';
import { dbConnect } from '../../../src/lib/db/database';

export default async function handler(req, res) {
	const { id } = req.query;

	if (req.method === 'DELETE') {
		const deletedEntry = await Entry.findByIdAndDelete(id);
		res.status(200).json({
			message: 'entry deleted',
			entry: deletedEntry,
		});
		[];
	} else if (req.method === 'PUT') {
		const newEntryData = JSON.parse(req.body);
		await dbConnect();

		const updatedEntry = await Entry.findByIdAndUpdate(id, newEntryData, {
			new: true,
		});

		res.status(200).json({
			message: 'entry edited',
			entry: updatedEntry,
		});
	} else {
		const singleEntry = await Entry.findById(id);
		res.status(200).json(singleEntry);
	}
}
