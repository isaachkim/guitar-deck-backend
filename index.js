//=============================================================================
// Basic Config
//=============================================================================
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

//=============================================================================
// Middleware
//=============================================================================
// enable CORS to allow requests from clients of other origins
app.use(cors());
// `express.json` parses application/json request data and
//  adds it to the request object as request.body
app.use(express.json());
// `express.urlencoded` parses x-ww-form-urlencoded request data and
//  adds it to the request object as request.body
app.use(express.urlencoded({ extended: true }));

//=============================================================================
// ROUTES
//=============================================================================

// Redirect
app.get('/', (req, res) => {
	res.redirect('/guitardeck');
});

// guitardeck routes
const guitarController = require('./controllers/guitarController.js');
app.use('/guitardeck', guitarController);


//=============================================================================
// START SERVER
//=============================================================================
app.listen(PORT, () =>
	console.log('🍜 Restaurants API is listening on port: ' + PORT)
);
