const router = require('express').Router();
const { getEvents } = require('../model/Events');

// /events	GET
// /events/priorities/:priority_id	GET
// /events/types/:type_id	GET
// /events/:event_id

// DRY consider refactoring
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
	// getOrg(req.params.orgId, (err, payload) => {
	// 	if (err) {
	// 		res.sendStatus(400);
	// 	} else {
	// 		res.send(payload);
	// 	}
	// });
});

router.get('/types/:type_id', (req, res) => {});

module.exports = router;
