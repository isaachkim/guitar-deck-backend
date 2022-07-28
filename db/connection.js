// Require dotenv to read env variables from a .env file
require('dotenv').config();
// Import Mongoose to interface with MongoDB
const mongoose = require('mongoose');

// Use a ternary that looks for the presence of a `NODE_ENV` environment variable
// If `NODE_ENV` is set to production, use the URL for our database stored in the
// `DB_URL` environmental variable.  If not, just use the local db address.
const mongoURI = process.env.DATABASE_URL;

// Use Mongoose's connect method to connect to MongoDB by passing it the db URI.
// Pass a second argument which is an object storing the options for the connection.
mongoose
	.connect(mongoURI)
	// If the connection is successful, give a message in the Terminal with the db name
	.then((instance) =>
		console.log(`Connected to db: ${instance.connections[0].name}`)
	)
	// If the connection fails, give a message and pass along the error so we see it in
	// the Terminal.
	.catch((error) => console.log('Connection failed!', error));

// Export the connection so we can use it elsewhere in our app.
module.exports = mongoose;
