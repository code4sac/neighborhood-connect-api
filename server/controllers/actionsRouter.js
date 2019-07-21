const express = require('express');
const router = require('express').Router();
const {
	getActions,
	getActionsByPriority,
	getActionsByType,
	createAction
} = require('../model/Actions');

router.get('/', async (req, res) => {
	try {
		res.status(200).send(await getActions());
	} catch (err) {
		res.status(404).send(err);
	}
});
// router.post('/', express.json(), (req, res) => {
// 	let result = createAction(req.body);
// 	console.log(result);
// 	if (result === 1) {
// 		res.status(201).send(result);
// 	} else {
// 		res.status(500).send(result);
// 	}
// });

router.get('/:action_id', async (req, res) => {
	try {
		res.status(200).send(await getActions(req.params.action_id));
	} catch (err) {
		res.status(404).send(err);
	}
});

router.get('/priorities/:priority_id', async (req, res) => {
		try {
			res.status(200).send(await getActionsByPriority(req.params.priority_id));
		} catch (err) {
			res.status(404).send(err);
		}
});

router.get('/types/:type_id', async (req, res) => {
	console.log('got here?');
	console.log(req.params.type_id);
	try {
		res.status(200).send(await getActionsByType(req.params.type_id));
	} catch (err) {
		res.status(404).send(err);
	}
});

module.exports = router;
