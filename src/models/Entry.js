import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
	date: String,
	location: Array,
	name: String,
	isAlive: Boolean,
	number: String,
	topography: String,
	description: String,
});
const Product = mongoose.models?.Entry ?? mongoose.model('Entry', entrySchema);

export default Product;
