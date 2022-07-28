// Require the Book model
const Guitar = require('../models/Guitardeck');

// Require the data
const seedGuitarData = require('./seedguitar.json');

// Delete any existing documents in the books collection
Guitar.deleteMany()
	// Use insertMany and pass it the seed data
	.then(() => Guitar.insertMany(seedGuitarData))
	// Log the successful results
	.then(console.log)
	// Log any errors if things didn't work
	.catch(console.error)
	// Use finally, so that this code will run whether or not
	// things worked and close our connection to the database.
	.finally(process.exit);
