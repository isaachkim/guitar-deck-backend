//=============================================================================
// Basic Config
//=============================================================================
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const multer = require('multer');
//=============================================================================
// Middleware


// FOR UPLOADING IMAGES TO JSON
// SOURCE: https://javascript.plainenglish.io/upload-images-in-your-node-app-e05d0423fd4a

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + file.originalname);
	},
});
const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === 'image/jpeg' ||
		file.mimetype === 'image/jpg' ||
		file.mimetype === 'image/png'
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};
const upload = multer({
	storage:storage,
	fileFilter:fileFilter
})
app.post('/uploadForm',upload.single('myImg'), async (req,res,next)=> {
	if(req.file)
	{
		const pathName=req.file.path;
		res.send(req.file,pathName)
	}
})
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
	console.log('GuitarDeck API is listening on port: ' + PORT)
);
