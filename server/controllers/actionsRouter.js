const express = require('express');
const router = require('express').Router();
const {
	getActions,
	getActionsByPriority,
	getEventByType,
	createAction
} = require('../model/Actions');

router.get('/', (req, res) => {
	getActions(null, (err, payload) => {
		if (err) {
			res.sendStatus(400);
		} else {
			res.send(payload);
		}
	});
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

router.get('/:action_id', (req, res) => {
	getActions(req.params.action_id, (err, payload) => {
		if (err) {
			res.sendStatus(400);
		} else {
			res.send(payload);
		}
	});
});

router.get('/priorities/:priority_id', (req, res) => {
	getActionsByPriority(req.params.priority_id, (err, payload) => {
		if (err) {
			res.sendStatus(400);
		} else {
			res.send(payload);
		}
	});
});

router.get('/types/:type_id', (req, res) => {
	getEventByType(req.params.type_id, (err, payload) => {
		if (err) {
			res.sendStatus(400);
		} else {
			res.send(payload);
		}
	});
});

module.exports = router;
