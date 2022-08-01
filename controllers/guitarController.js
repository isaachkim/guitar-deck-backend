const express = require('express');
const Guitar = require('../models/Guitardeck');
const router = express.Router();

router.get('/', (req, res, next) => {
	Guitar.find()
		.then((guitars) => res.json(guitars))
		.catch(next);
});

router.get('/:chord', (req, res) => {
	Guitar.findOne({ chord: req.params.chord }).then((c) => {
		res.json(c);
	});
});

router.post('/', (req, res, next) => {
	Guitar.create(req.body)
		.then((guitar) => res.status(201).json(guitar))
		.catch(next);
});

module.exports = router;
