const router = require('express').Router();
const {
	getEvents,
	getEventsByPriority,
	getEventByType
} = require('../model/Events');

router.get('/', (req, res) => {
	getEvents(null, (err, payload) => {
		if (err) {
			res.sendStatus(400);
		} else {
			res.send(payload);
		}
	});
});

router.get('/:event_id', (req, res) => {
	getEvents(req.params.event_id, (err, payload) => {
		if (err) {
			res.sendStatus(400);
		} else {
			res.send(payload);
		}
	});
});

router.get('/priorities/:priority_id', (req, res) => {
	getEventsByPriority(req.params.priority_id, (err, payload) => {
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
