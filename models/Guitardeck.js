//models/review.js
const mongoose = require('../db/connection');

const guitarSchema = new mongoose.Schema(
	{
		name: String,
        imageURL: String,
        details: String,
        sound: [String],
        chord: String,
	},
);

const Guitar = mongoose.model('Guitar', guitarSchema);


module.exports = Guitar;
